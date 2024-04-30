import format from 'date-fns/format';
import isValid from 'date-fns/isValid';
import toDate from 'date-fns/toDate';

interface FormatPart {
  isToken: boolean;
  value: string;
}

function cleanEscapedString(input: string): string {
  const escapedStringRegExp = /^'([^]*?)'?$/;
  const doubleQuoteRegExp = /''/g;

  const matched = input.match(escapedStringRegExp);

  if (!matched) {
    return input;
  }

  return matched[1].replace(doubleQuoteRegExp, "'");
}

export function formatDate<DateType extends Date>(
  date: DateType | number,
  formatStr: string,
  options?: {
    locale?: Locale;
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    firstWeekContainsDate?: number;
    useAdditionalWeekYearTokens?: boolean;
    useAdditionalDayOfYearTokens?: boolean;
  },
  lang?: string
): string {
  const list = ['Y', 'y', 'm', 'M', 'd', 'D', 'H', 'h', 'S', 's', '/', '-', ':', ' '];

  const formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
  const unescapedLatinCharacterRegExp = /[a-zA-Z]/;

  const originalDate = toDate(date);

  if (!isValid(originalDate)) {
    throw new RangeError('Invalid time value');
  }

  const parts: FormatPart[] = formatStr.match(formattingTokensRegExp)!.map((substring) => {
    if (substring === "''") {
      return { isToken: false, value: "'" };
    }

    const firstCharacter = substring[0];
    if (firstCharacter === "'") {
      return { isToken: false, value: cleanEscapedString(substring) };
    }

    if (list.includes(firstCharacter)) {
      return { isToken: true, value: substring };
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return { isToken: false, value: substring };
  });

  const flag = parts.some((item) => !item.isToken);
  const formatValues = parts.map((item) => item.value.toLowerCase());
  const hasY = formatValues.includes('yyyy');
  const hasM = formatValues.includes('mm');
  const hasD = formatValues.includes('dd');
  const has_ = formatValues.includes('-');

  if (!flag && hasY && hasM && hasD && !has_) {
    const locale = lang || 'en';
    const str = formatStr.split(' ');
    const dateFormat = str[1]
      ? (locale === 'zh-tw' ? 'yyyy/MM/dd' : 'MM/dd/yyyy') + ' ' + str[1]
      : locale === 'zh-tw'
      ? 'yyyy/MM/dd'
      : 'MM/dd/yyyy';
    return format(originalDate, dateFormat, options);
  }

  return format(originalDate, formatStr, options);
}
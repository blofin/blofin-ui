interface ArrayItem {
  [key: string]: string;
}

export function keyBy(arr: ArrayItem[], key: keyof ArrayItem): { [key: string]: ArrayItem } {
  return arr.reduce((obj: { [key: string]: ArrayItem }, item) => {
    obj[item[key] as string] = item;
    return obj;
  }, {});
}

import * as React from "react";
import usePickerMethod from "./hooks/usePickerMethod";
import styles from "./index.module.scss";
import useTheme from "../../provider/useTheme";
import { TextLabel } from "./styles";

type PickerProps = {
  list: { label: string; value: number }[];
  selectedValue: number;
  setValue: (value: number) => void;
};

const Picker = ({ list, selectedValue, setValue }: PickerProps) => {
  const { pickerColumnsEl, selected, setSelected, selectIndex } = usePickerMethod(
    list,
    selectedValue
  );

  const { theme } = useTheme();

  const getCols = React.useMemo(() => {
    const result = [];
    for (let i = 0; i < list.length; i++) {
      result.push(
        <div key={selectedValue + "_" + i}>
          <div
            className={styles["picker-list"]}
            onClick={() => {
              setSelected(list[i].value);
              selectIndex(i);
            }}>
            <span
              className={`${TextLabel({
                intent: selected === list[i].value ? "select" : "unSelect",
                theme
              })}`}>
              {list[i].label}
            </span>
          </div>
        </div>
      );
    }
    return result;
  }, [list, selected]);

  React.useEffect(() => {
    setValue(selected);
  }, [selected]);

  React.useEffect(() => {
    const index = list.findIndex((item) => item.value === selectedValue);
    const num = index > -1 ? index : list.length - 1;
    selectIndex(num);
    setSelected(list[num].value);
  }, [list]);

  return (
    <div className={styles["picker-column"]}>
      <div className={styles["up"] + " " + styles[`up-${theme ? theme : "light"}`]}></div>
      <div className={styles["down"] + " " + styles[`down-${theme ? theme : "light"}`]}></div>
      <div className={styles["picker-column-wheel"]} ref={pickerColumnsEl}>
        {getCols}
      </div>
    </div>
  );
};

export { Picker };

import React from "react";
import { SelectProps } from "antd/es/select";
import SelectWithRemoteSearch from "../SelectWithRemoteSearch";

import type { UserValue } from "../../types";

export interface SelectWithRemoteSearchLiteProps<ValueType = any>
  extends Omit<SelectProps<ValueType>, "options" | "children"> {
  fetchOptions: (search: string) => Promise<ValueType[]>;
  debounceTimeout?: number;
}

const SelectWithRemoteSearchLite = ({
  fetchOptions,
  debounceTimeout = 800,
  ...props
}: SelectWithRemoteSearchLiteProps) => {
  const [value, setValue] = React.useState<UserValue[]>([]);

  return (
    <SelectWithRemoteSearch
      mode="multiple"
      value={value}
      fetchOptions={fetchOptions}
      onChange={(newValue) => {
        setValue(newValue);
      }}
      style={{ width: "100%" }}
      {...props}
    />
  );
};

export default SelectWithRemoteSearchLite;

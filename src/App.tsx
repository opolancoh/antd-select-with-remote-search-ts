import React from "react";
import "antd/dist/antd.css";
import { Button, Divider, Space } from "antd";
import SelectWithRemoteSearch from "./components/SelectWithRemoteSearch";
import SelectWithRemoteSearchLite from "./components/SelectWithRemoteSearchLite";
import { fetchUserList } from "./services";

import type { UserValue } from "./types";

// Usage of SelectWithRemoteSearch
const App = () => {
  const [value, setValue] = React.useState<UserValue[]>([]);

  return (
    <Space
      direction="vertical"
      style={{
        width: "100%",
        padding: "24px",
      }}
    >
      <Divider orientation="left">SelectWithRemoteSearch</Divider>
      <SelectWithRemoteSearch
        mode="multiple"
        value={value}
        placeholder="Select users"
        fetchOptions={fetchUserList}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        style={{ width: "100%" }}
      />
      <Button onClick={() => setValue([])}>Clear</Button>
      <Divider orientation="left">SelectWithRemoteSearchLite</Divider>
      <SelectWithRemoteSearchLite
        placeholder="Select users"
        fetchOptions={fetchUserList}
      />
    </Space>
  );
};

export default App;

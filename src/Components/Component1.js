import React from "react";
import SubComponent1 from "./SubComponent1";
import SubComponent2 from "./SubComponent2";

const Component1 = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <SubComponent1/>
        <SubComponent2/>
      </div>
    </div>
  );
};

export default Component1;

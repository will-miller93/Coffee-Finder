import React from "react";

const Column = ({ size, children }) => (
  <div className={size.split(" ").map(size => "col-" + size).join(" ")}>
    {children}
  </div>
);

export default Column;
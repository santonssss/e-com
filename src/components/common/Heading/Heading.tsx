import React from "react";

const Heading = ({ children }: { children: React.ReactNode }) => {
  return <h1 className="fw-bold display-5 my-4">{children}</h1>;
};

export default Heading;

import React from "react";

import Asteriod from "./Asteriod";

export default function Asteriods() {
  const asteroids = Array(20).fill(0);
  return (
    <>
      {asteroids.map((_, index) => (
        <Asteriod key={index} className={"asteroid"} />
      ))}
    </>
  );
}

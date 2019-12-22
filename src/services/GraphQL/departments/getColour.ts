import { Department } from "./department";

const colours = [
  "magenta",
  "red",
  "volcano",
  "orange",
  "gold",
  "lime",
  "green",
  "cyan",
  "blue"
];

const departments = Array.from(Array(10).keys()).map(
  i => `d${`000${i}`.substr(-3)}`
);

export const getColour = (deptNo: Department["deptNo"]) => {
  const index = departments.indexOf(deptNo);
  if (index) {
    return colours[index % colours.length];
  } else {
    return "purple";
  }
};

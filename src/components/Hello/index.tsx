import * as React from "react";
import { Button } from "antd";

export interface HelloProps {
  compiler: string;
  framework: string;
}

const Hello = (props: HelloProps) => (
  <h1>
    <Button type="primary">Button</Button>
    Hello from {props.compiler} and {props.framework}!
  </h1>
);

export default Hello;

import React from "react";
import { Icon } from "antd";
import { DefaultFooter } from "@ant-design/pro-layout";

const Footer: React.FC = () => (
  <DefaultFooter
    copyright="2019 melonmochi"
    links={[
      {
        key: "React TypeScript Boilerplate",
        title: "React TypeScript Boilerplate",
        href: "https://github.com/melonmochi/react-typescript-boilerplate",
        blankTarget: true
      },
      {
        key: "github",
        title: <Icon type="github" />,
        href: "https://github.com/melonmochi/react-typescript-boilerplate",
        blankTarget: true
      },
      {
        key: "Paradigma Digital",
        title: "Paradigma Digital",
        href: "https://www.paradigmadigital.com/",
        blankTarget: true
      }
    ]}
  />
);

export default Footer;

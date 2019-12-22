import React from "react";
import { Icon } from "antd";
import { DefaultFooter } from "@ant-design/pro-layout";

const Footer: React.FC = () => (
  <>
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
    <div
      style={{
        padding: "0px 24px 24px",
        textAlign: "center"
      }}
    >
      <a
        href="https://www.netlify.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://www.netlify.com/img/global/badges/netlify-color-bg.svg"
          width="82px"
          alt="netlify logo"
        />
      </a>
    </div>
  </>
);

export default Footer;

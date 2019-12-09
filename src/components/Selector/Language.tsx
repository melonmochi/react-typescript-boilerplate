import React from "react";
import { Icon, Menu } from "antd";
import { StringObject } from "typings";
// import styles from './Language.less';

const Language: React.FC = () => {
  const locales = ["en-US", "es-ES", "zh-CN"];
  const languageLabels: StringObject = {
    "en-US": "English",
    "es-ES": "Español",
    "zh-CN": "简体中文"
  };
  const languageIcons: StringObject = {
    "en-US": "🇺🇸",
    "es-ES": "🇪🇸",
    "zh-CN": "🇨🇳"
  };
  return (
    <Menu
    //className={styles.menu}
    >
      {locales.map(locale => (
        <Menu.Item key={locale}>
          <span role="img" aria-label={languageLabels[locale]}>
            {languageIcons[locale]}
          </span>{" "}
          {languageLabels[locale]}
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default Language;

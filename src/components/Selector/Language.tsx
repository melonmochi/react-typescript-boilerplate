import React, { FC } from "react";
import { Menu } from "antd";
import { useTranslation } from "react-i18next";
import { ClickParam } from "antd/es/menu";
import "./Language.less";

type LanguageType = "en-US" | "es-ES" | "zh-CN";

const Language: FC = () => {
  let { i18n } = useTranslation();
  const locales: LanguageType[] = ["en-US", "es-ES", "zh-CN"];
  const languageLabels: { [key in LanguageType]: string } = {
    "en-US": "English",
    "es-ES": "Español",
    "zh-CN": "简体中文"
  };
  const languageIcons: { [key in LanguageType]: string } = {
    "en-US": "🇺🇸",
    "es-ES": "🇪🇸",
    "zh-CN": "🇨🇳"
  };

  const changeLang = ({ key }: ClickParam): void => {
    console.log("im changing key, key is", key);
    i18n.changeLanguage(key);
  };
  return (
    <Menu className="menu" selectedKeys={[i18n.language]} onClick={changeLang}>
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

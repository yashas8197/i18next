import React from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [t, i18n] = useTranslation("global");

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <div>
      {t("header.message")}
      <button onClick={() => handleChangeLanguage("en")}>english</button>
      <button onClick={() => handleChangeLanguage("es")}>spanish</button>
    </div>
  );
};

export default Header;

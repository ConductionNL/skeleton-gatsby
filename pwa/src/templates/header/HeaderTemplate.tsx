import * as React from "react";
import "./HeaderTemplate.css";
import { PageHeader } from "@utrecht/component-library-react/dist";
import { TopNav } from "../../components/utrecht/topNav/TopNav";
import { getUsername, isLoggedIn } from "../../services/auth";
import { Breadcrumbs } from "../../components/utrecht/breadcrumbs/Breadcrumbs";
import { GatsbyContext } from "./../../context/gatsby";
import i18next, { changeLanguage, TFunction } from "i18next";
import { useTranslation } from "react-i18next";
import { SelectLanguage } from "../../components/utrecht/selectLanguage/SelectLanguage";
import {faLock, faLockOpen} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const HeaderTemplate: React.FC = () => {
  const gatsbyContext = React.useContext(GatsbyContext);
  const { t } = useTranslation();

  const {
    breadcrumb: { crumbs },
  } = gatsbyContext.pageContext;

  return (
    <PageHeader className="HeaderTemplate">

      <div className="HeaderTemplate-subNav">
        <Breadcrumbs {...{ crumbs }} />

        <div className="HeaderTemplate-languageSwitcher">
          <SelectLanguage
            languages={[
              {
                label: "NL",
                key: "nl",
                title: "Deze pagina in Nederlands",
                onClick: () => changeLanguage("nl"),
                current: i18next.language === "nl",
              },
              {
                label: "EN",
                key: "en",
                title: "This page is in English",
                onClick: () => changeLanguage("en"),
                current: i18next.language === "en",
              },
            ]}
          />
        </div>
      </div>
    </PageHeader>
  );
};

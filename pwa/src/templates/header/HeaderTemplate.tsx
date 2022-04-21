import * as React from "react";
import "./HeaderTemplate.css";
import { PageHeader } from "@nl-design-system-unstable/example-next.js/src/components/utrecht";
import { Breadcrumbs } from "../../components/utrecht/breadcrumbs/Breadcrumbs";
import { SelectLanguage } from "../../components/utrecht/selectLanguage/SelectLanguage";
import { GatsbyContext } from "../../context/gatsby";
import i18next, { changeLanguage, TFunction } from "i18next";
import { useTranslation } from "react-i18next";

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

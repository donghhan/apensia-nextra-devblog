import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";
import { Code } from "./components/code";

/** @type {import('nextra-theme-docs').DocsThemeConfig } */
const config = {
  banner: {
    dismissible: true,
    text: <>🎉 Apensia devblog has been updated!</>,
  },
  components: {
    Code,
  },
  darkMode: true,
  docsRepositoryBase: "https://github.com/donghhan/apensia-nextra-devblog",
  editLink: {
    component: null,
  },
  gitTimestamp: true,
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const url =
      "https://www.apensiablog.dev" +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    return (
      <>
        <meta property="og:title" content="Apensia's Devblog" />
        <meta property="og:url" content={url} />
        <meta
          property="og:description"
          content={frontMatter.description || "Welcome to Apensia's devblog"}
        />
      </>
    );
  },
  i18n: [
    { locale: "en", text: "English" },
    { locale: "ko", text: "한국어" },
  ],
  navigation: {
    prev: true,
    next: true,
  },
  logo: <span>Apensia Devblog</span>,
  primaryHue: { dark: 106, light: 244 },
  primarySaturation: { dark: 79, light: 72 },
  project: {
    link: "https://github.com/donghhan/apensia-nextra-devblog",
  },
  search: {
    emptyResult: () => {
      const { locale, defaultLocale } = useRouter();
      return locale === defaultLocale
        ? "No results found"
        : "검색 결과가 없습니다";
    },
    error: () => {
      const { locale, defaultLocale } = useRouter();
      return locale === defaultLocale
        ? "There was an error"
        : "에러가 발생했습니다";
    },
    loading: () => {
      const { locale, defaultLocale } = useRouter();
      return locale === defaultLocale ? "Loading..." : "로딩 중...";
    },
    placeholder: () => {
      const { locale, defaultLocale } = useRouter();
      return locale === defaultLocale ? "Search by keyword" : "키워드로 검색";
    },
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === "separator") {
        return (
          <div style={{ background: "cyan", textAlign: "center" }}>{title}</div>
        );
      }
      return <>{title}</>;
    },
    toggleButton: true,
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s | Apensia Devblog",
    };
  },
};

export default config;

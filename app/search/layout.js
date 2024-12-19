// app/search/layout.js
import { Suspense } from "react";
import styles from "../styles/search.module.scss";

export const metadata = {
  title: "Search | Access Experts",
  description:
    "Search across our database development and Access consulting services",
  openGraph: {
    title: "Search | Access Experts",
    description:
      "Search across our database development and Access consulting services",
    type: "website",
    locale: "en_AU",
    siteName: "Access Experts",
  },
};

export default function SearchLayout({ children }) {
  return <>{children}</>;
}

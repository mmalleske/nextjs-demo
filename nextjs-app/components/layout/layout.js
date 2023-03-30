import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.scss";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import Navbar from "../navbar/navbar";

export const siteTitle = "Mike Malleske - Next Demo App";

export default function Layout({ children, home }) {
  const { user, error, isLoading } = useUser();
  console.log(user);

  return (
    <div>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content="Example project in Next.js" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
      <header>
        <Navbar user={user || null} />
      </header>
      <main>{children}</main>
    </div>
  );
}

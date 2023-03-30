import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Layout from "../components/layout/layout";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Button } from "antd";
import Link from "next/link";

export default function Home() {
  const { user } = useUser();

  return (
    <Layout>
      <div className={styles.container}>
        {user ? (
          <>
            <h1>Hello, {user.given_name}</h1>
            <div className={styles.links}>
              <Link href="/users">Users</Link>
              <Link href="/map">Map</Link>
            </div>
            <Button href="/api/auth/logout">Log Out</Button>
          </>
        ) : (
          <>
            <h1>Hello, there.</h1>
            <Button href="/api/auth/login">Log In</Button>
          </>
        )}
      </div>
    </Layout>
  );
}

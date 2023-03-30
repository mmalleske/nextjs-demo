import Image from "next/image";
import styles from "./navbar.module.scss";
import Link from "next/link";
import { Dropdown } from "antd";

export default function Navbar({ user }) {
  const items = [
    {
      key: "1",
      label: <a href="/api/auth/logout">Log Out</a>,
    },
  ];

  return (
    <header className={styles.container}>
      <div className={styles.pageLinks}>
        <Link href="/map">Map</Link>
        <Link href="/users">Users</Link>
      </div>
      <div className={styles.login}>
        {user ? (
          <div className={styles.inner}>
            <span>Hello, {user.given_name}</span>
            {user && (
              <Dropdown menu={{ items }}>
                <Image
                  alt={user.name}
                  className={styles.avatar}
                  src={user.picture}
                  width={40}
                  height={40}
                />
              </Dropdown>
            )}
          </div>
        ) : (
          <a href="/api/auth/login">Login</a>
        )}
      </div>
    </header>
  );
}

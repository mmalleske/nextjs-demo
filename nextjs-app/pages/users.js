import Layout from "../components/layout/layout";
import { users } from "../lib/users";
import { UserCard } from "../components/userCard/userCard";
import style from "./users.module.scss";

export default function Users() {
  return (
    <Layout>
      <div className={style.userList}>
        {users.map((user) => (
          <UserCard user={user} />
        ))}
      </div>
    </Layout>
  );
}

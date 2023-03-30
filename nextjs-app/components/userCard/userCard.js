import Link from "next/link";
import { Card } from "antd";
import style from "./userCard.module.scss";

const { Meta } = Card;

export function UserCard({ user }) {
  return (
    <Link href={`/users/${user.id}`}>
      <Card
        className={style.userCard}
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            className={style.profilePic}
            alt={user.name}
            src={user.profilePic}
          />
        }
      >
        <Meta title={user.name} />
      </Card>
    </Link>
  );
}

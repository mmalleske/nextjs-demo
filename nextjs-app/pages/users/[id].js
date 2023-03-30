import Layout from "../../components/layout/layout";
import Image from "next/image";
import { getAllUserIds, getUserData } from "../../lib/users";
import style from "./userProfile.module.scss";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Drawer, Button } from "antd";
import { EditFilled } from "@ant-design/icons";

export async function getStaticProps({ params }) {
  const userData = await getUserData(params.id);
  console.log(userData);
  return {
    props: {
      userData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllUserIds();
  return {
    paths,
    fallback: false,
  };
}

export default function ({ userData }) {
  const [user, setUser] = useState(userData);
  const { register, handleSubmit, error } = useForm();

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onSubmit = (data) => {
    setUser({
      name: data?.name || user.name,
      country: data?.country || user.country,
      description: data?.description || user.description,
      profilePic: data?.profilePic || user.profilePic,
    });
    setOpen(false);
  };

  return (
    <Layout>
      <div className={style.userProfile}>
        <div className={style.inner}>
          <img alt={user.name} src={user.profilePic} />
          <h1>{user.name}</h1>
          <h2>{user.country}</h2>
          <p>{user.description}</p>
          <EditFilled className={style.editIcon} onClick={showDrawer} />
        </div>
        <Drawer
          title="Edit Details"
          placement="right"
          onClose={onClose}
          open={open}
        >
          <form className={style.editDetailsForm} onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input
              {...register("name", { required: false })}
              placeholder={user.name}
            />
            <label>Country</label>
            <input
              {...register("country", { required: false })}
              placeholder={user.country}
            />
            <label>Description</label>
            <textarea
              {...register("description", { required: false })}
              placeholder={user.description}
            />
            <button type="submit">Save Changes</button>
          </form>
        </Drawer>
      </div>
    </Layout>
  );
}

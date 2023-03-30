import { useState } from "react";
import Layout from "../components/layout/layout";
import { users } from "../lib/users";
import { Map as MapGl, Popup, Marker } from "react-map-gl";
import { Divider, List, Typography } from "antd";
import style from "./map.module.scss";
import "mapbox-gl/dist/mapbox-gl.css";
import Link from "next/link";

export default function Map() {
  const [viewState, setViewState] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 1.5
  });


  const handleClickUser = (user) => {    
    setViewState({ latitude: user.latitude, longitude: user.longitude, zoom: 3 });
  };

  return (
    <Layout>
      <List
        className={style.userList}
        bordered
        header={
          <div>
            <b>Users</b>
          </div>
        }
        dataSource={users}
        renderItem={(item) => (
          <List.Item onClick={() => handleClickUser(item)}>
            <img src={item.flagPic} alt={item.country} />
            <Typography.Text mark></Typography.Text> {item.name}
          </List.Item>
        )}
      />
      <div className={style.mapPage}>
        <MapGl            
          {...viewState}
          initialViewState={{ latitude: 0, longitude: 0, zoom: 1.5 }}
          style={{
            height: "100vh",
            width: "100vw",
          }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          mapboxAccessToken="pk.eyJ1IjoibW1hbGxlc2tlIiwiYSI6ImNqNHA0ZGYwejAyOTEzNHA1Y3k3cXdxZGMifQ.FT4JkTtdKiqJ6xEG3fH0hw"
        >
          {users.map((user, index) => (
            <>
              <Popup
                key={`${user.id}-popup`}
                className={style.popup}
                latitude={user.latitude}
                longitude={user.longitude}
                offset={{
                  "bottom-left": [12, -38],
                  bottom: [0, -38],
                  "bottom-right": [-12, -38],
                }}
              >
                <Link href={`/users/${user.id}`}>
                  <img src={user.profilePic} />
                </Link>
              </Popup>
              <Marker
                key={`${user.id}-marker`}
                latitude={user.latitude}
                longitude={user.longitude}
                anchor="bottom"
                color="#0b6cb0"
              >
                <div className={style.marker}>
                  <img src={user.flagPic} />
                </div>
              </Marker>
            </>
          ))}
        </MapGl>
      </div>
    </Layout>
  );
}

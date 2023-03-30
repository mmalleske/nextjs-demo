import Layout from "../components/layout/layout";
import { users } from "../lib/users";
import { Map as MapGl, Layer, Feature, Marker } from "react-map-gl";
import { Divider, List, Typography } from "antd";
import style from "./map.module.scss";
import "mapbox-gl/dist/mapbox-gl.css";

export default function Map() {
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
          <List.Item>
            <Typography.Text mark></Typography.Text> {item.name}
          </List.Item>
        )}
      />
      <div className={style.mapPage}>
        <MapGl
          initialViewState={{
            latitude: -14.235,
            longitude: -51.9253,
            zoom: 3.5,
          }}
          style={{
            height: "100vh",
            width: "100vw",
          }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          mapboxAccessToken="pk.eyJ1IjoibW1hbGxlc2tlIiwiYSI6ImNqNHA0ZGYwejAyOTEzNHA1Y3k3cXdxZGMifQ.FT4JkTtdKiqJ6xEG3fH0hw"
        >
          {/* <Feature latitude={14.235} longitude={51.9253}></Feature> */}
          <Marker
            latitude={-14.235}
            longitude={-51.9253}
            anchor="bottom"
            color="#0b6cb0"
          >
            <div className={style.marker}>
              <img src="/images/brazil-flag.png" />
            </div>
          </Marker>
        </MapGl>
      </div>
    </Layout>
  );
}

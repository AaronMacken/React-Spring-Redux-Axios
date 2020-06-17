import React from "react";
import SpringJumbo from "../components/SpringJumbo";
import Users from "../components/Users";
import AddUser from "../components/AddUser";
import { Spring } from "react-spring/renderprops";

export default function HomePage() {
  return (
    <>
      <SpringJumbo />
      <Spring
        from={{ opacity: 0, marginRight: 100 }}
        to={{ opacity: 1, marginRight: 0 }}
        config={{ delay: 1000, duration: 1000 }}
      >
        {(props) => (
          <div style={props}>
            <AddUser />
            <hr style={{ marginBottom: "2rem" }} />
            <Users />
          </div>
        )}
      </Spring>
    </>
  );
}

import React from "react";
import styles from "../styles/Layout.module.css";
import Item from "./Item";

const List = ({ items }) => {
  return (
    <div className="container">
      <div className="row">
        {items.map((item) => (
          <div className="col-12 col-md-3">
            <br />

            <Item item={item} />
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;

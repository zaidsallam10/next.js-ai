import React from "react";
import Link from "next/link";
import styles from "../styles/Layout.module.css";
import Image from "next/image";

const Item = ({ item }) => {
  return (
    <Link href="/item/[id]" as={`/item/${item.id}`}>
      <a>
        <div className={styles.card}>
          <Image
            src={item.image}
            className="card-img-top"
            width="200"
            height="200"
          />
          <div class="card-body">
            <h5 class="card-title">{item.title}</h5>
            <p class="card-text">{item.description}</p>
            <br />
            <a href="#" class="btn btn-primary">
              Details
            </a>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Item;

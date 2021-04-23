import { useRouter } from "next/router";
import styles from "../../styles/Layout.module.css";
import Image from "next/image";
import Link from "next/link";

const Element = ({ item }) => {
  // statically
  const { id } = useRouter().query;

  return (
    <div className={styles.container}>
      <br />
      <Image
        src={item.image}
        className="card-img-top"
        width="200"
        height="200"
      />
      <div class="card-body">
        <h5 class="card-title">{item.title}</h5>
        <p class="card-text">{item.description}</p>
        <Link href="/">
          <a class="btn btn-primary">Back to home</a>
        </Link>
      </div>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `http://localhost:3000/api/v1/topics/${context.params.id}`
  );
  const item = await res.json();
  return {
    props: {
      item,
    },
  };
};

export default Element;

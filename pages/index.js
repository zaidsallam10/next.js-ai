import styles from "../styles/Home.module.css";
import List from "../components/List";

export default function Home({ items }) {
  return (
    <div className={styles.container}>
      <List items={items} />

      <h1></h1>
    </div>
  );
}

// get static props: fetchs data in built time
// get server side props: fetch data on every request (slower that get static props)
// get static paths: dynamicly generate paths based on data we're fetcing

//////////////////////////////////////////////////////////////////////////////////
// From API from this project /api folder
//////////////////////////////////////////////////////////////////////////////////

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/v1/topics");
  const items = await res.json();

  return {
    props: {
      items,
    },
  };
};

//////////////////////////////////////////////////////////////////////////////////
// From public API
//////////////////////////////////////////////////////////////////////////////////

// export const getStaticProps = async () => {
//   const res = await fetch(
//     "https://6082b7c75dbd2c001757a57c.mockapi.io/api/v1/users"
//   );
//   const items = await res.json();

//   return {
//     props: {
//       items,
//     },
//   };
// };

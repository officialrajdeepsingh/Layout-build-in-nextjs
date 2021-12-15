/* 
 Show a ui error in nextjs about router. check it and after remove layout comments
*/

import Head from "next/head";
import styles from "../styles/About.module.css";
import Layout from "../Components/Layout";

export default function About() {
  return (
    <>
      <Head>
        <title>About page</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* Layout wayper in nextjs */}
      <Layout>
        <div className={styles.container}>
          <main className={styles.main}>
            <div className={styles.grid}>
              <h1 className={styles.title}> About page </h1>
              <p className={styles.paragraf}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </main>
        </div>
      </Layout>
    </>
  );
}

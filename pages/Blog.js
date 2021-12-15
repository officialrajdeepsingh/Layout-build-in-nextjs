/* 
 Add css help of @font-face CSS property on 
 Specific web page. check Blog.module.css file 
  all example 
 include  in article 

*/

import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Blog.module.css";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog page</title>
      </Head>
      <div className={styles.grid}>
        <div className={styles.box}>
          <h1 className={styles.title}> Blog post 1 </h1>
          <p className={styles.paragraf}>
            Lorem ipsum sit amet, consectetur adipiscing elit, sed do
          </p>
          <Link
            href={{
              pathname: "Read",
              query: { id: "1" }
            }}
          >
            <a>Read Now </a>
          </Link>
        </div>
        <div className={styles.box}>
          <h1 className={styles.title}> Blog post 2 </h1>
          <p className={styles.paragraf}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </p>
          <Link
            href={{
              pathname: "Read",
              query: { id: "2" }
            }}
          >
            <a>Read Now </a>
          </Link>
        </div>
        <div className={styles.box}>
          <h1 className={styles.title}> Blog post 3 </h1>
          <p className={styles.paragraf}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </p>
          <Link
            href={{
              pathname: "Read",
              query: { id: "3" }
            }}
          >
            <a>Read Now </a>
          </Link>
        </div>
      </div>
    </>
  );
}

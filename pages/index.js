import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import Layout, {siteTitle} from "../components/layout";
import {getSortedPostsData} from "../lib/posts";
import utilStyles from "../styles/utils.module.css";

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

const Home = ({allPostsData}) => (
  <Layout home>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <section className={utilStyles.headingMd}>
      <p>
        A highly organized, detail-oriented and self-motivated individual, I
        aspire to becoming a full-stack software engineer.
      </p>
      <p>
        (This is a sample website - you'll be building a site like this on{" "}
        <a href='https://nextjs.org/Learn' target='blank'>
          our Next.js tutorial
        </a>
        .)
      </p>
    </section>
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>Blog</h2>
      <ul className={utilStyles.list}>
        {allPostsData.map(({id, date, title}) => (
          <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
        ))}
      </ul>
    </section>
  </Layout>
);

export default Home;

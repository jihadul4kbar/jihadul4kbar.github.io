import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import DocusaurusImageUrl from '@site/static/img/jihadulakbar.png';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(fab, faCheckSquare, faCoffee);
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
      <img src={DocusaurusImageUrl} alt="Jihadul Akbar" style={{width: 700}}/>
        <div className={styles.buttons}>
          <Link className={styles.icon}
            to="https://scholar.google.com/citations?user=iLr5dMcAAAAJ">
              <FontAwesomeIcon icon="fa-solid fa-globe" size='2x'/>
          </Link>
          <Link className={styles.icon}
            to="https://sinta.kemdikbud.go.id/authors/profile/6890356">
              <FontAwesomeIcon icon="fa-solid fa-book"  size='2x'/>
          </Link>
          <Link className={styles.icon}
            to="https://www.facebook.com/people/Jihadul-Akbar/pfbid02pSVhvKmsYz1DyFdyRJ6Gqr4whgtd9PgbbyBdjhnm5Q66Pd5g2CpCAmfBzKDCc5Jvl/">
           <FontAwesomeIcon icon="fa-brands fa-square-facebook"  size='2x' />
          </Link>
          <Link className={styles.icon}
            to="https://x.com/Jihadul4kbar">
              <FontAwesomeIcon icon="fa-solid fa-x"  size='2x' />
            </Link>
          <a className={styles.icon} href="https://www.linkedin.com/in/jihadul-akbar-22553a105/">
          <FontAwesomeIcon icon="fa-brands fa-linkedin" size='2x' />
          </a>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

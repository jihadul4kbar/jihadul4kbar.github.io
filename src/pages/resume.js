import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import ResumePage from '@site/src/components/ResumePage';
import { translate } from '@docusaurus/Translate';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Jihadul Akbar
        </Heading>
        <p className="hero__subtitle">jihadul4kbar@gmail.com | +62 78 6457 6745 | Lombok, Indonesia</p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig, i18n} = useDocusaurusContext();
  const t = (id, message) => translate({id, message}, {locale: i18n.currentLocale});
  return (
    <Layout
      title={t('resume.contact.title', 'Informasi Kontak')}
      description="Resume and academic profile of Jihadul Akbar">
      <HomepageHeader />
      <main>
        <ResumePage />
      </main>
    </Layout>
  );
}

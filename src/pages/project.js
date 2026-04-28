import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import ProjectPage from '@site/src/components/ProjectPage';
import { translate } from '@docusaurus/Translate';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {i18n} = useDocusaurusContext();
  const t = (id, message) => translate({id, message}, {locale: i18n.currentLocale});
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {t('project.title', 'Proyek')}
        </Heading>
        <p className="hero__subtitle">{t('project.description', 'Berikut adalah beberapa proyek yang telah saya kerjakan.')}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig, i18n} = useDocusaurusContext();
  const t = (id, message) => translate({id, message}, {locale: i18n.currentLocale});
  return (
    <Layout
      title={t('project.title', 'Proyek')}
      description={t('project.description', 'Berikut adalah beberapa proyek yang telah saya kerjakan.')}>
      <HomepageHeader />
      <main>
        <ProjectPage />
      </main>
    </Layout>
  );
}

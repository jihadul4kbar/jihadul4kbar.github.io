import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import ResumePage from '@site/src/components/ResumePage';

export default function Resume() {
  const {siteConfig, i18n} = useDocusaurusContext();
  const isEn = i18n.currentLocale === 'en';

  return (
    <Layout
      title={isEn ? 'Resume' : 'Riwayat'}
      description={isEn
        ? 'Academic resume of Jihadul Akbar — Lecturer at STMIK Lombok. Research in NLP, Machine Learning, Software Engineering.'
        : 'Riwayat akademik Jihadul Akbar — Dosen di STMIK Lombok. Penelitian di NLP, Machine Learning, Rekayasa Perangkat Lunak.'}>
      <ResumePage />
    </Layout>
  );
}

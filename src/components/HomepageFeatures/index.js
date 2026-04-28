import clsx from 'clsx';
import Heading from '@theme/Heading';
import { translate } from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  const {i18n} = useDocusaurusContext();
  const t = (id, message) => translate({id, message}, {locale: i18n.currentLocale});
  const FeatureList = [
    {
      title: t('homepage.features.publications.title', 'Publikasi'),
      Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
      description: (
        <>
          {t('homepage.features.publications.description', 'Makalah penelitian dan artikel di jurnal dan konferensi terakreditasi, berfokus pada teknologi pendidikan dan rekayasa perangkat lunak.')}
        </>
      ),
    },
    {
      title: t('homepage.features.materials.title', 'Materi Pengajaran'),
      Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
      description: (
        <>
          {t('homepage.features.materials.description', 'Materi kuliah, tutorial, dan panduan komprehensif untuk mahasiswa ilmu komputer dan sistem informasi.')}
        </>
      ),
    },
    {
      title: t('homepage.features.projects.title', 'Proyek'),
      Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
      description: (
        <>
          {t('homepage.features.projects.description', 'Aplikasi praktis dan alat yang dikembangkan untuk penelitian akademik, pengajaran, dan pengabdian masyarakat.')}
        </>
      ),
    },
  ];

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

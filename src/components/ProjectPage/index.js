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
      title: 'Klasifikasi Genre Film dengan LSTM',
      Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
      description: (
        <>
          Multi-label classification film genres berdasarkan sinopsis menggunakan metode Long Short-Term Memory (LSTM). 
          Penelitian ini mengembangkan model deep learning untuk mengklasifikasikan genre film dari teks sinopsis.
        </>
      ),
    },
    {
      title: 'Sistem Informasi Rekam Medis',
      Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
      description: (
        <>
          Sistem informasi rekam medis berbasis web untuk Klinik Risa Rafana menggunakan metodologi Extreme Programming. 
          Sistem ini mengelola data pasien, riwayat medis, dan jadwal konsultasi secara terintegrasi.
        </>
      ),
    },
    {
      title: 'SIMA Stasiun Meteorologi',
      Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
      description: (
        <>
          Sistem Informasi Monitoring Alat (SIMA) untuk Stasiun Meteorologi Zainuddin Abdul Madjid. 
          Sistem ini memantau kondisi alat meteorologi secara real-time dan menghasilkan laporan otomatis.
        </>
      ),
    },
    {
      title: 'Topic Modeling PeduliLindungi',
      Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
      description: (
        <>
          Pemodelan topik menggunakan Latent Dirichlet Allocation (LDA) pada ulasan aplikasi PeduliLindungi. 
          Penelitian ini mengidentifikasi tema utama dari feedback pengguna aplikasi.
        </>
      ),
    },
    {
      title: 'Analisis Sentimen Wisata',
      Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
      description: (
        <>
          Analisis sentimen wisata air terjun di Kabupaten Lombok Tengah menggunakan metode Support Vector Machine (SVM). 
          Penelitian ini menganalisis opini wisatawan dari data media sosial.
        </>
      ),
    },
    {
      title: 'Sistem Rekomendasi Kuliner Lombok',
      Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
      description: (
        <>
          Sistem rekomendasi kuliner di Lombok menggunakan Latent Dirichlet Allocation dan Content-Based Filtering. 
          Sistem ini membantu wisatawan menemukan tempat makan berdasarkan preferensi.
        </>
      ),
    }
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

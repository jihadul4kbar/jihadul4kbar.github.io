import clsx from 'clsx';
import Heading from '@theme/Heading';
import { translate } from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Feature({icon, title, description}) {
  return (
    <div className={clsx('col col--12')}>
      <div className="text--left padding-horiz--md">
        {icon && <FontAwesomeIcon icon={icon} />}
        <Heading as="h2">{title}</Heading>
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
      title: t('resume.education.title', 'Pendidikan'),
      icon: 'fa-solid fa-graduation-cap',
      description: (
        <>
          <b>Universitas Amikom Yogyakarta</b><br></br>
          Master's degree, Informatics Engineering ~ Business Intelligence (BI) 2020-2024 <br></br>
          <b>Thesis</b>: <i>Multi Label Film Genre Classification Based On Synopsis Using Long Short-Term Memory (LSTM) Method</i>
          <br></br>
          <br></br>
          <b>STMIK Lombok</b><br></br>
          Bachelor degree, Informatics Engineering ~ Software Engineering 2010-2015 <br></br>
          <b>Undergraduate Thesis</b>: <i>Web-Based Medical Record Information System at the Risa Rafana Clinic Using Extreme Programming Methodology</i>
          <br></br>
          <br></br>
          <b>SMKN 2 Praya Tengah</b><br></br>
          Vocational High School - Software Engineering 2007-2010
        </>
      ),
    },
    {
      title: t('resume.research.title', 'Pengalaman Penelitian'),
      icon: 'fa-solid fa-flask',
      description: (
        <>
          <b>Research Assistant - Business Intelligence Lab, Universitas Amikom Yogyakarta</b> (2020-2024)<br></br>
          Conducted research on Natural Language Processing and Machine Learning applications<br></br>
          Published papers on text classification, topic modeling, and sentiment analysis<br></br>
          <br></br>
          <b>Researcher - STMIK Lombok</b> (2015-Present)<br></br>
          Leading research initiatives in educational technology and software engineering<br></br>
          Collaborating with researchers from various Indonesian universities
        </>
      ),
    },
    {
      title: t('resume.work.title', 'Pengalaman Kerja'),
      icon: 'fa-solid fa-briefcase',
      description: (
        <>
          <b>Lecturer - STMIK Lombok</b> (2015-Present)<br></br>
          Teaching undergraduate courses in Computer Science and Information Systems<br></br>
          Supervising student thesis projects<br></br>
          Developing curriculum for software engineering courses<br></br>
          <br></br>
          <b>Web Developer</b> (2015-Present)<br></br>
          Developing web applications for academic and community projects<br></br>
          Building information systems for local organizations
        </>
      ),
    },
    {
      title: t('resume.teaching.title', 'Pengalaman Mengajar'),
      icon: 'fa-solid fa-chalkboard-teacher',
      description: (
        <>
          <b>Undergraduate Courses:</b><br></br>
          • Web Programming<br></br>
          • Software Engineering<br></br>
          • Database Systems<br></br>
          • Data Structures and Algorithms<br></br>
          • Artificial Intelligence Fundamentals<br></br>
          • Information Systems<br></br>
          <br></br>
          <b>Teaching Philosophy:</b> Combining theoretical foundations with practical applications to prepare students for industry challenges.
        </>
      ),
    },
    {
      title: t('resume.publications.title', 'Publikasi'),
      icon: 'fa-solid fa-book',
      description: (
        <>
          <b>Selected Publications:</b><br></br>
          <br></br>
          • <b>Akbar, J.</b>, Yaqin, A. (2021). Sistem Informasi Rekam Medis Berbasis Web Pada Klinik Risa Rafana. <i>Infotek: Jurnal Informatika dan Teknologi</i>, 4(2), 270-279. (31 citations)<br></br>
          • <b>Akbar, J.</b>, Utami, E., Yaqin, A. (2022). Multi-label classification of film genres based on synopsis using SVM, Logistic Regression and Naïve Bayes. <i>6th International Conference on Information Technology, Information Systems and Electrical Engineering (ICITISEE)</i>. (14 citations)<br></br>
          • <b>Akbar, J.</b>, Fahmi, H., Murniati, W. (2025). Multi Label Klasifikasi Genre Film Berdasarkan Sinopsis Menggunakan Metode LSTM. <i>Jurnal Manajemen Informatika dan Sistem Informasi</i>, 8(1), 110-119. (9 citations)<br></br>
          • Lestari, A., <b>Akbar, J.</b>, Istyarini, H.H. (2023). Perancangan SIMA Pada Stasiun Meteorologi Zainuddin Abdul Madjid. <i>Jurnal ilmiah Sistem Informasi dan Ilmu Komputer</i>, 3(1), 60-76. (9 citations)<br></br>
          • <b>Akbar, J.</b>, et al. (2023). Pemodelan Topik Menggunakan LDA pada Ulasan Aplikasi PeduliLindungi. <i>InComTech: Jurnal Telekomunikasi dan Komputer</i>, 13, 40-50. (6 citations)<br></br>
          <br></br>
          <a href="https://scholar.google.com/citations?user=iLr5dMcAAAAJ" target="_blank" rel="noopener noreferrer">View all publications on Google Scholar →</a>
        </>
      ),
    },
    {
      title: t('resume.conferences.title', 'Presentasi Konferensi'),
      icon: 'fa-solid fa-users',
      description: (
        <>
          <b>International Conferences:</b><br></br>
          • 6th International Conference on Information Technology, Information Systems and Electrical Engineering (ICITISEE), 2022 - Presented paper on multi-label film genre classification<br></br>
          <br></br>
          <b>National Conferences:</b><br></br>
          • Seminar Nasional Teknologi Informasi dan Multimedia (SNTIM), Various years<br></br>
          • Konferensi Nasional Ilmu Komputer dan Teknologi Informasi, Various years<br></br>
          <br></br>
          <b>Research Collaborations:</b><br></br>
          • Universitas Amikom Yogyakarta<br></br>
          • STMIK Lombok Research Group<br></br>
          • Various Indonesian university partnerships
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

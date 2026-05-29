import clsx from 'clsx';
import Heading from '@theme/Heading';
import { translate } from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faFlask, faBriefcase, faChalkboardTeacher, faBook, faUsers } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css';

function Section({icon, title, children}) {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <div className={styles.sectionIcon}>
          <FontAwesomeIcon icon={icon} />
        </div>
        <Heading as="h2" className={styles.sectionTitle}>{title}</Heading>
      </div>
      <div className={styles.sectionContent}>
        {children}
      </div>
    </section>
  );
}

function Item({title, subtitle, period, thesis, children}) {
  return (
    <div className={styles.item}>
      <div className={styles.itemHeader}>
        <div>
          <h3 className={styles.itemTitle}>{title}</h3>
          <span className={styles.itemSubtitle}>{subtitle}</span>
        </div>
        {period && <span className={styles.itemPeriod}>{period}</span>}
      </div>
      {thesis && <p className={styles.itemThesis}><strong>Thesis</strong>: <i>{thesis}</i></p>}
      {children && <div className={styles.itemBody}>{children}</div>}
    </div>
  );
}

function List({items}) {
  return (
    <ul className={styles.list}>
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  );
}

export default function ResumePage() {
  const {i18n} = useDocusaurusContext();
  const t = (id, message) => translate({id, message}, {locale: i18n.currentLocale});

  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.grid}>

          {/* Pendidikan */}
          <Section icon={faGraduationCap} title={t('resume.education.title', 'Pendidikan')}>
            <Item
              title={t('resume.education.s2.degree', 'Master of Informatics Engineering')}
              subtitle={t('resume.education.s2.school', 'Universitas Amikom Yogyakarta')}
              period="2020 - 2024"
              thesis={t('resume.education.s2.thesis', 'Multi Label Film Genre Classification Based On Synopsis Using Long Short-Term Memory (LSTM) Method')}
            />
            <Item
              title={t('resume.education.s1.degree', 'Bachelor of Informatics Engineering')}
              subtitle={t('resume.education.s1.school', 'STMIK Lombok')}
              period="2010 - 2015"
              thesis={t('resume.education.s1.thesis', 'Web-Based Medical Record Information System at the Risa Rafana Clinic Using Extreme Programming Methodology')}
            />
            <Item
              title={t('resume.education.smk.degree', 'Vocational High School - Software Engineering')}
              subtitle={t('resume.education.smk.school', 'SMKN 2 Praya Tengah')}
              period="2007 - 2010"
            />
          </Section>

          {/* Pengalaman Penelitian */}
          <Section icon={faFlask} title={t('resume.research.title', 'Pengalaman Penelitian')}>
            <Item
              title={t('resume.research.ra.title', 'Research Assistant - Business Intelligence Lab')}
              subtitle={t('resume.research.ra.org', 'Universitas Amikom Yogyakarta')}
              period="2020 - 2024"
            >
              <List items={[
                t('resume.research.ra.item1', 'Conducted research on Natural Language Processing and Machine Learning applications'),
                t('resume.research.ra.item2', 'Published papers on text classification, topic modeling, and sentiment analysis'),
              ]} />
            </Item>
            <Item
              title={t('resume.research.res.title', 'Researcher')}
              subtitle={t('resume.research.res.org', 'STMIK Lombok')}
              period="2015 - Present"
            >
              <List items={[
                t('resume.research.res.item1', 'Leading research initiatives in educational technology and software engineering'),
                t('resume.research.res.item2', 'Collaborating with researchers from various Indonesian universities'),
              ]} />
            </Item>
          </Section>

          {/* Pengalaman Kerja */}
          <Section icon={faBriefcase} title={t('resume.work.title', 'Pengalaman Kerja')}>
            <Item
              title={t('resume.work.lecturer.title', 'Lecturer')}
              subtitle={t('resume.work.lecturer.org', 'STMIK Lombok')}
              period="2015 - Present"
            >
              <List items={[
                t('resume.work.lecturer.item1', 'Teaching undergraduate courses in Computer Science and Information Systems'),
                t('resume.work.lecturer.item2', 'Supervising student thesis projects'),
                t('resume.work.lecturer.item3', 'Developing curriculum for software engineering courses'),
              ]} />
            </Item>
            <Item
              title={t('resume.work.dev.title', 'Web Developer')}
              subtitle={t('resume.work.dev.org', 'Freelance / Academic Projects')}
              period="2015 - Present"
            >
              <List items={[
                t('resume.work.dev.item1', 'Developing web applications for academic and community projects'),
                t('resume.work.dev.item2', 'Building information systems for local organizations'),
              ]} />
            </Item>
          </Section>

          {/* Pengalaman Mengajar */}
          <Section icon={faChalkboardTeacher} title={t('resume.teaching.title', 'Pengalaman Mengajar')}>
            <Item title={t('resume.teaching.courses', 'Undergraduate Courses')}>
              <List items={[
                'Web Programming',
                'Software Engineering',
                'Database Systems',
                'Data Structures and Algorithms',
                'Artificial Intelligence Fundamentals',
                'Information Systems',
              ]} />
            </Item>
            <div className={styles.teachingPhilosophy}>
              <p><strong>{t('resume.teaching.philosophy.label', 'Teaching Philosophy:')}</strong> {t('resume.teaching.philosophy.desc', 'Combining theoretical foundations with practical applications to prepare students for industry challenges.')}</p>
            </div>
          </Section>

          {/* Publikasi */}
          <Section icon={faBook} title={t('resume.publications.title', 'Publikasi')}>
            <Item title={t('resume.publications.selected', 'Selected Publications')}>
              <ul className={styles.publicationList}>
                <li><b>Akbar, J.</b>, Yaqin, A. (2021). Sistem Informasi Rekam Medis Berbasis Web Pada Klinik Risa Rafana. <i>Infotek: Jurnal Informatika dan Teknologi</i>, 4(2), 270-279. <span className={styles.citationBadge}>31 citations</span></li>
                <li><b>Akbar, J.</b>, Utami, E., Yaqin, A. (2022). Multi-label classification of film genres based on synopsis using SVM, Logistic Regression and Naïve Bayes. <i>6th International Conference on Information Technology, Information Systems and Electrical Engineering (ICITISEE)</i>. <span className={styles.citationBadge}>14 citations</span></li>
                <li><b>Akbar, J.</b>, Fahmi, H., Murniati, W. (2025). Multi Label Klasifikasi Genre Film Berdasarkan Sinopsis Menggunakan Metode LSTM. <i>Jurnal Manajemen Informatika dan Sistem Informasi</i>, 8(1), 110-119. <span className={styles.citationBadge}>9 citations</span></li>
                <li>Lestari, A., <b>Akbar, J.</b>, Istyarini, H.H. (2023). Perancangan SIMA Pada Stasiun Meteorologi Zainuddin Abdul Madjid. <i>Jurnal ilmiah Sistem Informasi dan Ilmu Komputer</i>, 3(1), 60-76. <span className={styles.citationBadge}>9 citations</span></li>
                <li><b>Akbar, J.</b>, et al. (2023). Pemodelan Topik Menggunakan LDA pada Ulasan Aplikasi PeduliLindungi. <i>InComTech: Jurnal Telekomunikasi dan Komputer</i>, 13, 40-50. <span className={styles.citationBadge}>6 citations</span></li>
              </ul>
              <div className={styles.externalLink}>
                <a href="https://scholar.google.com/citations?user=iLr5dMcAAAAJ" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faBook} /> View all publications on Google Scholar →
                </a>
              </div>
            </Item>
          </Section>

          {/* Presentasi Konferensi */}
          <Section icon={faUsers} title={t('resume.conferences.title', 'Presentasi Konferensi')}>
            <Item title={t('resume.conferences.international', 'International Conferences')}>
              <List items={[
                '6th International Conference on Information Technology, Information Systems and Electrical Engineering (ICITISEE), 2022 — Presented paper on multi-label film genre classification',
              ]} />
            </Item>
            <Item title={t('resume.conferences.national', 'National Conferences')}>
              <List items={[
                'Seminar Nasional Teknologi Informasi dan Multimedia (SNTIM), Various years',
                'Konferensi Nasional Ilmu Komputer dan Teknologi Informasi, Various years',
              ]} />
            </Item>
            <Item title={t('resume.conferences.collab', 'Research Collaborations')}>
              <List items={[
                'Universitas Amikom Yogyakarta',
                'STMIK Lombok Research Group',
                'Various Indonesian university partnerships',
              ]} />
            </Item>
          </Section>

        </div>
      </div>
    </div>
  );
}

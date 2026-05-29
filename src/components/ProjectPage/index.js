import clsx from 'clsx';
import Heading from '@theme/Heading';
import { translate } from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faHospital, faCloudSun, faComments, faWater, faUtensils, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css';

function ProjectCard({title, description, icon, techStack, year, links}) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.cardIcon}>
          <FontAwesomeIcon icon={icon} size="3x" />
        </div>
        <div className={styles.cardMeta}>
          {year && <span className={styles.yearBadge}>{year}</span>}
          {techStack && techStack.map((tech, i) => (
            <span key={i} className={styles.techBadge}>{tech}</span>
          ))}
        </div>
      </div>
      <Heading as="h3" className={styles.cardTitle}>{title}</Heading>
      <p className={styles.cardDescription}>{description}</p>
      {links && links.length > 0 && (
        <div className={styles.cardLinks}>
          {links.map((link, i) => (
            <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProjectPage() {
  const {i18n} = useDocusaurusContext();
  const t = (id, message) => translate({id, message}, {locale: i18n.currentLocale});
  const projects = [
    {
      title: 'Klasifikasi Genre Film dengan LSTM',
      icon: faFilm,
      year: '2025',
      techStack: ['LSTM', 'Deep Learning', 'NLP', 'Python'],
      description: (
        <>
          Multi-label classification film genres berdasarkan sinopsis menggunakan metode Long Short-Term Memory (LSTM). 
          Penelitian ini mengembangkan model deep learning untuk mengklasifikasikan genre film dari teks sinopsis.
        </>
      ),
      links: [
        { url: 'https://scholar.google.com/citations?user=iLr5dMcAAAAJ', label: 'Paper' },
      ],
    },
    {
      title: 'Sistem Informasi Rekam Medis',
      icon: faHospital,
      year: '2021',
      techStack: ['PHP', 'MySQL', 'Extreme Programming', 'Web'],
      description: (
        <>
          Sistem informasi rekam medis berbasis web untuk Klinik Risa Rafana menggunakan metodologi Extreme Programming. 
          Sistem ini mengelola data pasien, riwayat medis, dan jadwal konsultasi secara terintegrasi.
        </>
      ),
      links: [
        { url: 'https://scholar.google.com/citations?user=iLr5dMcAAAAJ', label: 'Paper' },
      ],
    },
    {
      title: 'SIMA Stasiun Meteorologi',
      icon: faCloudSun,
      year: '2023',
      techStack: ['Web', 'Monitoring', 'Real-time'],
      description: (
        <>
          Sistem Informasi Monitoring Alat (SIMA) untuk Stasiun Meteorologi Zainuddin Abdul Madjid. 
          Sistem ini memantau kondisi alat meteorologi secara real-time dan menghasilkan laporan otomatis.
        </>
      ),
      links: [
        { url: 'https://scholar.google.com/citations?user=iLr5dMcAAAAJ', label: 'Paper' },
      ],
    },
    {
      title: 'Topic Modeling PeduliLindungi',
      icon: faComments,
      year: '2023',
      techStack: ['LDA', 'NLP', 'Python'],
      description: (
        <>
          Pemodelan topik menggunakan Latent Dirichlet Allocation (LDA) pada ulasan aplikasi PeduliLindungi. 
          Penelitian ini mengidentifikasi tema utama dari feedback pengguna aplikasi.
        </>
      ),
      links: [
        { url: 'https://scholar.google.com/citations?user=iLr5dMcAAAAJ', label: 'Paper' },
      ],
    },
    {
      title: 'Analisis Sentimen Wisata',
      icon: faWater,
      year: '2023',
      techStack: ['SVM', 'Sentiment Analysis', 'Python'],
      description: (
        <>
          Analisis sentimen wisata air terjun di Kabupaten Lombok Tengah menggunakan metode Support Vector Machine (SVM). 
          Penelitian ini menganalisis opini wisatawan dari data media sosial.
        </>
      ),
      links: [
        { url: 'https://scholar.google.com/citations?user=iLr5dMcAAAAJ', label: 'Paper', icon: 'external' },
      ],
    },
    {
      title: 'Sistem Rekomendasi Kuliner Lombok',
      icon: faUtensils,
      year: '2024',
      techStack: ['LDA', 'Content-Based Filtering', 'Recommendation'],
      description: (
        <>
          Sistem rekomendasi kuliner di Lombok menggunakan Latent Dirichlet Allocation dan Content-Based Filtering. 
          Sistem ini membantu wisatawan menemukan tempat makan berdasarkan preferensi.
        </>
      ),
      links: [
        { url: 'https://scholar.google.com/citations?user=iLr5dMcAAAAJ', label: 'Paper' },
      ],
    },
  ];

  return (
    <section className={styles.page}>
      <div className="container">
        <div className={styles.grid}>
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

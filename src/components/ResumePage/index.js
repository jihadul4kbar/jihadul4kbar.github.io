import {useEffect} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

function Reveal({children, className = '', delay = 0}) {
  return (
    <div className={`reveal ${className}`} style={{transitionDelay: delay + 'ms'}}>
      {children}
    </div>
  );
}

function Section({idx, title, children}) {
  return (
    <section className={styles.section}>
      <div className={styles.secHead}>
        <span className={styles.secIdx}>{idx}</span>
        <h2 className={styles.secTitle}>{title}</h2>
      </div>
      {children}
    </section>
  );
}

function TimelineItem({yr, title, org, desc, thesis, delay = 0}) {
  return (
    <Reveal className={styles.tlItem} delay={delay}>
      <div className={styles.tlDot}></div>
      <div className={styles.tlContent}>
        <span className={styles.tlYr}>{yr}</span>
        <h3 className={styles.tlTitle}>{title}</h3>
        <div className={styles.tlOrg}>{org}</div>
        {desc && <p className={styles.tlDesc}>{desc}</p>}
        {thesis && (
          <div className={styles.tlThesis}>
            <span className={styles.tlThesisLabel}>Thesis</span>
            <span className={styles.tlThesisText}>{thesis}</span>
          </div>
        )}
      </div>
    </Reveal>
  );
}

function PubItem({year, type, title, venue, badge}) {
  return (
    <div className={styles.pubItem}>
      <span className={styles.pubYr}>{year}</span>
      <div className={styles.pubBody}>
        <div className={styles.pubTitle}>{title}</div>
        <div className={styles.pubVenue}>{venue}</div>
      </div>
      <span className={styles.pubTyp}>{type}</span>
      {badge && <span className={styles.pubBadge}>{badge}</span>}
    </div>
  );
}

function Chip({label}) {
  return <span className={styles.chip}>{label}</span>;
}

export default function ResumePage() {
  const {i18n} = useDocusaurusContext();
  const isEn = i18n.currentLocale === 'en';

  useEffect(() => {
    const reveals = [...document.querySelectorAll('.reveal')];
    if (!('IntersectionObserver' in window)) {
      reveals.forEach(el => el.classList.add('in'));
      return;
    }
    const show = (el) => {
      if (el.classList.contains('in')) return;
      el.classList.add('in');
    };
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { show(e.target); io.unobserve(e.target); } });
    }, {threshold: 0.1, rootMargin: '0px 0px -6% 0px'});
    reveals.forEach(el => io.observe(el));
    requestAnimationFrame(() => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      reveals.forEach(el => { if (el.getBoundingClientRect().top < vh * 0.95) io.observe(el); });
    });
    setTimeout(() => reveals.forEach(el => { if (!el.classList.contains('in')) el.classList.add('in'); }), 2600);
    return () => io.disconnect();
  }, []);

  const summary = isEn
    ? 'Lecturer at STMIK Lombok with a Master\'s degree in Informatics Engineering from Universitas Amikom Yogyakarta. Research focuses on Natural Language Processing, Machine Learning, and Software Engineering. Passionate about bridging academic research with practical applications in education and industry.'
    : 'Dosen di STMIK Lombok dengan gelar Magister Teknik Informatika dari Universitas Amikom Yogyakarta. Fokus penelitian pada Natural Language Processing, Machine Learning, dan Rekayasa Perangkat Lunak. Berdedikasi menghubungkan penelitian akademik dengan aplikasi praktis dalam pendidikan dan industri.';

  const education = [
    {
      yr: '2020 — 2024',
      title: isEn ? 'Master of Informatics Engineering' : 'Magister Teknik Informatika',
      org: 'Universitas Amikom Yogyakarta',
      desc: isEn ? 'Business Intelligence concentration. GPA: 3.89/4.00.' : 'Konsentrasi Business Intelligence. IPK: 3.89/4.00.',
      thesis: isEn
        ? 'Multi Label Film Genre Classification Based On Synopsis Using Long Short-Term Memory (LSTM) Method'
        : 'Multi Label Klasifikasi Genre Film Berdasarkan Sinopsis Menggunakan Metode Long Short-Term Memory (LSTM)',
    },
    {
      yr: '2010 — 2015',
      title: isEn ? 'Bachelor of Informatics Engineering' : 'Sarjana Teknik Informatika',
      org: 'STMIK Lombok',
      desc: isEn ? 'Software Engineering concentration. GPA: 3.52/4.00.' : 'Konsentrasi Rekayasa Perangkat Lunak. IPK: 3.52/4.00.',
      thesis: isEn
        ? 'Web-Based Medical Record Information System at the Risa Rafana Clinic Using Extreme Programming Methodology'
        : 'Sistem Informasi Rekam Medis Berbasis Web pada Klinik Risa Rafana Menggunakan Metodologi Extreme Programming',
    },
    {
      yr: '2007 — 2010',
      title: isEn ? 'Vocational High School — Software Engineering' : 'SMK — Rekayasa Perangkat Lunak',
      org: 'SMKN 2 Praya Tengah',
      desc: isEn ? 'Software Engineering major with focus on web development and database systems.' : 'Jurusan Rekayasa Perangkat Lunak dengan fokus pada pengembangan web dan sistem basis data.',
    },
  ];

  const work = [
    {
      yr: isEn ? '2015 — Present' : '2015 — Sekarang',
      title: isEn ? 'Lecturer — Computer Science' : 'Dosen — Ilmu Komputer',
      org: 'STMIK Lombok',
      desc: isEn
        ? 'Teaching software engineering, web development, and information systems. Supervising student thesis projects and developing curriculum for undergraduate programs.'
        : 'Mengajar rekayasa perangkat lunak, pengembangan web, dan sistem informasi. Membimbing skripsi mahasiswa dan mengembangkan kurikulum program sarjana.',
    },
    {
      yr: '2020 — 2024',
      title: isEn ? 'Research Assistant — Business Intelligence Lab' : 'Research Assistant — Business Intelligence Lab',
      org: 'Universitas Amikom Yogyakarta',
      desc: isEn
        ? 'Conducted research on Natural Language Processing and Machine Learning. Published papers on text classification, topic modeling, and sentiment analysis in accredited journals and international conferences.'
        : 'Melakukan penelitian di bidang Natural Language Processing dan Machine Learning. Menerbitkan paper tentang text classification, topic modeling, dan sentiment analysis di jurnal terakreditasi dan konferensi internasional.',
    },
  ];

  const courses = isEn
    ? ['Web Programming', 'Software Engineering', 'Database Systems', 'Data Structures & Algorithms', 'Artificial Intelligence', 'Information Systems', 'Machine Learning Basics', 'Natural Language Processing']
    : ['Pemrograman Web', 'Rekayasa Perangkat Lunak', 'Sistem Basis Data', 'Struktur Data & Algoritma', 'Kecerdasan Buatan', 'Sistem Informasi', 'Dasar Machine Learning', 'Pemrosesan Bahasa Alami'];

  const publications = [
    {
      year: '2025', type: isEn ? 'Journal' : 'Jurnal',
      title: 'Multi Label Klasifikasi Genre Film Berdasarkan Sinopsis Menggunakan Metode LSTM',
      venue: 'Akbar, J., Fahmi, H., Murniati, W. · Jurnal Manajemen Informatika dan Sistem Informasi, 8(1), 110-119',
      badge: '9 citations',
    },
    {
      year: '2023', type: isEn ? 'Journal' : 'Jurnal',
      title: 'Pemodelan Topik Menggunakan LDA pada Ulasan Aplikasi PeduliLindungi',
      venue: 'Akbar, J., et al. · InComTech: Jurnal Telekomunikasi dan Komputer, 13, 40-50',
      badge: '6 citations',
    },
    {
      year: '2023', type: isEn ? 'Journal' : 'Jurnal',
      title: 'Perancangan SIMA Pada Stasiun Meteorologi Zainuddin Abdul Madjid',
      venue: 'Lestari, A., Akbar, J., Istyarini, H.H. · Jurnal Ilmiah Sistem Informasi dan Ilmu Komputer, 3(1), 60-76',
      badge: '9 citations',
    },
    {
      year: '2022', type: isEn ? 'Conference' : 'Konferensi',
      title: 'Multi-label Classification of Film Genres Based on Synopsis Using SVM, Logistic Regression and Naïve Bayes',
      venue: 'Akbar, J., Utami, E., Yaqin, A. · 6th ICITISEE, IEEE',
      badge: '14 citations',
    },
    {
      year: '2021', type: isEn ? 'Journal' : 'Jurnal',
      title: 'Sistem Informasi Rekam Medis Berbasis Web Pada Klinik Risa Rafana',
      venue: 'Akbar, J., Yaqin, A. · Infotek: Jurnal Informatika dan Teknologi, 4(2), 270-279',
      badge: '31 citations',
    },
  ];

  const conferences = [
    {
      title: isEn ? 'International Conferences' : 'Konferensi Internasional',
      items: [
        isEn
          ? '6th International Conference on Information Technology, Information Systems and Electrical Engineering (ICITISEE), 2022 — Presented paper on multi-label film genre classification'
          : '6th International Conference on Information Technology, Information Systems and Electrical Engineering (ICITISEE), 2022 — Mem presentasikan paper tentang klasifikasi genre film multi-label',
      ],
    },
    {
      title: isEn ? 'National Conferences' : 'Konferensi Nasional',
      items: [
        isEn ? 'Seminar Nasional Teknologi Informasi dan Multimedia (SNTIM), Various years' : 'Seminar Nasional Teknologi Informasi dan Multimedia (SNTIM), Berbagai tahun',
        isEn ? 'Konferensi Nasional Ilmu Komputer dan Teknologi Informasi, Various years' : 'Konferensi Nasional Ilmu Komputer dan Teknologi Informasi, Berbagai tahun',
      ],
    },
  ];

  const skills = isEn
    ? ['Python', 'TensorFlow', 'Scikit-learn', 'NLP', 'LSTM', 'SVM', 'LDA', 'PHP', 'Laravel', 'MySQL', 'JavaScript', 'HTML/CSS', 'Git', 'LibreNMS', 'Machine Learning', 'Deep Learning', 'Sentiment Analysis', 'Topic Modeling', 'Software Engineering', 'Web Development']
    : ['Python', 'TensorFlow', 'Scikit-learn', 'NLP', 'LSTM', 'SVM', 'LDA', 'PHP', 'Laravel', 'MySQL', 'JavaScript', 'HTML/CSS', 'Git', 'LibreNMS', 'Machine Learning', 'Deep Learning', 'Analisis Sentimen', 'Pemodelan Topik', 'Rekayasa Perangkat Lunak', 'Pengembangan Web'];

  return (
    <div className={styles.page}>
      {/* HEADER */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Reveal>
            <div className={styles.headerName}>Jihadul <span>Akbar</span></div>
          </Reveal>
          <Reveal delay={70}>
            <div className={styles.headerRole}>
              {isEn ? 'Lecturer · Researcher · Software Engineer' : 'Dosen · Peneliti · Pengembang Perangkat Lunak'}
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className={styles.headerContact}>
              <a href="mailto:jihadul4kbar@gmail.com">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
                jihadul4kbar@gmail.com
              </a>
              <a href="https://wa.me/6287864576745" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.762-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                +62 878 6457 6745
              </a>
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Lombok, Indonesia
              </span>
            </div>
          </Reveal>
          <Reveal delay={210}>
            <div className={styles.headerSocials}>
              <a href="https://scholar.google.com/citations?user=iLr5dMcAAAAJ" target="_blank" rel="noopener">Google Scholar</a>
              <a href="https://sinta.kemdiktisaintek.go.id/authors/profile/6890356" target="_blank" rel="noopener">SINTA</a>
              <a href="https://www.linkedin.com/in/jihadul-akbar-22553a105/" target="_blank" rel="noopener">LinkedIn</a>
              <a href="https://github.com/jihadul4kbar" target="_blank" rel="noopener">GitHub</a>
            </div>
          </Reveal>
        </div>
      </header>

      {/* SUMMARY */}
      <Reveal>
        <div className={styles.summaryCard}>
          <p>{summary}</p>
        </div>
      </Reveal>

      <div className={styles.wrap}>
        {/* EDUCATION */}
        <Section idx={isEn ? '01 — EDUCATION' : '01 — PENDIDIKAN'} title={isEn ? 'Academic Background' : 'Latar Belakang Akademik'}>
          <div className={styles.timeline}>
            {education.map((item, i) => (
              <TimelineItem key={i} {...item} delay={i * 70} />
            ))}
          </div>
        </Section>

        {/* EXPERIENCE */}
        <Section idx={isEn ? '02 — EXPERIENCE' : '02 — PENGALAMAN'} title={isEn ? 'Work & Research' : 'Kerja & Penelitian'}>
          <div className={styles.timeline}>
            {work.map((item, i) => (
              <TimelineItem key={i} {...item} delay={i * 70} />
            ))}
          </div>
        </Section>

        {/* TEACHING */}
        <Section idx={isEn ? '03 — TEACHING' : '03 — PENGAJARAN'} title={isEn ? 'Teaching & Courses' : 'Pengajaran & Mata Kuliah'}>
          <Reveal>
            <div className={styles.teachingCard}>
              <h3 className={styles.teachingLabel}>{isEn ? 'Undergraduate Courses' : 'Mata Kuliah S1'}</h3>
              <div className={styles.chipGroup}>
                {courses.map((c, i) => <Chip key={i} label={c} />)}
              </div>
            </div>
          </Reveal>
          <Reveal delay={70}>
            <div className={styles.philosophyCard}>
              <span className={styles.philosophyLabel}>{isEn ? 'Teaching Philosophy' : 'Filosofi Mengajar'}</span>
              <p>{isEn
                ? 'Combining theoretical foundations with practical applications to prepare students for real-world industry challenges. Emphasizing project-based learning and research-oriented thinking.'
                : 'Menggabungkan fondasi teoretis dengan aplikasi praktis untuk mempersiapkan mahasiswa menghadapi tantangan industri. Menekankan project-based learning dan pemikiran berorientasi riset.'}</p>
            </div>
          </Reveal>
        </Section>

        {/* PUBLICATIONS */}
        <Section idx={isEn ? '04 — PUBLICATIONS' : '04 — PUBLIKASI'} title={isEn ? 'Selected Publications' : 'Publikasi Terpilih'}>
          <Reveal>
            <div className={styles.pubList}>
              {publications.map((pub, i) => (
                <PubItem key={i} {...pub} />
              ))}
            </div>
          </Reveal>
          <Reveal delay={70}>
            <div className={styles.pubNote}>
              {isEn ? 'Full list & citations available on ' : 'Daftar lengkap & sitasi tersedia di '}
              <a href="https://scholar.google.com/citations?user=iLr5dMcAAAAJ" target="_blank" rel="noopener">Google Scholar</a>
              {' & '}
              <a href="https://sinta.kemdiktisaintek.go.id/authors/profile/6890356" target="_blank" rel="noopener">SINTA</a>
            </div>
          </Reveal>
        </Section>

        {/* CONFERENCES */}
        <Section idx={isEn ? '05 — CONFERENCES' : '05 — KONFERENSI'} title={isEn ? 'Presentations & Conferences' : 'Presentasi & Konferensi'}>
          {conferences.map((conf, i) => (
            <Reveal key={i} delay={i * 70}>
              <div className={styles.confCard}>
                <h3 className={styles.confTitle}>{conf.title}</h3>
                <ul className={styles.confList}>
                  {conf.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </Section>

        {/* SKILLS */}
        <Section idx={isEn ? '06 — SKILLS' : '06 — KEAHLIAN'} title={isEn ? 'Technical Skills & Tools' : 'Keahlian Teknis & Tools'}>
          <Reveal>
            <div className={styles.skillsCard}>
              <div className={styles.chipGroup}>
                {skills.map((s, i) => <Chip key={i} label={s} />)}
              </div>
            </div>
          </Reveal>
        </Section>

        {/* CTA */}
        <Reveal>
          <div className={styles.cta}>
            <a className={styles.ctaPrimary} href="mailto:jihadul4kbar@gmail.com">
              {isEn ? 'Get in Touch' : 'Hubungi Saya'}
              <span>→</span>
            </a>
            <a className={styles.ctaGhost} href="https://scholar.google.com/citations?user=iLr5dMcAAAAJ" target="_blank" rel="noopener">
              {isEn ? 'View Publications' : 'Lihat Publikasi'}
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

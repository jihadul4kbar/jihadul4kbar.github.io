import {useEffect} from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { talks as talksData } from '../data/talks';



function Section({idx, title, sub, seeAll, id, band, children}) {
  return (
    <section className={clsx('section', band && 'band')} id={id}>
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="sec-idx">{idx}</span>
          <div>
            <h2>{title}</h2>
            {sub && <p className="sec-sub">{sub}</p>}
          </div>
          {seeAll && (
            <a className="see-all" href={seeAll.href} target="_blank" rel="noopener noreferrer">
              {seeAll.label} →
            </a>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

function Reveal({children, as: Tag = 'div', className, ...props}) {
  return (
    <Tag className={clsx('reveal', className)} {...props}>
      {children}
    </Tag>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
      <path d="M7 17L17 7M17 7H8M17 7v9" />
    </svg>
  );
}

export default function Home() {
  const {siteConfig, i18n} = useDocusaurusContext();
  const isEn = i18n.currentLocale === 'en';
  useEffect(() => {
    const reveals = [...document.querySelectorAll('.reveal')];
    if (!('IntersectionObserver' in window)) {
      reveals.forEach(el => el.classList.add('in'));
      return;
    }
    const show = (el) => {
      if (el.classList.contains('in')) return;
      const sibs = [...el.parentElement.children].filter(c => c.classList.contains('reveal'));
      const idx = sibs.indexOf(el);
      el.style.transitionDelay = (idx > 0 ? Math.min(idx * 70, 350) : 0) + 'ms';
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

  const projects = [
    {
      title: isEn ? 'Film Genre Classification with LSTM' : 'Klasifikasi Genre Film dengan LSTM',
      tagYear: isEn ? 'Research · 2025' : 'Penelitian · 2025',
      tech: ['LSTM', 'Deep Learning', 'NLP', 'Python'],
      descId: 'Multi-label classification genre film berdasarkan sinopsis menggunakan Long Short-Term Memory (LSTM). Model deep learning untuk mengklasifikasikan genre film dari teks sinopsis.',
      descEn: 'Multi-label film genre classification from synopsis using LSTM. Deep learning model for classifying film genres from synopsis text.',
      href: 'https://scholar.google.com/citations?user=iLr5dMcAAAAJ',
    },
    {
      title: isEn ? 'Lombok Culinary Recommender' : 'Sistem Rekomendasi Kuliner Lombok',
      tagYear: isEn ? 'Research · 2024' : 'Penelitian · 2024',
      tech: ['LDA', 'Content-Based Filtering', 'Recommendation'],
      descId: 'Sistem rekomendasi kuliner di Lombok menggunakan LDA dan Content-Based Filtering. Membantu wisatawan menemukan tempat makan berdasarkan preferensi.',
      descEn: 'Culinary recommendation system in Lombok using LDA and Content-Based Filtering. Helps tourists find dining places based on preferences.',
      href: 'https://scholar.google.com/citations?user=iLr5dMcAAAAJ',
    },
    {
      title: isEn ? 'SIMA Meteorology Station' : 'SIMA Stasiun Meteorologi',
      tagYear: isEn ? 'Research · 2023' : 'Penelitian · 2023',
      tech: ['Web', 'Monitoring', 'Real-time'],
      descId: 'Sistem Informasi Monitoring Alat (SIMA) untuk Stasiun Meteorologi Zainuddin Abdul Madjid. Memantau alat meteorologi secara real-time dan menghasilkan laporan otomatis.',
      descEn: 'Equipment Monitoring Information System for Zainuddin Abdul Madjid Meteorological Station. Real-time weather equipment monitoring with automatic reports.',
      href: 'https://scholar.google.com/citations?user=iLr5dMcAAAAJ',
    },
    {
      title: isEn ? 'PeduliLindungi Topic Modeling' : 'Topic Modeling PeduliLindungi',
      tagYear: isEn ? 'Research · 2023' : 'Penelitian · 2023',
      tech: ['LDA', 'NLP', 'Python'],
      descId: 'Pemodelan topik menggunakan LDA pada ulasan aplikasi PeduliLindungi. Mengidentifikasi tema utama dari feedback pengguna aplikasi.',
      descEn: 'Topic modeling using LDA on PeduliLindungi app reviews. Identifies key themes from user feedback.',
      href: 'https://scholar.google.com/citations?user=iLr5dMcAAAAJ',
    },
    {
      title: isEn ? 'Tourism Sentiment Analysis' : 'Analisis Sentimen Wisata',
      tagYear: isEn ? 'Research · 2023' : 'Penelitian · 2023',
      tech: ['SVM', 'Sentiment Analysis', 'Python'],
      descId: 'Analisis sentimen wisata air terjun di Lombok Tengah menggunakan SVM. Menganalisis opini wisatawan dari data media sosial.',
      descEn: 'Sentiment analysis of waterfall tourism in Central Lombok using SVM. Analyzes tourist opinions from social media data.',
      href: 'https://scholar.google.com/citations?user=iLr5dMcAAAAJ',
    },
    {
      title: isEn ? 'Medical Records System' : 'Sistem Informasi Rekam Medis',
      tagYear: isEn ? 'Research · 2021' : 'Penelitian · 2021',
      tech: ['PHP', 'MySQL', 'Extreme Programming', 'Web'],
      descId: 'Sistem informasi rekam medis berbasis web untuk Klinik Risa Rafana menggunakan Extreme Programming. Mengelola data pasien, riwayat medis, dan jadwal konsultasi.',
      descEn: 'Web-based medical record system for Klinik Risa Rafana using Extreme Programming. Manages patient data, medical history, and consultation schedules.',
      href: 'https://scholar.google.com/citations?user=iLr5dMcAAAAJ',
    },
  ];

  const publications = [
    {
      year: '2025', type: 'Jurnal',
      title: 'Multi Label Klasifikasi Genre Film Berdasarkan Sinopsis Menggunakan Metode LSTM',
      venue: 'Akbar, J., Fahmi, H., Murniati, W. · Jurnal Manajemen Informatika dan Sistem Informasi, 8(1), 110-119',
    },
    {
      year: '2023', type: 'Jurnal',
      title: 'Pemodelan Topik Menggunakan LDA pada Ulasan Aplikasi PeduliLindungi',
      venue: 'Akbar, J., et al. · InComTech: Jurnal Telekomunikasi dan Komputer, 13, 40-50',
    },
    {
      year: '2023', type: 'Jurnal',
      title: 'Perancangan SIMA Pada Stasiun Meteorologi Zainuddin Abdul Madjid',
      venue: 'Lestari, A., Akbar, J., Istyarini, H.H. · Jurnal Ilmiah Sistem Informasi dan Ilmu Komputer, 3(1), 60-76',
    },
    {
      year: '2022', type: 'Konferensi',
      title: 'Multi-label Classification of Film Genres Based on Synopsis Using SVM, Logistic Regression and Naïve Bayes',
      venue: 'Akbar, J., Utami, E., Yaqin, A. · 6th ICITISEE, IEEE',
    },
    {
      year: '2021', type: 'Jurnal',
      title: 'Sistem Informasi Rekam Medis Berbasis Web Pada Klinik Risa Rafana',
      venue: 'Akbar, J., Yaqin, A. · Infotek: Jurnal Informatika dan Teknologi, 4(2), 270-279',
    },
  ];

  const timeline = [
    {
      yr: isEn ? '2015 — Present' : '2015 — Sekarang',
      title: isEn ? 'Lecturer — Computer Science' : 'Dosen — Ilmu Komputer',
      org: 'STMIK Lombok',
      desc: isEn
        ? 'Teaching software engineering, web development, and information systems; supervising student theses; developing curriculum.'
        : 'Mengajar rekayasa perangkat lunak, pengembangan web, dan sistem informasi; membimbing skripsi mahasiswa; mengembangkan kurikulum.',
    },
    {
      yr: '2020 — 2024',
      title: isEn ? 'Research Assistant — Business Intelligence Lab' : 'Research Assistant — Business Intelligence Lab',
      org: 'Universitas Amikom Yogyakarta',
      desc: isEn
        ? 'Research in NLP and Machine Learning. Publications on text classification, topic modeling, and sentiment analysis.'
        : 'Penelitian di bidang Natural Language Processing dan Machine Learning. Publikasi tentang text classification, topic modeling, dan sentiment analysis.',
    },
    {
      yr: '2020 — 2024',
      title: isEn ? "Master's Degree — Informatics Engineering" : 'S2 — Teknik Informatika',
      org: 'Universitas Amikom Yogyakarta',
      desc: isEn
        ? 'Business Intelligence concentration. Thesis: Multi Label Film Genre Classification Using LSTM.'
        : 'Konsentrasi Business Intelligence. Tesis: Multi Label Film Genre Classification Using LSTM.',
    },
    {
      yr: '2010 — 2015',
      title: isEn ? "Bachelor's Degree — Informatics Engineering" : 'S1 — Teknik Informatika',
      org: 'STMIK Lombok',
      desc: isEn
        ? 'Software Engineering concentration. Thesis: Web-Based Medical Record System Using Extreme Programming.'
        : 'Konsentrasi Rekayasa Perangkat Lunak. Skripsi: Sistem Informasi Rekam Medis Berbasis Web.',
    },
    {
      yr: '2007 — 2010',
      title: isEn ? 'Vocational High School — Software Engineering' : 'SMK — Rekayasa Perangkat Lunak',
      org: 'SMKN 2 Praya Tengah',
      desc: isEn ? 'Software Engineering major.' : 'Jurusan Rekayasa Perangkat Lunak.',
    },
  ];

  const talks = talksData;

  return (
    <Layout
      title={siteConfig.title}
      description={isEn
        ? 'Passionate about computer-science education, software engineering, and innovative research.'
        : 'Bergairah dalam pendidikan ilmu komputer, rekayasa perangkat lunak, dan penelitian inovatif.'}
    >
      <div className="glows" aria-hidden="true"><span className="g1"></span><span className="g2"></span><span className="g3"></span></div>

      {/* HERO */}
      <header className="hero" id="top">
        <div className="hero-text">
          <div className="kicker reveal">
            {isEn ? 'STMIK Lombok · Computer Science' : 'STMIK Lombok · Ilmu Komputer'}
          </div>
          <h1 className="name reveal">
            <span className="l1">Jihadul</span><br /><span className="l2">Akbar</span>
          </h1>
          <div className="role reveal">
            &gt; {isEn ? 'Lecturer · Researcher · Software Engineer' : 'Dosen · Peneliti · Pengembang Perangkat Lunak'}
          </div>
          <p className="lead reveal">
            {isEn
              ? 'Passionate about computer-science education, software engineering, and innovative research — dedicated to shaping the next generation of technology professionals.'
              : 'Tertarik dalam pendidikan ilmu komputer, rekayasa perangkat lunak, dan penelitian inovatif — berdedikasi membentuk generasi profesional teknologi berikutnya.'}
          </p>
          <div className="cta-row reveal">
            <a className="btn btn-primary" href="#riset">
              {isEn ? 'View Research' : 'Lihat Penelitian'}
              <span className="arr">→</span>
            </a>
            <a className="btn btn-ghost" href="#kontak">
              {isEn ? 'Get in Touch' : 'Hubungi Saya'}
            </a>
          </div>
          <div className="socials reveal">
            <a href="https://scholar.google.com/citations?user=iLr5dMcAAAAJ" target="_blank" rel="noopener">Google Scholar</a>
            <a href="https://sinta.kemdiktisaintek.go.id/authors/profile/6890356" target="_blank" rel="noopener">SINTA</a>
            <a href="https://www.linkedin.com/in/jihadul-akbar-22553a105/" target="_blank" rel="noopener">LinkedIn</a>
            <a href="https://x.com/Jihadul4kbar" target="_blank" rel="noopener">X</a>
            <a href="https://github.com/jihadul4kbar" target="_blank" rel="noopener">GitHub</a>
          </div>
        </div>

        <div className="portrait reveal">
          <span className="corner tl"></span>
          <span className="corner br"></span>
          <div className="frame">
            <img
              src="/img/jihadulakbar.png"
              alt="Jihadul Akbar"
              onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.classList.add('noimg'); }}
            />
          </div>
          <div className="tag">
            <span className="pulse"></span>
            {isEn ? 'Open to research collaboration' : 'Tersedia untuk kolaborasi riset'}
          </div>
        </div>
      </header>

      <div className="divider" />

      {/* FOKUS */}
      <Section id="fokus" band
        idx="01 — FOKUS"
        title={isEn ? 'What I work on' : 'Bidang yang saya tekuni'}
        sub={isEn
          ? 'Three pillars that anchor my work — in the classroom and beyond.'
          : 'Tiga pilar yang menopang pekerjaan saya di kampus maupun di luar kelas.'}
      >
        <div className="grid-3">
          <div className="card reveal">
            <div className="ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 7l9-4 9 4-9 4-9-4z"/><path d="M3 7v6l9 4 9-4V7"/></svg>
            </div>
            <span className="num">01</span>
            <h3>{isEn ? 'Teaching' : 'Pengajaran'}</h3>
            <p>{isEn ? 'Educating students in software engineering, web development, and information systems.' : 'Mendidik mahasiswa dalam rekayasa perangkat lunak, pengembangan web, dan sistem informasi.'}</p>
          </div>
          <div className="card reveal">
            <div className="ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
            </div>
            <span className="num">02</span>
            <h3>{isEn ? 'Research' : 'Penelitian'}</h3>
            <p>{isEn ? 'Exploring innovative solutions in computer science and educational technology.' : 'Menjelajahi solusi inovatif dalam ilmu komputer dan teknologi pendidikan.'}</p>
          </div>
          <div className="card reveal">
            <div className="ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M8 9l-4 3 4 3"/><path d="M16 9l4 3-4 3"/><path d="M13 6l-2 12"/></svg>
            </div>
            <span className="num">03</span>
            <h3>{isEn ? 'Development' : 'Pengembangan'}</h3>
            <p>{isEn ? 'Building practical applications and tools for academic and industry needs.' : 'Membangun aplikasi dan alat praktis untuk kebutuhan akademik dan industri.'}</p>
          </div>
        </div>
      </Section>

      {/* PENELITIAN */}
      <Section id="riset"
        idx={isEn ? '02 — RESEARCH' : '02 — PENELITIAN'}
        title={isEn ? 'Research & Publications' : 'Penelitian & Publikasi'}
        sub={isEn ? 'Papers in accredited journals and conferences, focused on NLP, machine learning, and software engineering.' : 'Makalah di jurnal dan konferensi terakreditasi, berfokus pada NLP, machine learning, dan rekayasa perangkat lunak.'}
      >
        <div className="pub-layout">
          <Reveal>
            <div className="themes">
              {['Natural Language Processing', 'Machine Learning', 'Deep Learning', 'Text Classification', 'Sentiment Analysis', isEn ? 'Information Systems' : 'Sistem Informasi'].map((t, i) => (
                <span className="chip" key={i}><b>#</b> {t}</span>
              ))}
            </div>
            <div className="pub-list">
              {publications.map((pub, i) => (
                <div className="pub-item reveal" key={i}>
                  <span className="yr">{pub.year}</span>
                  <div>
                    <span className="ttl">{pub.title}</span>
                    <span className="ven">{pub.venue}</span>
                  </div>
                  <span className="typ">{pub.type}</span>
                </div>
              ))}
            </div>
            <p className="note">
              {isEn ? 'Full list & citations available on Google Scholar and SINTA →' : 'Daftar lengkap & sitasi tersedia di Google Scholar dan SINTA →'}
            </p>
          </Reveal>

          <div className="profile-cards reveal">
            <a className="pcard" href="https://scholar.google.com/citations?user=iLr5dMcAAAAJ" target="_blank" rel="noopener">
              <span className="pic">GS</span>
              <div className="pmeta">
                <div className="pname">Google Scholar</div>
                <div className="pdesc">{isEn ? 'Citations, h-index & publications' : 'Sitasi, h-index & publikasi'}</div>
              </div>
              <span className="parr"><ArrowIcon /></span>
            </a>
            <a className="pcard" href="https://sinta.kemdiktisaintek.go.id/authors/profile/6890356" target="_blank" rel="noopener">
              <span className="pic">SI</span>
              <div className="pmeta">
                <div className="pname">SINTA</div>
                <div className="pdesc">{isEn ? 'National researcher profile' : 'Profil peneliti nasional'}</div>
              </div>
              <span className="parr"><ArrowIcon /></span>
            </a>
            <a className="pcard" href="https://www.linkedin.com/in/jihadul-akbar-22553a105/" target="_blank" rel="noopener">
              <span className="pic">in</span>
              <div className="pmeta">
                <div className="pname">LinkedIn</div>
                <div className="pdesc">{isEn ? 'Professional experience' : 'Pengalaman profesional'}</div>
              </div>
              <span className="parr"><ArrowIcon /></span>
            </a>
          </div>
        </div>
      </Section>

      {/* PROYEK */}
      <Section id="proyek" band
        idx={isEn ? '03 — PROJECTS' : '03 — PROYEK'}
        title={isEn ? 'Selected projects' : 'Proyek terpilih'}
        sub={isEn ? 'Practical applications and research built for academic, teaching, and community service.' : 'Aplikasi praktis dan penelitian yang dikembangkan untuk akademik, pengajaran, dan pengabdian masyarakat.'}
      >
        <div className="grid-2">
          {projects.map((proj, i) => (
            <a className="proj reveal" href={proj.href} target="_blank" rel="noopener" key={i}>
              <div className="ptop">
                <span className="ptag">{proj.tagYear}</span>
              </div>
              <h3>{proj.title}</h3>
              <p>{isEn ? proj.descEn : proj.descId}</p>
              <div className="stack">
                {proj.tech.map((t, j) => <span key={j}>· {t}</span>)}
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* BUKU */}
      <Section id="buku"
        idx={isEn ? '04 — BOOKS' : '04 — BUKU'}
        title={isEn ? 'Books & Learning Materials' : 'Buku & Materi Belajar'}
        sub={isEn ? 'Lecture materials, tutorials, and comprehensive guides for CS and IS students.' : 'Materi kuliah, tutorial, dan panduan komprehensif untuk mahasiswa ilmu komputer dan sistem informasi.'}
        seeAll={{
          href: 'https://jihadul4kbar.github.io/docs/intro',
          label: isEn ? 'Open all' : 'Buka semua',
        }}
      >
        <div className="book-layout">
          <a className={clsx('book-cover', 'reveal')} href="https://jihadul4kbar.github.io/docs/category/belajar-web-front-end" target="_blank" rel="noopener">
            <span className="bk-label">{isEn ? 'Learning Series' : 'Seri Belajar'}</span>
            <span className="bk-title">Belajar Web<br />Front-End</span>
            <span className="bk-meta">
              {isEn ? 'Step-by-step guide' : 'Panduan langkah demi langkah'}
              <span className="arr">→</span>
            </span>
          </a>
          <Reveal>
            <div className="toc">
              {[
                {ch: '00', title: isEn ? 'About Me' : 'Tentang Saya', sub: isEn ? 'Introduction & starting point' : 'Pengantar & titik mulai', href: 'https://jihadul4kbar.github.io/docs/intro'},
                {ch: '01', title: isEn ? 'Web Front-End' : 'Belajar Web Front-End', sub: isEn ? 'HTML, CSS, and UI fundamentals' : 'HTML, CSS, dan dasar antarmuka', href: 'https://jihadul4kbar.github.io/docs/category/belajar-web-front-end'},
                {ch: '02', title: isEn ? 'Tutorial — Basics' : 'Tutorial — Dasar', sub: isEn ? 'Fundamental concepts and steps' : 'Konsep dan langkah fundamental', href: 'https://jihadul4kbar.github.io/docs/category/tutorial---basics'},
                {ch: '03', title: isEn ? 'Tutorial — Extras' : 'Tutorial — Lanjutan', sub: isEn ? 'Additional topics and advanced practice' : 'Topik tambahan dan praktik lanjut', href: 'https://jihadul4kbar.github.io/docs/category/tutorial---extras'},
              ].map((item, i) => (
                <a className="toc-item" key={i} href={item.href} target="_blank" rel="noopener">
                  <span className="ch">{item.ch}</span>
                  <span className="nm">{item.title}<small>{item.sub}</small></span>
                  <span className="ar"><ArrowIcon /></span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* BLOG */}
      <Section id="blog" band
        idx={isEn ? '05 — BLOG' : '05 — BLOG'}
        title={isEn ? 'Latest writing' : 'Tulisan terbaru'}
        sub={isEn ? 'Technical notes and tutorials from everyday development and teaching work.' : 'Catatan teknis dan tutorial dari aktivitas pengembangan dan pengajaran sehari-hari.'}
        seeAll={{
          href: 'https://jihadul4kbar.github.io/blog',
          label: isEn ? 'All posts' : 'Semua tulisan',
        }}
      >
        <div className="grid-2">
          <a className={clsx('post', 'reveal')} href="https://jihadul4kbar.github.io/blog/Middleware%20Laravel%2012" target="_blank" rel="noopener">
            <span className="pdate">
              <b>{isEn ? '2 July 2025' : '2 Juli 2025'}</b> · {isEn ? '1 min read' : '1 menit baca'}
            </span>
            <h3>Memahami cara kerja Middleware pada Laravel 12</h3>
            <p>{isEn ? 'Middleware provides a mechanism to inspect and filter incoming HTTP requests — from authentication to redirecting users before a request is processed further.' : 'Middleware menyediakan mekanisme untuk memeriksa dan memfilter permintaan HTTP yang masuk — mulai dari autentikasi hingga pengalihan pengguna sebelum permintaan diproses lebih lanjut.'}</p>
            <div className="tags"><span># Laravel</span><span># Web</span><span># Tutorial</span></div>
            <span className="more">{isEn ? 'Read more' : 'Baca selengkapnya'} →</span>
          </a>

          <a className={clsx('post', 'reveal')} href="https://jihadul4kbar.github.io/blog/Add%20widgets%20monitoring%20port%20on%20Libre%20LMS" target="_blank" rel="noopener">
            <span className="pdate">
              <b>{isEn ? '18 January 2025' : '18 Januari 2025'}</b> · {isEn ? '1 min read' : '1 menit baca'}
            </span>
            <h3>Setup widgets for monitoring port on LibreNMS</h3>
            <p>{isEn ? 'Steps to set up port-monitoring widgets on LibreNMS to track network status directly from the dashboard.' : 'Langkah menyiapkan widget pemantauan port pada LibreNMS untuk memantau status jaringan secara langsung dari dasbor.'}</p>
            <div className="tags"><span># Network</span><span># LibreNMS</span><span># Tutorial</span></div>
            <span className="more">{isEn ? 'Read more' : 'Baca selengkapnya'} →</span>
          </a>
        </div>
      </Section>

      {/* PEMBICARA */}
      <Section id="pembicara"
        idx={isEn ? '06 — TALKS' : '06 — PEMBICARA'}
        title={isEn ? 'Speaking engagements' : 'Kegiatan pembicara'}
        sub={isEn ? 'Workshops, seminars, and guest lectures on technology, AI, and web development.' : 'Workshop, seminar, dan kuliah tamu tentang teknologi, AI, dan pengembangan web.'}
        seeAll={{
          href: '/speaker',
          label: isEn ? 'All talks' : 'Semua kegiatan',
        }}
      >
        <div className="speaker-layout">
          <a className="speaker-cover reveal" href="/speaker">
            <span className="sp-label">{isEn ? 'Speaker Profile' : 'Profil Pembicara'}</span>
            <span className="sp-title">{isEn ? 'Workshops' : 'Workshop'}<br />{isEn ? '& Seminars' : '& Seminar'}</span>
            <span className="sp-meta">
              <b>{talks.length}</b> {isEn ? 'talks · 2025—2026' : 'kegiatan · 2025—2026'}
              <span className="arr">→</span>
            </span>
          </a>
          <Reveal>
            <div className="speaker-toc">
              {talks.map((talk, i) => (
                <a className="toc-item" href={`/speaker#${talk.slug}`} key={i}>
                  <span className="ch">{String(i + 1).padStart(2, '0')}</span>
                  <span className="nm">
                    {isEn ? talk.titleEn : talk.title}
                    <small>{isEn ? talk.dateEn : talk.date} · {talk.tags[0]}</small>
                  </span>
                  <span className="ar"><ArrowIcon /></span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* RIWAYAT */}
      <Section id="riwayat"
        idx={isEn ? '07 — RESUME' : '07 — RIWAYAT'}
        title={isEn ? 'A short timeline' : 'Riwayat singkat'}
        sub={isEn ? 'Academic and professional journey.' : 'Perjalanan akademik dan profesional.'}
      >
        <div className="timeline">
          {timeline.map((item, i) => (
            <Reveal className="tl-item" key={i}>
              <div className="yr">{item.yr}</div>
              <h3>{item.title}</h3>
              <div className="org">{item.org}</div>
              <p>{item.desc}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* KONTAK */}
      <section className="section" id="kontak">
        <div className="wrap">
          <Reveal className="contact-wrap">
            <div>
              <span className="sec-idx">08 — {isEn ? 'CONTACT' : 'KONTAK'}</span>
              <h2 style={{marginTop: 14}}>{isEn ? "Let's connect" : 'Mari terhubung'}</h2>
              <p>{isEn ? 'Open to research collaboration, guest lectures, and mentoring. Find me on the channels below.' : 'Terbuka untuk kolaborasi penelitian, kuliah tamu, dan bimbingan. Temukan saya di kanal berikut.'}</p>
            </div>
            <div className="contact-links">
              <a className="clink" href="mailto:jihadul4kbar@gmail.com">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="17" height="17"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg> Email
              </a>
              <a className="clink" href="mailto:jihadulakbar@stmiklombok.ac.id">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="17" height="17"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg> Email Institusi
              </a>
              <a className="clink" href="https://wa.me/6287864576745" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.762-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg> Whatsapp
              </a>
              <a className="clink" href="https://scholar.google.com/citations?user=iLr5dMcAAAAJ" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17"><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 13.5L5 12.66V14l7 3.82L19 14v-1.34L12 16.5z"/></svg> Google Scholar
              </a>
              <a className="clink" href="https://sinta.kemdiktisaintek.go.id/authors/profile/6890356" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="17" height="17"><path d="M4 19V5M4 19h16M8 16V9M12 16V6M16 16v-4M20 16v-7"/></svg> SINTA
              </a>
              <a className="clink" href="https://www.linkedin.com/in/jihadul-akbar-22553a105/" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.12 1 2.49 1s2.49 1.12 2.49 2.5zM.24 8h4.5v15H.24V8zm7.5 0h4.31v2.05h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.9V23h-4.5v-6.5c0-1.55-.03-3.55-2.16-3.55-2.16 0-2.49 1.69-2.49 3.44V23h-4.5V8z"/></svg> LinkedIn
              </a>
              <a className="clink" href="https://github.com/jihadul4kbar" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17"><path d="M12 .5C5.37.5 0 5.78 0 12.29c0 5.21 3.44 9.63 8.21 11.19.6.11.82-.25.82-.56 0-.28-.01-1.02-.02-2-3.34.71-4.04-1.58-4.04-1.58-.55-1.36-1.34-1.73-1.34-1.73-1.09-.73.08-.72.08-.72 1.2.08 1.84 1.21 1.84 1.21 1.07 1.8 2.81 1.28 3.5.98.11-.76.42-1.28.76-1.57-2.67-.3-5.47-1.31-5.47-5.81 0-1.28.47-2.33 1.23-3.15-.12-.3-.53-1.51.12-3.15 0 0 1.01-.32 3.3 1.2.96-.26 1.98-.39 3-.4 1.02.01 2.05.14 3.01.4 2.28-1.52 3.29-1.2 3.29-1.2.65 1.64.24 2.85.12 3.15.77.82 1.23 1.87 1.23 3.15 0 4.51-2.81 5.5-5.49 5.79.43.36.81 1.09.81 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.83.56C20.57 21.91 24 17.5 24 12.29 24 5.78 18.63.5 12 .5z"/></svg> GitHub
              </a>
              <a className="clink" href="https://x.com/Jihadul4kbar" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> X (Twitter)
              </a>
              <a className="clink" href="https://www.facebook.com/people/Jihadul-Akbar/pfbid02pSVhvKmsYz1DyFdyRJ6Gqr4whgtd9PgbbyBdjhnm5Q66Pd5g2CpCAmfBzKDCc5Jvl/" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z"/></svg> Facebook
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}

import {useEffect} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

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

  return (
    <div style={{position:'relative',zIndex:1}}>
      {/* HERO / HEADER */}
      <header className="hero" style={{minHeight:'auto', paddingTop:'140px', paddingBottom:'60px'}}>
        <div className="hero-text" style={{maxWidth:'720px'}}>
          <div className="kicker reveal">
            {isEn ? 'Resume · STMIK Lombok' : 'Riwayat · STMIK Lombok'}
          </div>
          <h1 className="name reveal" style={{fontSize:'clamp(36px,5vw,64px)'}}>
            <span className="l1">Jihadul</span> <span className="l2">Akbar</span>
          </h1>
          <div className="role reveal">
            {isEn ? '> S.Kom., M.Kom. · Lecturer · Researcher' : '> S.Kom., M.Kom. · Dosen · Peneliti'}
          </div>
          <p className="lead reveal">
            {isEn
              ? 'Academic resume — education, research experience, publications, and professional journey in computer science.'
              : 'Riwayat akademik — pendidikan, pengalaman penelitian, publikasi, dan perjalanan profesional di ilmu komputer.'}
          </p>
          <div className="cta-row reveal">
            <a className="btn btn-primary" href="#pendidikan">
              {isEn ? 'View Education' : 'Lihat Pendidikan'}
              <span className="arr">→</span>
            </a>
            <a className="btn btn-ghost" href="#kontak">
              {isEn ? 'Get in Touch' : 'Hubungi Saya'}
            </a>
          </div>
          <div className="socials reveal">
            <a href="mailto:jihadul4kbar@gmail.com">Email</a>
            <a href="https://wa.me/6287864576745" target="_blank" rel="noopener">WhatsApp</a>
            <a href="https://scholar.google.com/citations?user=iLr5dMcAAAAJ" target="_blank" rel="noopener">Google Scholar</a>
            <a href="https://sinta.kemdiktisaintek.go.id/authors/profile/6890356" target="_blank" rel="noopener">SINTA</a>
            <a href="https://www.linkedin.com/in/jihadul-akbar-22553a105/" target="_blank" rel="noopener">LinkedIn</a>
          </div>
        </div>
      </header>

      <div className="divider"></div>

      {/* PENDIDIKAN */}
      <section id="pendidikan">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="sec-idx">01 — {isEn ? 'EDUCATION' : 'PENDIDIKAN'}</span>
            <div>
              <h2>{isEn ? 'Academic Background' : 'Latar Belakang Akademik'}</h2>
              <p className="sec-sub">{isEn ? 'Formal education from vocational school to master\'s degree.' : 'Pendidikan formal dari SMK hingga magister.'}</p>
            </div>
          </div>
          <div className="timeline">
            <div className="tl-item reveal">
              <div className="yr">2020 — 2024</div>
              <h3>{isEn ? 'Master of Informatics Engineering' : 'Magister Teknik Informatika'}</h3>
              <div className="org">Universitas Amikom Yogyakarta</div>
              <p>{isEn ? 'Business Intelligence concentration. GPA 3.89/4.00.' : 'Konsentrasi Business Intelligence. IPK 3.89/4.00.'}</p>
              <div style={{marginTop:'10px', padding:'12px 14px', background:'var(--bg-3)', border:'1px solid var(--line-soft)', borderRadius:'10px', borderLeft:'3px solid var(--accent)'}}>
                <span style={{fontFamily:'var(--ifm-font-family-monospace)', fontSize:'11px', color:'var(--accent)', textTransform:'uppercase', letterSpacing:'.08em'}}>Thesis</span>
                <p style={{fontSize:'14px', color:'var(--muted)', margin:'4px 0 0', fontStyle:'italic', lineHeight:1.5}}>
                  {isEn ? 'Multi Label Film Genre Classification Based On Synopsis Using Long Short-Term Memory (LSTM) Method' : 'Multi Label Klasifikasi Genre Film Berdasarkan Sinopsis Menggunakan Metode Long Short-Term Memory (LSTM)'}
                </p>
              </div>
            </div>
            <div className="tl-item reveal">
              <div className="yr">2010 — 2015</div>
              <h3>{isEn ? 'Bachelor of Informatics Engineering' : 'Sarjana Teknik Informatika'}</h3>
              <div className="org">STMIK Lombok</div>
              <p>{isEn ? 'Software Engineering concentration. GPA 3.52/4.00.' : 'Konsentrasi Rekayasa Perangkat Lunak. IPK 3.52/4.00.'}</p>
              <div style={{marginTop:'10px', padding:'12px 14px', background:'var(--bg-3)', border:'1px solid var(--line-soft)', borderRadius:'10px', borderLeft:'3px solid var(--accent)'}}>
                <span style={{fontFamily:'var(--ifm-font-family-monospace)', fontSize:'11px', color:'var(--accent)', textTransform:'uppercase', letterSpacing:'.08em'}}>Thesis</span>
                <p style={{fontSize:'14px', color:'var(--muted)', margin:'4px 0 0', fontStyle:'italic', lineHeight:1.5}}>
                  {isEn ? 'Web-Based Medical Record Information System at the Risa Rafana Clinic Using Extreme Programming Methodology' : 'Sistem Informasi Rekam Medis Berbasis Web pada Klinik Risa Rafana Menggunakan Metodologi Extreme Programming'}
                </p>
              </div>
            </div>
            <div className="tl-item reveal">
              <div className="yr">2007 — 2010</div>
              <h3>{isEn ? 'Vocational High School — Software Engineering' : 'SMK — Rekayasa Perangkat Lunak'}</h3>
              <div className="org">SMKN 2 Praya Tengah</div>
              <p>{isEn ? 'Software Engineering major with focus on web development and database systems.' : 'Jurusan Rekayasa Perangkat Lunak dengan fokus pada pengembangan web dan sistem basis data.'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* PENGALAMAN */}
      <section id="pengalaman" className="band">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="sec-idx">02 — {isEn ? 'EXPERIENCE' : 'PENGALAMAN'}</span>
            <div>
              <h2>{isEn ? 'Work & Research' : 'Kerja & Penelitian'}</h2>
              <p className="sec-sub">{isEn ? 'Professional and research experience in academia and industry.' : 'Pengalaman profesional dan penelitian di dunia akademik dan industri.'}</p>
            </div>
          </div>
          <div className="timeline">
            <div className="tl-item reveal">
              <div className="yr">{isEn ? '2015 — Present' : '2015 — Sekarang'}</div>
              <h3>{isEn ? 'Lecturer — Computer Science' : 'Dosen — Ilmu Komputer'}</h3>
              <div className="org">STMIK Lombok</div>
              <p>{isEn ? 'Teaching software engineering, web development, and information systems. Supervising student thesis projects and developing curriculum for undergraduate programs.' : 'Mengajar rekayasa perangkat lunak, pengembangan web, dan sistem informasi. Membimbing skripsi mahasiswa dan mengembangkan kurikulum program sarjana.'}</p>
            </div>
            <div className="tl-item reveal">
              <div className="yr">2020 — 2024</div>
              <h3>{isEn ? 'Research Assistant — Business Intelligence Lab' : 'Research Assistant — Business Intelligence Lab'}</h3>
              <div className="org">Universitas Amikom Yogyakarta</div>
              <p>{isEn ? 'Conducted research on Natural Language Processing and Machine Learning. Published papers on text classification, topic modeling, and sentiment analysis in accredited journals and international conferences.' : 'Melakukan penelitian di bidang Natural Language Processing dan Machine Learning. Menerbitkan paper tentang text classification, topic modeling, dan sentiment analysis di jurnal terakreditasi dan konferensi internasional.'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* PENGAJARAN */}
      <section id="pengajaran">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="sec-idx">03 — {isEn ? 'TEACHING' : 'PENGAJARAN'}</span>
            <div>
              <h2>{isEn ? 'Teaching & Courses' : 'Pengajaran & Mata Kuliah'}</h2>
              <p className="sec-sub">{isEn ? 'Courses taught and educational philosophy.' : 'Mata kuliah yang diampu dan filosofi pengajaran.'}</p>
            </div>
          </div>
          <div className="grid-2">
            <div className="card reveal" style={{padding:'28px'}}>
              <span className="num">{isEn ? 'Courses' : 'Mata Kuliah'}</span>
              <h3 style={{margin:'14px 0 12px'}}>{isEn ? 'Undergraduate Courses' : 'Mata Kuliah S1'}</h3>
              <div className="themes" style={{marginBottom:0}}>
                {['Web Programming','Software Engineering','Database Systems','Data Structures & Algorithms','Artificial Intelligence','Information Systems','Machine Learning Basics','Natural Language Processing'].map((c,i) => (
                  <span key={i} className="chip">{c}</span>
                ))}
              </div>
            </div>
            <div className="card reveal" style={{padding:'28px', borderLeft:'4px solid var(--accent)'}}>
              <span className="num">{isEn ? 'Philosophy' : 'Filosofi'}</span>
              <h3 style={{margin:'14px 0 12px'}}>{isEn ? 'Teaching Philosophy' : 'Filosofi Mengajar'}</h3>
              <p>{isEn
                ? 'Combining theoretical foundations with practical applications to prepare students for real-world industry challenges. Emphasizing project-based learning and research-oriented thinking.'
                : 'Menggabungkan fondasi teoretis dengan aplikasi praktis untuk mempersiapkan mahasiswa menghadapi tantangan industri. Menekankan project-based learning dan pemikiran berorientasi riset.'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* PUBLIKASI */}
      <section id="publikasi" className="band">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="sec-idx">04 — {isEn ? 'PUBLICATIONS' : 'PUBLIKASI'}</span>
            <div>
              <h2>{isEn ? 'Selected Publications' : 'Publikasi Terpilih'}</h2>
              <p className="sec-sub">{isEn ? 'Papers in accredited journals and conferences, focused on NLP, ML, and software engineering.' : 'Paper di jurnal dan konferensi terakreditasi, berfokus pada NLP, ML, dan rekayasa perangkat lunak.'}</p>
            </div>
          </div>
          <div className="pub-layout">
            <div className="reveal">
              <div className="pub-list">
                <div className="pub-item">
                  <span className="yr">2025</span>
                  <div>
                    <span className="ttl">Multi Label Klasifikasi Genre Film Berdasarkan Sinopsis Menggunakan Metode LSTM</span>
                    <span className="ven">Akbar, J., Fahmi, H., Murniati, W. · Jurnal Manajemen Informatika dan Sistem Informasi, 8(1), 110–119</span>
                  </div>
                  <span className="typ">{isEn ? 'Journal' : 'Jurnal'}</span>
                </div>
                <div className="pub-item">
                  <span className="yr">2023</span>
                  <div>
                    <span className="ttl">Pemodelan Topik Menggunakan LDA pada Ulasan Aplikasi PeduliLindungi</span>
                    <span className="ven">Akbar, J., et al. · InComTech: Jurnal Telekomunikasi dan Komputer, 13, 40–50</span>
                  </div>
                  <span className="typ">{isEn ? 'Journal' : 'Jurnal'}</span>
                </div>
                <div className="pub-item">
                  <span className="yr">2023</span>
                  <div>
                    <span className="ttl">Perancangan SIMA pada Stasiun Meteorologi Zainuddin Abdul Madjid</span>
                    <span className="ven">Lestari, A., Akbar, J., Istyarini, H.H. · Jurnal Ilmiah Sistem Informasi dan Ilmu Komputer, 3(1), 60–76</span>
                  </div>
                  <span className="typ">{isEn ? 'Journal' : 'Jurnal'}</span>
                </div>
                <div className="pub-item">
                  <span className="yr">2022</span>
                  <div>
                    <span className="ttl">Multi-label Classification of Film Genres Based on Synopsis Using SVM, Logistic Regression and Naïve Bayes</span>
                    <span className="ven">Akbar, J., Utami, E., Yaqin, A. · 6th ICITISEE, IEEE</span>
                  </div>
                  <span className="typ">{isEn ? 'Conference' : 'Konferensi'}</span>
                </div>
                <div className="pub-item">
                  <span className="yr">2021</span>
                  <div>
                    <span className="ttl">Sistem Informasi Rekam Medis Berbasis Web pada Klinik Risa Rafana</span>
                    <span className="ven">Akbar, J., Yaqin, A. · Infotek: Jurnal Informatika dan Teknologi, 4(2), 270–279</span>
                  </div>
                  <span className="typ">{isEn ? 'Journal' : 'Jurnal'}</span>
                </div>
              </div>
              <p className="note">{isEn ? 'Full list & citations available on Google Scholar and SINTA →' : 'Daftar lengkap & sitasi tersedia di Google Scholar dan SINTA →'}</p>
            </div>
            <div className="profile-cards reveal">
              <a className="pcard" href="https://scholar.google.com/citations?user=iLr5dMcAAAAJ" target="_blank" rel="noopener">
                <span className="pic">GS</span>
                <div className="pmeta">
                  <div className="pname">Google Scholar</div>
                  <div className="pdesc">{isEn ? 'Citations, h-index & publications' : 'Sitasi, h-index & publikasi'}</div>
                </div>
                <span className="parr"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></span>
              </a>
              <a className="pcard" href="https://sinta.kemdiktisaintek.go.id/authors/profile/6890356" target="_blank" rel="noopener">
                <span className="pic">SI</span>
                <div className="pmeta">
                  <div className="pname">SINTA</div>
                  <div className="pdesc">{isEn ? 'National researcher profile' : 'Profil peneliti nasional'}</div>
                </div>
                <span className="parr"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></span>
              </a>
              <a className="pcard" href="https://www.linkedin.com/in/jihadul-akbar-22553a105/" target="_blank" rel="noopener">
                <span className="pic">in</span>
                <div className="pmeta">
                  <div className="pname">LinkedIn</div>
                  <div className="pdesc">{isEn ? 'Professional experience' : 'Pengalaman profesional'}</div>
                </div>
                <span className="parr"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* KONFERENSI */}
      <section id="konferensi">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="sec-idx">05 — {isEn ? 'CONFERENCES' : 'KONFERENSI'}</span>
            <div>
              <h2>{isEn ? 'Presentations & Conferences' : 'Presentasi & Konferensi'}</h2>
              <p className="sec-sub">{isEn ? 'Speaking engagements and research collaborations.' : 'Kegiatan pembicaraan dan kolaborasi riset.'}</p>
            </div>
          </div>
          <div className="grid-2">
            <div className="card reveal" style={{padding:'28px'}}>
              <span className="num">{isEn ? 'International' : 'Internasional'}</span>
              <h3 style={{margin:'14px 0 12px'}}>ICITISEE 2022</h3>
              <p>{isEn ? '6th International Conference on Information Technology, Information Systems and Electrical Engineering — Presented paper on multi-label film genre classification using SVM, Logistic Regression and Naïve Bayes.' : '6th International Conference on Information Technology, Information Systems and Electrical Engineering — Mem presentasikan paper tentang klasifikasi genre film multi-label menggunakan SVM, Logistic Regression dan Naïve Bayes.'}</p>
            </div>
            <div className="card reveal" style={{padding:'28px'}}>
              <span className="num">{isEn ? 'National' : 'Nasional'}</span>
              <h3 style={{margin:'14px 0 12px'}}>SNTIM & KNIT</h3>
              <p>{isEn ? 'Seminar Nasional Teknologi Informasi dan Multimedia (SNTIM) and Konferensi Nasional Ilmu Komputer dan Teknologi Informasi — Multiple years of participation and paper presentations.' : 'Seminar Nasional Teknologi Informasi dan Multimedia (SNTIM) dan Konferensi Nasional Ilmu Komputer dan Teknologi Informasi — Partisipasi dan presentasi paper di berbagai tahun.'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* KEAHLIAN */}
      <section id="keahlian" className="band">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="sec-idx">06 — {isEn ? 'SKILLS' : 'KEAHLIAN'}</span>
            <div>
              <h2>{isEn ? 'Technical Skills & Tools' : 'Keahlian Teknis & Tools'}</h2>
              <p className="sec-sub">{isEn ? 'Technologies and methodologies used in research and development.' : 'Teknologi dan metodologi yang digunakan dalam riset dan pengembangan.'}</p>
            </div>
          </div>
          <div className="reveal">
            <div className="themes" style={{marginBottom:0}}>
              {['Python','TensorFlow','Scikit-learn','NLP','LSTM','SVM','LDA','PHP','Laravel','MySQL','JavaScript','HTML/CSS','Git','LibreNMS','Machine Learning','Deep Learning','Sentiment Analysis','Topic Modeling','Software Engineering','Web Development'].map((s,i) => (
                <span key={i} className="chip"><b>#</b> {s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* KONTAK / CTA */}
      <section id="kontak">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="sec-idx">07 — {isEn ? 'CONTACT' : 'KONTAK'}</span>
            <div>
              <h2>{isEn ? "Let's connect" : 'Mari terhubung'}</h2>
              <p className="sec-sub">{isEn ? 'Open to research collaboration, guest lectures, and mentoring.' : 'Terbuka untuk kolaborasi penelitian, kuliah tamu, dan bimbingan.'}</p>
            </div>
          </div>
          <div className="contact-wrap reveal">
            <div>
              <h2 style={{marginTop:14}}>{isEn ? 'Get in Touch' : 'Hubungi Saya'}</h2>
              <p>{isEn ? 'Interested in collaborating or have a question? Feel free to reach out via email or WhatsApp.' : 'Tertarik berkolaborasi atau punya pertanyaan? Jangan ragu untuk menghubungi via email atau WhatsApp.'}</p>
            </div>
            <div className="contact-links">
              <a className="clink" href="mailto:jihadul4kbar@gmail.com">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="17" height="17"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg> Email
              </a>
              <a className="clink" href="mailto:jihadulakbar@stmiklombok.ac.id">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="17" height="17"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg> Email Institusi
              </a>
              <a className="clink" href="https://wa.me/6287864576745" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.762-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg> WhatsApp
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

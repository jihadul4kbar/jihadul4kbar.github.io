import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { talks } from '../../data/talks';
import styles from './styles.module.css';

export default function SpeakerPage() {
  const { i18n } = useDocusaurusContext();
  const isEn = i18n.currentLocale === 'en';

  return (
    <div className={styles.speakerPage}>
      <div className={styles.wrap}>
        <header className={styles.header}>
          <span className={styles.kicker}>
            {isEn ? 'TALKS & WORKSHOPS' : 'PEMBICARA & WORKSHOP'}
          </span>
          <h1>{isEn ? 'Speaking Engagements' : 'Kegiatan Pembicara'}</h1>
          <p>
            {isEn
              ? 'A collection of workshops, seminars, and guest lectures I have delivered on technology, AI, and web development.'
              : 'Kumpulan workshop, seminar, dan kuliah tamu yang saya sampaikan tentang teknologi, AI, dan pengembangan web.'}
          </p>
        </header>

        <div className={styles.talks}>
          {talks.map((talk) => (
            <article className={styles.talkCard} key={talk.slug} id={talk.slug}>
              <div className={styles.talkMeta}>
                <span className={styles.talkDate}>
                  {isEn ? talk.dateEn : talk.date}
                </span>
                <div className={styles.talkTags}>
                  {talk.tags.map((t) => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>
              </div>

              <h2 className={styles.talkTitle}>
                {isEn ? talk.titleEn : talk.title}
              </h2>

              <p className={styles.talkDesc}>
                {isEn ? talk.descEn : talk.desc}
              </p>

              {/* Media placeholder */}
              <div className={styles.mediaWrap}>
                {talk.videoUrl ? (
                  <div className={styles.videoEmbed}>
                    <iframe
                      src={talk.videoUrl}
                      title={isEn ? talk.titleEn : talk.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className={styles.mediaPlaceholder}>
                    <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="2" y="2" width="20" height="20" rx="2.5" />
                      <path d="M10 8l6 4-6 4V8z" />
                    </svg>
                    <span>
                      {isEn ? 'Video recording will be added here.' : 'Rekaman video akan ditambahkan di sini.'}
                    </span>
                  </div>
                )}
              </div>

              {/* Materials */}
              <div className={styles.materials}>
                <h3>{isEn ? 'Materials' : 'Materi'}</h3>
                <div className={styles.materialList}>
                  {talk.materials.map((mat, i) => (
                    <a
                      key={i}
                      href={mat.url}
                      className={styles.materialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                        <polyline points="10 9 9 9 8 9" />
                      </svg>
                      {isEn ? mat.labelEn : mat.label}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

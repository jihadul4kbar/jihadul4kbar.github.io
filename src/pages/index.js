import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import DocusaurusImageUrl from '@site/static/img/jihadulakbar.png';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faGlobe, faBook, faX, faGraduationCap, faFlask, faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(fab, faCheckSquare, faCoffee, faGlobe, faBook, faX, faGraduationCap, faFlask, faCode);
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
            <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
            <p className={styles.heroDescription}>
              Passionate about computer science education, software engineering, and innovative research. 
              Dedicated to shaping the next generation of tech professionals at STMIK Lombok.
            </p>
            <div className={styles.ctaButtons}>
              <Link className={clsx('button button--primary button--lg', styles.ctaButton)} to="/resume">
                View Resume
              </Link>
              <Link className={clsx('button button--outline button--lg', styles.ctaButtonOutline)} to="/project">
                See Projects
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.imageWrapper}>
              <img src={DocusaurusImageUrl} alt="Jihadul Akbar" className={styles.profileImage}/>
            </div>
          </div>
        </div>
        <div className={styles.socialLinks}>
          <Link className={styles.socialIcon} to="https://scholar.google.com/citations?user=iLr5dMcAAAAJ" title="Google Scholar">
            <FontAwesomeIcon icon={faGlobe} />
          </Link>
          <Link className={styles.socialIcon} to="https://sinta.kemdikbud.go.id/authors/profile/6890356" title="Sinta">
            <FontAwesomeIcon icon={faBook} />
          </Link>
          <Link className={styles.socialIcon} to="https://www.facebook.com/people/Jihadul-Akbar/pfbid02pSVhvKmsYz1DyFdyRJ6Gqr4whgtd9PgbbyBdjhnm5Q66Pd5g2CpCAmfBzKDCc5Jvl/" title="Facebook">
            <FontAwesomeIcon icon={['fab', 'facebook']} />
          </Link>
          <Link className={styles.socialIcon} to="https://x.com/Jihadul4kbar" title="X (Twitter)">
            <FontAwesomeIcon icon={faX} />
          </Link>
          <Link className={styles.socialIcon} to="https://www.linkedin.com/in/jihadul-akbar-22553a105/" title="LinkedIn">
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
          </Link>
        </div>
      </div>
    </header>
  );
}

function FeatureHighlight() {
  const features = [
    {
      icon: faGraduationCap,
      title: 'Teaching',
      description: 'Educating students in software engineering, web development, and information systems.'
    },
    {
      icon: faFlask,
      title: 'Research',
      description: 'Exploring innovative solutions in computer science and educational technology.'
    },
    {
      icon: faCode,
      title: 'Development',
      description: 'Building practical applications and tools for academic and industry needs.'
    }
  ];

  return (
    <section className={styles.featureHighlight}>
      <div className="container">
        <div className={styles.featureGrid}>
          {features.map((feature, idx) => (
            <div key={idx} className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FontAwesomeIcon icon={feature.icon} size="2x" />
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <FeatureHighlight />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

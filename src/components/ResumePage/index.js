import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FeatureList = [
  {
    title: 'Education',
    ikon: 'fa-solid fa-graduation-cap',
    description: (
      <>
      <b>Universitas Amikom Yogyakarta</b><br></br>
        Master's degree, Informatics Engineering ~ Business Intelligence (BI) 2020-2024 <br></br>
        <b>Thesis </b>: <i>Muliti Label Film Genre Classification Based On Synopsis Using Long Short-Term Memory (LSTM) Method </i>
        <br></br>
        <br></br>
        <b>STMIK Lombok </b><br></br>
        Bachelor degree, Informatics Engineering ~ Software Engineering 2010-2015 <br></br>
        <b>Undergraduate Thesis</b> : <i>Web-Based Medical Record Information System at the Risa Rafana Clinic Using Extreme Programming Methodology</i>
        <br></br>
        <br></br>
        <b> SMKN 2 Praya Tengah </b><br></br>
        Vocational High School - Software Engineering 2007-2010
      </>
    ),
  },
  {
    title: 'Research Experience',
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Work Experience',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Teaching Experience',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Publications',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Conference Presentations',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  }
];

function Feature({icon, title, description}) {
  return (
    <div className={clsx('col col--12')}>
      <div className="text--left padding-horiz--md">
      <FontAwesomeIcon icon={icon} />
        <Heading as="h2">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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

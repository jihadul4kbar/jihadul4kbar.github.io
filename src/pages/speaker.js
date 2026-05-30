import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import SpeakerPage from '@site/src/components/SpeakerPage';

export default function Speaker() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Pembicara — Jihadul Akbar"
      description="Kegiatan pembicara, workshop, dan seminar oleh Jihadul Akbar."
    >
      <SpeakerPage />
    </Layout>
  );
}

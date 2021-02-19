import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Move Smart Contract',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Neatcoin brings Move, the smart contract language from Libra, into Substrate.
        We adopted the language as variant called Outmove.
      </>
    ),
  },
  {
    title: 'Mimblewimble and PoS',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        We want to explore how privacy transactions can properly interact with a Proof of Stake system.
        This module is still currently work-in-progress.
      </>
    ),
  },
  {
    title: 'Nomo DNS',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Neatcoin also plans to implement a decentralized DNS replacement, called Nomo. We want to explore if and how an
        on-chain governance system will impact the design of the system, and how we can better design a fairer TLD auction.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="A dedicated blockchain for experimenting things. <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;

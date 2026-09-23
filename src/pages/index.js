import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>

          <img
            src="/img/logo.svg"
            alt="TruckersHub"
            className={styles.heroLogo}
          />

          <Heading as="h1" className={styles.heroTitle}>
            Developer Documentation
          </Heading>

          <p className={styles.heroSubtitle}>
            Build powerful applications and integrations with TruckersHub.
          </p>

          <p className={styles.heroDescription}>
            Access TruckersHub APIs, real-time Gateway data, Webhooks,
            Discord integrations and structured data objects.
          </p>

          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="/api"
            >
              Get Started with the API
            </Link>

            <Link
              className={clsx(
                'button',
                'button--secondary',
                'button--lg',
                styles.secondaryButton
              )}
              to="/gateway"
            >
              Explore Gateway
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}

const DocumentationList = [
  {
    title: 'Getting Started',
    description:
      'New to the TruckersHub Developer Platform? Start here to learn authentication, API requests and the basics.',
    button: 'Get Started',
    link: '/api/getting-started/authentication',
    icon: '→',
  },
  {
    title: 'API',
    description:
      'Access TruckersHub data and build applications using our REST API. Manage drivers, jobs, routes, statistics, events and more.',
    button: 'Browse API Reference',
    link: '/api',
    icon: '⌘',
  },
  {
    title: 'Gateway',
    description:
      'Connect to the TruckersHub real-time Gateway and receive live player data, events and other supported real-time information.',
    button: 'Explore Gateway',
    link: '/gateway',
    icon: '◈',
  },
  {
    title: 'Webhooks',
    description:
      'Receive TruckersHub events directly on your application and build automated workflows around your VTC.',
    button: 'Explore Webhooks',
    link: '/webhooks',
    icon: '⚡',
  },
  {
    title: 'Discord',
    description:
      'Integrate TruckersHub with Discord and provide your community with rich presence and Discord-based integrations.',
    button: 'Explore Discord',
    link: '/discord',
    icon: '◉',
  },
  {
    title: 'Type Definitions',
    description:
      'Reference the data structures used across TruckersHub APIs, Gateway events, Webhooks and integrations.',
    button: 'Browse Type Definitions',
    link: '/typedefs',
    icon: '{}',
  },
];

function DocumentationCard({title, description, button, link, icon}) {
  return (
    <div className={styles.card}>
      <div className={styles.cardIcon}>
        {icon}
      </div>

      <Heading as="h2" className={styles.cardTitle}>
        {title}
      </Heading>

      <p className={styles.cardDescription}>
        {description}
      </p>

      <Link
        className={clsx(
          'button',
          'button--primary',
          styles.cardButton
        )}
        to={link}
      >
        {button}
      </Link>
    </div>
  );
}

function DocumentationSection() {
  return (
    <section className={styles.documentation}>
      <div className="container">

        <div className={styles.sectionHeader}>
          <Heading as="h2">
            Developer Resources
          </Heading>

          <p>
            Everything you need to build with TruckersHub.
          </p>
        </div>

        <div className={styles.cardGrid}>
          {DocumentationList.map((item) => (
            <DocumentationCard
              key={item.title}
              {...item}
            />
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
      title="Developer Documentation"
      description="TruckersHub Developer Documentation"
    >
      <HomepageHeader />

      <main>
        <DocumentationSection />
      </main>
    </Layout>
  );
}
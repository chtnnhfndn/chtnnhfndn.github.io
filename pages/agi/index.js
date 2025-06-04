import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';

export default function Agi() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AGI - chtnnh foundation</title>
        <meta name="description" content="artificial general intelligence - chtnnh foundation" />
        <link rel="icon" href="../public/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <Link href="/" passHref className={styles.navbarLogo}>
          <Image src='/logo.png' height="100%" width="100%" className={styles.logo} alt='chtnnh foundation logo'></Image>
        </Link>
        <div className={styles.navbar}>
          <Link href="/docs/philosophy">Philosophy</Link>
          <Link href='/blockchain'>Blockchain</Link>
          <Link href='/quantum'>Quantum Computing</Link>
          <Link href='/bci'>BCI</Link>
          <Link href='/agi'>AGI</Link>
        </div>
        <div className={styles.joinUsNavbar}>
          <Link href='https://cg018ltu1vj.typeform.com/to/CNCsLOyz'>Join Us!</Link>
        </div>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Artifical General Intelligence
        </h1>
        <div className={styles.description}>
          <blockquote>
            <p><em>The question is not whether machines can think, but whether humans can think about machines that think.</em></p>
          </blockquote>
          <hr />
          <p>What does it mean to be intelligent? As we stand on the threshold of creating minds that may one day surpass our own, we confront the most profound question in human history: What happens when we are no longer the most intelligent beings on Earth?</p>
          <p>Artificial General Intelligence represents humanity&apos;s attempt to recreate the spark of consciousness in silicon and code. Unlike narrow AI systems that excel at specific tasks, AGI promises the flexibility, creativity, and general problem-solving capabilities that define human intelligence—and potentially much more.</p>
          <p>From accelerating scientific discovery and solving existential challenges like climate change and disease, to potentially ushering in an era of unprecedented prosperity and human flourishing, AGI could <strong>represent the most transformative technology in human history.</strong></p>
          <p>Yet this immense potential comes with equally immense responsibility. How do we ensure that artificial minds aligned with human values? How do we maintain human agency in a world where artificial intelligence may surpass us in every cognitive domain? How do we navigate the transition to a post-human world while preserving what makes us fundamentally human?</p>
          <h1 id="the-chtnnh-foundation-and-agi">The chtnnh foundation and AGI</h1>
          <p>The foundation&apos;s work in artificial general intelligence focuses on ensuring AGI development remains aligned with human values, democratizing access to AI capabilities, and fostering collaborative research that prioritizes safety and beneficial outcomes. We believe that the path to AGI must be walked together, with transparency, caution, and unwavering commitment to human flourishing.</p>
          <p>Like all things at the foundation, this document is a work in progress and will be refined with input from the community. Would you want to <a href="https://github.com/chtnnhfndn/chtnnhfoundation.org">contribute</a>?</p>
        </div>
      </main>

      <footer className={styles.footer}>
        <Link href="https://cg018ltu1vj.typeform.com/to/CNCsLOyz">Do you want to help build this future? Join us!</Link>
      </footer>
    </div>
  );
}

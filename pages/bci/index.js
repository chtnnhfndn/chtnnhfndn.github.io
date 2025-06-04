import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';

export default function Bci() {
  return (
    <div className={styles.container}>
      <Head>
        <title>BCI - chtnnh foundation</title>
        <meta name="description" content="brain computer interfaces - chtnnh foundation" />
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
          Brain Computer Interfaces
        </h1>
        <div className={styles.description}>
          <blockquote>
            <p><em>The brain is the most complex object in the known universe. What happens when we finally learn to speak its language?</em></p>
          </blockquote>
          <hr />
          <p>What defines the boundary between mind and machine? Is it the skull that houses our thoughts, or something more fundamental? As we stand at the precipice of directly interfacing human consciousness with digital systems, we confront questions that challenge the very essence of what it means to be human.</p>
          <p>Brain-computer interfaces represent humanity&apos;s most intimate technological frontier. Unlike any other innovation, BCIs don&apos;t just extend our capabilities—they fundamentally blur the line between biological intelligence and artificial systems.</p>
          <p>From restoring sight to the blind and movement to the paralyzed, to potentially enabling direct thought-to-thought communication and seamless integration with AI systems, BCIs promise to <strong>redefine human potential itself.</strong></p>
          <p>Yet with this unprecedented power comes unprecedented responsibility. How do we ensure that enhancing human cognition doesn&apos;t compromise human autonomy? How do we democratize access to cognitive enhancement while preserving the diversity of human experience?</p>
          <h1 id="the-chtnnh-foundation-and-bci">The chtnnh foundation and BCI</h1>
          <p>The foundation&apos;s work in brain-computer interfaces focuses on ethical development of neural technologies, ensuring equitable access to cognitive enhancement, and pioneering research that preserves human agency while expanding human potential. We believe that the future of BCIs must be built with people, not for them.</p>
          <p>Like all things at the foundation, this document is a work in progress and will be refined with input from the community. Would you want to <a href="https://github.com/chtnnhfndn/chtnnhfoundation.org">contribute</a>?</p>
        </div>
      </main>

      <footer className={styles.footer}>
        <Link href="https://cg018ltu1vj.typeform.com/to/CNCsLOyz">Do you want to help build this future? Join us!</Link>
      </footer>
    </div>
  );
}

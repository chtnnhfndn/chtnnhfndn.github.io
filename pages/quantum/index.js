import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';

export default function Quantum() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Quantum Computing - chtnnh foundation</title>
        <meta name="description" content="quantum computing - chtnnh foundation" />
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
          Quantum Computing
        </h1>
        <div className={styles.description}>
          <blockquote>
            <p><em>God does not play dice with the universe. But maybe the universe plays dice with itself.</em></p>
          </blockquote>
          <hr />
          <p>What if the fundamental nature of reality itself could be harnessed to solve humanity&apos;s greatest challenges? What if the strange, counterintuitive properties of quantum mechanics—superposition, entanglement, interference—weren&apos;t just curiosities of physics, but the keys to unlocking computational power beyond our wildest dreams?</p>
          <p>Quantum computing represents a paradigm shift as profound as the transition from analog to digital. Where classical computers process information in binary states, quantum computers harness the probabilistic nature of quantum mechanics to explore multiple computational paths simultaneously.</p>
          <p>From revolutionizing drug discovery and materials science to breaking current cryptographic systems and potentially solving climate modeling at unprecedented scales, quantum computing promises to <strong>transform how we understand and interact with complex systems.</strong></p>
          <p>Yet this power comes with profound implications. How do we prepare for a world where current security models become obsolete overnight? How do we ensure that quantum supremacy serves humanity rather than concentrating power in the hands of a few?</p>
          <h1 id="the-chtnnh-foundation-and-quantum">The chtnnh foundation and quantum computing</h1>
          <p>The foundation&apos;s work in quantum computing focuses on democratizing access to quantum technologies, developing quantum-safe security protocols, and ensuring that the quantum revolution benefits all of humanity. We believe that the future of quantum computing must be built through open collaboration and shared knowledge.</p>
          <p>Like all things at the foundation, this document is a work in progress and will be refined with input from the community. Would you want to <a href="https://github.com/chtnnhfndn/chtnnhfoundation.org">contribute</a>?</p>
        </div>
      </main>

      <footer className={styles.footer}>
        <Link href="https://cg018ltu1vj.typeform.com/to/CNCsLOyz">Do you want to help build this future? Join us!</Link>
      </footer>
    </div>
  );
}

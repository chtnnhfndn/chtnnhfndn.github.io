import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default function Blockchain() {
    return (
        <div className={styles.container}>
          <Head>
            <title>Blockchain - chtnnh foundation</title>
            <meta name="description" content="blockchain - chtnnh foundation" />
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
              <Link href='https://github.com/chtnnhfoundation'>Join Us!</Link>
            </div>
          </header>
    
          <main className={styles.main}>
            <h1 className={styles.title}>
              Blockchain
            </h1>
            <div className={styles.description}>
                <p>
                    Lorem
                </p>
            </div>
          </main>
    
          <footer className={styles.footer}>
            <Link href="https://github.com/chtnnhfoundation">Do you want to help build this future? Join us!</Link>
          </footer>
        </div>
      )
}

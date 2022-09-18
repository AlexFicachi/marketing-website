import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Devbolt</title>
        <meta name="description" content="Coming soon..." />
        <link rel="icon" href="/solid-gold-bolt.png" />
      </Head>

      <main className={styles.main}>
        <div style={{height: 100, overflow: "hidden", display: "flex", alignItems: "center"}}>
          <Image src="/solid-gold-bold-white-text.png" width={400} height={400} style={{marginBottom: -100}}/>
        </div>
        <p className={styles.description}>
          Coming soon...
        </p>
        </main>
    </div>
  )
}

export default Home

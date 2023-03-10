import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Hana App</title>
        <meta name="description" content="Hana's sandbox" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p></p>
          <div></div>
        </div>
        <Image
            className={styles.logo}
            src="/takuma-hanaya.svg"
            alt="Caligraphy"
            width={180}
            height={37}
            priority
          />
        <div className={styles.center}>
          <p>Hana&apos;s</p>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <Link href="/software_dev" className={styles.card}>
            <h2 className={inter.className}>
              Software Development
            </h2>
            <p className={inter.className}>
              Learning..
            </p>
          </Link>
          
          <Link href="/ai" className={styles.card}>
            <h2 className={inter.className}>
              AI
            </h2>
            <p className={inter.className}>
              AI experiments
            </p>
          </Link>

          <Link href="/ar" className={styles.card}>
            <h2 className={inter.className}>
              AR
            </h2>
            <p className={inter.className}>
              AR experiments
            </p>
          </Link>

          <Link
            href=""
            className={styles.card}
          >
            <h2 className={inter.className}>
              Games
            </h2>
            <p className={inter.className}>
              Toy Games
            </p>
          </Link>

          <Link
            href="/other"
            className={styles.card}
          >
            <h2 className={inter.className}>
              Other <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Other experiments
            </p>
          </Link>
        </div>
      </main>
    </>
  )
}

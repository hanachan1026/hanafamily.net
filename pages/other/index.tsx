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
        <div className={styles.center}>
            <div className="sketchfab-embed-wrapper">
                <p style={{color: 'red'}}>Having problem now</p>
                <iframe 
                    src="https://sketchfab.com/models/932d9104d3704d1eadf2eed0a4705c06/embed"
                    title="trnio meal 202302" 
                    allowFullScreen={true}
                    allow="autoplay; fullscreen; xr-spatial-tracking" 
                    xr-spatial-tracking="true"
                    execution-while-out-of-viewport="true" 
                    execution-while-not-rendered="true" 
                    web-share="true" 
                ></iframe> 
                <p style={{fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A'}}>
                    <a 
                        href="https://sketchfab.com/3d-models/trnio-meal-202302-932d9104d3704d1eadf2eed0a4705c06?utm_medium=embed&utm_campaign=share-popup&utm_content=932d9104d3704d1eadf2eed0a4705c06" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{fontWeight: 'bold', color: '#1CAAD9'}}
                    > 
                        trnio meal 202302 
                    </a> by 
                    <a 
                        href="https://sketchfab.com/hanadev?utm_medium=embed&utm_campaign=share-popup&utm_content=932d9104d3704d1eadf2eed0a4705c06" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{fontWeight: 'bold', color: '#1CAAD9'}}
                    > 
                        hanadev 
                    </a> on 
                    <a 
                        href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=932d9104d3704d1eadf2eed0a4705c06" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{fontWeight: 'bold', color: '#1CAAD9'}}
                    >
                        Sketchfab
                    </a>
                </p>
            </div>
        </div>

        <div className={styles.grid}>
          <Link href="" className={styles.card}>
            <h2 className={inter.className}>
              AI
            </h2>
            <p className={inter.className}>
              AI experiments
            </p>
          </Link>

          <Link href="" className={styles.card}>
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

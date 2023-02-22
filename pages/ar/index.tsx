import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { useEffect } from 'react'
import useScript from '@/hooks/useScript'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const status = useScript(`https://static.sketchfab.com/api/sketchfab-viewer-1.12.1.js`, {
    removeOnUnmount: false,
  })

  useEffect(() => {
    // Initialize the viewer
    const body = document.body
    const scriptTag = document.createElement('script')
    scriptTag.type = 'text/javascript'
    scriptTag.innerHTML = `
      var iframe = document.getElementById( 'api-frame' );
      var uid = '7w7pAfrCfjovwykkEeRFLGw5SXS';

      // By default, the latest version of the viewer API will be used.
      var client = new Sketchfab( iframe );

      // Alternatively, you can request a specific version.
      // var client = new Sketchfab( '1.12.1', iframe );

      client.init( uid, {
        success: function onSuccess( api ){
          api.start();
          api.addEventListener( 'viewerready', function() {

            // API is ready to use
            // Insert your code here
            console.log( 'Viewer is ready' );

          } );
        },
        error: function onError() {
          console.log( 'Viewer error' );
        }
      } );
    `
    scriptTag

    // wait until the status is ready
    const insertScript = () => {
      if (status === 'ready') {
        body.insertAdjacentElement('beforeend', scriptTag)
      } else {
        setTimeout(insertScript, 1000)
      }
    }

    insertScript()
  })

  // if the script is loaded, then render the iframe
  if (status === 'ready') {
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
            {/* Insert an empty iframe with attributes */}
            <iframe
              src=""
              id="api-frame"
              allow="autoplay; fullscreen; xr-spatial-tracking"
              xr-spatial-tracking
              execution-while-out-of-viewport
              execution-while-not-rendered
              web-share
              allowFullScreen
            ></iframe>
          </div>
          <Image
            className={styles.logo}
            src="/augmented-reality.svg"
            alt="Caligraphy"
            width={180}
            height={37}
            priority
          />
          <div className={styles.grid}>
            <Link href="/" className={styles.card}>
              <h2 className={inter.className}>
                Home
              </h2>
            </Link>

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

  return (
    <div>Loading...</div>
  )
}

import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Form from '@/components/Form'
import Image from 'next/image'
import Button from '@/components/Button'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title><img src="/images/Favicon.ico"/>Login • Instagram</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico"/>
      </Head>

      <main className={`${styles.main}`}>






        <Form />
        <br />

        Get the app.
        <br />
        <br />

        <img className={styles.getTheAppButton} src={'/images/get_the_app.png'} alt="link for download" width="320px" height="70px" priority />
      </main>
   <Footer/>
    </>
  )
}

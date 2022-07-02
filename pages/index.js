import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
          <title>List Learn | Home</title>
          <meta name="keywords" content="learn"/>
      </Head>
      <div >
        
        <h1 className={styles.title}>Homepage</h1>
        <p  className={styles.text}>dsfdsfdsfdsfsddfsdfdfdfdssdffddsffdssdffdsfdssdf</p>
        <Link href="/sub/test">
          <a className={styles.btn}>See Test</a>
        </Link>
        
      </div>
    </>
  )
}

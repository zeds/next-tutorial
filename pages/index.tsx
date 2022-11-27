import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
			<div className={`${styles.box} ${styles.purple}`} ></div>
			<div className={`${styles.box} ${styles.orange}`} ></div>
			<div className={`${styles.box} ${styles.yellow}`} ></div>
			<div className={`${styles.box} ${styles.red}`} ></div>
    </div>
  )
}

import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav.jsx';
import { useState } from 'react';

export default function Home() {

  const [newGreeting, setNewGreeting] = useState('');
  
  function runTransaction() {
    console.log(newGreeting)
  }

  return (
    <div className={styles.container}>

      <Head>
        <title>Emerald DApp</title>
        <meta name="description" content="Created by Emerald Academy" />
        <link rel="icon" href="https://i.imgur.com/hvNtbgD.png" />
      </Head>

      <Nav />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my <a href="https://www.loldle.net/" target="_blank">Emerald DApp!</a>
        </h1>
        <p>lucky star</p>

        
        <div>
          <button onClick={runTransaction}>Run Transactions</button>
          <input onChange={(e) => setNewGreeting(e.target.value)} placeholder="Haruhi" />
        </div>
      </main>

    </div>
  )
}
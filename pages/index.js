import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav.jsx';
import * as fcl from "@onflow/fcl"
import { useState, useEffect } from 'react';

export default function Home() {

  const [newGreeting, setNewGreeting] = useState('');
  const [greeting, setGreeting] = useState('');
  const [number, setNumber] = useState(0);
  
  function runTransaction() {
    console.log(newGreeting)
  }
 
  async function executeScript() {
    const response = await fcl.query({
      cadence: `
      import HelloWorld from 0xdccd50fb9e7844e6

      pub fun main(): String {
          return HelloWorld.greeting
      }
      `, 
      args: (arg, t) => [] // ARGUMENTS GO IN HERE
    })
    console.log("Response from our script: " + response);
  }
  useEffect(() => {
    executeScript()
  }, [])

  async function executeScriptNumber() {
    const number = await fcl.query({
      cadence: `
      import SimpleTest from 0x6c0d53c676256e8c

      pub fun main(): Int {
          return SimpleTest.number
      }
      `, 
      args: (arg, t) => [] // ARGUMENTS GO IN HERE
    })
    setNumber(number)
    console.log("this " + number)
  }
  useEffect(() => {
    executeScriptNumber()
  }, [])

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
          <input onClick={(e) => setNewGreeting(e.target.value)} placeholder="Haruhi" />
          
        </div>
        <p>this is it {newGreeting}</p>
      </main>

    </div>
  )
}
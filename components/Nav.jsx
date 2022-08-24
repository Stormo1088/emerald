import styles from '../styles/Nav.module.css';

export default function Nav() {
  return (
    <nav className={styles.Nav}>
        <h1>Emerald DApp</h1>
        <button>Log In</button>
    </nav>
  )
}
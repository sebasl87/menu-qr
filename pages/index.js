import styles from '../styles/Home.module.css'
import Header from '../src/components/header'
import ControlledAccordions from '../src/components/accordion'

export default function Home() {
  return (
    <div className={styles.container}>

      <Header/>
<ControlledAccordions/>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

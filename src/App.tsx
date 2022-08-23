
import styles from './App.module.scss'
import GitHub from './GitHub_Logo.png'
import DrumPad from './features/drumpad/Drumpad'

function App() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <a className={styles.githubButton} href="https://github.com/pavelgorbach/markdown" target="blank">
          <img src={GitHub} alt="GitHub" />  
        </a>
        <h1 className={styles.title}>Drum machine</h1>
      </header>

      <div className={styles.main}>
        <DrumPad />
      </div>
    </div>
  )
}

export default App

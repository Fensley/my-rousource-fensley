import logo from "./image/logo.svg";
import styles from "./style/App.module.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";

export default function App() {
  return (
    <>
      <Navelement />
      <AppList />
      <Footer />
    </>
  );
}

function Navelement() {
  return (
    <nav>
      <div className={styles.fornav}>
        <p>Fensley.dev </p>
        <i className="fa-solid fa-moon"></i>
      </div>
    </nav>
  );
}

function AppList() {
  return (
    <section className={styles.section}>
      <div className={styles.app}>
        <img alt="react logo" src={logo} className={styles.imgs} />
        <AppListData />
      </div>
    </section>
  );
}

function AppListData() {
  return (
    <div className={styles.appname}>
      <h2 className={styles.test}>Chat app ex whatsap</h2>
      <h2>E-commerce app</h2>
      <h2>Blog app</h2>
      <h2>To do app</h2>
      <h2>Flashcard for learning</h2>
      <h2>Receipe app</h2>
      <h2>Social media dashboard</h2>
      <h2>Task Management app</h2>
      <h2>Expense Tracker</h2>
      <h2>Weather App</h2>
      <h2>Movie search</h2>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <div className={styles.footer}>
        <p>Made with love</p>
        <a href="https://github.com/fensley">
          <i className="fa-brands fa-github" style={{ color: "white" }}></i>
        </a>
      </div>
    </footer>
  );
}

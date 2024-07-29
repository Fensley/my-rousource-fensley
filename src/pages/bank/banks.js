import style from "./bank.module.css";

export default function BankApp() {
  return <BankComponent />;
}

function BankComponent() {
  return (
    <>
      <nav className={style.banknav}>
        <div className={style.topContainer}>
          <img
            className={style.logo}
            src="https://www.citizensbank.com/assets/CB_resources/images/global/citizens/logo-citizens__horz-green.svg"
            alt="citizen-logo"
          />
          <div className={style.branchctn}>
            <div className={style.findbranch}>
              <i className="fa-solid fa-location-dot"></i>
              <p>Find a Branch/ATM</p>
            </div>
            <div className={style.findbranch}>
              <i className="fa-solid fa-headset"></i>
              <p>Customer Service</p>
            </div>
          </div>
        </div>
        {/*  */}
        <NavLink />
        <NavBar />
        <NavAccountType />
      </nav>
      <section>
        <SecondConatiner />
      </section>
    </>
  );
}

function NavLink() {
  return (
    <div className={style.Navlink}>
      <div className={style.navitem}>
        <p>Personal</p>
        <p>Business</p>
        <p>Corporate</p>
        <p>Private Bank</p>
        <p>About Us</p>
      </div>
      <div className={style.inputinfo}>
        <div className={style.forinput}>
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="How can we help you?" />
        </div>
        <div>
          <button className={style.loginbtn}>
            <a href="goog">
              <i className={`fa-solid fa-unlock-keyhole ${style.falock}`}></i>
              Log in
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

function NavBar() {
  return <div className={style.navbar}></div>;
}

function NavAccountType() {
  return (
    <div className={style.accountType}>
      <p>Checking Accounts</p>
      <p>Saving Accounts</p>
      <p>Credit Cards</p>
      <p>Home Loans</p>
      <p>Student Loans</p>
      <p>Investing & Wealth Management</p>
      <p>Financial Education</p>
    </div>
  );
}

function SecondConatiner() {
  return (
    <div className={style.SecondConatiner}>
      <div className={style.secondChild}>
        <h1>You're made of keeping things in check. So are we.</h1>
        <p>Comparing your checking account options has never been so easy.</p>
        <button>Get started</button>
      </div>
      <img src="https://www.citizensbank.com/assets/CB_resources/images/global/homepage/hero--homepage-default-checking-1336x1100.webp" />
    </div>
  );
}

import style from "./bank.module.css";

export default function BankApp() {
  return <BankComponent />;
}

function BankComponent() {
  return (
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
    </nav>
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

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
        <ThirdContainer />
        <ThirdCtnImage />
      </section>
      <section>
        <FouthContainer />
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
        <div className={style.btnctn}>
          <button>Get started</button>
        </div>
      </div>
      <img
        src="https://www.citizensbank.com/assets/CB_resources/images/global/homepage/hero--homepage-default-checking-1336x1100.webp"
        alt="img"
      />
    </div>
  );
}

function ThirdContainer() {
  return (
    <div className={style.ThirdContainer}>
      <div className={style.thirdchild}>
        <h2> Banking that stands with you</h2>
        <p>Financial solutions for your stage of life and beyond</p>
      </div>

      <div className={style.ThirdContainerIcon}>
        <div className={style.iconeOne}>
          <i className="fa-solid fa-money-check-dollar"></i>
          <h3> Checking Accounts</h3>
        </div>

        <div className={style.iconeOne}>
          <i class="fa-solid fa-piggy-bank"></i>
          <h3> Saving Accounts</h3>
        </div>

        <div className={style.iconeOne}>
          <i class="fa-regular fa-credit-card"></i>
          <h3> Credit Cards</h3>
        </div>

        <div className={style.iconeOne}>
          <i class="fa-solid fa-money-bill-trend-up"></i>
          <h3> Wealth Management</h3>
        </div>
      </div>
      {/*  */}
    </div>
  );
}

function ThirdCtnImage() {
  return (
    <div className={style.ThirdContainerList}>
      <div className={style.listimg}>
        <div className={style.containerlistimg}>
          <img
            src="https://p1.aprimocdn.net/citizensbank/819a6362-7a75-4b38-8619-b0840159af35/GettyImages-1354968155_feature.jpg"
            alt="bankpay"
          />
        </div>
        <div className={style.listdata}>
          <h3>Earn 1.8% cash back on everything you buy*</h3>
          <p>
            Yes, everything. That means your earning potential is unlimited.
          </p>
          <a href="www.fensleyrene.com">Earn Cash Back</a>
        </div>
      </div>
      <div className={style.listimg}>
        <div className={style.containerlistimg}>
          <img
            src="https://p1.aprimocdn.net/citizensbank/d4feb00e-0f66-4cda-84be-affd00e0fc64/GettyImages%201138450254_Featured%20Grid%20NR.jpg"
            alt="smiling"
          />
        </div>
        <div className={style.listdata}>
          <h3>Pay for College with Multi-Year Approval**</h3>
          <p>
            College prep is a lot, but the right college funding can be a lot
            off your back. Especially if one application could fund every school
            year.
          </p>
          <a href="www.fensleyrene.com">Earn Cash Back</a>
        </div>
      </div>

      <div className={style.listimg}>
        <div className={style.containerlistimg}>
          <img
            src="https://p1.aprimocdn.net/citizensbank/f641e345-3a67-468f-9682-affd00e6c9d4/GettyImages%201159221046_Feature%20Grid%20R.jpg"
            alt="happy-family"
          />
        </div>
        <div className={style.listdata}>
          <h3>Money in as little as two weeks</h3>
          <p>
            Meet Citizens FastLine®, the simpler, faster way to get a Home
            Equity Line of Credit. Get your rate with no impact to your credit
            score.
          </p>
          <a href="www.fensleyrene.com">Earn Cash Back</a>
        </div>
      </div>
    </div>
  );
}

function FouthContainer() {
  return (
    <div className={style.fouthcontainer}>
      <img
        src="https://www.citizensbank.com/assets/CB_resources/images/citizens-savings-round-up-feature.webp"
        alt="saving"
      />
      <div className={style.fouthcontainerData}>
        <h3>Turn your spare change into savings with Rounds Ups</h3>
        <p>
          We made savings easier by letting you round up your debit card
          purchases to the nearest dollar. You can even set additional savings
          amounts to get to your goals even faster.
        </p>
        <div className={style.fouthcontainerDataBTN}>
          <button className={style.fouthcontainerDataBTNone}>
            Start Saving
          </button>
          <button className={style.fouthcontainerDataBTNtwo}>
            Additional Saving options
          </button>
        </div>
      </div>
    </div>
  );
}

function FiveContainer() {
  return (
    <div>
      <h2>Customer service at your finger tips</h2>
      <div>
        <div></div>
      </div>
    </div>
  );
}

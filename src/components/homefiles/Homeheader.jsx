import dp from "../../assets/dp.jpg";
import Button from "../../components/button";
import { homeData } from "../../data/home";
const HeaderHome = () => {
  return (
    <>
      <header>
        <picture className="profile-picture">
          <img src={dp} alt="profile picture" />
        </picture>
        <main className="header-main">
          <h2>Basit Mir</h2>
          <h1>
            <strong>{homeData.title}</strong>
          </h1>
          <p>{homeData.description} </p>
          <Button text="work" />
        </main>
      </header>
    </>
  );
};

export default HeaderHome;

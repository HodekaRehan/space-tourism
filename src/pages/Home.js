import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="home">
      <div className="home-container">
        <section className="home-text-container">
          <h1 className="home-heading">
            So, you want to travel to <br />{" "}
            <span className="space">Space</span>
          </h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </section>
        <section>
          <Link to="/destination" className="large-btn">
            Explore
          </Link>
        </section>
      </div>
    </main>
  );
};

export default Home;

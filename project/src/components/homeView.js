import React from "react";
import "../styles/homeView.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import KitItem from "./kitItem";
import { useDispatch } from "react-redux";
import { homeActions } from "../slices/homeSlice";

const Home = () => {
  const homeSelector = useSelector((state) => state.home);
  const kitsArray = homeSelector.kitsArray;
  const retroKitsArray = homeSelector.retroKitsArray;
  const showFirstKitBatch = homeSelector.showFirstKitBatch;
  const dispatch = useDispatch();

  return (
    <div>
      <div className="hero-section">
        <h1>Score Big with Stylish Football Kits</h1>
        <p>Explore our latest collection of football kits from top teams</p>
        <button>Shop Now</button>
      </div>

      <div className="popular-teams-section">
        <h2>Popular Teams</h2>
        <div className="popular-team">
          {showFirstKitBatch
            ? kitsArray.slice(0, 4).map((kit, i) => {
                return (
                  <KitItem key={i} kitSrc={kit.url} name={kit.name}></KitItem>
                );
              })
            : kitsArray.slice(4).map((kit, i) => {
                return (
                  <KitItem key={i} kitSrc={kit.url} name={kit.name}></KitItem>
                );
              })}
        </div>
        <button onClick={() => dispatch(homeActions.switchKitBatch())}>
          {showFirstKitBatch ? "See Batch 2" : "See Batch 1"}
        </button>
        <div className="retro-section">
          <h2>Retro Kits</h2>
          <p>Check out some of our old school kits</p>
          <div className="retro-kits">
            {retroKitsArray.map((retroKit, i) => {
              return (
                <KitItem
                  key={i}
                  kitSrc={retroKit.url}
                  name={retroKit.name}
                ></KitItem>
              );
            })}
          </div>
        </div>
      </div>

      <div className="explore-more-section">
        <h2>Explore More</h2>
        <p>Discover kits from your favorite teams and players</p>
        <button>View All Kits</button>
      </div>

      <div className="social-media-section">
        <h2>Connect with Us</h2>
        <p>Follow us on social media for more updates and promotions.</p>
        <div className="social-icons">
          <a href="">
            <img src={require("../images/facebook_logo.png")} alt="Facebook" />
          </a>
          <a href="">
            <img
              src={require("../images/x_logo.webp")}
              alt="X(Formely Twitter)"
            />
          </a>
          <a href="">
            <img
              src={require("../images/instagram_logo.webp")}
              alt="Instagram"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;

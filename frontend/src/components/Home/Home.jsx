import React from "react";
import BikeImg from "../../assets/images/bikes.jpg";

const Home = () => {
  return (
    <div>
      <h1 className="d-flex">HELSINKI City Bikes</h1>
      <div className="d-flex">
        <img className="bk-img" src={BikeImg}></img>
      </div>
      <div className="d-flex">
        <h3>
          Welcome to <i>HELSINKI City Bikes</i>. Here you can book a ride and see all
          journeys.
        </h3>
      </div>
    </div>
  );
};

export default Home;

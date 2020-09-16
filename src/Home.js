import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-na.ssl-images-amazon.com/images/G/15/kindle/journeys/MTM3M2NhM2Et/MTM3M2NhM2Et-MDZiMjBiMjkt-w1500._CB406836698_.jpg"
          alt="Banner_Image"
        />

        <div className="home_row">
          <Product
            id="1233424"
            title="Tasty Ultimate: How to Cook Basically Anything (An Official Tasty Cookbook)"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/91GShN48A3L.jpg"
            rating={4}
          />
          <Product
            id="uq8qe8eq"
            title="Tasty Latest and Greatest: Everything You Want to Cook Right Now (An Official Tasty Cookbook)"
            price={25.01}
            image="https://images-na.ssl-images-amazon.com/images/I/A1Pcz6GPIJL.jpg"
            rating={5}
          />
        </div>

        <div className="home_row">
          <Product
            id="8723687263"
            title="HP Envy 5055 Wireless All-in-One Photo Printer (M2U85A)"
            price={129.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71TcwpgJLfL._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id="98236236"
            title="Intelligent Design Adel Blackout Bedroom Darkening Black Out Curtain"
            price={60.06}
            image="https://images-na.ssl-images-amazon.com/images/I/91fwOMdx7xL._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id="343434ee4"
            title="Garmin 010-01689-00 Forerunner 35 Watch, Black"
            price={117.98}
            image="https://images-na.ssl-images-amazon.com/images/I/71wamdtiUHL._AC_SL1500_.jpg"
            rating={3}
          />
        </div>

        <div className="home_row">
          <Product
            id="9483462"
            title="TCL 50S425-CA 4K Ultra HD Smart LED Television (2019), 50"
            price={379.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71xkwNx-nfL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

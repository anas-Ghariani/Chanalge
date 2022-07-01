import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "./imges/img1.jpg";
import img2 from "./imges/img2.jpg";
import img3 from "./imges/img3.jpg";
import img4 from "./imges/img4.jpg";
import React from "react";
import NavBar from "./Component/Navbar";
import Cars from "./Component/Cars";
import Footer from "./Component/Footer";
const cars = [
  { name: "Bmw", price: 4000000, imgsrc: img1 },
  { name: "Ferari", price: 1000000, imgsrc: img2 },
  { name: "Schefferlet", price: 80000, imgsrc: img3 },
  { name: "Mercedes", price: 50000, imgsrc: img4 },
];
function App() {
  return (
    <div className="App">
      {/* NavBar  */}
      <NavBar />
      <div className="cardform">
        {/* cars */}
        {cars.map((e, i) => (
          <Cars e={e} key={i} />
        ))}
      </div>
      <div className="span">
        <span>
          {" "}
          <h1>
            {" "}
            total :
            {cars.reduce((accumulator, cars) => {
              return accumulator + cars.price;
            }, 0)}
          </h1>
        </span>
      </div>

      {/* Footer  */}
      <Footer />
    </div>
  );
}

export default App;

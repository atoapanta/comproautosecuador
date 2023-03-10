import React from "react";
import Footer from "../components/Footer";
import "./Home.css";

const Home = () => {
  return (
    <div className="m-0">
      <div className="vh-100 bg-danger"></div>
      <div className="vh-100 bg-success">
        <div className="container">
          <br />

          <div className="col text-center">
            titlr
            <hr />
          </div>
          <div className="row">.col*3</div>
        </div>
      </div>
      row justify-content-center align-items-center
      <div
        className="m-0 vh-100  text-white 
      "
      >
        <div className="text-center">
          <div id="title_venta">COMPRO AUTOS ECUADOR</div>
          <div className="">
            Compramos todo tipo de vehiculo a nivel nacional,con todo tipo de
            detalles.
          </div>
          <div className="col">
            <img src="" alt="" />
            VENDE TU AUTO EN TAN SOLO 20MIN
          </div>
          <div className="col">
            {/* <div className="col row">
              <div className="col">MEJOR PRECIO</div>
              <div className="col">TRATO DIRECTO</div>
              <div className="col">PAGO CONFIABLES</div>
            </div> */}
          </div>

          <div className="btn btn-sm btn-outline-light mt-4" id="vender">
            ¡QUIERO VENDER MI AUTO!
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;

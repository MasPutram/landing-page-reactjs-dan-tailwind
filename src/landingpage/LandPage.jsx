import antasena from "../assets/images/Antasena.png";
import gatotkaca from "../assets/images/Gatotkaca.png";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import logo from "../assets/images/gunungan.png";
import "../index.css";

const LandPage = () => {
  const linkRef = useRef(null);
  return (
    <div className="box-utama flex">
      <div className="box bg-white">
        <div className="box-brown bg">
          <img src={logo} alt="Logo" />
          <h1>Pesona Wayang</h1>
        </div>
        <Link to="/home" ref={linkRef} className="text">
          Klik ke halaman utama
        </Link>
      </div>
    </div>
  );
};

export default LandPage;

/* jangan dipake dulu belum bisa direalisasikan */

/* <div className="content">
          <div className="box-container">
            <div className="box-antasena">
              <img src={antasena} alt="" className="antasena" />
            </div>
            <h1 className="text">PESONA WAYANG</h1>

            <div className="box-gatot">
              <img src={gatotkaca} alt="" className="gatot" />
            </div>
          </div>
        </div> */

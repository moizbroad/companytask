import React from "react";
import style from "./style.module.scss";

export const Footer = () => {
  return (
    <>
      <div className={style.footer}>
        <div className={style.footerLogo}>LOGO</div>
        <nav>
          <a href="#">Home</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </nav>
        <div className={style.footerThird}>
          {/* <a href="#">Logout</a> */}
          <a href="mailto:moizkhan@gmail.com">moizkhan@gmail.com</a>
        </div>
      </div>
      <div className={style.copyright}>
        <h5>Copyrights @ 2024 right reserved</h5>
      </div>
    </>
  );
};

import React from "react";
import style from "./style.module.scss";

export const Header = () => {
  return (
    <>
      <div className={style.header}>
        <div className={style.brandLogo}>LOGO</div>
        <nav>
          <a href="#">Home</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </nav>
        <div className={style.logoutText}>
          <a href="#">Logout</a>
        </div>
      </div>
    </>
  );
};

// export default index

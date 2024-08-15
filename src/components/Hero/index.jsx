import React from "react";
import style from "./style.module.scss";
import moz from "../../assets/moz.jpg";
import hero from "../../assets/hero.png";

export const Hero = () => {
  return (
    <>
      <div className={style.heroMain}>
        <div className={style.heroImgSec}>
          <img src={moz} />
        </div>
        <div className={style.heroDetailSec}>
          <h1>About Moiz Khan</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
            earum iste natus exercitationem obcaecati. Quos. Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Placeat earum iste natus
            exercitationem obcaecati. Quos. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Placeat earum iste natus
            exercitationem obcaecati. Quos. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Placeat earum iste natus
            exercitationem obcaecati. Quos. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Placeat earum iste natus
            exercitationem obcaecati. Quos.
          </p>
        </div>
      </div>
      {/* portfolio section  */}
      <div className={style.portfolioMain}>
        <div className={style.portFolioHead}>
          <h1>My Projects</h1>
        </div>
        <div className={style.portfolioSubMain}>
          <div className={style.portfolioCard}>
            <img src={hero} />
            <div>
              <h2>Project One</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
                totam quaerat. Recusandae tempore repudiandae quam nihil sed ab
                non vel!
              </p>
            </div>
          </div>
          <div className={style.portfolioCard}>
            <img src={hero} />
            <div>
              <h2>Project Two</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
                totam quaerat. Recusandae tempore repudiandae quam nihil sed ab
                non vel!
              </p>
            </div>
          </div>
          <div className={style.portfolioCard}>
            <img src={hero} />
            <div>
              <h2>Project Three</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
                totam quaerat. Recusandae tempore repudiandae quam nihil sed ab
                non vel!
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* portfolio section end */}
    </>
  );
};

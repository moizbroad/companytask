import React from "react";
import style from "./style.module.scss";

export const ContactUS = () => {
  return (
    <>
      <section className={style.contactFormMain}>
        <form>
          <fieldset>
            <legend>Contact Us</legend>
            <label htmlFor="firstname">First Name</label>
            <input type="text" id="firstname" />
            <label htmlFor="lastname">Last Name</label>
            <input type="text" id="lastname" />
            <label htmlFor="email">Email</label>
            <input type="text" id="email" />
            <button type="submit">Submit</button>
          </fieldset>
        </form>
      </section>
    </>
  );
};

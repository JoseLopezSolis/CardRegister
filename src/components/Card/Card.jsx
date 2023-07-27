import FrontCard from "../../assets/images/bg-card-front.png";
import CardLogo from "../../assets/images/card-logo.svg";
import BackCard from "../../assets/images/bg-card-back.png";
import { Fragment } from "react";
import Classes from "./Card.module.css";
const Card = ({ name, cardNumber, month, year, cvc }) => {
  const newName = name ? name : "Jane Appleseed";
  const newCardNumber = cardNumber ? cardNumber : "0000 0000 0000 0000";
  const newMonth = month ? month : "00";
  const newYear = year ? year : "00";
  const newCvc = cvc ? cvc : "000";

  return (
    <Fragment>
      <div className={Classes["card-container"]}>
        <div className={Classes["front-card"]}>
          <img src={FrontCard} alt="front-card" />
          <img
            src={CardLogo}
            alt="card-logo"
            className={Classes["card-logo"]}
          />
          <span className={Classes["card-number"]}>{newCardNumber}</span>
          <span className={Classes["card-name"]}>{newName}</span>
          <span className={Classes["card-date"]}>
            {newMonth}/{newYear}
          </span>
        </div>
        <div className={Classes["back-card"]}>
          <img src={BackCard} alt="back-card" />
          <span className={Classes["card-cvv"]}>{newCvc}</span>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;

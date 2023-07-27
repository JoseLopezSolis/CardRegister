import { Fragment } from "react";
import SuccessLogo from "../../assets/images/icon-complete.svg";
import Classes from "./SuccessView.module.css";
import Button from "../UI/Button";

const SuccessView = () => {
  return (
    <Fragment>
      <div className={Classes["container-success"]}>
        <img src={SuccessLogo} className={Classes["success-logo"]} alt="" />
        <h2 className={Classes["thanks-message"]}>THANK YOU!</h2>
        <p className={Classes["card-details"]}>We've added your card details</p>
        <Button value={"Add another card"} type={"button"} />
      </div>
    </Fragment>
  );
};

export default SuccessView;

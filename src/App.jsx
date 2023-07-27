import { Fragment, useState, useEffect } from "react";
import BackgroundSidebar from "./components/Layout/Sidebar";
import Form from "./components/Form/Form";
import Card from "./components/Card/Card";
import SuccessView from "./components/SuccessView/SuccessView";
import "./App.css";

function App() {
  //Handle inputs
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("");
  //Message errors
  const [nameError, setNameError] = useState("");
  const [cardNumberError, setCardNumberError] = useState("");
  const [dateError, setDateError] = useState("");
  const [cvcError, setCvcError] = useState("");
  //After submit
  const [isFormSubmitted, setIsFormSubmitted] = useState(true);
  //FormSumbitedCorrectly
  const [isFormSubmittedCorrectly, setIsFormSubmittedCorrectly] =
    useState(false);
  //Tryes
  const [tryes, setTryes] = useState(0);

  //Fucntions to handle form inputs
  const handleCardNumber = (e) => {
    const inputCardNumber = e.target.value;
    const cleanedCardNumber = inputCardNumber.replace(/\D/g, "");
    const groups = cleanedCardNumber.match(/.{1,4}/g);
    const formattedCardNumber = groups ? groups.join(" ") : "";
    setCardNumber(formattedCardNumber);
  };

  const handleInput = (inputValue, setStateFn) => {
    // Handle when the input value is "0" or starts with "0"
    if (
      inputValue === "0" ||
      (inputValue.length > 1 && inputValue.startsWith("0"))
    ) {
      setStateFn(inputValue); // Save the input value as is (with leading zero)
      return;
    }

    const date = parseInt(inputValue, 10);
    setStateFn(isNaN(date) ? "" : date); // Save the parsed integer (without leading zero) or an empty string if invalid
  };

  //Handle moth input
  const handleMonth = (e) => {
    const inputValue = e.target.value;
    handleInput(inputValue, setMonth);
  };

  //handle year input
  const handleYear = (e) => {
    const inputValue = e.target.value;
    handleInput(inputValue, setYear);
  };

  //handle cvc input
  const handleCvc = (e) => {
    const inputValue = e.target.value;
    handleInput(inputValue, setCvc);
  };

  //Submit method
  const onSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    setTryes(tryes + 1);
    !isAnyFormError() ? setIsFormSubmittedCorrectly(true) : null;
  };

  //Use Effect to handle errors
  useEffect(() => {
    // Name validation
    setNameError(name.length === 0 ? "Name is required" : "");

    // Card number validation
    if (cardNumber.length === 0) setCardNumberError("Card number is required");
    else if (cardNumber.length < 19)
      setCardNumberError(
        "Invalid card number. It should be a 16-digit number."
      );
    else setCardNumberError("");

    // Expiry date validation
    if (month.length === 0 || year.length === 0)
      setDateError("Expiry date is required");
    else if (parseInt(month) < 1 || parseInt(month) > 12)
      setDateError("Invalid month. Please enter a valid month (1-12).");
    else if (parseInt(year) < new Date().getFullYear().toString().slice(-2))
      setDateError("Invalid year. Please enter a valid future year.");
    else setDateError("");

    // CVC validation
    if (cvc.length === 0) setCvcError("CVC is required");
    else if (cvc.length < 3)
      setCvcError("Invalid CVC. It should be a 3-digit number.");
    else setCvcError("");

    // Reset the form submission state variable after the effects are triggered
    setIsFormSubmitted(false);
  }, [name, cardNumber, month, year, cvc, isFormSubmitted]);

  const isAnyFormError = () =>
    nameError || cardNumberError || dateError || cvcError;

  return (
    <Fragment>
      <Card
        name={name}
        cardNumber={cardNumber}
        month={month}
        year={year}
        cvc={cvc}
      />
      <div className="grid-container">
        <BackgroundSidebar />
        {!isFormSubmittedCorrectly ? (
          <Form
            name={name}
            setName={setName}
            cardNumber={cardNumber}
            month={month}
            setMonth={setMonth}
            year={year}
            setYear={setYear}
            cvc={cvc}
            setCvc={setCvc}
            handleCardnumber={handleCardNumber}
            handleMonth={handleMonth}
            handleYear={handleYear}
            handleCvc={handleCvc}
            onSubmit={onSubmit}
            nameError={nameError}
            cardNumberError={cardNumberError}
            dateError={dateError}
            cvcError={cvcError}
            isFormSubmitted={isFormSubmitted}
            tryes={tryes}
          />
        ) : (
          <SuccessView />
        )}
      </div>
    </Fragment>
  );
}

export default App;

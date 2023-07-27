import Classes from "./Form.module.css";
import Button from "../UI/Button";
const Form = function ({
  // eslint-disable-next-line react/prop-types
  name,
  setName,
  cardNumber,
  month,
  year,
  cvc,
  handleCardnumber,
  handleMonth,
  handleYear,
  handleCvc,
  nameError,
  cardNumberError,
  dateError,
  cvcError,
  onSubmit,
  tryes,
}) {
  return (
    <form action="" className={Classes.form} onSubmit={onSubmit}>
      <div className={Classes.field}>
        <label htmlFor="">CARDHOLDER NAME</label>
        <input
          type="text"
          placeholder="e.g Jane Appleseed"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {tryes > 0 && <p className={Classes.error}>{nameError}</p>}
      </div>
      <div className={Classes.field}>
        <label htmlFor="">CARD NUMBER</label>
        <input
          type="text"
          placeholder="e.g. 1234 5678 9123 0000"
          value={cardNumber}
          maxLength={19}
          onChange={handleCardnumber}
        />
        {tryes > 0 && <p className={Classes.error}>{cardNumberError}</p>}
      </div>
      <div className={Classes.col2}>
        <div>
          <label htmlFor="">EXP. DATE (MM/YY)</label>
          <div className={Classes.col2inside}>
            <input
              type="text"
              placeholder="MM"
              value={month}
              maxLength={2}
              onChange={handleMonth}
            />
            <input
              type="text"
              placeholder="YY"
              value={year}
              maxLength={2}
              onChange={handleYear}
            />
            {tryes > 0 && <p className={Classes.error}>{dateError}</p>}
          </div>
        </div>
        <div className={Classes.mcol2}>
          <label htmlFor="">CVC</label>
          <div className={Classes.col2inside}>
            <input
              type="text"
              placeholder="e.g. 123"
              value={cvc}
              maxLength={3}
              onChange={handleCvc}
            />
            {tryes > 0 && <p className={Classes.error}>{cvcError}</p>}
          </div>
        </div>
      </div>
      <div>
        <Button type="submit" value="Confirm" onClick={onSubmit} />
      </div>
    </form>
  );
};

export default Form;

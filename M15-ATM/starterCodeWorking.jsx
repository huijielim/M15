const ATMDeposit = ({ onChange, isDeposit }) => {
  const choice = ["Deposit", "Cash Back"];
  return (
    <label className="label huge">
      <h3> {choice[Number(!isDeposit)]}</h3>
      <input type="number" onChange={onChange}></input>
      <input type="submit" value = 'submit' onClick={handleSubmit}></input>
    </label>
  );
};

const Account = () => {
  let transactionState = 0; // state of this transaction
  const [totalState, setTotalState] = React.useState(0);
  const [isDeposit, setIsDeposit] = React.useState(true);
  console.log('Account Rendered');
  let status = "Account Balance $zero";
  const handleChange = event => {
    console.log(`handleChange ${event.target.value}`);
    transactionState = Number(event.target.value);
  };
  const handleSubmit = () => {
    let newTotal = isDeposit ? totalState + deposit: totalState - deposit;
    setTotalState(newTotal);
    event.preventDefault();

    // totalState += transactionState;
    // status = `Account Balance $ ${totalState}`;
    // document.getElementById("total").innerHTML = status;
    // event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2 id = 'total'>{status}</h2>
      <button onClick= {()=>setIsDepposit(true)}>Deposit</button>
      <button onClick= {()=>setIsDepposit(false)}>Cash Back</button>
      <ATMDeposit onChange={handleChange} isDeposit={isDeposit}></ATMDeposit>
    </form>
  );
};
// ========================================
ReactDOM.render(<Account />, document.getElementById("root"));

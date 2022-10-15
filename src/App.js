import "./styles.css";
import { useState } from "react";

export default function App() {
  let [name, setName] = useState("Empty");
  let [tnc, setTnc] = useState(false);
  let [interest, setInterest] = useState(
    "PLease click on terms and condition box"
  );

  // form function
  function getFormData(e) {
    console.log(name, tnc, interest);
    // ye preventDefalut function form to submit hone se rokta hai
    e.preventDefault();
  }

  return (
    <div className="App">
      <h3>Basic form by react</h3>

      <form onSubmit={getFormData}>
        <input
          type="text"
          placeholder="enter name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />

        <select onChange={(e) => setInterest(e.target.value)}>
          <option>macbook</option>
          <option>samsung</option>
          <option>blackbarry</option>
        </select>
        <br />
        <br />

        {/* yha checked true false deta hai isliye hamen ye liya hai  */}
        <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} />
        <span>Accept Terms and conditions</span>
        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

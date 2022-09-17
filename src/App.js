import React, { useState } from "react";
import "./App.css";
function App() {
  var submittext="Confirm";
  
  let [card_name,Set_card_name]=useState("Abhishek Kumar");
  let [card_number,Set_card_number]=useState("1234-5678-1234-0000");
  let [card_expmm,Set_card_expmm]=useState("00");
  let [card_expyy,Set_card_expyy]=useState("00");
  let [card_cvc,Set_card_cvc]=useState("000");

  const HandleOnChange1 = (e) => {
    console.log("OnChange 1 Activated");
    Set_card_name(e.target.value.toUpperCase());

  };
  const HandleOnChange2 = (e) => {
    console.log("OnChange 2 Activated");
    let text=e.target.value;
    let subtext=text;
    let newtext="";
    for(var i=0;i<text.length;i+=4)
    {
      subtext=text.substr(i,4);
      newtext=newtext+subtext;
      if(i!==12){
        newtext=newtext+"-";
      }
    } 
    Set_card_number(newtext);
    console.log(text);
  };
  const HandleOnChange3 = (e) => {
    console.log("OnChange 3 Activated");
    Set_card_expmm(e.target.value);
  };
  const HandleOnChange4 = (e) => {
    console.log("OnChange 4 Activated");
    Set_card_expyy(e.target.value);
  };
  const HandleOnChange5 = (e) => {
    console.log("OnChange 5 Activated");
    Set_card_cvc(e.target.value);
  };
  const handleonclick=(e)=>{
    // console.log(e)
    e.target.innerHTML = "Thank You";
  }

  return (
    <div className="main">
      <div className="card">
        <div className="front_card">

          <div className="card_header">
            <span id="circle1"></span>
            <span id="circle2"></span>
            <span id="card_type"></span>
          </div>
          <div className="front_card_number">
            {card_number}
          </div>
          <div className="front_card_details">
              <div className="front_card_name">
                <p id="name_label">Card Holder's Name :</p>
                <p id="cardname">{card_name}</p>
              </div>
              <div className="front_card_expiry">
                  <p id="expiry_label"> Card Expiry :</p>
                  <p id="cardexpiry">{card_expmm}/{card_expyy}</p>
              </div>
          </div>
        </div>
        <div className="back_card">
          <div className="back_cvc" id="back_card_cvc">{card_cvc}
          </div>
        </div>
      </div>
      
      
      <div className="card_form">
        <div className="card_holder_name">
          <label htmlFor="" className="label"> CardHolder Name</label>
          <p><input className="data_input" type="text" onChange={(e) => HandleOnChange1(e)} id="MyName" placeholder="e.g. John Appleseed" required autoComplete="off" autoFocus maxLength={20}/></p>
        </div>
        <div className="card_number">
          <label htmlFor=""  className="label">Card Number </label>
          <p><input
            type="text"
            id="CardNumber"
            onChange={(e) => HandleOnChange2(e)}
            placeholder="e.g. 1234 5678 9123 0000"
            className="data_input"
            maxLength={16}
          /></p>
        </div>
        <div className="content">
          <div className="expiry">
             <label htmlFor=""  className="label">EXP_DATE</label>
                <div className="inputdate">
                  <div><input id="expmonth" type="text"className="data_input" onChange={(e) => HandleOnChange3(e)}placeholder="MM" maxLength={2} required /></div>
                  <div><input  id="expyear" type="text" className="data_input"onChange={(e) => HandleOnChange4(e)} placeholder="YY" maxLength={2} required/></div>
                    
                </div>
          </div>
           
          <div className="cvc">
            <label htmlFor="" className="label"> CVC</label>
            <p>
              <input type="text" id="cvc" className="data_input"placeholder="CVC"onChange={(e) => HandleOnChange5(e)} maxLength={3} required />
            </p>
          </div>
        </div>
        <div className="btn">
          <button type="submit" formAction="" formMethod="post"onClick={(e)=>handleonclick(e)}> {submittext}</button>
        </div>
      </div>
    </div>
  );
}
export default App;

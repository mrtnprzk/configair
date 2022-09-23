import React, { useState } from "react";
import Form from "./components/Form";
import Modal from "./components/Modal";

function App() {
  const [submitValue, setSubmitValue] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  return (
    <div className="flex justify-center items-center h-[100vh] bg-[#0C1120]">
      <Form submitValue={submitValue} setSubmitValue={setSubmitValue} setIsSubmitted={setIsSubmitted}/>
      {isSubmitted && <Modal submitValue={submitValue} setSubmitValue={setSubmitValue} setIsSubmitted={setIsSubmitted}/>}
    </div>
  );
}

export default App;

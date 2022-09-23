import React from "react";

interface Props {
  submitValue: string;
  setSubmitValue: React.Dispatch<React.SetStateAction<string>>;
  setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ submitValue, setSubmitValue, setIsSubmitted }: Props) => {
  const modalHandler = () => {
    setSubmitValue("");
    setIsSubmitted(false);
  };

  return (
    <>
      <div
        onClick={modalHandler}
        className="fixed top-0 left-0 w-[100%] h-[100vh] z-10 bg-[#0C1120] opacity-50"
      ></div>
      <div className="absolute bg-[#EC8C3C] rounded shadow-9xl p-2 w-80 md:w-96 z-20">
        <p className="p-3 overflow-hidden">{submitValue}</p>
      </div>
    </>
  );
};

export default Modal;

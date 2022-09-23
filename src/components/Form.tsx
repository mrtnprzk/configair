import React from "react";

interface Props {
  submitValue: string;
  setSubmitValue: React.Dispatch<React.SetStateAction<string>>;
  setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}

const Form = ({ submitValue, setSubmitValue, setIsSubmitted }: Props) => {
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <form
      onSubmit={submitHandler}
      className="bg-[#EC8C3C] flex rounded shadow-9xl p-5 w-80 md:w-96"
    >
      <input
        className="w-full rounded py-1 px-2"
        type="text"
        id="input"
        name="input"
        value={submitValue}
        onChange={(e) => setSubmitValue(e.target.value)}
        required
      />
      <button
        type="submit"
        className={`bg-lime-600 rounded py-1 px-2 ml-2`}
        disabled={submitValue === "" && true}
      >
        Submit
      </button>
    </form>
  );
};

export default Form;

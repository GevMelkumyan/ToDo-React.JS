import React, { useState } from "react";
import "./Form.css";

const Form = ({ setTodos }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) {
      alert("Add your plans");
      return
    }
    setTodos((prev) => {
      return [...prev, text];
    });
    setText("");
  };

  return (
    <div className="div_form">
      <h1 className="H1">ToDo</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="inp"
          type="text"
          placeholder="Add Your Plans"
          value={text}
          onChange={handleChange}
        />
        <button className="btn">Click</button>
      </form>
    </div>
  );
};

export default Form;

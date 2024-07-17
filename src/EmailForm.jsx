import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/addSubscriber", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        setMessage("Thank you for signing up!");
        navigate("/thankyoupage");
      } else {
        const errorData = await response.json();
        setMessage(`Error: ${errorData.error.message}`);
      }
    } catch (error) {
      console.error("Error adding member:", error);
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center w-70 max-w-sm"
    >
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="p-2 mb-4 w-full text-white relative"
        style={{
          backgroundColor: "black",
          textAlign: "center",
        }}
      />
      <span
        className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none"
        style={{
          color: "#668",
        }}
      ></span>

      <button
        type="submit"
        className="p-2 w-full bg-transparent text-white border border-white hover:bg-gray-300"
      >
        Submit
      </button>
      {message && <p className="mt-4">{message}</p>}
    </form>
  );
};

export default EmailForm;

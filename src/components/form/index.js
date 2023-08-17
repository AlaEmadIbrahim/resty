import React, { useState } from "react";
import "./form.scss";

function Form(props) {
  const [body, setBody] = useState(false);
  const [requestBody, setRequestBody] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      method: e.target[1].value,
      url: e.target[0].value,
    };

    try {
      let options = {
        method: formData.method,
        headers: {
          "Content-Type": "application/json",
        },
      };

      if (formData.method === "POST" || formData.method === "PUT") {
        options.body = JSON.stringify(requestBody);
      }

      let response = await fetch(formData.url, options);
      let data = await response.json();
      props.setResult(data);
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const textArea = (e) => {
    const selectedMethod = e.target.value;
    setBody(selectedMethod === "POST" || selectedMethod === "PUT");
  };

  const handleRequestBodyChange = (e) => {
    setRequestBody(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <input name="url" type="text" required placeholder="URL" />
        </label>
        <label className="methods">
          <select onChange={textArea} id="methods">
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELETE</option>
          </select>
        </label>
        {body ? (
          <label>
            <span>Body</span>
            <textarea
              value={requestBody}
              onChange={handleRequestBodyChange}
            ></textarea>
          </label>
        ) : null}
        <button type="submit">GO!</button>
      </form>
    </>
  );
}

export default Form;

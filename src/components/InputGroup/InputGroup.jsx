import React from "react";
import "./InputGroup.css";
export const InputGroup = ({ label, name, value, onChange }) => {
  return (
    <div class="form__group">
      <div>
        <label for="name" class="form__label">
          {label} :
        </label>
      </div>
      <div>
        <input
          type="input"
          class="form__field"
          value={value}
          onChange={onChange}
          name={name}
          id="name"
          
        />
      </div>
    </div>
  );
};

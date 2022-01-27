import React from 'react';

export default function Form ({ name, years,  handleSubmit, handleChange}) {
 
  return (
      <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input 
        type="text" 
        name={name}
        value={inputs.name || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your age:
        <input 
          type="text" 
          name={years}
          value={inputs.years || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
  
  );
}
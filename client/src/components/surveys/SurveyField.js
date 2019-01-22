// src/componenets/surveys/SurveyField.js

// contains logic to render a single label and text input

import React from 'react';
// reduxForm helper allows redux-form to communicate with redux store
// Field helper for rendering any type of html form element (input, textarea, select, etc)
// import { reduxForm, Field } from 'redux-form';



// input is ES6 destructuring of the props object, same as using props.input
// ...input will pass all properties and values of input
// for example, onBlur="", onChange="", input prop adds all callback functions


export default ({ input }) => {
  console.log(input);
  return (
    <div>
      <input {...input} />
    </div>
  );
};
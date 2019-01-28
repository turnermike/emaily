// src/componenets/surveys/SurveyField.js

// contains logic to render a single label and text input

import React from 'react';
// reduxForm helper allows redux-form to communicate with redux store
// Field helper for rendering any type of html form element (input, textarea, select, etc)
// import { reduxForm, Field } from 'redux-form';



// input is ES6 destructuring of the props object, same as using props.input
// ...input will pass all properties and values of input
// for example, onBlur="", onChange="", input prop adds all callback functions

// { input, label, meta: {error, touched} } // es6 nested destructuring

export default ({ input, label, meta: { error, touched } }) => {
  // console.log(input);
  // console.log('meta', meta);
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: '5px' }} />
      <div className="red-text" style={{ marginBottom: '20px' }}>
        {touched && error}
      </div>
    </div>
  );
};
import React from 'react';
import Clock from './frontend/clock';
import Weather from './frontend/weather';

const Root = (props) => (
  <div>
    <p>Hi Asdflex!</p>
    <Clock />
    <Weather />
    <AutoComplete />
  </div>
);

export default Root;

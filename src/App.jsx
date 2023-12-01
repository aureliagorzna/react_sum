/* eslint-disable react/jsx-no-undef */
import React from 'react';
import './App.scss';
import Sum from './components/Sum/Sum';

export const App = () => (
  <>
    <p><Sum a={2} b={3} /></p>
    <p><Sum a={-5} b={5} /></p>
    <p><Sum a={10} b={0} /></p>
    <p><Sum a={0} b={5} /></p>
    <p><Sum a={0} b={0} /></p>
  </>
);

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './App.css'
import DataDisplay from "./DataDisplay";

const App = () =>{

  return<>
      <h1>Reduc Saga Exmaple with API</h1>
      <DataDisplay/>
  </>
}
export default App
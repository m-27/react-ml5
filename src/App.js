import './App.css';
import React, { useEffect, useCallback } from 'react';
import tiger from './tiger.jpg';
import tigerD from './tiger_de.jpg';
import * as ml5 from "ml5";

const App = () => {

  const modelLoaded = () => {
    console.log(`Model Loaded!`);
  }

  const classifyImg = useCallback(() => {
    const classifier = ml5.imageClassifier("MobileNet", modelLoaded);

    const image = document.getElementById('image');
    classifier.predict(image, 10, (err, res) => {
      console.log(res);
    })
    // modelLoaded();

  }, []);

  useEffect(() => {
    classifyImg();
  }, [classifyImg])

  return (
    <div className="App">
      
      <h1>Image classification with ML.js</h1>
      <img src={tigerD} id="image" width="400" alt="" />
    </div>
  );
}

export default App;

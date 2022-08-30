import './App.css';
import Header from './header/Header'
import React from "react";
import FileGetter from "./filegetter/FileGetter";
import FileSettings from "./filesettings/FileSettings";

function App() {
  return (
    <div className="App">
        <Header />
        <FileSettings />
    </div>
  );
}

export default App;

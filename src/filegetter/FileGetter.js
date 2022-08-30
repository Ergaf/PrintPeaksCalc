import React from "react";
import "./FileGetter.css"
import load from "./load.svg"

function FileGetter() {

    const getFile = () => {

    }

    const openRender = () => {

    }

    const changeFile = () => {

    }

    return (
        <div className="App">
            <div className="App-header">
                <div onClick={() => getFile()} className="loadContainer">
                    <img src={load} className="App-logo" alt="logo" />
                    <p>

                    </p>
                    <input type="file" onChange={() => changeFile()}/>
                    <button onClick={() => openRender()}>open and render</button>
                </div>
            </div>
        </div>
    )
}

export default FileGetter
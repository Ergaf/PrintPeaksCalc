import {useDispatch, useSelector} from "react-redux";
import "./Header.css"
import React from "react";
import logo from "./PrintPeaksLogo.jpg"
import {fetchPrices} from "../asyncActions/prices";

function Header() {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash)

    const addCash = () => {
        dispatch({type: "ADD_CASH", payload: 1})
    }

    const getCash = () => {
        dispatch({type: "GET_CASH", payload: 1})
    }


    return (
        <header>
            <div className="header">
                <div className="logoContainer">
                    <img src={logo} className="MainLogo" alt="logo" />
                </div>
                <button onClick={() => dispatch(fetchPrices())}>add Prices</button>
                {/*<div>{cash}</div>*/}
                {/*<button onClick={() => addCash()}>+</button>*/}
                {/*<button onClick={() => getCash()}>-</button>*/}
                <div>Підсумкова ціна {cash}</div>
            </div>
            <div className="headerLine"></div>
        </header>
    )
}

export default Header;
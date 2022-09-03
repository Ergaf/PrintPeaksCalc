import React from "react";
import {useDispatch, useSelector} from "react-redux";
import Option from "./Option";

function Options(props) {
    const dispatch = useDispatch()
    const prices = useSelector(state => state.prices.prices)
    const file = useSelector(state => state.file.file)
    const destiny = useSelector(state => state.file.file.destiny)

    const blackWhiteD = prices[3].variants
    const colorOneSideDA4 = prices[4].variants
    const colorTwoSideDA4 = prices[5].variants
    const colorOneSideDA3 = prices[6].variants
    const colorTwoSideDA3 = prices[7].variants

    if(file.format === "А4" && file.sides === "одна" && file.color === "чорно-білий"){
        return (
            <div className="pickOptions">
                {blackWhiteD.map(e => <Option this={e[0]} file={file.destiny} key={e[0]} option="destiny"/>)}
            </div>
        )
    }
    if(file.format === "А4" && file.sides === "одна" && file.color === "кольоровий"){
        return (
            <div className="pickOptions">
                {colorOneSideDA4.map(e => <Option this={e[0]} file={file.destiny} key={e[0]} option="destiny"/>)}
            </div>
        )
    }
    if(file.format === "А4" && file.sides === "дві" && file.color === "кольоровий"){
        return (
            <div className="pickOptions">
                {colorTwoSideDA4.map(e => <Option this={e[0]} file={file.destiny} key={e[0]} option="destiny"/>)}
            </div>
        )
    }
    if(file.format === "А3" && file.sides === "одна" && file.color === "кольоровий"){
        return (
            <div className="pickOptions">
                {colorOneSideDA3.map(e => <Option this={e[0]} file={file.destiny} key={e[0]} option="destiny"/>)}
            </div>
        )
    }
    if(file.format === "А3" && file.sides === "дві" && file.color === "кольоровий"){
        return (
            <div className="pickOptions">
                {colorTwoSideDA3.map(e => <Option this={e[0]} file={file.destiny} key={e[0]} option="destiny"/>)}
            </div>
        )
    }
}

export default Options
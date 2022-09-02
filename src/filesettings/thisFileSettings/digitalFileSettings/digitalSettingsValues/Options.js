import React from "react";
import {useDispatch, useSelector} from "react-redux";

function Options(props) {
    const dispatch = useDispatch()
    const prices = useSelector(state => state.prices.prices)
    const file = useSelector(state => state.file.file)

    if(props.this === props.file){
        return <div className="picked">{props.this}</div>
    } else {
        return <div className="notPicked">{props.this}</div>
    }
}

export default Options
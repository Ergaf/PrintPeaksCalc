import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {moveFileAction} from "../../../../store/thisFileReducer";
import {calcPrintingPrice} from "../../../../calcFunction/calcFunction";
import {getAction} from "../../../../store/cashReducer";

function Option(props) {
    const dispatch = useDispatch()
    const prices = useSelector(state => state.prices.prices)
    const file = useSelector(state => state.file.file)
    const files = useSelector(state => state.files.files)

    const changeOption = () => {

        switch (props.option) {
            case "format":
                file.format = props.this
                dispatch(moveFileAction(file))
                break;
            case "color":
                file.color = props.this
                dispatch(moveFileAction(file))
                break;
            case "sides":
                file.sides = props.this
                dispatch(moveFileAction(file))
                break;
            case "destiny":
                file.destiny = props.this
                file.price = calcPrintingPrice(file, prices)

                let priceP = 0
                files.forEach(e => {
                    priceP = priceP + e.price
                })
                dispatch(getAction(priceP))

                dispatch(moveFileAction(file))
                break;
            default:
                break;
        }
    }

    if(props.this === props.file){
        return <div className="picked">{props.this}</div>
    } else {
        return <div className="notPicked" onClick={changeOption}>{props.this}</div>
    }
}

export default Option
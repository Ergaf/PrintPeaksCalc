import React from "react";
import {useDispatch, useSelector} from "react-redux";
import Option from "./Option";
import Options from "./Options";
import {moveFileAction} from "../../../../store/thisFileReducer";
import {calcPrintingPrice} from "../../../../calcFunction/calcFunction";
import {getAction} from "../../../../store/cashReducer";

function DigitalValues() {
    const dispatch = useDispatch()
    const prices = useSelector(state => state.prices.prices)
    const file = useSelector(state => state.file.file)
    const format = useSelector(state => state.file.file.format)
    const color = useSelector(state => state.file.file.color)
    const sides = useSelector(state => state.file.file.sides)
    const count = useSelector(state => state.file.file.count)
    const price = useSelector(state => state.file.file.price)
    const files = useSelector(state => state.files.files)

    const formatD = prices[0].variants
    const colorsD = prices[1].variants
    const sidesD = prices[2].variants

    const countIncrement = () => {
        file.count = file.count + 1
        file.price = calcPrintingPrice(file, prices)
        dispatch(moveFileAction(file))

        let priceP = 0
        files.forEach(e => {
            priceP = priceP + e.price
        })
        dispatch(getAction(priceP))
    }
    const countDencrement = () => {
        file.count = file.count - 1
        file.price = calcPrintingPrice(file, prices)
        dispatch(moveFileAction(file))

        let priceP = 0
        files.forEach(e => {
            priceP = priceP + e.price
        })
        dispatch(getAction(priceP))
    }

    return (
        <div>
            {file.documentType === 1 &&
                <div>Документ</div>
            }
            {file.documentType === 2 &&
                <div>Презентація</div>
            }

            {file.format &&
                <div>
                    Формат
                    <div  className="pickOptions">
                        {formatD.map(e => <Option this={e[0]} file={file.format} key={e[0]} option="format"/>)}
                    </div>
                </div>
            }

            {file.color &&
            <div>
                Кольоровість
                <div  className="pickOptions">
                    {colorsD.map(e => <Option this={e[0]} file={file.color} key={e[0]}  option="color"/>)}
                </div>
            </div>
            }

            {file.sides &&
            <div>
                Сторони
                <div  className="pickOptions">
                    {sidesD.map(e => <Option this={e[0]} file={file.sides} key={e[0]} option="sides"/>)}
                </div>
            </div>
            }

            {file.destiny &&
            <div>
                Щильність папіру
                <Options/>
            </div>
            }

            <div>
                Кількість
                <div className="pickOptions">
                    <button className="notPicked" onClick={countIncrement}>+</button>
                    <p>{file.count}</p>
                    <button className="notPicked" onClick={countDencrement}>-</button>
                </div>
            </div>

            <div>Ціна {file.price}</div>

        </div>
    )
}

export default DigitalValues
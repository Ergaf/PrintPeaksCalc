import React from "react";
import {useDispatch, useSelector} from "react-redux";
import Option from "./Option";
import Options from "./Options";

function DigitalValues() {
    const dispatch = useDispatch()
    const prices = useSelector(state => state.prices.prices)
    const file = useSelector(state => state.file.file)
    const format = useSelector(state => state.file.file.format)
    const color = useSelector(state => state.file.file.color)
    const sides = useSelector(state => state.file.file.sides)

    const formatD = prices[0].variants
    const colorsD = prices[1].variants
    const sidesD = prices[2].variants
    const blackWhiteD = prices[3].variants
    const colorOneSideDA4 = prices[4].variants
    const colorTwoSideDA4 = prices[5].variants
    const colorOneSideDA3 = prices[6].variants
    const colorTwoSideDA3 = prices[7].variants

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

        </div>
    )
}

export default DigitalValues
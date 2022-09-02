import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {moveFileAction} from "../../../store/thisFileReducer";
import DigitalValues from "./digitalSettingsValues/DigitalValues";
import {modifyOneFileAction} from "../../../store/filesReducer";

function DigitalFileSettings() {
    const dispatch = useDispatch()
    const prices = useSelector(state => state.prices.prices)
    const file = useSelector(state => state.file.file)
    const fileDocumentType = useSelector(state => state.file.file.documentType)

    const changeDocumentType = (type) => {
        const newFile = newFileGenFromNewTypeAndSetParametersToDefault(type)
        dispatch(moveFileAction(newFile))
        dispatch(modifyOneFileAction(newFile))
    }

    const newFileGenFromNewTypeAndSetParametersToDefault = (type) => {
        const fileChanged = {
            id: file.id,
            name: file.name,
            type: file.type,
            pick: file.pick,
            documentType: type
        };

        if(type === 1){
            fileChanged.format = prices[0].variants[0][0]
            fileChanged.destiny = prices[3].variants[0][0]
            fileChanged.sides = prices[2].variants[0][0]
            fileChanged.color = prices[1].variants[0][0]
            fileChanged.binding = 0
        }

        if(type === 2){
            fileChanged.format = prices[0].variants[0][0]
            fileChanged.destiny = 2
            fileChanged.sides = prices[2].variants[0][0]
            fileChanged.cower = 0
            fileChanged.color = prices[1].variants[1][0]
            fileChanged.binding = 1
        }

        return fileChanged
    }

    return (
        <div>
            <div className="pickDocumentType">
                <button className="documentTypeUnit" onClick={() => changeDocumentType(1)}>Документ</button>
                <button className="documentTypeUnit" onClick={() => changeDocumentType(2)}>Презентація</button>
                <button className="documentTypeUnit" onClick={() => changeDocumentType(3)}>фигня3</button>
                <button className="documentTypeUnit" onClick={() => changeDocumentType(4)}>фигня4</button>
                <button className="documentTypeUnit" onClick={() => changeDocumentType(5)}>фигня5</button>
                <button className="documentTypeUnit" onClick={() => changeDocumentType(6)}>фигня6</button>
            </div>

            <DigitalValues/>
        </div>
    )
}

export default DigitalFileSettings
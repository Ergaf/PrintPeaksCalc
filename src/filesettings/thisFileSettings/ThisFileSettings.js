import React from "react";
import "./ThisFileSettings.css"
import {useDispatch, useSelector} from "react-redux";
import DocumentFileSettings from "./digitalFileSettings/DigitalFileSettings";
import DigitalValues from "./digitalFileSettings/digitalSettingsValues/DigitalValues";

function ThisFileSettings() {
    const dispatch = useDispatch()
    const files = useSelector(state => state.files.files)
    const prices = useSelector(state => state.prices.prices)
    const file = useSelector(state => state.file.file)


    return (
        <div>
            {file.type === 1 &&
                <DocumentFileSettings />
            }

            {file.type === 2 &&
                <div className="pickDocumentType">
                    Сувенір
                </div>
            }
            {file.type === 3 &&
            <div className="pickDocumentType">
                Фото
            </div>
            }
        </div>
    )
}

export default ThisFileSettings;
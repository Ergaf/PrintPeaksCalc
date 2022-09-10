import React, {useState} from "react";
import "./FileSettings.css"
import {useDispatch, useSelector} from "react-redux";
import {
    addFileAction,
    pickFileAction,
    removeFileAction,
} from "../store/filesReducer";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ThisFileSettings from "./thisFileSettings/ThisFileSettings";
import {moveFileAction, removeFileIfTrueAction} from "../store/thisFileReducer";

function FileSettings() {
    const dispatch = useDispatch()
    const files = useSelector(state => state.files.files)
    const prices = useSelector(state => state.prices.prices)
    const file1 = useSelector(state => state.file.file)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const createFile = (name, type) => {
        const file = {
            name,
            type,
            id: Date.now(),
            pick: "#ffffff",
            count: 1,
            price: 0
        }
        dispatch(addFileAction(file))
        setShow(false)
    }

    const pickThis = (file) => {
        dispatch(pickFileAction(file.id))
        dispatch(moveFileAction(file))
    }

    const removeFile = (file) => {
        dispatch(removeFileAction(file.id))
        if(file.id === file1.id){
            dispatch(removeFileIfTrueAction())
        }
    }

    const renderFiles = files.map((file) =>
            <div className="fileNameContainer"
                        key={file.id.toString()} style={{background: file.pick}}>
                <div className="fileName" onClick={() => pickThis(file)}>{file.name}</div>
                <div className="fileRemoveButton" onClick={() => removeFile(file)}>x</div>
            </div>
    )

    return (
        <div>
            <div className="filesContainer">
                {renderFiles}
                <button className="fileAddButton" onClick={handleShow}>add</button>
            </div>

            <div className="fileRedact">
                <div className="fileDisplay">
                    <ThisFileSettings />
                </div>



                <div className="fileSettings">
                    {prices.map(price =>
                        <div className="fileNameContainer" key={price.name}>
                            <div className="fileName">{price.name}</div>
                        </div>
                    )}
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Виберіть варіант файлу</Modal.Title>
                </Modal.Header>
                <Modal.Body>=></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => createFile("Цифра", 1)}>
                        Цифра
                    </Button>
                    <Button variant="primary" onClick={() => createFile("Сувенір", 2)}>
                        Сувенір
                    </Button>
                    <Button variant="primary" onClick={() => createFile("Фото", 3)}>
                        Фото
                    </Button>
                </Modal.Footer>
            </Modal>


        </div>
    )
}

export default FileSettings;
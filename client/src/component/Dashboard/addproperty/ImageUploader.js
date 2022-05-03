import React, { useState } from "react";
import { Row } from "../Dashboard.styled";
import { 
    ImageUploaderWrapper, 
    UploadIcon,
    CloseIcon,
} from "./ImageUploader.styled";

function ImageUploader() {
    //State to store Image
    const [images, setImages] = useState([]);

    // Creating the Url for the file
    const handleMultipleImages = (evnt) => {
        const selectedFiles = [];
        let targetFiles = evnt.target.files;
        const targetFilesObject = [...targetFiles];
        targetFilesObject.map((file) => {
            return selectedFiles.push(URL.createObjectURL(file));
        });

        setImages([...images, ...selectedFiles]);
    };
    //upload the file
    return (
        <ImageUploaderWrapper>
            <Row container className="row-container" row>
                {
                    images.map((url) => {
                        return (
                            <Row item xs={12} md={4}>
                                <div className="image-container">
                                    <CloseIcon/>
                                    <img src={url} />
                                </div>
                            </Row>
                        )
                    })
                }
                <Row item xs={12} md={4}>
                    <div className="form-group">
                        <UploadIcon />
                        <label htmlFor="file">Selectionnez Vos images...</label>
                        <input type="file" id="file" name="file" onChange={handleMultipleImages} multiple />
                    </div>
                </Row>
            </Row>
        </ImageUploaderWrapper>
    );
}

export default ImageUploader;

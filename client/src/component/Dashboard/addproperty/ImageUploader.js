import React, { useEffect, useState } from "react";
import { Row } from "../Dashboard.styled";
import {
    ImageUploaderWrapper,
    UploadIcon,
    CloseIcon,
    CloseSpan
} from "./ImageUploader.styled";

function ImageUploader(props) {
    //State to store Images
    const [tempBlobs, setTempBlobs] = useState([]);
    const [imagesFiles, setImagesFiles] = useState([]);
    // Creating the Url for the file
    const handleMultipleImages = (evnt) => {

        //get files from the input file and store it .
        const targetFiles = [];
        targetFiles.push(...evnt.target.files);
        setImagesFiles([...targetFiles]);

        // store Blobs...
        const blobs = [];
        targetFiles.map(file => { return blobs.push(URL.createObjectURL(file)) });
        setTempBlobs(blobs);
    };

    //set the blobs and the file 
    //sending array of images to parent..
    useEffect(() => {
        props.setImages(imagesFiles);
    }, [imagesFiles])


    // delete imgs when clicking on the icon
    const deleteImg = (event) => {
        const ArrayImg = [];
        const targetFiles = imagesFiles;

        ArrayImg.push(event.target.nextElementSibling.src);
        let index = tempBlobs.findIndex(element => element === ArrayImg[0]);

        targetFiles.splice(index, 1);
        setImagesFiles(targetFiles);

        let newImages = tempBlobs && tempBlobs.filter(element => element != ArrayImg[0]);
        setTempBlobs(newImages);


    }

    return (
        <ImageUploaderWrapper>
            <Row container className="row-container" row>
                {
                    tempBlobs.map((url) => {
                        return (
                            <Row item xs={12} md={4}>
                                <div className="image-container" >
                                    <CloseSpan onClick={event => deleteImg(event)} className="span-delete">
                                    </CloseSpan>
                                    <img src={url} />
                                    <CloseIcon />
                                </div>
                            </Row>
                        )
                    })
                }
                <Row item xs={12} md={4}>
                    <div className="form-group">
                        <UploadIcon />
                        <label htmlFor="file">Selectionnez Vos images...</label>
                        <input type="file" id="file" name="Myfile" onChange={handleMultipleImages} multiple />
                    </div>
                </Row>
            </Row>
        </ImageUploaderWrapper>
    );
}

export default ImageUploader;

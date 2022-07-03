import React, { useEffect, useState, useLocation } from "react";
import styled from "styled-components";
import { Row } from "../Dashboard.styled";
import {
    EditBtn,
} from "../profile/Profile.styled";
import { MdEdit } from "react-icons/md";
import {
    ImageUploaderWrapper,
    UploadIcon,
    CloseIcon,
    CloseSpan
} from "../addproperty/ImageUploader.styled";
import {
    ImageContainer
} from './ProfilePictureUploader.styled'
const EditIcon = styled(MdEdit)`
    font-size: 20px;
    color:#fff !important;
    margin: 0 auto;
`;

function ProfilePictureUploader(props) {

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
            <Row container className="row-container" row justifyCenter alignCenter>
                <ImageContainer>
                    {
                        tempBlobs.length != 0 ?
                            tempBlobs.map((url) => {
                                return (
                                    <img src={url} />
                                )
                            })
                            :
                            props.picture === null ?
                            <img/>
                            :
                            <img src={"http://localhost:3006/images/" + props.picture} />

                    }

                    <div className="form-group" >
                        <label htmlFor="plan"><EditIcon /></label>
                        <input type="file" id="plan" name="myPlan" onChange={handleMultipleImages} />
                    </div>
                </ImageContainer>
            </Row>
        </ImageUploaderWrapper>
    );
}

export default ProfilePictureUploader;


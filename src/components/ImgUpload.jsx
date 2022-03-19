import React, { useState } from 'react'
import styled from "styled-components";
import { Button, Input } from "@mui/material";
import { db, storage } from "../firebase"
import { useStateValue } from "../StateProvider"

function ImgUpload() {

    const [image, setImage] = useState(null);
    const [caption, setCaption] = useState("");
    const [{ user }] = useStateValue();

    const fileChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }

    const fileUpload = () => {

        if(caption !== " "){
            db.collection("facebook").add({
                postCaption: caption
            })
            const uploadTask = storage.ref(`image/${image.name}`).put(image);
            uploadTask.on(
                "stated_changed",
                () => {
                    storage
                        .ref("images")
                        .child(image.name)
                        .getDownloadURL()
                        .then(url => {
                            db.collection("facebook").add({
                                postCaption: caption,
                                postImg: url,
                                email: user.user.email,
                                avatarImg: "https://i.ytimg.com/vi/sNC8GPvxzd4/maxresdefault.jpg"
                            })
                        })

                    setImage(null)
                    setCaption("")
                }
            )
        }
        else{
            alert("Write a Comment")
        }
    }

    return (
        <ImgUploads>
            <input type="file"
                onChange={fileChange}
            />
            <Input
                placeholder="Enter Your Post"
                type="text"
                value={caption}
                onChange={e => setCaption(e.target.value)}
            />
            <Button
                className="postCaption"
                onClick={fileUpload}>
                Upload
            </Button>
        </ImgUploads>
    )
}
const ImgUploads = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    width:90%;
    padding: 20px;
    background: #fff;
    box-shadow: 0 0 4px 4px lavender;
    margin: auto;

    @media (max-width:768px){
        flex-direction: column;
        width: 100%;
        margin: 0;
        padding: 10px;
        input{
            margin: 10px 0 !important;
            width: 100%;
        }
    }
`;

export default ImgUpload
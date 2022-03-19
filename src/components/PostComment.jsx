import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import { Button, Input } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import { db } from "../firebase"

function PostComment({ id, imgUrl, email, post, avatarImg }) {

    const [comment, setComment] = useState("");
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("facebook").doc(id).collection("comment").orderBy("email", 'asc').onSnapshot(snapshot =>
            setPosts(
                snapshot.docs.map(doc => doc.data())
            )
        )
    }, [id])

    const sendComment = () => {
        db.collection("facebook").doc(id).collection("comment").add({
            email: email,
            post: comment,
        })
    }

    return (
        <Wrapper>
            <div className="Header">
                <img src={avatarImg} alt="" />
                <h4> {email} </h4>
            </div>
            <div className="post">
                <img src={imgUrl} alt="" />
            </div>
            <div className="posts">
                <h4>{email}: {post} </h4>
                {posts.map((post, index) => (
                    <h4 key={index}> {post.email} : {post.post} </h4>
                ))}
            </div>

            <div className='app__footer'>
                <Input
                    placeholder="enter your post"
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                />
                <SendIcon
                    onClick={sendComment}
                />
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 40%;
    padding: 10px;
    background: #fff;
    box-shadow: 0 0 4px 4px lavender;
    margin: 50px auto;
    .Header{
        display:flex;
        align-items:center;
        img{
            width:70px;
            height: 70px;
            border-radius: 50%;
            object-fit: cover;
        }
    }
    .post{
        height: 80%;
        width: 100%;

        img{
          width: 100%;
          object-fit :contain ;
          padding: 20px 0;
        }
    }
    .posts{
        height: 50px;
        overflow-y: scroll;
        overflow-x: hidden;
        ::-webkit-scrollbar{
            display: none;
        }
        h4{
            font-size: 16px;
            margin: 10px 0;
            font-weight: 500;
        }
    }

    .app__footer{
        display: flex;
        align-items:center;
        padding: 10px;
        border-top:1px solid lightgray ;
        border-bottom:1px solid lightgray ;
    }

    @media (max-width:768px){
        width: 100%;
    }
`;

export default PostComment
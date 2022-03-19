import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import styled from "styled-components"
import ImgUpload from './ImgUpload'
import PostComment from "./PostComment"

function Post() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection("facebook")
            .orderBy("email", "asc").onSnapshot((snapshot) => {
                setPosts(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        name: doc.data(),
                    }))
                );
            })
    }, [])
    return (
        <PostWrapper>
            <ImgUpload />

            <div className="body">
                {posts.map((post, index) => (
                    <PostComment
                        key={index}
                        imgUrl={post.name.postImg}
                        email={post.name.email}
                        avatarImg={post.name.avatarImg}
                        post={post.name.postCaption}
                        id={post.id}
                    />
                ))}
            </div>
        </PostWrapper>
    )
}

const PostWrapper = styled.div`
    .body{
    }
`;

export default Post;
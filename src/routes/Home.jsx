import React from 'react';
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase"
import { useNavigate } from "react-router-dom";
import { changeTitle } from '../changeTitle';
import { useEffect } from 'react';
import styled from "styled-components"
import Header from '../components/Header';
import Sidebar from '../components/Sidebar'
import SidebarBodyHeader from '../components/SidebarBodyHeader';
import Post from "../components/Post"

function Home() {

    const [{ user }] = useStateValue();

    const navigateTo = useNavigate();


    useEffect(() => {
        changeTitle("Facebook")
    }, [])

    return (
        <HomeWrapper>
            <Header username={user?.user.email} />
            <AppBody>
                <AppLeft>
                    <Sidebar />
                </AppLeft>
                <AppCenter>
                    <SidebarBodyHeader />
                    <Post />
                </AppCenter>
            </AppBody>
        </HomeWrapper>
    )
}

const HomeWrapper = styled.div``;

const AppBody = styled.div`
    display: flex;
    position: relative;
`;

const AppLeft = styled.div`
    position:fixed;
    padding-top: 100px;
    flex:0.4;
    top:0;
    bottom: 0;
    background-color: rgb(240,242,245);
    bottom: 0;
    width: 300px !important;
    z-index: 1000;

    @media (max-width:768px){
        display: none;
    }
`;

const AppCenter = styled.div`
    width: 80%;
    margin:50px 300px;
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    @media (max-width:768px){
        margin: 50px 0;
        width: 100%;
        padding: 1rem;
        margin-bottom: 250px;
    }
`;


export default Home
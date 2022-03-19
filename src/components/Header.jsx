import React from 'react'
import styled from 'styled-components'
import { TextField, Button } from '@mui/material';
import { useNavigate } from "react-router-dom"
import HomeIcon from '@mui/icons-material/Home';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import VideogameAssetOutlinedIcon from '@mui/icons-material/VideogameAssetOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { auth } from "../firebase"

function Header({ username }) {

    const navigate = useNavigate()

    const logOut = () => {
        auth.signOut();
        navigate("/")
    }

    return (
        <Headers>
            <HeaderLeft>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" alt="" />
                <TextField
                    label="search here"
                />
            </HeaderLeft>
            <HeaderCenter>
                <Button>
                    <HomeIcon />
                </Button>
                <Button>
                    <GroupOutlinedIcon />
                </Button>
                <Button>
                    <OndemandVideoOutlinedIcon />
                </Button>
                <Button
                    onClick={logOut}
                >
                    <GroupsOutlinedIcon />
                </Button>
                <Button>
                    <VideogameAssetOutlinedIcon />
                </Button>

            </HeaderCenter>
            <HeaderRigth>
                <Button>
                    {username ? username : "Anonymus user"}
                </Button>
                <Button>
                    <AppsOutlinedIcon />
                </Button>
                <Button>
                    <ChatOutlinedIcon />
                </Button>
                <Button>
                    <NotificationsOutlinedIcon />
                </Button>
            </HeaderRigth>
        </Headers>
    )
}

const Headers = styled.header`
    position: fixed;
    z-index: 100000;
    background:#fff;
    box-shadow: 0 0 4px 4px #f2f2f2;
    display:flex;
    width:100%;
    top: 0;
    align-items:center;
    justify-content:center;

      @media (max-width:768px){
        padding: 10px;
    }
`;

const HeaderLeft = styled.div`
    display:flex;
    justify-content:center;
    align-items: center;
    img{
        width:50px;
        padding: 10px;
    }
    @media (max-width:768px){
        display:none;
    }
`;

const HeaderCenter = styled.div`
    padding: 15px;
    flex: 0.3;
    display:flex;
    align-items:center;
    justify-content: space-between;
    .MuiSvgIcon-root{
        color: #000 !important;
        font-size: 35px !important;
        margin: 0 15px !important;

        &:hover{
            color:blue !important;
            border-bottom: 1px solid blue;
        }
    }
      @media (max-width:768px){
        display:none;
    }
`;

const HeaderRigth = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;

    .MuiSvgIcon-root{
        font-size:35px;
        margin:0 5px;
        color: #000 !important;
    }
`;

export default Header
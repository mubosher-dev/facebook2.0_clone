import React from 'react'
import styled from 'styled-components';
import SidebarOptions from './SidebarOptions'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import CoronavirusOutlinedIcon from '@mui/icons-material/CoronavirusOutlined';
function Sidebar() {
    return (
        <SidebarWrapper>
            <SidebarOptions Title={"Mubosher Community"} Icon={<PersonOutlineOutlinedIcon />} />
            <SidebarOptions Title={"Groups"} Icon={<GroupOutlinedIcon style={{ color: "rgb(87,186,246)" }} />} />
            <SidebarOptions Title={"Image"} Icon={<StarOutlinedIcon style={{ color: "#F5BC32" }} />} />
            <SidebarOptions Title={"Video"} Icon={<OndemandVideoOutlinedIcon style={{ color: "rgb(38,149,224)" }} />} />
            <SidebarOptions Title={"Watch"} Icon={<AccessTimeOutlinedIcon style={{ color: "rgb(100,121,245)" }} />} />
            <SidebarOptions Title={"Countries"} Icon={<OutlinedFlagIcon style={{ color: "#E9532A" }} />} />
            <SidebarOptions Title={"Caronavirus"} Icon={<CoronavirusOutlinedIcon style={{ color: "red" }} />} />
        </SidebarWrapper>
    )
}

const SidebarWrapper = styled.div`
    width:300px;
`;

export default Sidebar
import React from 'react'
import styled from 'styled-components'

function SidebarOptions({ Icon, Title }) {
    return (
        <SidebarOption>
            {Icon}
            <h4> {Title} </h4>
        </SidebarOption>
    )
}

const SidebarOption = styled.div`
    display:flex;
    cursor: pointer;
    padding: 15px;
    h4{
        margin: 0 10px;
    }
    &:hover{
        background: lightgrey
    }
`;

export default SidebarOptions
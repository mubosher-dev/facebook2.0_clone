import React from 'react'
import styled from 'styled-components'

function SidebarBodyHeader() {
  return (
    <SidebarBodyHeaders>
      <div className='container' >
        <div className="sidebar-item">
          <img src="https://cars.usnews.com/static/images/Auto/custom/14737/2022_Acura_ILX_1.jpg" alt="history" />
          <h3 className='name'>Mayk Tayson</h3>
          <div className="appHeader">
            <img src="https://i.mycdn.me/i?r=AEHujHvw2RjEbemUCNEorZbxYpb_p_9AcN2FmGik64KrkboUjUGQlplW1h-zBJFA2gp7Zi9s0CiBOSDmbngC-I-k&fn=external_8" alt="" />
          </div>
        </div>
        <div className="sidebar-item">
          <img src="https://cars.usnews.com/static/images/Auto/custom/14737/2022_Acura_ILX_1.jpg" alt="history" />
          <h3 className='name'>Mayk Tayson</h3>
          <div className="appHeader">
            <img src="https://i.mycdn.me/i?r=AEHujHvw2RjEbemUCNEorZbxYpb_p_9AcN2FmGik64KrkboUjUGQlplW1h-zBJFA2gp7Zi9s0CiBOSDmbngC-I-k&fn=external_8" alt="" />
          </div>
        </div>
        <div className="sidebar-item">
          <img src="https://cars.usnews.com/static/images/Auto/custom/14737/2022_Acura_ILX_1.jpg" alt="history" />
          <h3 className='name'>Mayk Tayson</h3>
          <div className="appHeader">
            <img src="https://i.mycdn.me/i?r=AEHujHvw2RjEbemUCNEorZbxYpb_p_9AcN2FmGik64KrkboUjUGQlplW1h-zBJFA2gp7Zi9s0CiBOSDmbngC-I-k&fn=external_8" alt="" />
          </div>
        </div>
        <div className="sidebar-item">
          <img src="https://cars.usnews.com/static/images/Auto/custom/14737/2022_Acura_ILX_1.jpg" alt="history" />
          <h3 className='name'>Mayk Tayson</h3>
          <div className="appHeader">
            <img src="https://i.mycdn.me/i?r=AEHujHvw2RjEbemUCNEorZbxYpb_p_9AcN2FmGik64KrkboUjUGQlplW1h-zBJFA2gp7Zi9s0CiBOSDmbngC-I-k&fn=external_8" alt="" />
          </div>
        </div>
        <div className="sidebar-item">
          <img src="https://cars.usnews.com/static/images/Auto/custom/14737/2022_Acura_ILX_1.jpg" alt="history" />
          <h3 className='name'>Mayk Tayson</h3>
          <div className="appHeader">
            <img src="https://i.mycdn.me/i?r=AEHujHvw2RjEbemUCNEorZbxYpb_p_9AcN2FmGik64KrkboUjUGQlplW1h-zBJFA2gp7Zi9s0CiBOSDmbngC-I-k&fn=external_8" alt="" />
          </div>
        </div>
      </div>
    </SidebarBodyHeaders>
  )
}

const SidebarBodyHeaders = styled.div`
    overflow-x: hidden;
      ::-webkit-scrollbar{
      display: none ;
    }
  .container{
    padding: 15px 0;
    position: relative;
    margin: 20px 0;
    display:flex;
    align-items:center;
    overflow: hidden;
    justify-content: center;
    overflow-x: scroll;


    .sidebar-item{
      width:200px;
      height: 250px;
      position: relative;
      margin: 0 10px;
      border-radius: 20px;
      background: #fff;
      box-shadow: 0 0 4px 4px lavender;
      cursor:pointer;
      padding: 10px;
      &:hover{
        opacity:0.8;
      }
      .appHeader{
        position:absolute;
        top: 20%;
        left: 20%;
        img{
          width:50px;
          height: 50px;
          border-radius: 50% !important;
          object-fit: cover;
          border: 1px solid blue;
        }
      }
      img{
        width:100%;
        height: 100%;
        object-fit: cover;
      }
      .name{
        font-weight: 500;
        color: #fff;
        position:absolute;
        bottom:10%;
        margin-left: 10px;
      }
    }
  }
  @media (max-width:768px){
    width: 400px;
    overflow-x: scroll;
    .container{
      width: 300%;
      align-items: flex-start;
      justify-content: inherit;
    }
    .sidebar-item{
      width: 300px;
    }
  }
`;

export default SidebarBodyHeader
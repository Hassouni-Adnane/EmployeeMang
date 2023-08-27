import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 40px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    background: #252831;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;
const SidebarLabel = styled.span`
  margin-left: 16px;
`;
const DropDownLink=styled(Link)`
    background:#414757 ;
    display:flex ;
    height:40px;
    align-items:center;
    text-decoration:none ;
    padding-left:3rem;
    color:#f5f5f5;
&:hover{
    background:#632ce4;
    cursor:pointer ;
}
`

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);
  return (
    <>
      <SidebarLink to="#"onClick={item.subNav&&showSubnav}>
        <div >
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>{item.subNav && subnav ? item.iconOpened : item.subNav
        ?item.iconClosed:null}</div>
      </SidebarLink>
      {subnav&&item.subNav.map((item,index)=>{
          return(
              <>
              <DropDownLink to={item.path} key={index} >
                  {item.icon}
                  <SidebarLabel>{item.title}</SidebarLabel> 
            </DropDownLink>
              </>
          )
      })}
    </>
  );
};

export default SubMenu;

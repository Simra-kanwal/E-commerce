import React from 'react'
import { NavLink } from 'react-router'
const Name = ({name}) => {
  return (
    <>
        <NavLink to="/" style={{color:"#56569c",cursor: "pointer"}}>{name}</NavLink>
    </>
  )
}

export default Name

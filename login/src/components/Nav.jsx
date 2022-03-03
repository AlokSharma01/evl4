import React from 'react'
import style from "./Nav.module.css"
import { Link } from 'react-router-dom'


export const Nav = () => {
  return (
    <div>
        <div className={style.nav}>
            <Link to="/">Create</Link>
           <Link to="/login">login</Link>
           <Link to="/Users">users</Link>
           <Link to="/Posts">Posts</Link>
        </div>
    </div>
  )
}

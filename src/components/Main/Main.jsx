import React from 'react'
import './Main.css'
const Main = ({id, name, age, email, image}) => {
  return (
    <div className="main">
        <img src={image} alt="img" className="main-img" />
        <div className="main-info">
            <h4 className="name">{name}</h4>
            <p className="email">{email}</p>
            <p className="age">{age} years old</p>
        </div>
    </div>
  )
}

export default Main;
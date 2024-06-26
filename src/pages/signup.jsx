import React from 'react'
import { Link } from 'react-router-dom'

function signup() {
  return (
    <main>
        <form className="form">
    <p className="title">Register </p>
    <p className="message">Signup now and get full access to our app. </p>
        <div className="flex">
        <label>
            <input className="inputs" type="text" placeholder="" required=""/>
            <span>Firstname</span>
        </label>

        <label>
            <input className="inputs" type="text" placeholder="" required=""/>
            <span>Lastname</span>
        </label>
    </div>  
            
    <label>
        <input className="inputs" type="email" placeholder="" required=""/>
        <span>Email</span>
    </label> 
        
    <label>
        <input className="inputs" type="password" placeholder="" required=""/>
        <span>Password</span>
    </label>
    <label>
        <input className="inputs" type="password" placeholder="" required=""/>
        <span>Confirm password</span>
    </label>
    <button className="submit">Submit</button>
    <p className="signin">Already have an acount ? <Link to="/"><a href="#">Login</a></Link> </p>
</form>
    </main>
  )
}

export default signup
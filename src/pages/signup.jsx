import React from 'react'
import { Link } from 'react-router-dom'

function signup() {
  return (
    <main>
        <form class="form">
    <p class="title">Register </p>
    <p class="message">Signup now and get full access to our app. </p>
        <div class="flex">
        <label>
            <input class="inputs" type="text" placeholder="" required=""/>
            <span>Firstname</span>
        </label>

        <label>
            <input class="inputs" type="text" placeholder="" required=""/>
            <span>Lastname</span>
        </label>
    </div>  
            
    <label>
        <input class="inputs" type="email" placeholder="" required=""/>
        <span>Email</span>
    </label> 
        
    <label>
        <input class="inputs" type="password" placeholder="" required=""/>
        <span>Password</span>
    </label>
    <label>
        <input class="inputs" type="password" placeholder="" required=""/>
        <span>Confirm password</span>
    </label>
    <button class="submit">Submit</button>
    <p class="signin">Already have an acount ? <Link to="/"><a href="#">Login</a></Link> </p>
</form>
    </main>
  )
}

export default signup
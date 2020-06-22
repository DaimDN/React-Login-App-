import React from 'react';
import ReactDOM from 'react-dom';

function register(){
    return(
        <div style={{width: '30%', margin: 'auto'}} >
        <br/> <br/> 
        <h1 class="h3 mb-3 font-weight-normal">Registration Panel </h1>

            <form className="form-group" method="post" action="/process">
            <label for="name">First Name </label>
            <input className="form-control" type="text" id="name" name="name" required></input>
            
            <label for="name">Last Name </label>
            <input className="form-control" type="text" id="name" name="name" required></input>

            <label for="name">Email Address </label>
            <input className="form-control" type="email" id="name" name="name" required></input>

            <label for="name">Date of Birth </label>
            <input className="form-control" type="date" id="name" name="name" required></input>


            <label for="password">Password</label>
            <input className="form-control" type="password" id="password" name="password" required></input>
            <br/>
            
            <button className="btn btn-danger btn-block btn-lg" type="submit" >Register</button>
            <a href="/account" className="nav-link text-center" style={{}}>or Login</a>
                
            </form>
        </div>
    )


}

export default register;
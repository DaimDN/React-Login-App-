import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Dashboard(){
    return(
        <div style={{width: '30%', margin: 'auto'}} >
        <br/> <br/> 
        <h1 class="h3 mb-3 font-weight-normal">Account Panel </h1>

            <form className="form-group" method="post" action="/process">
            <label for="name">Username or Email Address</label>
            <input className="form-control" type="text" id="name" name="name" required></input>
             <label for="password">Password</label>
            <input className="form-control" type="password" id="password" name="password" required></input>
            <br/>
            
            <button className="btn btn-info btn-block btn-lg">Login</button>
            <p className="text-center"> or </p>
            <a href="/register" className="btn btn-lg btn-danger btn-block" style={{}}>Register</a>
                
            </form>
        </div>
    )
}

export default Dashboard;
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function Blog(){
    var items = [
        {name: 'daim', Address: 'James street  Glsgow'},
        {name: 'ALi Raza', Address: 'Omega Street'},
        {name: 'James Johsnson'}
    
    ]
    return(
      <div className="row">
          {
            items.map((value, index)=>{
                return <div className="jumbotron" style={{marginRight: '20px', marginLeft: '20px', backgroundColor: 'orange'}} key={index}>{value.name} </div>
            }
            )

          }
      </div>
    )
}
export default Blog;
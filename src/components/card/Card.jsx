import React from 'react'
import "./Card.css"


function Card(props) {
    return (
        <div className="card-container">
            <img src={`https://robohash.org/${props.item.id}?set=set2`} alt="pic"/>
           <h4>
           {
                props.item.name
            }
           </h4>
           <p>
           {
                props.item.email
            }
           </p>
           
            
        </div>
    )
}


export default Card

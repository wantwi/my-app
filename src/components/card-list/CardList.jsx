import React from 'react'
import './cardList.css'
import Card from "../card/Card"
function CardList(props) {
    return (
        <div className="card-list">
            {
           props.items.map((item,index) =><Card key={index} item={item}/>)
          }
        </div>
    )
}

export default CardList

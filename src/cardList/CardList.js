import React from "react";
import Card from "../card/Card";
import members from "../members";
import "./CardList.css"

function CardList () {
    const cardComponent = members.map((user) => {
        return (
            <Card 
            key={user.id}
            username={user.name}
            native={user.native}
            learning={user.learning}
            />
        )
    })
    return (
        <div className="card-list">
            {cardComponent}
        </div>
        );
}

export default CardList;
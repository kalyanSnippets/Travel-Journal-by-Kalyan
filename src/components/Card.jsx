import React from "react"

export default function Card({item}){
    return (
        <div className= "card card-bottom">
            <img src={item.imageUrl}/>
            <div className="card--main">
                    <p className="card--location">
                        <i className="fa-solid fa-location-dot"></i>
                        <span>{(item.location).toUpperCase()}</span>
                        <a href={item.googleMapsUrl}> View on Google Maps </a>
                    </p>
             
                <h1>{item.title}</h1>
                <h5 className="card--date">{item.startDate} - {item.endDate}</h5>
                <p className="card--content">{item.description}</p>
            </div> 
        </div>
    )
}
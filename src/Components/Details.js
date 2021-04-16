import React from "react"

function Details(props)
{
    return(
    
        <div className="top">
            <h2 className="view">{props.view}</h2>
            <dl className="top2">
                <dt className="Name">{props.name}</dt>
                <dd className="info">{props.meaning}</dd>
            </dl>
            
        </div>
    )
}
export default Details;
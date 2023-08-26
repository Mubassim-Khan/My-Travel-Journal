import React from 'react'

export default function Card(props) {
    let {title, location, mapsLink, startData, endDate, description, image} = props;
    return (
        <div className="container my-3">
            <div className="row">
                <div className='col-md-4'>
                    <div className="card border-dark text-bg-secondary mb-3 mx-2 mt-3 my-3" style={{ width: "18rem" }}>
                        <img src={image} className="card-img-top rounded-start" alt="Cards Image" />
                        <div className="card-body">
                            <p className="card-text">{location}</p>
                            <a href="..."></a>
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

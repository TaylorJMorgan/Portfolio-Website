import React from 'react';

function Card(props) {
    return (
        <div className='card text-center align-items-center card-container'>
            <div className='card-body'>
                {props.body}
                <img src={props.imgSrc} className='card-img-top' alt={props.alt} />
                <h3 className='card-title'>{props.title}</h3>
                <h6 className='card-subtitle'>{props.subtitle}</h6>
                <p className='card-text'>{props.content}</p>
            </div>
        </div>
    )
}

export default Card;
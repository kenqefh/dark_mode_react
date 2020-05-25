import React from 'react';
import './card.css';

function Card({followers, icon, red, today, todayIcon, username}){
    //console.log({classCard, followers, icon, id, key, today, todayIcon, username})
    return(
        <article className={"card " + red}>
            <p className="card-title">
                <img src={icon} alt="" />
                {username}
            </p>
            <p className="card-followers">
                <span className="card-followers-number">{followers}</span>
                <span className="card-followers-title">Followers</span>
            </p>
            <p className="card-today">
                <img src={todayIcon} alt="" />
                {today} Today
            </p>
        </article>
    );
}

export default Card;
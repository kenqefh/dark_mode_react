import React from 'react'
import './card-small.css'

export default function CardSmall({title, icon, number, todayIcon, todayStat, danger}){
    return (
        <div className="card-small">
            <p className="card-small-views">{title}</p>
            <p className="card-small-icon">
                <img src={icon} alt="" />
            </p>
            <p className="card-small-number">{number}</p>
            <p className={"card-small-percentage " + danger}>
                <span>
                   <img src={todayIcon} alt="" />
                   {todayStat}%
                </span>
            </p>
        </div>
    );
}
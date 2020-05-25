import React from 'react'
import CardSmall from './card-small'
import './overview'

const cardSmallList = [
    {
        id: 1,
        title: 'Page Views',
        icon: 'images/icon-facebook.svg',
        number: '87',
        todayIcon: 'images/icon-up.svg',
        todayStat: 3
    },
    {
        id: 2,
        title: 'Likes',
        icon: 'images/icon-facebook.svg',
        number: '52',
        todayIcon: 'images/icon-down.svg',
        todayStat: 2,
        danger: 'is-danger'
    },
    {
        id: 3,
        title: 'Likes',
        icon: 'images/icon-instagram.svg',
        number: '5431',
        todayIcon: 'images/icon-up.svg',
        todayStat: 2257
    },
    {
        id: 4,
        title: 'Profile Views',
        icon: 'images/icon-instagram.svg',
        number: '52k',
        todayIcon: 'images/icon-up.svg',
        todayStat: 1357
    },
    {
        id: 5,
        title: 'Retweets',
        icon: 'images/icon-twitter.svg',
        number: '117',
        todayIcon: 'images/icon-up.svg',
        todayStat: 303
    },
    {
        id: 6,
        title: 'Likes',
        icon: 'images/icon-twitter.svg',
        number: '507',
        todayIcon: 'images/icon-up.svg',
        todayStat: 553
    },
    {
        id: 7,
        title: 'Likes',
        icon: 'images/icon-youtube.svg',
        number: '107',
        todayIcon: 'images/icon-down.svg',
        todayStat: 19,
        danger: 'is-danger'
    },
    {
        id: 8,
        title: 'Total Views',
        icon: 'images/icon-youtube.svg',
        number: '87',
        todayIcon: 'images/icon-down.svg',
        todayStat: 12,
        danger: 'is-danger'
    }
];
export default function OverView(){
    return (
        <section className="overview">
            <div className="wrapper">
               <h2>Overview - Today</h2>
                <div className="grid">                    
                    {
                        cardSmallList.map(({id, title, icon, number, todayIcon, todayStat, danger}) => (
                            <CardSmall
                                key={id}
                                title={title}
                                icon={icon}
                                number={number}
                                todayIcon={todayIcon}
                                todayStat={todayStat}
                                danger={danger}
                            />
                        ))
                    }                    
                </div>
            </div>         
        </section>
    );
}
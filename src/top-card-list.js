import React from 'react';
import Card from './card.js';

const cardListData = [
    {
        id: 1,
        icon: 'images/icon-facebook.svg',
        username: '@frank',
        followers: 30245,
        todayIcon: 'images/icon-up.svg',
        today: 120,
        red: 'facebook'
    },
    {
        id: 2,
        icon: 'images/icon-twitter.svg',
        username: '@kenqefh',
        followers: 98700,
        todayIcon: 'images/icon-up.svg',
        today: 1500,
        red: 'twitter'
    },
    {
        id: 3,
        icon: 'images/icon-instagram.svg',
        username: '@frank',
        followers: 10854,
        todayIcon: 'images/icon-up.svg',
        today: 352,
        red: 'instagram'
    },
    {
        id: 4,
        icon: 'images/icon-youtube.svg',
        username: '@kenqefh',
        followers: 520987,
        todayIcon: 'images/icon-up.svg',
        today: 30052,
        red: 'youtube'
    }
];

function TopCardList(){
    return (
        <section className="top-cards">
            <div className="wrapper">
                <div className="grid">
                    {
                        cardListData.map((cardData) =><Card key={cardData.id} {...cardData} />)
                    }                    
                </div>
            </div>
        </section>
    );
}

export default TopCardList;
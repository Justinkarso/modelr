import React from 'react'

import Header from '../../assets/img/Header.png'
import List from '../module/List'

export default function Home() {
    return (
        <>
            <div className="header-img">
                <div className="inner-container">
                    <h2>Free models for everyone</h2>
                    <span>period</span>
                </div>
            </div>
            <div className="second-nav">
                <ul>
                    <li className="active"><a>Most Popular</a></li>
                    <li><a>Top Rated</a></li>
                    <li><a>Recently Added</a></li>
                </ul>
            </div>
            <List/>
        </>
    )
}

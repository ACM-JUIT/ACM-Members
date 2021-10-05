import React from 'react'
import './member.scss'

export default function member() {
    return (
        <div class="card">
            <div class="avatar">
                <img src="https://randomuser.me/api/portraits/men/75.jpg"/>
            </div>
            <div class="title">
                <h2>John Doe</h2>
            </div>
            <div class="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi repellendus laudantium asperiores!
            </div>
            <div class="social">
                <ul>
                <li><i class="fab fa-facebook"></i></li>
                <li><i class="fab fa-twitter"></i></li>
                <li><i class="fab fa-github"></i></li>
                <li><i class="fab fa-dev"></i></li>
                <li><i class="fas fa-link"></i></li>
                </ul>
            </div>
            </div>
    )
}

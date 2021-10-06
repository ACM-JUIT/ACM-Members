import React from 'react'
import './member.scss'

export default function member({ name, quote, insta, github, linkedin }) {
    return (
        <div class="container">
  <div class="card">
    
    <div class="contentBx">
      <h2>{name}</h2>
      <div class="size">
      <h2 style={{fontSize:"1vw"}}>{quote}</h2>
      </div>
      <div class="color">
        <h3>Connect :</h3>
        <a href={insta}><span ></span></a>
        <a href={github}><span ></span></a>
        <a href={linkedin}><span></span></a>
      </div>
      
    </div>
  </div>
</div>
    )
}

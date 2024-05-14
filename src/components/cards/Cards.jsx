import React from 'react'
import './card.scss'
import a1 from '../../assets/a1.png'
import a2 from '../../assets/a2.png'
import a3 from '../../assets/a3.png'


function Cards() {
  return (
    <section className='about'>
      <div className="about__cards container">
        <div className="about__card">
          <div className="about__card-img">
            <img src={a1} alt="" />
          </div>
          <div className="about__card-title">
            FREE AND FAST DELIVERY
          </div>
          <div className="about__card__text">
            Free delivery for all orders over $140
          </div>
        </div>
        <div className="about__card">
          <div className="about__card-img">
            <img src={a2} alt="" />
          </div>
          <div className="about__card-title">
            24/7 CUSTOMER SERVICE
          </div>
          <div className="about__card__text">
            Friendly 24/7 customer support
          </div>
        </div>
        <div className="about__card">
          <div className="about__card-img">
            <img src={a3} alt="" />
          </div>
          <div className="about__card-title">
            MONEY BACK GUARANTEE
          </div>
          <div className="about__card__text">
            We reurn money within 30 days
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cards

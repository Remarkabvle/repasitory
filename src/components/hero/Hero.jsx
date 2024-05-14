import React, { memo } from 'react'
import icon from "../../assets/icon.svg"
import "./hero.scss"
import img from "../../assets/img.png"

const Hero = () => {
  return (
    <section className='hero'>
      <div className="container hero__container">
        <div className="hero__left">
          <div className="hero__icon-img">
            <img src={icon} alt="" />
          </div>
          <h1 className='hero__title'>
            Up to 10% off Voucher
          </h1>
          <button className="hero__btn">
            Shop Now
            <hr />
          </button>
        </div>
        <div className="hero__right">
            <img src={img} alt="" />
        </div>
      </div>
    </section>
  )
}

export default memo(Hero)
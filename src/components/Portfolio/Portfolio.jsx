import React from 'react'
import "./Portfolio.css"
import portfolio1 from "../../assets/portfolio1.png"
import portfolio2 from "../../assets/portfolio2.png"
import portfolio3 from "../../assets/portfolio3.png"
import portfolio4 from "../../assets/portfolio4.png"
import portfolio5 from "../../assets/portfolio5.png"
import portfolio6 from "../../assets/portfolio6.png"
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My React Work </h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className='portfolio_item'>
          <div className="portfolio_item-img">
           <img src={portfolio1} alt="portfolio1" />
          </div>
          <h3>This is Title</h3>
         <div className="btns">

          <a href="/" target='_blank' className='btn' >Github</a>
          <a href="/" target='_blank' className='btn btn-primary'>Live Demo</a>
         </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-img">
           <img src={portfolio2} alt="portfolio1" />
          </div>
          <h3>This is Title</h3>
         <div className="btns">

          <a href="/" target='_blank' className='btn' >Github</a>
          <a href="/" target='_blank' className='btn btn-primary'>Live Demo</a>
         </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-img">
           <img src={portfolio3} alt="portfolio1" />
          </div>
          <h3>This is Title</h3>
         <div className="btns">

          <a href="/" target='_blank' className='btn' >Github</a>
          <a href="/" target='_blank' className='btn btn-primary'>Live Demo</a>
         </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-img">
           <img src={portfolio4} alt="portfolio1" />
          </div>
          <h3>This is Title</h3>
         <div className="btns">

          <a href="/" target='_blank' className='btn' >Github</a>
          <a href="/" target='_blank' className='btn btn-primary'>Live Demo</a>
         </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-img">
           <img src={portfolio5} alt="portfolio1" />
          </div>
          <h3>This is Title</h3>
         <div className="btns">

          <a href="/" target='_blank' className='btn' >Github</a>
          <a href="/" target='_blank' className='btn btn-primary'>Live Demo</a>
         </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-img">
           <img src={portfolio6} alt="portfolio1" />
          </div>
          <h3>This is Title</h3>
         <div className="btns">

          <a href="/" target='_blank' className='btn' >Github</a>
          <a href="/" target='_blank' className='btn btn-primary'>Live Demo</a>
         </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
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
          <h3>Amazone Clone</h3>
         <div className="btns">

          <a rel="noreferrer" href="https://github.com/ShahrozAs/amazon-clone" target='_blank' className='btn' >Github</a>
          <a rel="noreferrer" href="https://clone-2a2d6.web.app/" target='_blank' className='btn btn-primary'>Live Demo</a>
         </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-img">
           <img src={portfolio2} alt="portfolio1" />
          </div>
          <h3>UrbanElegance E-commerce Web-App</h3>
         <div className="btns">

          <a rel="noreferrer" href="https://github.com/ShahrozAs/Ecommerce-app-in-React-Js" target='_blank' className='btn' >Github</a>
          <a rel="noreferrer" href="https://ecommerce-app-in-react-js.web.app/" target='_blank' className='btn btn-primary'>Live Demo</a>
         </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-img">
           <img src={portfolio3} alt="portfolio1" />
          </div>
          <h3>Shopper E-commerce Web-App</h3>
         <div className="btns">

          <a rel="noreferrer" href="https://github.com/ShahrozAs/React-ecommerce-app" target='_blank' className='btn' >Github</a>
          <a rel="noreferrer" href="https://shopper-ecommerce-web-app.web.app/" target='_blank' className='btn btn-primary'>Live Demo</a>
         </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-img">
           <img src={portfolio4} alt="portfolio1" />
          </div>
          <h3>News Monkey</h3>
         <div className="btns">

          <a rel="noreferrer" href="https://github.com/ShahrozAs/newsapp" target='_blank' className='btn' >Github</a>
          <a rel="noreferrer" href="https://news-monkey-3bde6.web.app/" target='_blank' className='btn btn-primary'>Live Demo</a>
         </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-img">
           <img src={portfolio5} alt="portfolio1" />
          </div>
          <h3>Netflix Clone</h3>
         <div className="btns">

          <a rel="noreferrer" href="https://github.com/ShahrozAs/Netflix-clone" target='_blank' className='btn' >Github</a>
          <a rel="noreferrer" href="https://netflix-clone-6fbdc.web.app/" target='_blank' className='btn btn-primary'>Live Demo</a>
         </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-img">
           <img src={portfolio6} alt="portfolio1" />
          </div>
          <h3>Spotify Clone</h3>
         <div className="btns">

          <a rel="noreferrer" href="https://github.com/ShahrozAs/Spotify-clone" target='_blank' className='btn' >Github</a>
          <a rel="noreferrer" href="https://spotify-clone-518fd.web.app/" target='_blank' className='btn btn-primary'>Live Demo</a>
         </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
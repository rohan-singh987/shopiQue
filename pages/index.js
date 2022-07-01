import React from 'react'
// import styles from '../styles/Home.module.css'


const Home = () => {
  return (
    <>
      HeroBanner
      
      <div className="products-heading">
        <h2>Go wireless, Go limitless</h2>
        <p>speakers of best quality</p>
      </div>

      <div>
        {['pro1', "pro2"].map((product) => product )}
      </div>


      Footer

    </>
  )
}

export default Home
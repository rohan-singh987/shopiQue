import React from 'react'
// import styles from '../styles/Home.module.css'

import{ Product, FooterBanner, HeroBanner  } from '../components'
import { client } from '../lib/client';
 
const Home = ({ products, bannerData, footerData }) => {
  return (
    <div>
      <HeroBanner heroBanner={bannerData && bannerData[0]} />
      {/* {console.log(footerData)} */}
      
      <div className="products-heading">
        <h2>Go wireless, Go limitless</h2>
        <p>speakers of best quality</p>
      </div>

      <div className='products-container'>
        {products?.map((product) => <Product key={product._id} product={product} /> )}
      </div>


      <FooterBanner footerBanner={footerData && footerData[0 ]} />

    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const footerQuery = '*[_type == "footer"]';
  const footerData = await client.fetch(footerQuery)


  return {
    props: {products, bannerData, footerData}
  }  
}

export default Home
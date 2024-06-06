import React from 'react'
import './styles.css';
import './media-queries.css'
import './search.css'
import Footer from './Footer';
 function SearchHeader()
{
    return(
    <header> 
    <div className='search-header m-2'>
    <i className="fa fa-magnifying-glass ms-1"></i> 
   <input className="ms-1" type="search" placeholder="Search" size="20"/>
   </div>
    </header>
)
}
function SearchMain()
{
  return(
  <main>
  <section className='search-section'>
      <div className=" reels reels-box-1"></div>
      <div className=" reels reels-box-2"></div>
      <div className=" reels reels-box-3"></div>
      <div className=" reels reels-box-4"></div>
      <div className=" reels reels-box-5"></div>
      <div className=" reels reels-box-6"></div>
      <div className=" reels reels-box-7"></div>
      <div className=" reels reels-box-8"></div>
      <div className=" reels reels-box-9"></div>
  </section>
</main>
  )
}
export default function Search() {
  return (
    <>
    <SearchHeader/>
    <SearchMain/>
     <Footer/>
    </>

  )
}

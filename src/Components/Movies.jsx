import React from "react";
import Detail from "./MoviesDetails";
import WebDetail from "./WebSeriesDetails";
import TVDetails from "./TVShowsDetails";
import sliderImages from "./Slider";
import { FaRegStar } from "react-icons/fa";
import { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { FaSearch } from "react-icons/fa";
import { LuCrown } from "react-icons/lu";
import './Style.css';

const Movies = ({ addtocart }) => {

  const [activeImageNum, setCurrent] = useState(0);
   const length = sliderImages.length;
   const nextSlide = () => {
      setCurrent(activeImageNum === length - 1 ? 0 : activeImageNum + 1);
   };
   const prevSlide = () => {
      setCurrent(activeImageNum === 0 ? length - 1 : activeImageNum - 1);
   };
   if (!Array.isArray(sliderImages) || sliderImages.length <= 0) {
      return null;
   }

  return (
    <>
    <div>
         <h2 className="slider-header">
            What would you love to enjoy ?
         </h2>
         <section className = "image-slider">
            <div className = "left">
               <ArrowBackIosIcon onClick = {prevSlide} />
            </div>
            <div className="right"> 
               <ArrowForwardIosIcon onClick = {nextSlide} />
            </div>
            {sliderImages.map((currentSlide, ind) => {
               return (
                  <div className={ind === activeImageNum ? "currentSlide active" : "currentSlide"}key={ind}>
                     {ind === activeImageNum && <img src={currentSlide.url} className="image" />}
                  </div>
               );
            })}
         </section>
      </div>

      <div className="search-container">
      <div className="search-bar">
        <FaSearch className="search-icon" />
        <form className="col-lg-auto me-lg-3" role="search">
          <input type="search" className="form-control" placeholder="Search the content........" aria-label="Search" />
        </form>
      </div>
    </div>

    <div className="buttons">
      <button className="button1 btn btn-warning">Rating's 4.0+</button>
      <button className="button2 btn btn-warning">Less than $300</button>
      <button className="button3 btn btn-warning">Premium <LuCrown /></button>
      <button className="button4 btn btn-warning">Clear Filters</button>
    </div>

    <div className="movies-container">
      <h1>Movies</h1>
      <h6>• English, Hindi, Marathi, Telugu</h6>
      <hr />
      <div className="main-movies">
        {
          Detail.map((curElm) => (
            <div className="box" key={curElm.id}>
              <div className="img-box">
                <img src={curElm.Img} alt={curElm.Title}></img>
              </div>
              <div className="detail">
                <div className='info'>
                  <h2>{curElm.Title}</h2>
                    <button className='rating btn btn-success' >{curElm.Rating}<FaRegStar className='star' /></button>
                </div>
                <div className="category-price">
                  <h4>{curElm.Cate}</h4>
                  <p>${curElm.Price}</p>
                </div>
                <button className="addtocart" onClick={() => addtocart(curElm)}>Add To Cart</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>

    <div className="movies-container">
      <h1>Web-Series</h1>
      <h6>• English, Hindi</h6>
      <hr />
      <div className="main-movies">
        {
          WebDetail.map((curElm) => (
            <div className="box" key={curElm.id}>
              <div className="img-box">
                <img src={curElm.Img} alt={curElm.Title}></img>
              </div>
              <div className="detail">
                <div className='info'>
                  <h2>{curElm.Title}</h2>
                    <button className='rating btn btn-success' >{curElm.Rating}<FaRegStar className='star' /></button>
                </div>
                <div className="category-price">
                  <h4>{curElm.Cate}</h4>
                  <p>${curElm.Price}</p>
                </div>
                <button className="addtocart" onClick={() => addtocart(curElm)}>Add To Cart</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>

    <div className="movies-container">
      <h1>TV Shows</h1>
      <h6>• Hindi</h6>
      <hr />
      <div className="main-movies">
        {
          TVDetails.map((curElm) => (
          <div className="box" key={curElm.id}>
            <div className="img-box">
              <img src={curElm.Img} alt={curElm.Title}></img>
            </div>
            <div className="detail">
              <div className='info'>
                <h2>{curElm.Title}</h2>
                <button className='rating btn btn-success' >{curElm.Rating}<FaRegStar className='star' /></button>
              </div>
              <div className="category-price">
                <h4>{curElm.Cate}</h4>
                <p>${curElm.Price}</p>
              </div>
              <button className="addtocart" onClick={() => addtocart(curElm)}>Add To Cart</button>
            </div>
          </div>
        ))
      }
      </div>
    </div>
  </>
  );
};

export default Movies;

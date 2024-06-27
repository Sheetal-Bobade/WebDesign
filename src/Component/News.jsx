import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight  } from "react-icons/fa";


const News= () => {
  const settings = {
    dots: false,
    arrows:true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    prevArrow:<FaChevronLeft />,
    nextArrow:<FaChevronRight />
    
  };

  return (
  
      
      <Slider {...settings}>
        <div className="blog-slide">
        <img src="Images/blog-img.png" alt="blog-img"/>
        <div className="overlay">
         <div className="overlay-wrap">   
        <h3 className="news-head">CPI and North East innovators awarded half 
        a million fund for cultivated meat project
        </h3>
        <Button className="view-more-btn" variant="primary">Read full article</Button>{' '}
        </div>
        </div>
        </div>

        <div className="blog-slide">
        <img src="Images/blog-img.png" alt="blog-img"/>
        <div className="overlay">
         <div className="overlay-wrap">   
        <h3 className="news-head">CPI and North East innovators awarded half 
        a million fund for cultivated meat project
        </h3>
        <Button className="view-more-btn" variant="primary">Read full article</Button>{' '}
        </div>
        </div>
        </div>

        <div className="blog-slide">
        <img src="Images/blog-img.png" alt="blog-img"/>
        <div className="overlay">
         <div className="overlay-wrap">   
        <h3 className="news-head">CPI and North East innovators awarded half 
        a million fund for cultivated meat project
        </h3>
        <Button className="view-more-btn" variant="primary">Read full article</Button>{' '}
        </div>
        </div>
        </div>

        <div className="blog-slide">
        <img src="Images/blog-img.png" alt="blog-img"/>
        <div className="overlay">
         <div className="overlay-wrap">   
        <h3 className="news-head">CPI and North East innovators awarded half 
        a million fund for cultivated meat project
        </h3>
        <Button className="view-more-btn" variant="primary">Read full article</Button>{' '}
        </div>
        </div>
        </div>

        <div className="blog-slide">
        <img src="Images/blog-img.png" alt="blog-img"/>
        <div className="overlay">
         <div className="overlay-wrap">   
        <h3 className="news-head">CPI and North East innovators awarded half 
        a million fund for cultivated meat project
        </h3>
        <Button className="view-more-btn" variant="primary">Read full article</Button>{' '}
        </div>
        </div>
        </div>

        
        
      </Slider>
    
  );
};

export default News;
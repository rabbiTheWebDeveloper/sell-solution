import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css'
import img from '../../assets/images/login_right.png'

const LoginBanner = () => {
    const options = {
        loop: true,
        items: 1,
        autoplay: true,
        autoplayTimeout:2000,
        autoplayHoverPause:true
      };
  return (
    <div>
      {/* Right */}
      
        <div className="right_login">
          <div className="right_login_content">
            <OwlCarousel className="owl-carousel owl-theme"
            {...options}>
              {/* item */}
              <div className="item">
                <img src={img} alt="" />
              </div>
              {/* item */}
              <div className="item">
                <img src={img} alt="" />
              </div>
              {/* item */}
              <div className="item">
                <img src={img} alt="" />
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    
  );
};

export default LoginBanner;

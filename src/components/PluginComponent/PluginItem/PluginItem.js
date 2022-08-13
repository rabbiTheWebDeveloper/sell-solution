import React from 'react';

const PluginItem = () => {
    return (
        <div>
        {/* Sections Gaps */}
        <div className="section_gaps" />
        {/* --------------------------------------------------------------------------------------------------------------------------------------------------- 
    START Plugins PART
--------------------------------------------------------------------------------------------------------------------------------------------------- */}
        <section id="ClientList" className="Admin openTicket">
          <div className="container custom_width">
            {/* Header */}
            <div className="row d_flex bgss">
              <div className="col-lg-5">
                <div className="header_part d_flex">
                  {/* svg */}
                  <div className="svg">
                    <svg width={26} height={42} viewBox="0 0 26 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.4 0C10.7448 0 11.0754 0.136964 11.3192 0.380761C11.563 0.624559 11.7 0.955219 11.7 1.3V7.8H19.5V1.3C19.5 0.955219 19.637 0.624559 19.8808 0.380761C20.1246 0.136964 20.4552 0 20.8 0C21.1448 0 21.4754 0.136964 21.7192 0.380761C21.963 0.624559 22.1 0.955219 22.1 1.3V7.8H24.7C25.0448 7.8 25.3754 7.93696 25.6192 8.18076C25.863 8.42456 26 8.75522 26 9.1V16.9C26 19.3135 25.0413 21.6281 23.3347 23.3347C21.6281 25.0413 19.3135 26 16.9 26C16.8948 27.1284 16.874 28.197 16.796 29.172C16.6894 30.5084 16.4684 31.7798 15.9718 32.8744C15.4683 34.032 14.5763 34.9774 13.4498 35.5472C12.285 36.14 10.8394 36.4 9.1 36.4C6.5052 36.4 4.914 37.258 3.9676 38.2668C3.11313 39.1692 2.62555 40.3575 2.6 41.6H0C0 39.9984 0.6032 38.0458 2.0722 36.4832C3.5724 34.892 5.8786 33.8 9.1 33.8C10.6106 33.8 11.6012 33.5712 12.2668 33.2306C12.8934 32.9108 13.3068 32.4506 13.6032 31.8006C13.9178 31.109 14.105 30.186 14.2012 28.9666C14.2714 28.0826 14.2922 27.0998 14.2974 26C11.8844 25.9993 9.57043 25.0403 7.86441 23.3338C6.15839 21.6272 5.2 19.313 5.2 16.9V9.1C5.2 8.75522 5.33696 8.42456 5.58076 8.18076C5.82456 7.93696 6.15522 7.8 6.5 7.8H9.1V1.3C9.1 0.955219 9.23696 0.624559 9.48076 0.380761C9.72456 0.136964 10.0552 0 10.4 0V0ZM7.8 10.4V16.9C7.8 18.6239 8.48482 20.2772 9.70381 21.4962C10.9228 22.7152 12.5761 23.4 14.3 23.4H16.9C18.6239 23.4 20.2772 22.7152 21.4962 21.4962C22.7152 20.2772 23.4 18.6239 23.4 16.9V10.4H7.8Z" fill="#747474" />
                    </svg>                                                     
                  </div>
                  {/* Text Part */}
                  <div className="text">
                    <h3>Plugins</h3>
                    <p>Add plugins for extra advantages</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="FilterBy d_flex">
                  {/* Filter By Item */}
                  <div className="FilterBy_item d_flex">
                    <h3>Filter By:</h3>
                    <div className="dropdown_part">
                      <span className="dropdown-toggle d_flex" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Category
                        <div className="arrow">
                          <svg width={11} height={6} viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.244629 0.501221L5.40989 5.66649L10.5752 0.501221H0.244629Z" fill="#747474" />
                          </svg>                                        
                        </div>
                      </span>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                        {/* up arrow */}
                        <div className="up_arrow">
                          <svg width={11} height={6} viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.3306 5.16528L5.1653 1.6953e-05L3.48091e-05 5.16528L10.3306 5.16528Z" fill="#F3ECFF" />
                          </svg>
                        </div>  
                      </ul>
                    </div>
                  </div>
                  {/* Filter By Item */}
                  <div className="FilterBy_item">
                    <div className="custome_input">
                      <input type="text" name placeholder="Search here..." />
                      <div className="search">
                        <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.3078 16.7113L12.6943 13.0914M14.6968 8.25366C14.6968 10.0695 13.9754 11.811 12.6914 13.095C11.4074 14.379 9.66595 15.1003 7.8501 15.1003C6.03425 15.1003 4.29277 14.379 3.00876 13.095C1.72476 11.811 1.00342 10.0695 1.00342 8.25366C1.00342 6.43781 1.72476 4.69633 3.00876 3.41233C4.29277 2.12833 6.03425 1.40698 7.8501 1.40698C9.66595 1.40698 11.4074 2.12833 12.6914 3.41233C13.9754 4.69633 14.6968 6.43781 14.6968 8.25366V8.25366Z" stroke="#A3A3A3" strokeWidth={2} strokeLinecap="round" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Plugins */}
            <div className="plugins_content">
              <div className="row">
                {/* Item */}
                <div className="col-lg-3">
                  <div className="plugins_item">
                    <div className="img">
                      <img src="frontend_assets/images/b-kash.png" alt="" />
                    </div>
                    <div className="text d_flex d_justify">
                      <div className="left">
                        <h4>Bkash</h4>
                        <p>BDT 500</p>
                      </div>
                      <div className="right">
                        <a href="plugin_details.html">View Details</a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Item */}
                <div className="col-lg-3">
                  <div className="plugins_item">
                    <div className="img">
                      <img src="frontend_assets/images/nagod.png" alt="" />
                    </div>
                    <div className="text d_flex d_justify">
                      <div className="left">
                        <h4>Bkash</h4>
                        <p>BDT 500</p>
                      </div>
                      <div className="right">
                        <a href="plugin_details.html">View Details</a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Item */}
                <div className="col-lg-3">
                  <div className="plugins_item">
                    <div className="img">
                      <img src="frontend_assets/images/ssl.png" alt="" />
                    </div>
                    <div className="text d_flex d_justify">
                      <div className="left">
                        <h4>Bkash</h4>
                        <p>BDT 500</p>
                      </div>
                      <div className="right">
                        <a href="plugin_details.html">View Details</a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Item */}
                <div className="col-lg-3">
                  <div className="plugins_item">
                    <div className="img">
                      <img src="frontend_assets/images/fb_pixel.png" alt="" />
                    </div>
                    <div className="text d_flex d_justify">
                      <div className="left">
                        <h4>Bkash</h4>
                        <p>BDT 500</p>
                      </div>
                      <div className="right">
                        <a href="plugin_details.html">View Details</a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Item */}
                <div className="col-lg-3">
                  <div className="plugins_item">
                    <div className="img">
                      <img src="frontend_assets/images/whats_app.png" alt="" />
                    </div>
                    <div className="text d_flex d_justify">
                      <div className="left">
                        <h4>Bkash</h4>
                        <p>BDT 500</p>
                      </div>
                      <div className="right">
                        <a href="plugin_details.html">View Details</a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Item */}
                <div className="col-lg-3">
                  <div className="plugins_item">
                    <div className="img">
                      <img src="frontend_assets/images/google_map.png" alt="" />
                    </div>
                    <div className="text d_flex d_justify">
                      <div className="left">
                        <h4>Bkash</h4>
                        <p>BDT 500</p>
                      </div>
                      <div className="right">
                        <a href="plugin_details.html">View Details</a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Item */}
                <div className="col-lg-3">
                  <div className="plugins_item">
                    <div className="img">
                      <img src="frontend_assets/images/massenger.png" alt="" />
                    </div>
                    <div className="text d_flex d_justify">
                      <div className="left">
                        <h4>Bkash</h4>
                        <p>BDT 500</p>
                      </div>
                      <div className="right">
                        <a href="plugin_details.html">View Details</a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Item */}
                <div className="col-lg-3">
                  <div className="plugins_item">
                    <div className="img">
                      <img src="frontend_assets/images/money.png" alt="" />
                    </div>
                    <div className="text d_flex d_justify">
                      <div className="left">
                        <h4>Bkash</h4>
                        <p>BDT 500</p>
                      </div>
                      <div className="right">
                        <a href="plugin_details.html">View Details</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Sections Gaps */}
        <div className="section_gaps" />
      </div>
    );
};

export default PluginItem;
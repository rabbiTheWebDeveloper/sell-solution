import React from "react";

const TopSellingProducts = () => {
  return (
    <div>
      {/* Sections Gaps */}
      <div className="section_gaps" />
      {/* --------------------------------------------------------------------------------------------------------------------------------------------------- 
    START Top Selling Products PART
--------------------------------------------------------------------------------------------------------------------------------------------------- */}
      <section id="ClientList" className="Admin openTicket">
        <div className="container custom_width">
          {/* Header */}
          <div className="row d_flex">
            <div className="col-lg-5">
              <div className="header_part d_flex">
                {/* svg */}
                <div className="svg">
                  <svg
                    width={36}
                    height={47}
                    viewBox="0 0 36 47"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 24H27M15 32H27M15 16H27M7 8C7 7.46957 7.21071 6.96086 7.58579 6.58579C7.96086 6.21071 8.46957 6 9 6H33C33.5304 6 34.0391 6.21071 34.4142 6.58579C34.7893 6.96086 35 7.46957 35 8V46L28 41L21 46L14 41L7 46V8Z"
                      stroke="#747474"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="6.5" cy="6.5" r="6.5" fill="#747474" />
                  </svg>
                </div>
                {/* Text Part */}
                <div className="text">
                  <h3>Top Selling Products</h3>
                  <p>Your Best Selling Products Of Your Shop</p>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="FilterBy d_flex">
                {/* Filter By Item */}
                <div className="FilterBy_item d_flex">
                  <h3>Filter By:</h3>
                  <div className="dropdown_part">
                    <span
                      className="dropdown-toggle d_flex"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Status
                      <div className="arrow">
                        <svg
                          width={11}
                          height={6}
                          viewBox="0 0 11 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.244629 0.501221L5.40989 5.66649L10.5752 0.501221H0.244629Z"
                            fill="#747474"
                          />
                        </svg>
                      </div>
                    </span>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                      {/* up arrow */}
                      <div className="up_arrow">
                        <svg
                          width={11}
                          height={6}
                          viewBox="0 0 11 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.3306 5.16528L5.1653 1.6953e-05L3.48091e-05 5.16528L10.3306 5.16528Z"
                            fill="#F3ECFF"
                          />
                        </svg>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Admin Grid Item */}
          <div className="AdminGridItem">
            <div className="row">
              {/* item 1 */}
              <div className="col-lg-3">
                <div className="AdminGridItem_part">
                  <h4>MI Band 7</h4>
                  <div className="AdminGridItem_content d_flex">
                    <div className="img">
                      <img src="frontend_assets/images/Ellipse 32.png" alt="" />
                    </div>
                    <div className="text">
                      <ul>
                        <li>
                          Total Sold: <span>120</span>{" "}
                        </li>
                        <li>
                          Total Earned: <span>15800</span>{" "}
                        </li>
                        <li>
                          Available Stock: <span>120</span>{" "}
                        </li>
                        <li>Added On: 20 June 2022</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* item 2 */}
              <div className="col-lg-3">
                <div className="AdminGridItem_part">
                  <h4>MI Band 7</h4>
                  <div className="AdminGridItem_content d_flex">
                    <div className="img">
                      <img src="frontend_assets/images/Ellipse 33.png" alt="" />
                    </div>
                    <div className="text">
                      <ul>
                        <li>
                          Total Sold: <span>120</span>{" "}
                        </li>
                        <li>
                          Total Earned: <span>15800</span>{" "}
                        </li>
                        <li>
                          Available Stock: <span>120</span>{" "}
                        </li>
                        <li>Added On: 20 June 2022</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* item 3 */}
              <div className="col-lg-3">
                <div className="AdminGridItem_part">
                  <h4>MI Band 7</h4>
                  <div className="AdminGridItem_content d_flex">
                    <div className="img">
                      <img src="frontend_assets/images/Ellipse 34.png" alt="" />
                    </div>
                    <div className="text">
                      <ul>
                        <li>
                          Total Sold: <span>120</span>{" "}
                        </li>
                        <li>
                          Total Earned: <span>15800</span>{" "}
                        </li>
                        <li>
                          Available Stock: <span>120</span>{" "}
                        </li>
                        <li>Added On: 20 June 2022</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* item 4 */}
              <div className="col-lg-3">
                <div className="AdminGridItem_part">
                  <h4>MI Band 7</h4>
                  <div className="AdminGridItem_content d_flex">
                    <div className="img">
                      <img src="frontend_assets/images/Ellipse 36.png" alt="" />
                    </div>
                    <div className="text">
                      <ul>
                        <li>
                          Total Sold: <span>120</span>{" "}
                        </li>
                        <li>
                          Total Earned: <span>15800</span>{" "}
                        </li>
                        <li>
                          Available Stock: <span>120</span>{" "}
                        </li>
                        <li>Added On: 20 June 2022</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* item 1 */}
              <div className="col-lg-3">
                <div className="AdminGridItem_part">
                  <h4>MI Band 7</h4>
                  <div className="AdminGridItem_content d_flex">
                    <div className="img">
                      <img src="frontend_assets/images/Ellipse 32.png" alt="" />
                    </div>
                    <div className="text">
                      <ul>
                        <li>
                          Total Sold: <span>120</span>{" "}
                        </li>
                        <li>
                          Total Earned: <span>15800</span>{" "}
                        </li>
                        <li>
                          Available Stock: <span>120</span>{" "}
                        </li>
                        <li>Added On: 20 June 2022</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* item 2 */}
              <div className="col-lg-3">
                <div className="AdminGridItem_part">
                  <h4>MI Band 7</h4>
                  <div className="AdminGridItem_content d_flex">
                    <div className="img">
                      <img src="frontend_assets/images/Ellipse 33.png" alt="" />
                    </div>
                    <div className="text">
                      <ul>
                        <li>
                          Total Sold: <span>120</span>{" "}
                        </li>
                        <li>
                          Total Earned: <span>15800</span>{" "}
                        </li>
                        <li>
                          Available Stock: <span>120</span>{" "}
                        </li>
                        <li>Added On: 20 June 2022</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* item 3 */}
              <div className="col-lg-3">
                <div className="AdminGridItem_part">
                  <h4>MI Band 7</h4>
                  <div className="AdminGridItem_content d_flex">
                    <div className="img">
                      <img src="frontend_assets/images/Ellipse 34.png" alt="" />
                    </div>
                    <div className="text">
                      <ul>
                        <li>
                          Total Sold: <span>120</span>{" "}
                        </li>
                        <li>
                          Total Earned: <span>15800</span>{" "}
                        </li>
                        <li>
                          Available Stock: <span>120</span>{" "}
                        </li>
                        <li>Added On: 20 June 2022</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* item 4 */}
              <div className="col-lg-3">
                <div className="AdminGridItem_part">
                  <h4>MI Band 7</h4>
                  <div className="AdminGridItem_content d_flex">
                    <div className="img">
                      <img src="frontend_assets/images/Ellipse 36.png" alt="" />
                    </div>
                    <div className="text">
                      <ul>
                        <li>
                          Total Sold: <span>120</span>{" "}
                        </li>
                        <li>
                          Total Earned: <span>15800</span>{" "}
                        </li>
                        <li>
                          Available Stock: <span>120</span>{" "}
                        </li>
                        <li>Added On: 20 June 2022</li>
                      </ul>
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

export default TopSellingProducts;

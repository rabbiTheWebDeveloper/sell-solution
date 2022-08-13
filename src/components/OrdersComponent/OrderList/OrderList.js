import React from "react";
import './OrderList.css'


const OrderList = () => {
  return (
    <>
    <div class="section_gaps"></div>
    <section id="ClientList" className="Admin openTicket">
      <div className="container custom_width">
        {/* Header */}
        <div className="row d_flex">
          <div className="col-lg-5">
            <div className="header_part d_flex">
              {/* svg */}
              <div className="svg">
                <svg
                  width={42}
                  height={39}
                  viewBox="0 0 42 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.1875 0C10.8946 0 9.65459 0.513614 8.74035 1.42785C7.82611 2.34209 7.3125 3.58207 7.3125 4.875V21.9375H9.75V4.875C9.75 4.22853 10.0068 3.60855 10.4639 3.15143C10.921 2.69431 11.541 2.4375 12.1875 2.4375H29.25C29.8965 2.4375 30.5165 2.69431 30.9736 3.15143C31.4307 3.60855 31.6875 4.22853 31.6875 4.875V31.6875H24.375V34.125H34.125C36.0644 34.125 37.9244 33.3546 39.2957 31.9832C40.6671 30.6119 41.4375 28.7519 41.4375 26.8125V21.9375H34.125V4.875C34.125 3.58207 33.6114 2.34209 32.6971 1.42785C31.7829 0.513614 30.5429 0 29.25 0H12.1875ZM39 26.8125C39 28.1054 38.4864 29.3454 37.5721 30.2596C36.6579 31.1739 35.4179 31.6875 34.125 31.6875V24.375H39V26.8125ZM15.8438 7.3125C15.5205 7.3125 15.2105 7.4409 14.982 7.66946C14.7534 7.89802 14.625 8.20802 14.625 8.53125C14.625 8.85448 14.7534 9.16448 14.982 9.39304C15.2105 9.6216 15.5205 9.75 15.8438 9.75H25.5938C25.917 9.75 26.227 9.6216 26.4555 9.39304C26.6841 9.16448 26.8125 8.85448 26.8125 8.53125C26.8125 8.20802 26.6841 7.89802 26.4555 7.66946C26.227 7.4409 25.917 7.3125 25.5938 7.3125H15.8438ZM14.625 13.4062C14.625 13.083 14.7534 12.773 14.982 12.5445C15.2105 12.3159 15.5205 12.1875 15.8438 12.1875H25.5938C25.917 12.1875 26.227 12.3159 26.4555 12.5445C26.6841 12.773 26.8125 13.083 26.8125 13.4062C26.8125 13.7295 26.6841 14.0395 26.4555 14.268C26.227 14.4966 25.917 14.625 25.5938 14.625H15.8438C15.5205 14.625 15.2105 14.4966 14.982 14.268C14.7534 14.0395 14.625 13.7295 14.625 13.4062ZM18.2812 24.375C19.2509 24.375 20.1809 24.7602 20.8666 25.4459C21.5523 26.1316 21.9375 27.0616 21.9375 28.0312V35.3438C21.9375 36.3134 21.5523 37.2434 20.8666 37.9291C20.1809 38.6148 19.2509 39 18.2812 39H3.65625C2.68655 39 1.75657 38.6148 1.07089 37.9291C0.385211 37.2434 0 36.3134 0 35.3438V28.0312C0 27.0616 0.385211 26.1316 1.07089 25.4459C1.75657 24.7602 2.68655 24.375 3.65625 24.375H18.2812ZM19.5 35.3438V32.9062C18.5303 32.9062 17.6003 33.2915 16.9146 33.9771C16.229 34.6628 15.8438 35.5928 15.8438 36.5625H18.2812C18.2812 36.2393 18.4097 35.9293 18.6382 35.7007C18.8668 35.4722 19.1768 35.3438 19.5 35.3438ZM19.5 28.0312C19.1768 28.0312 18.8668 27.9028 18.6382 27.6743C18.4097 27.4457 18.2812 27.1357 18.2812 26.8125H15.8438C15.8438 27.7822 16.229 28.7122 16.9146 29.3979C17.6003 30.0835 18.5303 30.4688 19.5 30.4688V28.0312ZM3.65625 26.8125C3.65625 27.1357 3.52785 27.4457 3.29929 27.6743C3.07073 27.9028 2.76073 28.0312 2.4375 28.0312V30.4688C3.4072 30.4688 4.33718 30.0835 5.02286 29.3979C5.70854 28.7122 6.09375 27.7822 6.09375 26.8125H3.65625ZM2.4375 35.3438C2.76073 35.3438 3.07073 35.4722 3.29929 35.7007C3.52785 35.9293 3.65625 36.2393 3.65625 36.5625H6.09375C6.09375 35.5928 5.70854 34.6628 5.02286 33.9771C4.33718 33.2915 3.4072 32.9062 2.4375 32.9062V35.3438ZM10.9688 28.0312C9.99905 28.0312 9.06907 28.4165 8.38339 29.1021C7.69771 29.7878 7.3125 30.7178 7.3125 31.6875C7.3125 32.6572 7.69771 33.5872 8.38339 34.2729C9.06907 34.9585 9.99905 35.3438 10.9688 35.3438C11.9384 35.3438 12.8684 34.9585 13.5541 34.2729C14.2398 33.5872 14.625 32.6572 14.625 31.6875C14.625 30.7178 14.2398 29.7878 13.5541 29.1021C12.8684 28.4165 11.9384 28.0312 10.9688 28.0312Z"
                    fill="#747474"
                  />
                </svg>
              </div>
              {/* Text Part */}
              <div className="text">
                <h3>Orders</h3>
                <p>Order Details</p>
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
                    Joining Date
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
              {/* Filter By Item */}
              <div className="FilterBy_item">
                <div className="custome_input">
                  <input type="text" name placeholder="Search here..." />
                  <div className="search">
                    <svg
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.3078 16.7113L12.6943 13.0914M14.6968 8.25366C14.6968 10.0695 13.9754 11.811 12.6914 13.095C11.4074 14.379 9.66595 15.1003 7.8501 15.1003C6.03425 15.1003 4.29277 14.379 3.00876 13.095C1.72476 11.811 1.00342 10.0695 1.00342 8.25366C1.00342 6.43781 1.72476 4.69633 3.00876 3.41233C4.29277 2.12833 6.03425 1.40698 7.8501 1.40698C9.66595 1.40698 11.4074 2.12833 12.6914 3.41233C13.9754 4.69633 14.6968 6.43781 14.6968 8.25366V8.25366Z"
                        stroke="#A3A3A3"
                        strokeWidth={2}
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Table Part  */}
          <div className="col-lg-12">
            {/* Tabs Part */}
            <div className="Order_pages_tabs">
              {/* Tabs Part */}
              <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                {/* All */}
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-All-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-All"
                    type="button"
                    role="tab"
                    aria-controls="pills-All"
                    aria-selected="true"
                  >
                    All
                  </button>
                </li>
                {/* Pending */}
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-Pending-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Pending"
                    type="button"
                    role="tab"
                    aria-controls="pills-Pending"
                    aria-selected="false"
                  >
                    Pending
                  </button>
                </li>
                {/* Accepted */}
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-Accepted-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Accepted"
                    type="button"
                    role="tab"
                    aria-controls="pills-Accepted"
                    aria-selected="false"
                  >
                    Accepted
                  </button>
                </li>
                {/* Shipped */}
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-Shipped-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Shipped"
                    type="button"
                    role="tab"
                    aria-controls="pills-Shipped"
                    aria-selected="false"
                  >
                    Shipped
                  </button>
                </li>
                {/* Delivered */}
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-Delivered-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Delivered"
                    type="button"
                    role="tab"
                    aria-controls="pills-Delivered"
                    aria-selected="false"
                  >
                    Delivered
                  </button>
                </li>
                {/* Other Filters */}
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-OtherFilters-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-OtherFilters"
                    type="button"
                    role="tab"
                    aria-controls="pills-OtherFilters"
                    aria-selected="false"
                  >
                    Other Filters
                  </button>
                </li>
              </ul>
              {/* Tabs Item */}
              <div className="tab-content" id="pills-tabContent">
                {/* All */}
                <div
                  className="tab-pane fade show active"
                  id="pills-All"
                  role="tabpanel"
                  aria-labelledby="pills-All-tab"
                >
                  <div className="table_part">
                    <table className="table">
                      <tbody>
                        <tr>
                          <th>Order No.</th>
                          <th>Company Name</th>
                          <th>Contact No./th&gt;</th>
                          <th>Product Name</th>
                          <th>Product Code</th>
                          <th>Quantity</th>
                          <th>Price</th>
                          <th>Address</th>
                          <th>Delivery Date</th>
                          <th>Delivered By</th>
                        </tr>
                        {/* item */}
                        <tr>
                          <td>01</td>
                          <td>Mike Smith</td>
                          <td>01234567890</td>
                          <td>Goldfish</td>
                          <td>3292</td>
                          <td>184</td>
                          <td>$8.99</td>
                          <td>7529 E. Pecan St.</td>
                          <td>1 Feb, 2020</td>
                          <td>Szűts Gabriella</td>
                        </tr>
                        {/* item */}
                        <tr>
                          <td>01</td>
                          <td>Mike Smith</td>
                          <td>01234567890</td>
                          <td>Goldfish</td>
                          <td>3292</td>
                          <td>184</td>
                          <td>$8.99</td>
                          <td>7529 E. Pecan St.</td>
                          <td>1 Feb, 2020</td>
                          <td>Szűts Gabriella</td>
                        </tr>
                        {/* item */}
                        <tr>
                          <td>01</td>
                          <td>Mike Smith</td>
                          <td>01234567890</td>
                          <td>Goldfish</td>
                          <td>3292</td>
                          <td>184</td>
                          <td>$8.99</td>
                          <td>7529 E. Pecan St.</td>
                          <td>1 Feb, 2020</td>
                          <td>Szűts Gabriella</td>
                        </tr>
                        {/* item */}
                        <tr>
                          <td>01</td>
                          <td>Mike Smith</td>
                          <td>01234567890</td>
                          <td>Goldfish</td>
                          <td>3292</td>
                          <td>184</td>
                          <td>$8.99</td>
                          <td>7529 E. Pecan St.</td>
                          <td>1 Feb, 2020</td>
                          <td>Szűts Gabriella</td>
                        </tr>
                        {/* item */}
                        <tr>
                          <td>01</td>
                          <td>Mike Smith</td>
                          <td>01234567890</td>
                          <td>Goldfish</td>
                          <td>3292</td>
                          <td>184</td>
                          <td>$8.99</td>
                          <td>7529 E. Pecan St.</td>
                          <td>1 Feb, 2020</td>
                          <td>Szűts Gabriella</td>
                        </tr>
                        {/* item */}
                        <tr>
                          <td>01</td>
                          <td>Mike Smith</td>
                          <td>01234567890</td>
                          <td>Goldfish</td>
                          <td>3292</td>
                          <td>184</td>
                          <td>$8.99</td>
                          <td>7529 E. Pecan St.</td>
                          <td>1 Feb, 2020</td>
                          <td>Szűts Gabriella</td>
                        </tr>
                        {/* item */}
                        <tr>
                          <td>01</td>
                          <td>Mike Smith</td>
                          <td>01234567890</td>
                          <td>Goldfish</td>
                          <td>3292</td>
                          <td>184</td>
                          <td>$8.99</td>
                          <td>7529 E. Pecan St.</td>
                          <td>1 Feb, 2020</td>
                          <td>Szűts Gabriella</td>
                        </tr>
                        {/* item */}
                        <tr>
                          <td>01</td>
                          <td>Mike Smith</td>
                          <td>01234567890</td>
                          <td>Goldfish</td>
                          <td>3292</td>
                          <td>184</td>
                          <td>$8.99</td>
                          <td>7529 E. Pecan St.</td>
                          <td>1 Feb, 2020</td>
                          <td>Szűts Gabriella</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* Pending */}
                <div
                  className="tab-pane fade"
                  id="pills-Pending"
                  role="tabpanel"
                  aria-labelledby="pills-Pending-tab"
                >
                  <div className="table_part">
                    <table className="table">
                      <tbody>
                        <tr>
                          <th>Order No.</th>
                          <th>Company Name</th>
                          <th>Contact No./th&gt;</th>
                          <th>Product Name</th>
                          <th>Product Code</th>
                          <th>Quantity</th>
                          <th>Price</th>
                          <th>Address</th>
                          <th>Delivery Date</th>
                          <th>Delivered By</th>
                        </tr>
                        {/* item */}
                        <tr>
                          <td>01</td>
                          <td>Mike Smith</td>
                          <td>01234567890</td>
                          <td>Goldfish</td>
                          <td>3292</td>
                          <td>184</td>
                          <td>$8.99</td>
                          <td>7529 E. Pecan St.</td>
                          <td>1 Feb, 2020</td>
                          <td>Szűts Gabriella</td>
                        </tr>
                        {/* item */}
                        <tr>
                          <td>01</td>
                          <td>Mike Smith</td>
                          <td>01234567890</td>
                          <td>Goldfish</td>
                          <td>3292</td>
                          <td>184</td>
                          <td>$8.99</td>
                          <td>7529 E. Pecan St.</td>
                          <td>1 Feb, 2020</td>
                          <td>Szűts Gabriella</td>
                        </tr>
                        {/* item */}
                        <tr>
                          <td>01</td>
                          <td>Mike Smith</td>
                          <td>01234567890</td>
                          <td>Goldfish</td>
                          <td>3292</td>
                          <td>184</td>
                          <td>$8.99</td>
                          <td>7529 E. Pecan St.</td>
                          <td>1 Feb, 2020</td>
                          <td>Szűts Gabriella</td>
                        </tr>
                        {/* item */}
                        <tr>
                          <td>01</td>
                          <td>Mike Smith</td>
                          <td>01234567890</td>
                          <td>Goldfish</td>
                          <td>3292</td>
                          <td>184</td>
                          <td>$8.99</td>
                          <td>7529 E. Pecan St.</td>
                          <td>1 Feb, 2020</td>
                          <td>Szűts Gabriella</td>
                        </tr>
                        {/* item */}
                        <tr>
                          <td>01</td>
                          <td>Mike Smith</td>
                          <td>01234567890</td>
                          <td>Goldfish</td>
                          <td>3292</td>
                          <td>184</td>
                          <td>$8.99</td>
                          <td>7529 E. Pecan St.</td>
                          <td>1 Feb, 2020</td>
                          <td>Szűts Gabriella</td>
                        </tr>
                        {/* item */}
                        <tr>
                          <td>01</td>
                          <td>Mike Smith</td>
                          <td>01234567890</td>
                          <td>Goldfish</td>
                          <td>3292</td>
                          <td>184</td>
                          <td>$8.99</td>
                          <td>7529 E. Pecan St.</td>
                          <td>1 Feb, 2020</td>
                          <td>Szűts Gabriella</td>
                        </tr>
                        {/* item */}
                        <tr>
                          <td>01</td>
                          <td>Mike Smith</td>
                          <td>01234567890</td>
                          <td>Goldfish</td>
                          <td>3292</td>
                          <td>184</td>
                          <td>$8.99</td>
                          <td>7529 E. Pecan St.</td>
                          <td>1 Feb, 2020</td>
                          <td>Szűts Gabriella</td>
                        </tr>
                        {/* item */}
                        <tr>
                          <td>01</td>
                          <td>Mike Smith</td>
                          <td>01234567890</td>
                          <td>Goldfish</td>
                          <td>3292</td>
                          <td>184</td>
                          <td>$8.99</td>
                          <td>7529 E. Pecan St.</td>
                          <td>1 Feb, 2020</td>
                          <td>Szűts Gabriella</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* Accepted */}
                <div
                  className="tab-pane fade"
                  id="pills-Accepted"
                  role="tabpanel"
                  aria-labelledby="pills-Accepted-tab"
                >
                  <div className="table_part">
                    <table className="table">
                      <tbody>
                        <tr>
                          <th>Order No.</th>
                          <th>Company Name</th>
                          <th>Contact No./th&gt;</th>
                          <th>Product Name</th>
                          <th>Product Code</th>
                          <th>Quantity</th>
                          <th>Price</th>
                          <th>Address</th>
                          <th>Delivery Date</th>
                          <th>Delivered By</th>
                        </tr>
                        {/* item */}
                        <tr>
                          <td>01</td>
                          <td>Mike Smith</td>
                          <td>01234567890</td>
                          <td>Goldfish</td>
                          <td>3292</td>
                          <td>184</td>
                          <td>$8.99</td>
                          <td>7529 E. Pecan St.</td>
                          <td>1 Feb, 2020</td>
                          <td>Szűts Gabriella</td>
                        </tr>
                        {/* item */}
                        <tr>
                          <td>01</td>
                          <td>Mike Smith</td>
                          <td>01234567890</td>
                          <td>Goldfish</td>
                          <td>3292</td>
                          <td>184</td>
                          <td>$8.99</td>
                          <td>7529 E. Pecan St.</td>
                          <td>1 Feb, 2020</td>
                          <td>Szűts Gabriella</td>
                        </tr>
                        {/* item */}
                        <tr>
                          <td>01</td>
                          <td>Mike Smith</td>
                          <td>01234567890</td>
                          <td>Goldfish</td>
                          <td>3292</td>
                          <td>184</td>
                          <td>$8.99</td>
                          <td>7529 E. Pecan St.</td>
                          <td>1 Feb, 2020</td>
                          <td>Szűts Gabriella</td>
                        </tr>
                        {/* item */}
                        <tr>
                          <td>01</td>
                          <td>Mike Smith</td>
                          <td>01234567890</td>
                          <td>Goldfish</td>
                          <td>3292</td>
                          <td>184</td>
                          <td>$8.99</td>
                          <td>7529 E. Pecan St.</td>
                          <td>1 Feb, 2020</td>
                          <td>Szűts Gabriella</td>
                        </tr>
                        {/* item */}
                        <tr>
                          <td>01</td>
                          <td>Mike Smith</td>
                          <td>01234567890</td>
                          <td>Goldfish</td>
                          <td>3292</td>
                          <td>184</td>
                          <td>$8.99</td>
                          <td>7529 E. Pecan St.</td>
                          <td>1 Feb, 2020</td>
                          <td>Szűts Gabriella</td>
                        </tr>
                        {/* item */}
                        <tr>
                          <td>01</td>
                          <td>Mike Smith</td>
                          <td>01234567890</td>
                          <td>Goldfish</td>
                          <td>3292</td>
                          <td>184</td>
                          <td>$8.99</td>
                          <td>7529 E. Pecan St.</td>
                          <td>1 Feb, 2020</td>
                          <td>Szűts Gabriella</td>
                        </tr>
                        {/* item */}
                        <tr>
                          <td>01</td>
                          <td>Mike Smith</td>
                          <td>01234567890</td>
                          <td>Goldfish</td>
                          <td>3292</td>
                          <td>184</td>
                          <td>$8.99</td>
                          <td>7529 E. Pecan St.</td>
                          <td>1 Feb, 2020</td>
                          <td>Szűts Gabriella</td>
                        </tr>
                        {/* item */}
                        <tr>
                          <td>01</td>
                          <td>Mike Smith</td>
                          <td>01234567890</td>
                          <td>Goldfish</td>
                          <td>3292</td>
                          <td>184</td>
                          <td>$8.99</td>
                          <td>7529 E. Pecan St.</td>
                          <td>1 Feb, 2020</td>
                          <td>Szűts Gabriella</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* Shipped */}
                <div
                  className="tab-pane fade"
                  id="pills-Shipped"
                  role="tabpanel"
                  aria-labelledby="pills-Shipped-tab"
                >
                  <div className="table_part">
                    <table className="table">
                      <tbody>
                        <tr>
                          <th>Order No.</th>
                          <th>Company Name</th>
                          <th>Contact No./th&gt;</th>
                          <th>Product Name</th>
                          <th>Product Code</th>
                          <th>Quantity</th>
                          <th>Price</th>
                          <th>Address</th>
                          <th>Delivery Date</th>
                          <th>Delivered By</th>
                        </tr>
                        {/* item */}
                        <tr>
                          <td>01</td>
                          <td>Mike Smith</td>
                          <td>01234567890</td>
                          <td>Goldfish</td>
                          <td>3292</td>
                          <td>184</td>
                          <td>$8.99</td>
                          <td>7529 E. Pecan St.</td>
                          <td>1 Feb, 2020</td>
                          <td>Szűts Gabriella</td>
                        </tr>
                        {/* item */}
                        <tr>
                          <td>01</td>
                          <td>Mike Smith</td>
                          <td>01234567890</td>
                          <td>Goldfish</td>
                          <td>3292</td>
                          <td>184</td>
                          <td>$8.99</td>
                          <td>7529 E. Pecan St.</td>
                          <td>1 Feb, 2020</td>
                          <td>Szűts Gabriella</td>
                        </tr>
                        {/* item */}
                        <tr>
                          <td>01</td>
                          <td>Mike Smith</td>
                          <td>01234567890</td>
                          <td>Goldfish</td>
                          <td>3292</td>
                          <td>184</td>
                          <td>$8.99</td>
                          <td>7529 E. Pecan St.</td>
                          <td>1 Feb, 2020</td>
                          <td>Szűts Gabriella</td>
                        </tr>
                        {/* item */}
                        <tr>
                          <td>01</td>
                          <td>Mike Smith</td>
                          <td>01234567890</td>
                          <td>Goldfish</td>
                          <td>3292</td>
                          <td>184</td>
                          <td>$8.99</td>
                          <td>7529 E. Pecan St.</td>
                          <td>1 Feb, 2020</td>
                          <td>Szűts Gabriella</td>
                        </tr>
                        {/* item */}
                        <tr>
                          <td>01</td>
                          <td>Mike Smith</td>
                          <td>01234567890</td>
                          <td>Goldfish</td>
                          <td>3292</td>
                          <td>184</td>
                          <td>$8.99</td>
                          <td>7529 E. Pecan St.</td>
                          <td>1 Feb, 2020</td>
                          <td>Szűts Gabriella</td>
                        </tr>
                        {/* item */}
                        <tr>
                          <td>01</td>
                          <td>Mike Smith</td>
                          <td>01234567890</td>
                          <td>Goldfish</td>
                          <td>3292</td>
                          <td>184</td>
                          <td>$8.99</td>
                          <td>7529 E. Pecan St.</td>
                          <td>1 Feb, 2020</td>
                          <td>Szűts Gabriella</td>
                        </tr>
                        {/* item */}
                        <tr>
                          <td>01</td>
                          <td>Mike Smith</td>
                          <td>01234567890</td>
                          <td>Goldfish</td>
                          <td>3292</td>
                          <td>184</td>
                          <td>$8.99</td>
                          <td>7529 E. Pecan St.</td>
                          <td>1 Feb, 2020</td>
                          <td>Szűts Gabriella</td>
                        </tr>
                        {/* item */}
                        <tr>
                          <td>01</td>
                          <td>Mike Smith</td>
                          <td>01234567890</td>
                          <td>Goldfish</td>
                          <td>3292</td>
                          <td>184</td>
                          <td>$8.99</td>
                          <td>7529 E. Pecan St.</td>
                          <td>1 Feb, 2020</td>
                          <td>Szűts Gabriella</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* Delivered */}
                <div
                  className="tab-pane fade"
                  id="pills-Delivered"
                  role="tabpanel"
                  aria-labelledby="pills-Delivered-tab"
                >
                  <div className="table_part">
                    <table className="table">
                      <tbody>
                        <tr>
                          <th>Order No.</th>
                          <th>Company Name</th>
                          <th>Contact No./th&gt;</th>
                          <th>Product Name</th>
                          <th>Product Code</th>
                          <th>Quantity</th>
                          <th>Price</th>
                          <th>Address</th>
                          <th>Delivery Date</th>
                          <th>Delivered By</th>
                        </tr>
                        {/* item */}
                        <tr>
                          <td>01</td>
                          <td>Mike Smith</td>
                          <td>01234567890</td>
                          <td>Goldfish</td>
                          <td>3292</td>
                          <td>184</td>
                          <td>$8.99</td>
                          <td>7529 E. Pecan St.</td>
                          <td>1 Feb, 2020</td>
                          <td>Szűts Gabriella</td>
                        </tr>
                        {/* item */}
                        <tr>
                          <td>01</td>
                          <td>Mike Smith</td>
                          <td>01234567890</td>
                          <td>Goldfish</td>
                          <td>3292</td>
                          <td>184</td>
                          <td>$8.99</td>
                          <td>7529 E. Pecan St.</td>
                          <td>1 Feb, 2020</td>
                          <td>Szűts Gabriella</td>
                        </tr>
                        {/* item */}
                        <tr>
                          <td>01</td>
                          <td>Mike Smith</td>
                          <td>01234567890</td>
                          <td>Goldfish</td>
                          <td>3292</td>
                          <td>184</td>
                          <td>$8.99</td>
                          <td>7529 E. Pecan St.</td>
                          <td>1 Feb, 2020</td>
                          <td>Szűts Gabriella</td>
                        </tr>
                        {/* item */}
                        <tr>
                          <td>01</td>
                          <td>Mike Smith</td>
                          <td>01234567890</td>
                          <td>Goldfish</td>
                          <td>3292</td>
                          <td>184</td>
                          <td>$8.99</td>
                          <td>7529 E. Pecan St.</td>
                          <td>1 Feb, 2020</td>
                          <td>Szűts Gabriella</td>
                        </tr>
                        {/* item */}
                        <tr>
                          <td>01</td>
                          <td>Mike Smith</td>
                          <td>01234567890</td>
                          <td>Goldfish</td>
                          <td>3292</td>
                          <td>184</td>
                          <td>$8.99</td>
                          <td>7529 E. Pecan St.</td>
                          <td>1 Feb, 2020</td>
                          <td>Szűts Gabriella</td>
                        </tr>
                        {/* item */}
                        <tr>
                          <td>01</td>
                          <td>Mike Smith</td>
                          <td>01234567890</td>
                          <td>Goldfish</td>
                          <td>3292</td>
                          <td>184</td>
                          <td>$8.99</td>
                          <td>7529 E. Pecan St.</td>
                          <td>1 Feb, 2020</td>
                          <td>Szűts Gabriella</td>
                        </tr>
                        {/* item */}
                        <tr>
                          <td>01</td>
                          <td>Mike Smith</td>
                          <td>01234567890</td>
                          <td>Goldfish</td>
                          <td>3292</td>
                          <td>184</td>
                          <td>$8.99</td>
                          <td>7529 E. Pecan St.</td>
                          <td>1 Feb, 2020</td>
                          <td>Szűts Gabriella</td>
                        </tr>
                        {/* item */}
                        <tr>
                          <td>01</td>
                          <td>Mike Smith</td>
                          <td>01234567890</td>
                          <td>Goldfish</td>
                          <td>3292</td>
                          <td>184</td>
                          <td>$8.99</td>
                          <td>7529 E. Pecan St.</td>
                          <td>1 Feb, 2020</td>
                          <td>Szűts Gabriella</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* Other Filters */}
                <div
                  className="tab-pane fade"
                  id="pills-OtherFilters"
                  role="tabpanel"
                  aria-labelledby="pills-OtherFilters-tab"
                >
                  <div className="table_part">
                    <table className="table">
                      <tbody>
                        <tr>
                          <th>Order No.</th>
                          <th>Company Name</th>
                          <th>Contact No./th&gt;</th>
                          <th>Product Name</th>
                          <th>Product Code</th>
                          <th>Quantity</th>
                          <th>Price</th>
                          <th>Address</th>
                          <th>Delivery Date</th>
                          <th>Delivered By</th>
                        </tr>
                        {/* item */}
                        <tr>
                          <td>01</td>
                          <td>Mike Smith</td>
                          <td>01234567890</td>
                          <td>Goldfish</td>
                          <td>3292</td>
                          <td>184</td>
                          <td>$8.99</td>
                          <td>7529 E. Pecan St.</td>
                          <td>1 Feb, 2020</td>
                          <td>Szűts Gabriella</td>
                        </tr>
                        {/* item */}
                        <tr>
                          <td>01</td>
                          <td>Mike Smith</td>
                          <td>01234567890</td>
                          <td>Goldfish</td>
                          <td>3292</td>
                          <td>184</td>
                          <td>$8.99</td>
                          <td>7529 E. Pecan St.</td>
                          <td>1 Feb, 2020</td>
                          <td>Szűts Gabriella</td>
                        </tr>
                        {/* item */}
                        <tr>
                          <td>01</td>
                          <td>Mike Smith</td>
                          <td>01234567890</td>
                          <td>Goldfish</td>
                          <td>3292</td>
                          <td>184</td>
                          <td>$8.99</td>
                          <td>7529 E. Pecan St.</td>
                          <td>1 Feb, 2020</td>
                          <td>Szűts Gabriella</td>
                        </tr>
                        {/* item */}
                        <tr>
                          <td>01</td>
                          <td>Mike Smith</td>
                          <td>01234567890</td>
                          <td>Goldfish</td>
                          <td>3292</td>
                          <td>184</td>
                          <td>$8.99</td>
                          <td>7529 E. Pecan St.</td>
                          <td>1 Feb, 2020</td>
                          <td>Szűts Gabriella</td>
                        </tr>
                        {/* item */}
                        <tr>
                          <td>01</td>
                          <td>Mike Smith</td>
                          <td>01234567890</td>
                          <td>Goldfish</td>
                          <td>3292</td>
                          <td>184</td>
                          <td>$8.99</td>
                          <td>7529 E. Pecan St.</td>
                          <td>1 Feb, 2020</td>
                          <td>Szűts Gabriella</td>
                        </tr>
                        {/* item */}
                        <tr>
                          <td>01</td>
                          <td>Mike Smith</td>
                          <td>01234567890</td>
                          <td>Goldfish</td>
                          <td>3292</td>
                          <td>184</td>
                          <td>$8.99</td>
                          <td>7529 E. Pecan St.</td>
                          <td>1 Feb, 2020</td>
                          <td>Szűts Gabriella</td>
                        </tr>
                        {/* item */}
                        <tr>
                          <td>01</td>
                          <td>Mike Smith</td>
                          <td>01234567890</td>
                          <td>Goldfish</td>
                          <td>3292</td>
                          <td>184</td>
                          <td>$8.99</td>
                          <td>7529 E. Pecan St.</td>
                          <td>1 Feb, 2020</td>
                          <td>Szűts Gabriella</td>
                        </tr>
                        {/* item */}
                        <tr>
                          <td>01</td>
                          <td>Mike Smith</td>
                          <td>01234567890</td>
                          <td>Goldfish</td>
                          <td>3292</td>
                          <td>184</td>
                          <td>$8.99</td>
                          <td>7529 E. Pecan St.</td>
                          <td>1 Feb, 2020</td>
                          <td>Szűts Gabriella</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default OrderList;

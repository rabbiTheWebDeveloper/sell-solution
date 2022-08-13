import React from "react";

const CustomerList = () => {
  return (
    <div>
      <div className="section_gaps" />
      {/* --------------------------------------------------------------------------------------------------------------------------------------------------- 
    START Customers PART
--------------------------------------------------------------------------------------------------------------------------------------------------- */}
      <section id="ClientList" className="Admin openTicket">
        <div className="container custom_width">
          {/* Header */}
          <div className="row d_flex bgss">
            <div className="col-lg-5">
              <div className="header_part d_flex">
                {/* svg */}
                <div className="svg">
                  <svg
                    width={45}
                    height={43}
                    viewBox="0 0 45 43"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M31.6715 36.296L30.435 26.3966C30.2598 24.9944 29.5784 23.7045 28.5188 22.7695C27.4593 21.8345 26.0947 21.3188 24.6816 21.3193H20.4235C19.0111 21.3197 17.6474 21.8359 16.5887 22.7708C15.53 23.7057 14.8491 24.995 14.674 26.3966L13.4356 36.296C13.3676 36.8399 13.4161 37.392 13.5779 37.9157C13.7397 38.4394 14.0111 38.9226 14.374 39.3334C14.7368 39.7442 15.183 40.073 15.6827 40.2981C16.1825 40.5233 16.7244 40.6395 17.2725 40.6391H27.8365C28.3845 40.6392 28.9262 40.5228 29.4257 40.2975C29.9252 40.0723 30.3711 39.7434 30.7338 39.3327C31.0964 38.9219 31.3676 38.4388 31.5293 37.9152C31.691 37.3917 31.7394 36.8397 31.6715 36.296V36.296Z"
                      stroke="#747474"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22.5547 13.5918C25.7557 13.5918 28.3506 10.9969 28.3506 7.79592C28.3506 4.59492 25.7557 2 22.5547 2C19.3537 2 16.7588 4.59492 16.7588 7.79592C16.7588 10.9969 19.3537 13.5918 22.5547 13.5918Z"
                      stroke="#747474"
                      strokeWidth={3}
                    />
                    <path
                      d="M7.09881 19.3881C9.23281 19.3881 10.9628 17.6581 10.9628 15.5241C10.9628 13.3901 9.23281 11.6602 7.09881 11.6602C4.96481 11.6602 3.23486 13.3901 3.23486 15.5241C3.23486 17.6581 4.96481 19.3881 7.09881 19.3881Z"
                      stroke="#747474"
                      strokeWidth={3}
                    />
                    <path
                      d="M38.0104 19.3881C40.1444 19.3881 41.8744 17.6581 41.8744 15.5241C41.8744 13.3901 40.1444 11.6602 38.0104 11.6602C35.8764 11.6602 34.1465 13.3901 34.1465 15.5241C34.1465 17.6581 35.8764 19.3881 38.0104 19.3881Z"
                      stroke="#747474"
                      strokeWidth={3}
                    />
                    <path
                      d="M7.09896 25.1836H6.50777C5.5931 25.1835 4.70805 25.5078 4.01007 26.099C3.31209 26.6901 2.84645 27.5097 2.69599 28.4119L2.05264 32.2759C1.96031 32.8295 1.9897 33.3965 2.13874 33.9376C2.28779 34.4787 2.55293 34.9808 2.9157 35.4091C3.27848 35.8373 3.7302 36.1814 4.23943 36.4174C4.74866 36.6533 5.30318 36.7755 5.86443 36.7754H12.8949M38.0106 25.1836H38.6017C39.5164 25.1835 40.4015 25.5078 41.0994 26.099C41.7974 26.6901 42.2631 27.5097 42.4135 28.4119L43.0569 32.2759C43.1492 32.8295 43.1198 33.3965 42.9708 33.9376C42.8217 34.4787 42.5566 34.9808 42.1938 35.4091C41.831 35.8373 41.3793 36.1814 40.8701 36.4174C40.3609 36.6533 39.8063 36.7755 39.2451 36.7754H32.2146"
                      stroke="#747474"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                {/* Text Part */}
                <div className="text">
                  <h3>Customers List</h3>
                  <p>List Of Customers</p>
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
                    Confirm Order Customers
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
                    Lead Order Customers
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
                    Cancelled Order Customers
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
                          <th>Contact No. </th>
                          <th>Product Name</th>
                          <th>Product Code</th>
                          <th>Quantity</th>
                          <th>Price</th>
                          <th>Address</th>
                          <th>Delivery Date</th>
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
                          <th>Contact No. </th>
                          <th>Product Name</th>
                          <th>Product Code</th>
                          <th>Quantity</th>
                          <th>Price</th>
                          <th>Address</th>
                          <th>Delivery Date</th>
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
                          <th>Contact No. </th>
                          <th>Product Name</th>
                          <th>Product Code</th>
                          <th>Quantity</th>
                          <th>Price</th>
                          <th>Address</th>
                          <th>Delivery Date</th>
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
                          <th>Contact No. </th>
                          <th>Product Name</th>
                          <th>Product Code</th>
                          <th>Quantity</th>
                          <th>Price</th>
                          <th>Address</th>
                          <th>Delivery Date</th>
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
                        </tr>
                      </tbody>
                    </table>
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

export default CustomerList;

import React from "react";
import "./Chart.css";

const Chart = () => {
  return (
    <div>
      <section id="Total_order" className="Admin openTicket">
        <div className="container custom_width">
          <div className="row">
            {/* item 1*/}
            <div className="col-lg-12">
              <div className="Total_order_item">
                {/* Header Part */}
                <div className="header_part d_flex d_justify">
                  <h3>
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.541123 15.9976H15.1514V14.9154H1.08225V0.846191H0V15.4565L0.541123 15.9976ZM2.16449 13.292V4.63405L2.70562 4.09293H4.87011L5.41123 4.63405V13.292L4.87011 13.8331H2.70562L2.16449 13.292ZM4.32899 12.7509V5.17518H3.24674V12.7509H4.32899ZM10.8225 2.46956V13.292L11.3636 13.8331H13.5281L14.0692 13.292V2.46956L13.5281 1.92844H11.3636L10.8225 2.46956ZM12.987 3.01068V12.7509H11.9047V3.01068H12.987ZM6.49348 13.292V6.79855L7.0346 6.25742H9.19909L9.74022 6.79855V13.292L9.19909 13.8331H7.0346L6.49348 13.292ZM8.65797 12.7509V7.33967H7.57572V12.7509H8.65797Z"
                        fill="#747474"
                      />
                    </svg>
                    Order Graph Chart
                  </h3>
                </div>
                {/* Middle Part */}
                <div className="middle_part mb-3 d_flex">
                  <canvas id="myChart" width={400} height={300} />
                  <div className="SolvedTicket">
                    <ul>
                      <li>
                        <p> Incomplete Sales Target </p>{" "}
                      </li>
                      <li>
                        <p> Sales Target Achieved </p>{" "}
                      </li>
                      <li>
                        <p> Incomplete Sales Target </p>{" "}
                      </li>
                    </ul>
                  </div>
                </div>
                {/* last_part */}
                <div className="last_part">
                  <ul>
                    <li>
                      <p>Orders Update:</p>
                    </li>
                    <li>
                      <span>Increased by</span>
                    </li>
                    <li>
                      <span className="percent">
                        <svg
                          width={28}
                          height={24}
                          viewBox="0 0 28 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M2.77661 1.42993C2.77661 1.09602 2.64396 0.775776 2.40785 0.539661C2.17174 0.303546 1.8515 0.170898 1.51758 0.170898C1.18366 0.170898 0.863422 0.303546 0.627307 0.539661C0.391193 0.775776 0.258545 1.09602 0.258545 1.42993L0.258545 22.4138C0.258545 23.1088 0.822592 23.6729 1.51758 23.6729H25.8589C26.1928 23.6729 26.5131 23.5402 26.7492 23.3041C26.9853 23.068 27.1179 22.7477 27.1179 22.4138C27.1179 22.0799 26.9853 21.7597 26.7492 21.5236C26.5131 21.2874 26.1928 21.1548 25.8589 21.1548H2.77661V1.42993ZM26.7486 5.67707C26.971 5.4384 27.0921 5.12273 27.0863 4.79655C27.0806 4.47038 26.9484 4.15917 26.7178 3.92849C26.4871 3.69781 26.1759 3.56568 25.8497 3.55992C25.5235 3.55417 25.2078 3.67524 24.9692 3.89764L17.0457 11.8212L12.8992 7.67474C12.6632 7.43896 12.3432 7.30653 12.0095 7.30653C11.6759 7.30653 11.3559 7.43896 11.1198 7.67474L5.664 13.1306C5.4416 13.3692 5.32053 13.6849 5.32628 14.0111C5.33204 14.3372 5.46417 14.6485 5.69485 14.8791C5.92552 15.1098 6.23673 15.2419 6.56291 15.2477C6.88908 15.2535 7.20476 15.1324 7.44343 14.91L12.0095 10.3439L16.1559 14.4903C16.392 14.7261 16.712 14.8585 17.0457 14.8585C17.3793 14.8585 17.6993 14.7261 17.9354 14.4903L26.7486 5.67707Z"
                            fill="#5DCA08"
                          />
                        </svg>
                        30%
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Chart;

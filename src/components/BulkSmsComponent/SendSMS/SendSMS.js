import React from 'react';

const SendSMS = () => {
    return (
        <div>
        {/* Sections Gaps */}
        <div className="section_gaps" />
        {/* --------------------------------------------------------------------------------------------------------------------------------------------------- 
    STARTSend SMS PART
--------------------------------------------------------------------------------------------------------------------------------------------------- */}
        <section id="ClientList" className="Admin openTicket">
          <div className="container custom_width">
            {/* Header */}
            <div className="row d_flex bgss">
              <div className="col-lg-6">
                <div className="header_part d_flex">
                  {/* svg */}
                  <div className="svg">
                    <svg width={41} height={41} viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.5 0C9.1963 0 0 7.35745 0 16.4C0 22.3614 3.8909 27.7057 10.25 30.6147V41L21.197 32.7897C32.1788 32.4966 41 25.256 41 16.4C41 7.35745 31.8037 0 20.5 0ZM20.5 28.7H19.8173L14.35 32.8V27.8451L13.0359 27.3388C7.5235 25.2171 4.1 21.0248 4.1 16.4C4.1 9.61655 11.4574 4.1 20.5 4.1C29.5425 4.1 36.9 9.61655 36.9 16.4C36.9 23.1834 29.5425 28.7 20.5 28.7Z" fill="#747474" />
                      <path d="M10.25 10.25H30.75V14.35H10.25V10.25ZM10.25 18.45H24.6V22.55H10.25V18.45Z" fill="#747474" />
                    </svg>                                                                                                                               
                  </div>
                  {/* Text Part */}
                  <div className="text">
                    <h3>Send SMS</h3>
                    <p>Send SMS to the clients in large scale</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Sections Gaps */}
        <div className="section_gaps" />
        {/* --------------------------------------------------------------------------------------------------------------------------------------------------- 
    START Product Information PART
--------------------------------------------------------------------------------------------------------------------------------------------------- */}
        <section id="#ClientList" className="Admin bulkSMS">
          <div className="container custom_width">
            <div className="row">
              <div className="col-lg-12">
                <div className="product_information">
                  {/* Select Sender ID */}
                  <div className="custome_input">
                    <label> Select Sender ID </label>
                    <select name>
                      <option value>Select sender id here</option>
                      <option value>1</option>
                      <option value>2</option>
                      <option value>3</option>
                    </select>
                  </div>
                  {/* Enter Mobile Numbers */}
                  <div className="custome_input">
                    <label> Enter Mobile Numbers </label>
                    <input type="text" placeholder="Enter mobile numbers here starting with country code" />
                  </div>
                  {/* Upload From Excel */}
                  <div className="custome_input d_flex">
                    <a href className="Save Upload">Upload From Excel</a>
                    <div className="FilterBy_item d_flex DownloadReport AllClient">
                      <div className="dropdown_part">
                        <span className="dropdown-toggle d_flex" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                          All Client
                          <div className="arrow">
                            <svg width={11} height={6} viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M0.244629 0.501221L5.40989 5.66649L10.5752 0.501221H0.244629Z" fill="#747474" />
                            </svg>                                        
                          </div>
                        </span>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                          <li><a className="dropdown-item" href="#">All Clients</a></li>
                          <li><a className="dropdown-item" href="#">Lead Clients</a></li>
                          <li><a className="dropdown-item" href="#">Confirmed Clients</a></li>
                          {/* up arrow */}
                          <div className="up_arrow">
                            <svg width={11} height={6} viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.3306 5.16528L5.1653 1.6953e-05L3.48091e-05 5.16528L10.3306 5.16528Z" fill="#F3ECFF" />
                            </svg>
                          </div>  
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* Enter SMS Content */}
                  <div className="custome_input">
                    <label> Enter SMS Content </label>
                    <textarea name rows={5} defaultValue={"Enter your SMS body here"} />
                  </div>
                  {/* Sub Category Name */}
                  <div className="custome_input">
                    <a href className="Save">Next</a>
                    <a href className="Cancle">Cancle</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default SendSMS;
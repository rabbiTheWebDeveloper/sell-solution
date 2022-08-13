import React from "react";

const Courier = () => {
  return (
    <>
    <div class="section_gaps"></div>
    <section id="ClientList" className="Admin openTicket">
      <div className="container custom_width">
        {/* Header */}
        <div className="row d_flex">
          <div className="col-lg-12">
            <div className="FilterBy">
              <div className="header_part d_flex">
                {/* svg */}
                <div className="svg">
                  <svg
                    width={41}
                    height={32}
                    viewBox="0 0 41 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.90881 14.5445H20.3617V17.4533H2.90881V14.5445ZM0 7.27246H14.544V10.1813H0V7.27246Z"
                      fill="#747474"
                    />
                    <path
                      d="M40.6054 15.4254L36.2422 5.24458C36.1302 4.98291 35.9439 4.75988 35.7063 4.60319C35.4686 4.4465 35.1902 4.36306 34.9056 4.36321H30.5424V1.4544C30.5424 1.06867 30.3892 0.698739 30.1164 0.425986C29.8437 0.153232 29.4737 0 29.088 0H5.81751V2.90881H27.6336V21.1703C26.9709 21.5551 26.3909 22.0674 25.9271 22.6774C25.4633 23.2875 25.1248 23.9834 24.9313 24.7249H15.7918C15.4378 23.3539 14.596 22.159 13.424 21.3643C12.2521 20.5696 10.8306 20.2296 9.42588 20.408C8.0212 20.5865 6.7298 21.2711 5.79377 22.3335C4.85773 23.396 4.34131 24.7633 4.34131 26.1793C4.34131 27.5953 4.85773 28.9626 5.79377 30.0251C6.7298 31.0875 8.0212 31.7721 9.42588 31.9505C10.8306 32.129 12.2521 31.7889 13.424 30.9942C14.596 30.1995 15.4378 29.0047 15.7918 27.6337H24.9313C25.2477 28.8819 25.9712 29.989 26.9875 30.7798C28.0038 31.5706 29.2547 32 30.5424 32C31.8301 32 33.081 31.5706 34.0973 30.7798C35.1135 29.989 35.8371 28.8819 36.1535 27.6337H39.2688C39.6546 27.6337 40.0245 27.4805 40.2972 27.2077C40.57 26.935 40.7232 26.565 40.7232 26.1793V15.9985C40.7233 15.8014 40.6832 15.6064 40.6054 15.4254ZM10.1807 29.0881C9.60541 29.0881 9.04302 28.9175 8.56467 28.5979C8.08632 28.2782 7.71349 27.824 7.49333 27.2924C7.27317 26.7609 7.21556 26.1761 7.3278 25.6118C7.44004 25.0476 7.71708 24.5293 8.12388 24.1224C8.53068 23.7156 9.04899 23.4386 9.61324 23.3264C10.1775 23.2141 10.7624 23.2717 11.2939 23.4919C11.8254 23.7121 12.2797 24.0849 12.5993 24.5632C12.9189 25.0416 13.0895 25.604 13.0895 26.1793C13.0888 26.9505 12.782 27.6899 12.2367 28.2353C11.6914 28.7806 10.9519 29.0873 10.1807 29.0881ZM30.5424 7.27202H33.9457L37.0639 14.544H30.5424V7.27202ZM30.5424 29.0881C29.9671 29.0881 29.4047 28.9175 28.9263 28.5979C28.448 28.2782 28.0752 27.824 27.855 27.2924C27.6348 26.7609 27.5772 26.1761 27.6895 25.6118C27.8017 25.0476 28.0787 24.5293 28.4855 24.1224C28.8924 23.7156 29.4107 23.4386 29.9749 23.3264C30.5392 23.2141 31.124 23.2717 31.6555 23.4919C32.1871 23.7121 32.6413 24.0849 32.961 24.5632C33.2806 25.0416 33.4512 25.604 33.4512 26.1793C33.4504 26.9505 33.1437 27.6899 32.5984 28.2353C32.053 28.7806 31.3136 29.0873 30.5424 29.0881ZM37.8144 24.7249H36.1535C35.8331 23.4791 35.1084 22.3748 34.0929 21.5852C33.0775 20.7956 31.8287 20.3652 30.5424 20.3617V17.4529H37.8144V24.7249Z"
                      fill="#747474"
                    />
                  </svg>
                </div>
                {/* Text Part */}
                <div className="text">
                  <h3>Courier</h3>
                  <p>
                    Deliver your products with your preferred courier service
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Courier Content */}
        <div className="currier_content">
          <div className="row">
            {/* currier item */}
            <div className="col-lg">
              <div className="currier_item">
                <div className="img">
                  <img src="frontend_assets/images/steadfast.png" alt="" />
                </div>
                {/* Courier Switch */}
                <div className="courier_switch">
                  <div className="form-check form-switch">
                    <p>Select E Courier</p>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckChecked"
                      defaultChecked
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* currier item */}
            <div className="col-lg">
              <div className="currier_item">
                <div className="img">
                  <img src="frontend_assets/images/redx.png" alt="" />
                </div>
                {/* Courier Switch */}
                <div className="courier_switch">
                  <div className="form-check form-switch">
                    <p>Select E Courier</p>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckChecked"
                      defaultChecked
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* currier item */}
            <div className="col-lg">
              <div className="currier_item">
                <div className="img">
                  <img src="frontend_assets/images/pathao.png" alt="" />
                </div>
                {/* Courier Switch */}
                <div className="courier_switch">
                  <div className="form-check form-switch">
                    <p>Select E Courier</p>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckChecked"
                      defaultChecked
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* currier item */}
            <div className="col-lg">
              <div className="currier_item">
                <div className="img">
                  <img src="frontend_assets/images/papergly.png" alt="" />
                </div>
                {/* Courier Switch */}
                <div className="courier_switch">
                  <div className="form-check form-switch">
                    <p>Select E Courier</p>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckChecked"
                      defaultChecked
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* currier item */}
            <div className="col-lg">
              <div className="currier_item">
                <div className="img">
                  <img src="frontend_assets/images/ecourier.png" alt="" />
                </div>
                {/* Courier Switch */}
                <div className="courier_switch">
                  <div className="form-check form-switch">
                    <p>Select E Courier</p>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckChecked"
                      defaultChecked
                    />
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

export default Courier;

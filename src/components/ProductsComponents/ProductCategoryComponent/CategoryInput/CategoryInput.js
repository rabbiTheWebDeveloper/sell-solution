import React from "react";

const CategoryInput = () => {
  return (
    <>
      <div class="section_gaps"></div>
      <section id="ClientList" className="Admin openTicket">
        <div className="container custom_width">
          {/* Billing Invoices */}
          <div className="row d_flex bgss">
            <div className="col-lg-5">
              <div className="header_part d_flex">
                {/* svg */}
                <div className="svg">
                  <svg
                    width={33}
                    height={33}
                    viewBox="0 0 33 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.4931 0H1.78472C1.31138 0 0.857433 0.188033 0.522733 0.522733C0.188033 0.857433 0 1.31138 0 1.78472V12.4931C0 12.9664 0.188033 13.4203 0.522733 13.755C0.857433 14.0897 1.31138 14.2778 1.78472 14.2778H12.4931C12.9664 14.2778 13.4203 14.0897 13.755 13.755C14.0897 13.4203 14.2778 12.9664 14.2778 12.4931V1.78472C14.2778 1.31138 14.0897 0.857433 13.755 0.522733C13.4203 0.188033 12.9664 0 12.4931 0ZM10.7083 10.7083H3.56944V3.56944H10.7083V10.7083ZM30.3403 0H19.6319C19.1586 0 18.7047 0.188033 18.37 0.522733C18.0353 0.857433 17.8472 1.31138 17.8472 1.78472V12.4931C17.8472 12.9664 18.0353 13.4203 18.37 13.755C18.7047 14.0897 19.1586 14.2778 19.6319 14.2778H30.3403C30.8136 14.2778 31.2676 14.0897 31.6023 13.755C31.937 13.4203 32.125 12.9664 32.125 12.4931V1.78472C32.125 1.31138 31.937 0.857433 31.6023 0.522733C31.2676 0.188033 30.8136 0 30.3403 0ZM28.5556 10.7083H21.4167V3.56944H28.5556V10.7083ZM12.4931 17.8472H1.78472C1.31138 17.8472 0.857433 18.0353 0.522733 18.37C0.188033 18.7047 0 19.1586 0 19.6319V30.3403C0 30.8136 0.188033 31.2676 0.522733 31.6023C0.857433 31.937 1.31138 32.125 1.78472 32.125H12.4931C12.9664 32.125 13.4203 31.937 13.755 31.6023C14.0897 31.2676 14.2778 30.8136 14.2778 30.3403V19.6319C14.2778 19.1586 14.0897 18.7047 13.755 18.37C13.4203 18.0353 12.9664 17.8472 12.4931 17.8472ZM10.7083 28.5556H3.56944V21.4167H10.7083V28.5556ZM24.9861 17.8472C21.049 17.8472 17.8472 21.049 17.8472 24.9861C17.8472 28.9232 21.049 32.125 24.9861 32.125C28.9232 32.125 32.125 28.9232 32.125 24.9861C32.125 21.049 28.9232 17.8472 24.9861 17.8472ZM24.9861 28.5556C23.0176 28.5556 21.4167 26.9547 21.4167 24.9861C21.4167 23.0176 23.0176 21.4167 24.9861 21.4167C26.9547 21.4167 28.5556 23.0176 28.5556 24.9861C28.5556 26.9547 26.9547 28.5556 24.9861 28.5556Z"
                      fill="#747474"
                    />
                  </svg>
                </div>
                {/* Text Part */}
                <div className="text">
                  <h3>Add New Category</h3>
                  <p>Upload Your Products In The Store</p>
                </div>
              </div>
            </div>
          </div>
          {/* Table Part  */}
          <div className="row">
            <div className="col-lg-12 mt-4">
              <div className="product_information">
                {/* Product Image ( Main image of product ) */}
                <div className="custome_input">
                  <label> Product Image ( Main image of product ) </label>
                  <input type="file" />
                </div>
                {/* Product Image ( Other images of product ) */}
                <div className="custome_input">
                  <label> Product Image ( Other images of product ) </label>
                  <input type="file" />
                </div>
                {/* Product Description */}
                <div className="custome_input">
                  <label> Product Description </label>
                  <textarea
                    name
                    rows={5}
                    defaultValue={"Write description here"}
                  />
                </div>
                {/* Sub Category Name */}
                <div className="custome_input">
                  <a href className="Save">
                    Next
                  </a>
                  <a href className="Cancle">
                    Cancle
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryInput;

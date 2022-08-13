import React from "react";
import { Link } from "react-router-dom";
import page from "../../assets/images/404.jpg";

const NotFound = () => {
  return (
    //     <div>
    //       {/* <h1>404</h1>
    //             <h3>Page is not find</h3> */}
    //       <img
    //         src={page}
    //         className="img-fluid w-75 h-75 rounded mx-auto d-block"
    //         alt="..."
    //       />
    //       <Link to="/">
    //       <div className="container-fluid">

    // </div>
    //       </Link>
    //     </div>
    <div className="text-center">
      <div className="error mx-auto" data-text="404">
        404
      </div>
      <p className="lead text-gray-800 mb-5">Page Not Found</p>
      <p className="text-gray-500 mb-0">
        It looks like you found a glitch in the matrix...
      </p>
      <Link to="/">&larr; Back to Dashboard</Link>
    </div>
  );
};

export default NotFound;

import React from "react";
import './Header.css'

const Header = () => {
  return (
    <div className="container my-5 text-black">
      <div className="row header">
        <div className="col-md-7 p-0">
            <img src="assets/header-img.png" alt="header" className="img-fluid" />
        </div>
        <div className="col-md-5">
            <div className="content m-5 p-md-5">
                <p><i className="fa-solid fa-arrow-trend-up mx-2" />85% would make this again</p>
                <h1 className="heading" >Mighty Super<br /> Cheesecake</h1>
                <p>Look no further for a creamy and ultra smooth classic cheesecake recipel no one can deny its simple decadence.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

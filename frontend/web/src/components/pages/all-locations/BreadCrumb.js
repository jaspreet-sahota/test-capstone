import React, { Component } from "react";
import {Link} from "react-router-dom";

class BreadCrumb extends Component {
  render() {
    return (
       <>
           {/* ===============  breadcrumb area start =============== */}
           <div className="breadcrumb-area">
               <div className="container">
                   <div className="row">
                       <div className="col-lg-12 col-md-12 col-sm-12">
                           <div className="breadcrumb-wrap">
                               <h2>All Locations</h2>
                               <ul className="breadcrumb-links">
                                   <li>
                                       <Link to={`${process.env.PUBLIC_URL}/homepage`}>Home</Link>
                                       <i className="bx bx-chevron-right" />
                                   </li>
                                   <li>All Locations</li>
                               </ul>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           {/* ===============  breadcrumb area end =============== */}
       </>
    );
  }
}

export default BreadCrumb;

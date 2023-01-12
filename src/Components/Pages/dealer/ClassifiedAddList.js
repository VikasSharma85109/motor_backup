import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import img_01 from "../../../Assets/images/classifiedAddImages/img-1.webp";
import img_02 from "../../../Assets/images/classifiedAddImages/img-2.webp";
import img_03 from "../../../Assets/images/classifiedAddImages/img-3.webp";
import img_04 from "../../../Assets/images/classifiedAddImages/img-4.webp";
import img_05 from "../../../Assets/images/classifiedAddImages/img-5.webp";
import img_06 from "../../../Assets/images/classifiedAddImages/img-6.webp";
import img_07 from "../../../Assets/images/classifiedAddImages/img-7.webp";
import img_08 from "../../../Assets/images/classifiedAddImages/img-8.webp";

function ClassifiedAddList() {
  const location = useLocation();
  const [userInfo, setUserinfo] = useState({});
  useEffect(() => {
    axios.get(process.env.REACT_APP_URL + `user`).then((res) => {
      if (res.data.data) {
        setUserinfo(res.data.data);
      } else {
        setUserinfo(userInfo);
      }
    });
  }, []);
  return (
    <div>
      <section className="ptb_80 pt_sm_50">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 col-lg-3">
              <div className="card_Gray mb-5 mb-md-0 divSticky">
                <h5>Dealer Name</h5>
                <hr />
                <ul class="sideBar__">
                  <li>
                    <Link
                      to="/"
                      className={` ${
                        location.pathname === "/accountinfo" ? "active" : ""
                      } `}
                    >
                      Texans Auto Group
                    </Link>
                  </li>
                  {/* <li>
                <Link
                    className={` ${
                    location.pathname === "/notifications" ? "active" : ""
                    } `}
                    to="/notifications"
                >
                    Notifications
                </Link>
                </li> */}
                  <li>
                    <Link
                      className={` ${
                        location.pathname === "/listing" ? "active" : ""
                      } `}
                      to="/"
                    >
                      Texas Cars Direct
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={` ${
                        location.pathname === "/bidswins" ? "active" : ""
                      } `}
                      to="/"
                    >
                      Ruiz Ranch Motors
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={` ${
                        location.pathname === "/bidswins" ? "active" : ""
                      } `}
                      to="/"
                    >
                      Ruiz Ranch Motors
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={` ${
                        location.pathname === "/bidswins" ? "active" : ""
                      } `}
                      to="/"
                    >
                      Ruiz Ranch Motors
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={` ${
                        location.pathname === "/bidswins" ? "active" : ""
                      } `}
                      to="/"
                    >
                      Ruiz Ranch Motors
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={` ${
                        location.pathname === "/bidswins" ? "active" : ""
                      } `}
                      to="/"
                    >
                      Ruiz Ranch Motors
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={` ${
                        location.pathname === "/bidswins" ? "active" : ""
                      } `}
                      to="/"
                    >
                      Ruiz Ranch Motors
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={` ${
                        location.pathname === "/bidswins" ? "active" : ""
                      } `}
                      to="/"
                    >
                      Ruiz Ranch Motors
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-md-8 col-lg-9">
              <h3>Texans Auto Group</h3>
              <hr />
              <div class="row pt-4 row_gridList classifiedAdds">
                <div class="col-12 col-md-3 pb-3">
                  <div class="card_post">
                    <div class="card_postImg">
                      <img src={img_01} />
                    </div>
                    <div class="card_postInfo">
                      <h4>
                        <a href="#">
                            2015 Audi Q7 PREMIUM PLUS
                        </a>
                      </h4>
                     
                      <ul class="labelList">
                        <li>
                          <label>Price:</label> <span>$15,950</span>
                        </li>
                       
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-3 pb-3">
                  <div class="card_post">
                    <div class="card_postImg">
                      
                      <img src={img_02} />
                    </div>
                    <div class="card_postInfo">
                      <h4>
                        <a href="#">
                            2010 Audi S5 PRESTIGE
                        </a>
                      </h4>
                     
                      <ul class="labelList">
                        <li>
                          <label>Price:</label> <span>$33,950</span>
                        </li>
                       
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-3 pb-3">
                  <div class="card_post">
                    <div class="card_postImg">
                      
                      <img src={img_03} />
                    </div>
                    <div class="card_postInfo">
                      <h4>
                        <a href="#">
                            2014 BMW M6 CONVERTIBLE
                        </a>
                      </h4>
                     
                      <ul class="labelList">
                        <li>
                          <label>Price:</label> <span>$17,950</span>
                        </li>
                       
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-3 pb-3">
                  <div class="card_post">
                    <div class="card_postImg">
                      
                      <img src={img_04} />
                    </div>
                    <div class="card_postInfo">
                      <h4>
                        <a href="#">
                            2019 Buick Encore PREFERRED
                        </a>
                      </h4>
                     
                      <ul class="labelList">
                        <li>
                          <label>Price:</label> <span>$35,950</span>
                        </li>
                       
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-3 pb-3">
                  <div class="card_post">
                    <div class="card_postImg">
                      
                      <img src={img_05} />
                    </div>
                    <div class="card_postInfo">
                      <h4>
                        <a href="#">
                            2015 Cadillac Escalade ESV LUXURY
                        </a>
                      </h4>
                     
                      <ul class="labelList">
                        <li>
                          <label>Price:</label> <span>$36,950</span>
                        </li>
                       
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-3 pb-3">
                  <div class="card_post">
                    <div class="card_postImg">
                      
                      <img src={img_06} />
                    </div>
                    <div class="card_postInfo">
                      <h4>
                        <a href="#">
                            2016 Cadillac Escalade ESV
                        </a>
                      </h4>
                     
                      <ul class="labelList">
                        <li>
                          <label>Price:</label> <span>$17,450</span>
                        </li>
                       
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-3 pb-3">
                  <div class="card_post">
                    <div class="card_postImg">
                      
                      <img src={img_07} />
                    </div>
                    <div class="card_postInfo">
                      <h4>
                        <a href="#">
                            2019 Chevrolet Equinox LS
                        </a>
                      </h4>
                     
                      <ul class="labelList">
                        <li>
                          <label>Price:</label> <span>$16,950</span>
                        </li>
                       
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-3 pb-3">
                  <div class="card_post">
                    <div class="card_postImg">
                      
                      <img src={img_08} />
                    </div>
                    <div class="card_postInfo">
                      <h4>
                        <a href="#">
                          12k-Mile 2009 Aston Martin DBS
                        </a>
                      </h4>
                     
                      <ul class="labelList">
                        <li>
                          <label>Price:</label> <span>$16,950</span>
                        </li>
                       
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ClassifiedAddList;
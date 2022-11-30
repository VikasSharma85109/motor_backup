import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import MyAccountLeftNav from "./MyAccountLeftNav";
import car_01 from "../../../Assets/images/car_01.jpg";
import { useSelector } from "react-redux";
import ChatIcon from "@mui/icons-material/Chat";
import { Button, Modal } from "react-bootstrap";

function MyListings() {
  const [data, setData] = useState([]);
  const [chatMessage, setChatMessage] = useState();
  const [chateApiData, setChateApiData] = useState([]);
  const userId = useSelector((state) => state);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  React.useEffect(() => {
    axios
      .get(process.env.REACT_APP_URL + `byUserVehicle/${userId.login.user.id}`)
      .then((response) => {
        setData(response.data.data);
      });
  }, []);
  const fetchResurveApi = (vId, resurve, resurveAmount) => {
    axios
      .post(process.env.REACT_APP_URL + "changeReserve", {
        id: vId,
        reserve: resurve === "Yes" ? "No" : "Yes",
        reservAmount: resurveAmount,
      })
      .then((res) => {
        if (res.data.status === 200) {
          setData([]);
          window.location.reload(false);
        }
        console.log(res);
      });
  };

  const getChateMessageApi = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_URL}getChat/${userId.login.user.id}/2`
      );
      if (res.data.status === 200) {
        setChateApiData(res.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getChateMessageApi();
  }, []);

  const handleChatMessage = (e) => {
    e.preventDefault();
    axios
      .post(process.env.REACT_APP_URL + "addChat", {
        userId: userId.login.user.id,
        vehicleId: 2,
        message: chatMessage,
      })
      .then((res) => {
        if (res.data.status === 200) {
          setChateApiData(res.data.data);
        }
      });
  };

  return (
    <div>
      {data.length > 0 ? (
        <section className="ptb_80 pt_sm_50">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-4 col-lg-3">
                <div className="card_Gray mb-5 mb-md-0">
                  <h5>My Account</h5>
                  <hr />
                  <MyAccountLeftNav />
                </div>
              </div>
              <div className="col-12 col-md-8 col-lg-9">
                <div class="FlexCol">
                  <h3>My Account</h3>
                  {/* <select class="field">
                  <option>Recent Bid</option>
                  <option>Winner Bid</option>
                </select> */}
                </div>
                <hr />

                <div className="row">
                  <div className="col-12">
                    {data.map((curElem) => {
                      return (
                        <div key={curElem.id} className="bidsListRow">
                          <div className="bidsImg">
                            <img
                              src={
                                process.env.REACT_APP_URL + curElem.stepOneImage
                              }
                              alt={curElem.stepOneImage}
                            />
                          </div>
                          <div className="bidsInfo">
                            <div className="">
                              <h6>{curElem.name}</h6>
                              <ul className="bidsLabelList">
                                {/* <li>
                                <i className="fa-solid fa-dollar-sign"></i>{" "}
                                {curElem.ammountOnDocument}
                              </li> */}
                                {/* <li>
                                <i className="fa-solid fa-calendar-days"></i>{" "}
                                {curElem.created_at}
                              </li> */}
                              </ul>
                              <p>{curElem.description}</p>
                            </div>

                            <div className="pl-md-3 d-flex">
                              <div className="mx-2">
                                <button
                                  onClick={handleShow}
                                  type="button"
                                  className="gry_btn"
                                >
                                  <ChatIcon />
                                </button>
                              </div>
                              <div className="mx-2">
                                <button
                                  onClick={() =>
                                    fetchResurveApi(
                                      curElem.id,
                                      curElem.reserve,
                                      curElem.reservAmount
                                    )
                                  }
                                  type="button"
                                  className="gry_btn"
                                >
                                  {curElem.reserve}
                                </button>
                              </div>

                              <a
                                href={`detail/${curElem.id}`}
                                className="gry_btn"
                              >
                                <i className="fa-solid fa-eye mr-2"></i> View
                              </a>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="ptb_80 pt_sm_50">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-4 col-lg-3">
                <div className="card_Gray mb-5 mb-md-0">
                  <h5>My Account</h5>
                  <hr />
                  <MyAccountLeftNav />
                </div>
              </div>
              <div className="col-12 col-md-8 col-lg-9">
                <h5>Interested in selling your vehicle on Bring a Trailer?</h5>
                <p>Bring a Trailer has three ways to sell a vehicle.</p>
                <ul className="labelList_">
                  <li>
                    <div className="labelList_label">classNameic</div>
                    <div className="labelList_text">
                      Our tried and true listing service for $99.
                    </div>
                  </li>
                  <li>
                    <div className="labelList_label">Plus</div>
                    <div className="labelList_text">
                      An at-your-door vehicle photography shoot added to your
                      classNameic listing.
                    </div>
                  </li>
                  <li>
                    <div className="labelList_label">White Glove</div>
                    <div className="labelList_text">
                      For significant cars and collections, give us a call and
                      we'll handle the rest.
                    </div>
                  </li>
                </ul>
                <a href="submit" className="gry_btn mt-3">
                  START A VEHICLE SUBMISSION
                </a>

                <div className="card_Gray mt-5 pt-5 pb-5 text-center">
                  <h4>
                    Have a part, engine, or automobilia to sell? Just $99 to
                    list.
                  </h4>
                  <a href="submit" className="gry_btn mt-3">
                    START A PART SUBMISSION
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header>
          <Modal.Title>Chat</Modal.Title>
          <div style={{ cursor: "pointer" }} onClick={handleClose}>
            X
          </div>
        </Modal.Header>
        <Modal.Body>
          <div
            className="row mx-1 my-1 rounded"
            style={{
              height: "40vh",
              backgroundColor: "white",
              color: "black",
              overflow: "auto",
            }}
          >
            <div className="col-12 py-2">
              {chateApiData.map((curElem, i) => {
                return (
                  <span key={i}>
                    {curElem.message}
                    <br />
                  </span>
                );
              })}
            </div>
          </div>
          <form onSubmit={handleChatMessage}>
            <div className="row">
              <div className="col-12 col-md-12">
                <label for="validationCustom01" class="form-label">
                  Message
                </label>
                <input
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  class="form-control"
                  type="text"
                  id="chatMessage"
                  placeholder="Enter message"
                  required
                ></input>
              </div>
              <div className="col-12 d-flex justify-content-center pt-4 ">
                <button className="btn" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default MyListings;

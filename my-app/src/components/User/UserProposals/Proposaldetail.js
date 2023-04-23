import React from "react";
import "./Proposaldetail.css";
import UserNav from "./UserNav";

function Proposaldetail() {
  return (
    <>
      <UserNav />
      <div className="line"></div>
      <div className="proposaldetailcontainer">
        <div className="proposaldetailtop">
          <div className="proposaltext">Proposals &lt;</div>
          <div className="John">
            <b>John Contract</b>
          </div>
          <div className="select-btn">
            <button
              style={{
                background: "white",
                color: "#006BD9",
                border: "2px solid #006BD9",
              }} 
            >
              SELECT
            </button>
          </div>
        </div>
        <div className="prop-details">
          <div style={{ display: "flex" }}>
            <div id="one">
              <div className="one-img">
                <img
                  src="../../../images/party-people-enjoy-concert-at-festival-summer-DHDMPWH.jpg"
                  alt="img.jpg"
                />
                <p
                  style={{
                    fontWeight: "bold",
                    background: "#d3c7c7",
                    padding: "0px 20px",
                    position: "relative",
                    top: "169px",
                  }}
                >
                  ID:001
                </p>
              </div>
              <div className="one-name">
                <b style={{ color: "gray", fontSize: "13px" }}>Name</b>
                &nbsp;&nbsp;
                <b>VENDOR NAME</b>
              </div>
              <div className="one-email">
                <b style={{ color: "gray", fontSize: "13px" }}>Email</b>
                &nbsp;&nbsp;
                <b>vendor@gmail.com</b>
              </div>
              <div className="one-date">
                <b style={{ color: "gray", fontSize: "10px" }}>Start date</b>
                &nbsp;&nbsp;<b style={{ fontSize: "11px" }}>12/01/2000</b>
                &nbsp;&nbsp;&nbsp;
                <b style={{ color: "gray", fontSize: "10px" }}>End date</b>
                &nbsp;&nbsp;<b style={{ fontSize: "11px" }}>14/01/2000</b>
              </div>
              <div className="event-type">
                <p style={{ color: "grey", fontSize: "13px" }}>Event Type</p>
                <p
                  style={{
                    border: "2px solid #D9ECFF",
                    display: "initial",
                    background: "#D9ECFF",
                    color: "#006BD9",
                  }}
                >
                  Marriage
                </p>
              </div>
              <div className="event-class">
                <p style={{ color: "grey", fontSize: "13px" }}>Event Class</p>
                <p
                  style={{
                    display: "initial",
                  }}
                >
                  Class A
                </p>
              </div>
            </div>
            <div id="two">
              <p style={{ margin: "0px 25px 24px 12px" }}>
                <b>Venue and Arrangements</b>
              </p>
              <div
                style={{
                  margin: "0px 25px 0px 12px",
                  height: "316px",
                  wordWrap: "break-word",
                }}
              >
                faffasfasfasfasfasfasfasfasfafafasfasfasfsafasfklaslgasklgasglasjgalkdgmaslkgnaskdgnaslkgnaslkgnaslkgnalksgnslakngaslgaskgnsalkgnaslkgnaslkgasnlaksngaslkgnasklgnaslgnlaskgnaslkgnaslgknaslkgnaslkgasnglknaskgnaslkgnaslkgnaslkgnaslkgnsalkgnsalkgnsalkgnkaslgnaslkgnasklglkasnglkasngklsankslagnsalknglkasngaslkgnaslkgnaslgk
              </div>
            </div>
            <div id="three">
              <p style={{ margin: "0px 25px 24px 12px" }}>
                <b>Food Preferences</b>
              </p>
              <div
                style={{
                  margin: "0px 25px 0px 12px",
                  height: "316px",
                  wordWrap: "break-word",
                }}
              >
                faffasfasfasfasfasfasfasfasfafafasfasfasfsafasfklaslgasklgasglasjgalkdgmaslkgnaskdgnaslkgnaslkgnaslkgnalksgnslakngaslgaskgnsalkgnaslkgnaslkgasnlaksngaslkgnasklgnaslgnlaskgnaslkgnaslgknaslkgnaslkgasnglknaskgnaslkgnaslkgnaslkgnaslkgnsalkgnsalkgnsalkgnkaslgnaslkgnasklglkasnglkasngklsankslagnsalknglkasngaslkgnaslkgnaslgk
              </div>
            </div>
          </div>
          <div style={{ display: "flex", position: "relative", top: "39px" }}>
            <div id="album">
              <div id="albumtext">My album</div>
              <div id="four"></div>
              <div id="five"></div>
              <div id="six"></div>
              <div id="seven"></div>
              <div id="eight"></div>
              <div id="nine"></div>
            </div>
            <div style={{ position: "relative", top: "7px", left: "261px" }}>
              <b>Contacts | 12</b>
            </div>

            <div id="ten" className="ten-grid">
              <div style={{ margin: "55px 12px 19px 45px" }}>
                <div
                  style={{
                    background: "grey",
                    borderRadius: "25px",
                    width: "54px",
                    height: "48px",
                  }}
                ></div>
                <div>Contact1</div>
                <div>+91 xxxxxxxxxx</div>
              </div>
              <div style={{ margin: "55px 12px 19px 45px" }}>
                <div
                  style={{
                    background: "grey",
                    borderRadius: "25px",
                    width: "54px",
                    height: "48px",
                  }}
                ></div>
                <div>Contact1</div>
                <div>+91 xxxxxxxxxx</div>
              </div>
              <div style={{ margin: "55px 12px 19px 45px" }}>
                <div
                  style={{
                    background: "grey",
                    borderRadius: "25px",
                    width: "54px",
                    height: "48px",
                  }}
                ></div>
                <div>Contact1</div>
                <div>+91 xxxxxxxxxx</div>
              </div>
            </div>
            <div id="eleven">
            <p style={{ margin: "0px 25px 24px 12px" }}>
                <b>Events</b>
              </p>
              <div
                style={{
                  margin: "0px 25px 0px 12px",
                  height: "316px",
                  wordWrap: "break-word",
                }}
              >
                faffasfasfasfasfasfasfasfasfafafasfasfasfsafasfklaslgasklgasglasjgalkdgmaslkgnaskdgnaslkgnaslkgnaslkgnalksgnslakngaslgaskgnsalkgnaslkgnaslkgasnlaksngaslkgnasklgnaslgnlaskgnaslkgnaslgknaslkgnaslkgasnglknaskgnaslkgnaslkgnaslkgnaslkgnsalkgnsalkgnsalkgnkaslgnaslkgnasklglkasnglkasngklsankslagnsalknglkasngaslkgnaslkgnaslgk
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Proposaldetail;

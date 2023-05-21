import React from 'react';
import Header2 from '../Components/Header2';
import Footer from '../Components/Footer';
import request  from '../Img/request.jpg';


const AgentRequest = () => {
return (
<>
<Header2 />
<div>
      <div className="request-container">
        <div className="shadow-effect">
          <div className="request">
            <div className="request-item1">&nbsp;&nbsp; New Request</div>
            <div className="request-item2">
              <div className="req">
                <form action="user-send-request.php" method="post">
                  <div className="form-floating mb-3">
                    <select
                      type="select"
                      className="form-select shadow-effect purple-border"
                      style={{ backgroundColor: "rgb(251, 248, 248)" }}
                      name="requestType"
                      id="typeid"
                      onchange="desk();"
                      required=""
                    >
                      <option selected="" value="" />
                      <option value="wc" title="Attestation de travail">
                        Work Certificate
                      </option>
                      <option value="sc" title="Attestation de salaire">
                        Salary Certificate
                      </option>
                      <option value="leave" title="Titre de congé">
                        Leave Entitlement
                      </option>
                    </select>
                    <label
                      htmlFor="floatingInput"
                      style={{
                        fontWeight: "bold",
                        paddingLeft: 22,
                        color: "rgb(59, 59, 59)",
                        fontSize: 17
                      }}
                    >
                      Type{" "}
                    </label>
                  </div>
                  <br />
                  <span id="spanners" />
                  <span style={{ display: "none" }} id="unit-container">
                    <div className="form-floating" style={{ margin: 15 }}>
                      <input
                        onchange="timeDiff()"
                        style={{
                          width: 330,
                          backgroundColor: "rgb(251, 248, 248)",
                          height: 55
                        }}
                        name="startdate"
                        type="date"
                        defaultValue=""
                        className="form-control shadow-effect purple-border"
                        id="floatingDate"
                      />
                      <label
                        id="dateLab"
                        htmlFor="floatingDate"
                        style={{
                          fontWeight: "bold",
                          color: "rgb(59, 59, 59)",
                          fontSize: 17
                        }}
                      >
                        Start Date:
                      </label>
                    </div>
                    <br />
                    <div className="form-floating" style={{ margin: 15 }}>
                      <input
                        onchange="timeDiff()"
                        style={{
                          width: 330,
                          backgroundColor: "rgb(251, 248, 248)",
                          height: 55
                        }}
                        type="date"
                        name="endate"
                        id="csv_date2"
                        defaultValue=""
                        className="form-control shadow-effect purple-border"
                      />
                      <label
                        id="dateLab"
                        htmlFor="floatingDate"
                        style={{
                          fontWeight: "bold",
                          color: "rgb(59, 59, 59)",
                          fontSize: 17
                        }}
                      >
                        End Date:{" "}
                      </label>
                    </div>
                    <br />
                    <input
                      type="text"
                      style={{
                        height: 20,
                        fontFamily: "arial",
                        fontSize: 13,
                        color: "white",
                        backgroundColor: "#6F2C91",
                        margin: 0,
                        width: 80,
                        textAlign: "center",
                        marginLeft: 14,
                        border: "none",
                        borderRadius: 5
                      }}
                      name="timediff"
                      id="timediff"
                      readOnly="readonly"
                    />
                    <span
                      id="spani"
                      style={{
                        fontFamily: "arial",
                        fontSize: 14,
                        color: "#6F2C91",
                        fontWeight: "bold"
                      }}
                    />
                  </span>
                  <span id="spanner" />
                  <div className="form-floating" style={{ margin: 15 }}>
                    <input
                      type="text"
                      name="subject"
                      style={{
                        height: 55,
                        width: 450,
                        marginBottom: 20,
                        backgroundColor: "rgb(251, 248, 248)",
                        marginTop: 20,
                        padding: 9
                      }}
                      placeholder="Request Subject Max length 60 characters"
                      maxLength={60}
                      className="form-control shadow-effect purple-border"
                      id="floatingInput"
                    />
                    <label
                      id="dateLab"
                      htmlFor="floatingInput"
                      style={{
                        fontWeight: "bold",
                        color: "rgb(126, 126, 126)",
                        fontSize: 15
                      }}
                    >
                      Subject{" "}
                    </label>
                  </div>
                  <br />
                  <div className="form-floating" style={{ margin: 15 }}>
                    <textarea
                      type="textarea"
                      className="form-control shadow-effect purple-border;"
                      name="content"
                      maxLength={300}
                      placeholder="maximum characters is 300"
                      id="floatingTextarea2"
                      style={{
                        height: 100,
                        width: 615,
                        marginBottom: 20,
                        backgroundColor: "rgb(251, 248, 248)"
                      }}
                      defaultValue={""}
                    />
                    <label
                      htmlFor="floatingTextarea2"
                      style={{
                        fontWeight: "bold",
                        color: "rgb(126, 126, 126)",
                        fontSize: 15
                      }}
                    >
                      Content{" "}
                    </label>
                  </div>
                  <br />
                  <button
                    type="submit"
                    className="btn btn-purple "
                    style={{
                      marginLeft: "82%",
                      paddingLeft: "11%",
                      paddingRight: "11%",
                      letterSpacing: 3,
                      fontSize: 16,
                      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
                    }}
                  >
                    SEND
                  </button>
                  <br />
                  <br />
                  <br />
                  <br />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    
        <img src={request}  alt='' className="shadow-effect"
        style={{ width: 420,height: 400,marginLeft: 200,marginTop: "-520px",position: "absolute",zIndex: 2,border: "none"}}/>
</div>
      <br />
      <div className="dynamic-table2" style={{ marginTop: 130 }}>
        <table className="dynamic-table2">
          <caption className="caption">My Last 10 Requests</caption>
          <thead className='the' style={{ color: "#64a4e8" }}>
            <tr className='trr' style={{ textAlign: "center" }}>
              <th className="id thh"> Request ID </th>
              <th className='thh'> Agent ID </th>
              <th className='thh'> Sent Date </th>
              <th className='thh'> Reply Date </th>
              <th className='thh'> Request Type </th>
              <th className='thh'> Request Subject </th>
              <th className='thh'> Status </th>
            </tr>
          </thead>
          <tbody>
            <tr className='trr'>
              <td className='tdd'>285</td>
              <td className='tdd'>11559628</td>
              <td className='tdd'>2023-02-22 10:21:48</td>
              <td className='tdd'>2023-02-22 10:34:19</td>
              <td className='tdd'>wc</td>
              <td className='tdd'>kkkkkkkkhgfcvbn</td>
              <td className='tdd' style={{ color: "red" }}>
                <a href="user-request.php" target="_blank" style={{ color: "red" }}>
                  Refused
                </a>
              </td>
            </tr>
            <tr className='trr'>
              <td className='tdd'>285</td>
              <td className='tdd'>11559628</td>
              <td className='tdd'>2023-02-22 10:21:48</td>
              <td className='tdd'>2023-02-22 10:34:19</td>
              <td className='tdd'>wc</td>
              <td className='tdd'>kkkkkkkkhgfcvbn</td>
              <td className='tdd' style={{ color: "red" }}>
                <a href="user-request.php" target="_blank" style={{ color: "red" }}>
                  Refused
                </a>
              </td>
            </tr>
            <tr className='trr'>
              <td className='tdd'>285</td>
              <td className='tdd'>11559628</td>
              <td className='tdd'>2023-02-22 10:21:48</td>
              <td className='tdd'>2023-02-22 10:34:19</td>
              <td className='tdd'>wc</td>
              <td className='tdd'>kkkkkkkkhgfcvbn</td>
              <td className='tdd' style={{ color: "red" }}>
                <a href="user-request.php" target="_blank" style={{ color: "red" }}>
                  Refused
                </a>
              </td>
            </tr>
            <tr className='trr'>
              <td className='tdd'>285</td>
              <td className='tdd'>11559628</td>
              <td className='tdd'>2023-02-22 10:21:48</td>
              <td className='tdd'>2023-02-22 10:34:19</td>
              <td className='tdd'>wc</td>
              <td className='tdd'>kkkkkkkkhgfcvbn</td>
              <td className='tdd' style={{ color: "red" }}>
                <a href="user-request.php" target="_blank" style={{ color: "red" }}>
                  Refused
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <br />
        <br />
        <br />
      </div>
    
<Footer />
</>
);
}

export default AgentRequest;
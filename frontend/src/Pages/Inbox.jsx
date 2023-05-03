
import Button from '@mui/material/Button';
import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Inbox = () => {
    return (
<>
<Header></Header>
  <div id="showModalRpw" className="modal" style={{ display: "none" }}>
    <div
      className="modal-content"
      style={{
        backgroundColor: "whitesmoke",
        borderRadius: "30px 0px 30px 0px"
      }}
    >
      <div
        className="modal-body"
        style={{ fontFamily: "Georama-Condensed-ExtraLight" }}
      >
        <span
          id="close"
          style={{ color: "black" }}
          className="close"
          onclick=""
        >
          ×
        </span>
        <form
          action=""
          method="post"
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 16,
            fontFamily: "arial"
          }}
        >
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <select
            id="a.users"
            name="user"
            className="form-create"
            title="User"
            style={{
              visibility: "visible",
              margin: "0px auto",
              height: 45,
              width: 564,
              marginTop: 35
            }}
          >
            <option value={11613562} data-search={11613562}>
              a.elmahfoudhi@dxc.com
            </option>
            <option value={234543} data-search={234543}>
              a.meknihabbachi@dxc.com
            </option>
            <option value={11739588} data-search={11739588}>
              a.oueslati@dxc.com
            </option>
            <option value={11606835} data-search={11606835}>
              abdallah.ghedamsi@dxc.com
            </option>
            <option value={23202159} data-search={23202159}>
              abdelaziz.khedim@dxc.com
            </option>
            <option value={23229891} data-search={23229891}>
              abderrahmen.sahbani@dxc.com
            </option>
            <option value={11571937} data-search={11571937}>
              abelhadj2@dxc.com
            </option>
            <option value={11560433} data-search={11560433}>
              abensalem5@dxc.com
            </option>
            <option value={11559716} data-search={11559716}>
              abir.ben-said2@dxc.com
            </option>
            <option value={11560009} data-search={11560009}>
              abir.gharrad@dxc.com
            </option>
            <option value={11560424} data-search={11560424}>
              achaouchepou@dxc.com
            </option>
            <option value={11560843} data-search={11560843}>
              achikha2@dxc.com
            </option>
            <option value={11740097} data-search={11740097}>
              achraf.bakir@dxc.com
            </option>
            <option value={11618545} data-search={11618545}>
              achref.gorrab@dxc.com
            </option>
            <option value={11709693} data-search={11709693}>
              achref.maktouf2@dxc.com
            </option>
            <option value={23206778} data-search={23206778}>
              achref.slim@dxc.com
            </option>
            <option value={11606773} data-search={11606773}>
              adel.hergal2@dxc.com
            </option>
            <option value={11610074} data-search={11610074}>
              adel.nbili@dxc.com
            </option>
            <option value={467086} data-search={467086}>
              adem.becher@dxc.com
            </option>
            <option value={11560493} data-search={11560493}>
              aderbali2@dxc.com
            </option>
            <option value={23218108} data-search={23218108}>
              adnen.selmi2@dxc.com
            </option>
            <option value={11559779} data-search={11559779}>
              afef.cheikh@dxc.com
            </option>
            <option value={11560426} data-search={11560426}>
              afetni2@dxc.com
            </option>
            <option value={11560212} data-search={11560212}>
              agassoumi2@dxc.com
            </option>
            <option value={11560002} data-search={11560002}>
              ahlem.majouri2@dxc.com
            </option>
          </select>
          <input
            type="text"
            name="msg-subj"
            id="text"
            autoComplete="off"
            style={{ width: 545, margin: "0px auto", marginTop: 20 }}
            placeholder="Subject message"
          />
          <br />
          <br />
          <textarea
            name="msg-content"
            id="text"
            rows={5}
            required=""
            autoComplete="off"
            style={{ width: 560, margin: "0px auto" }}
            onfocus="javascript:this.innerHTML = ''"
            defaultValue={"Content message"}
          />
          <br />
          <br />
          <input
            type="submit"
            name="new-message"
            style={{
              width: 570,
              fontSize: 16,
              backgroundColor: "olivedrab",
              height: 35,
              color: "white",
              margin: "0px auto"
            }}
            defaultValue="Send!"
          />
        </form>
        <p />
        <span
          style={{ color: "white", fontWeight: "bold", zIndex: 1, opacity: 1 }}
        />
      </div>
    </div>
  </div>
  <div className="dynamic" style={{ marginTop: 260 }}>
    <table className="dynamic-table2">
      <caption className="caption">
        Inbox{" "}
        <input
          type="button"
          defaultValue="New Message"
          onclick="showModalRpw()"
          style={{
            marginLeft: 30,
            backgroundColor: "olivedrab",
            color: "white"
          }}
        />{" "}
        &nbsp; |{" "}
        <input
          type="button"
          defaultValue="Open Chat"
          onclick="openChat()"
          style={{
            marginLeft: 20,
            backgroundColor: "olivedrab",
            color: "white"
          }}
        />
      </caption>
      <thead style={{ color: "#64a4e8" }}>
        <tr style={{ textAlign: "center" }}>
          <th className="id"> Request ID </th>
          <th> Agent ID </th>
          <th> Agent Fullname </th>
          <th> Sent Date </th>
          <th> Reply Date </th>
          <th> Request Subject </th>
          <th> Status </th>
          <th> Modify </th>
        </tr>
      </thead>
    </table>
    <br />
    <br />
    <br />
    <br />
   
  </div>
  <Footer></Footer>
</>
    );
}

export default Inbox;

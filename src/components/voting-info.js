import React from 'react'

import sticker from '../images/ivoted-sticker.png'

const VotingInfo = () => (
  <div id="register">
    <div className="panel-register">
      <h3>Are you Registered to Vote?</h3>
      <img src={sticker} id="img-register" alt="'I Voted!' sticker" />
    </div>
    <div className="panel-register">
      <h3>Here's what you need to know...</h3>
      <ul id="list-register">
        <li>Election day is <span>Tuesday, November 5th, 2019</span>.</li>
        <li>The 6th Ward voting center is located at <span>Demarest School, 401 Garden Street</span>.</li>
        <li id="sub-li">Not in our ward? <a href="https://voter.njsvrs.com/PublicAccess/servlet/com.saber.publicaccess.control.PublicAccessNavigationServlet?USERPROCESS=PollingPlace#" target="_blank">Click here</a> to locate your polling place.</li>
        <li><a href="https://bit.ly/1dtHdob" target="_blank">Click here</a> to check if you're already registered to vote.</li>
        <li>If not, <a href="https://bit.ly/2OiqTx8" target="_blank">click here</a> to register online.</li>
        <li>Be sure to register by <span>Tuesday, October 15th, 2019</span>.</li>
      </ul>
    </div>
  </div>
)

export default VotingInfo
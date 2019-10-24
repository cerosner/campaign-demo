import React from 'react'

import sticker from '../images/ivoted-sticker.png'

export default () => (
  <div id="voting-info">
    <div className="voting-info-panel">
      <h3>Are you Registered to Vote?</h3>
      <img src={sticker} id="voting-info-img" alt="'I Voted!' sticker" />
    </div>
    <div className="voting-info-panel">
      <h3>Here's what you need to know...</h3>
      <ul id="voting-info-list">
        <li>
          Election day is <em>Tuesday, November 5th, 2019</em>.
        </li>
        <li>
          <a href="https://bit.ly/1dtHdob" target="_blank">Click here</a> to check if you're already registered to vote.
        </li>
        <li>
          If you aren't already registered, <a href="https://bit.ly/2OiqTx8" target="_blank">click here</a> to register online.
        </li>
        <li>
          Be sure to register by <em>Tuesday, October 15th, 2019</em>.
          <li>
          <a href="https://voter.njsvrs.com/PublicAccess/servlet/com.saber.publicaccess.control.PublicAccessNavigationServlet?USERPROCESS=PollingPlace#" target="_blank">Click here</a> to locate your district's polling center.
        </li>
        </li>
      </ul>
    </div>
  </div>
)

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
        <li>How/when to register by</li>
        <li>How/where to vote (form of ID?)</li>
        <li>When to vote (early voting?)</li>
      </ul>
    </div>
  </div>
)

export default VotingInfo
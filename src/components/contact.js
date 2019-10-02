import React from 'react'

const Contact = () => (
  <div className="block">
    <h3>Contact</h3>
    <h6>
      Please feel free to ask questions or voice any of your concerns.
    </h6>
      <form name="contact" method="POST" data-netlify="true">
      <p>
        <label>Name: <input type="text" name="name" required /></label>
      </p>
      <p>
        <label>Email (optional): <input type="email" name="email" /></label>
      </p>
      <p>
        <label>Message: <textarea name="message"></textarea></label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </div>
)

export default Contact
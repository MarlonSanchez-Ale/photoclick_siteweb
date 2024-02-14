//import React from 'react'

export default function ContactForm() {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 items-center sm:w-full md:w-[90vh] p-10 rounded-md gap-5 border border-white">
      <input className="input" placeholder="Name" />
      <input className="input" placeholder="Email" />
      <input className="input" placeholder="Subject" />
      <input className="input" placeholder="Date" />
      <textarea className="input" placeholder="Message" />
      <button className="btn_primary w-full">Send message</button>
    </div>
  )
}

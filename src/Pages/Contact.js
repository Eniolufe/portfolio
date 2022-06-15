import React from "react";

function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-full bg-[#0a192f] flex justify-center items-center pt-6"
    >
      <form
        method="POST"
        action="https://getform.io/f/9cacfabe-cb1a-47d5-96d6-9d849db1bafe"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 pt-4">
            // Submit the form below or shoot me an email - eniolufe@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mb-10 mx-auto flex items-center rounded-full">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
}

export default Contact;

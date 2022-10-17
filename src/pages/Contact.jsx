import React from "react";
import { Footer } from "../components";

export default function Contact() {
  return (
    <>
      <div className="page contact-us-page">
        <section className="clean-block clean-form dark">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-info">Contact Us</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                quam urna, dignissim nec auctor in, mattis vitae leo.
              </p>
            </div>
            <form>
              <div className="mb-3">
                <label className="form-label" for="name">
                  Name
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="name"
                  name="name"
                />
              </div>
              <div className="mb-3">
                <label className="form-label" for="subject">
                  Subject
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="subject"
                  name="subject"
                />
              </div>
              <div className="mb-3">
                <label className="form-label" for="email">
                  Email
                </label>
                <input
                  className="form-control"
                  type="email"
                  id="email"
                  name="email"
                />
              </div>
              <div className="mb-3">
                <label className="form-label" for="message">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                ></textarea>
              </div>
              <div className="mb-3">
                <button className="btn btn-primary" type="submit">
                  Send
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

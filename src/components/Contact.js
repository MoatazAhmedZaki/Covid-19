import React from "react";

export default function Contact() {
  return (
    <section class="contact">
      <div class="container">
        <div class="help">
          <p class="help__desc">Have Question in mind? Let us help you</p>
          <form action="">
            <input
              type="email"
              class="help__mail"
              placeholder="demo@gmail.com"
              required
            />
            <button type="submit" class="help__send">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

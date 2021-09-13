import React from "react"

const ContactForm = () => {
  return (
    <form
      className="shadow-lg p-5 rounded mb-5"
      action="https://formspree.io/f/xayaaalv"
      method="POST"
    >
      <div class="mb-3">
        <label for="name" class="form-label">
          Name
        </label>
        <input type="text" class="form-control" name="name" />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">
          Email address
        </label>
        <input type="email" class="form-control" name="email" />
      </div>
      <div class="mb-3">
        <label for="message" class="form-label">
          Message
        </label>
        <textarea class="form-control" name="message" rows="3"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  )
}

export default ContactForm

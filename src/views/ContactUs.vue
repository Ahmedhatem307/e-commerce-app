<template>
  <div>
    <h1>Contact Page</h1>
    <p>
      Have questions, feedback, or need help with an order? We're here to help!
      Reach out to us using the form below or through our contact details.
    </p>

    <form class="contactForm">
      <label for="name">
        Name <input type="text" placeholder="Your Name" required
      /></label>
      <label for="email">
        Email <input type="email" placeholder="Your Email" required
      /></label>
      <label for="message">
        Message <textarea placeholder="Your Message" required></textarea>
      </label>
      <button type="submit" class="contactForm__btn" disabled>
        Send Message
      </button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.contactPage {
  max-width: 600px;
  margin: 3rem auto;
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.03);
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  font-family: Arial, sans-serif;

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
    text-align: center;
  }

  p {
    text-align: center;
    margin-bottom: 2rem;
    color: #555;
  }
}

.contactForm {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  label {
    display: flex;
    flex-direction: column;
    font-size: 0.95rem;
    color: #333;
  }

  input,
  textarea {
    margin-top: 0.5rem;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.3s ease;

    &:focus {
      border-color: #000;
      outline: none;
    }
  }

  textarea {
    resize: vertical;
    min-height: 120px;
  }

  &__btn {
    padding: 0.75rem 1.5rem;
    background-color: #1c2e4a;
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    align-self: flex-end;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #333;
    }
  }
}
</style>

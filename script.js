const message =
  "We received your message and our team has already started working on it. If the inquiry is urgent, it’s best to use the number listed below to talk to our team. Otherwise, we'll reply by email asap. Talk to you soon, and thanks again for being awesome!";

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });

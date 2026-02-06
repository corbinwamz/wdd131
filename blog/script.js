function addStars(span) {
    const stars = span.innerText.length;
    span.setAttribute('aria-label', `${stars} out of 5 stars`);
  }

  const spans = document.querySelectorAll("section span");
  spans.forEach(addStars);
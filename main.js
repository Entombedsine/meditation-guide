// Aparición suave al hacer scroll. Sin JavaScript (o sin IntersectionObserver) todo se ve normal.
if ("IntersectionObserver" in window) {
  const items = document.querySelectorAll(".narrow > *, .steps li, section h2, .card");

  items.forEach((el) => {
    el.classList.add("reveal");
    const siblings = el.parentElement.children;
    el.style.setProperty("--d", `${Math.min([...siblings].indexOf(el), 4) * 0.08}s`);
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  items.forEach((el) => observer.observe(el));
}

const main = document.getElementById("main");
const form = document.getElementById("form");
const response = document.getElementById("response");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const msg = document.getElementById("msg").value;

    fetch("http://localhost:3000/contato/", {
        method: "POST",
        body: JSON.stringify({ email: email, message: msg }),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
      .then((res) => {
        return res.text();
      })
      .then((data) => {
        response.innerHTML = data;
        main.removeChild(form);
      })
      .catch(err => {
        response.innerHTML = err;
        main.removeChild(form);
    });
});
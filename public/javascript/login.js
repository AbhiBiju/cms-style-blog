// const { response } = require("express");

async function loginFormHandler(event) {
  event.preventDefault();

  const userName = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (userName && password) {
    const response = await fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({
        userName,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    console.log("jello");
    if (response.ok) {
      document.location.replace("/dashboard/");
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector(".login-form").addEventListener("submit", loginFormHandler);
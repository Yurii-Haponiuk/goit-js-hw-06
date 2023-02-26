const loginFormEl = document.querySelector(".login-form");

loginFormEl.addEventListener("submit", event => {
    event.preventDefault();
    const formData = {};
    for (const element of loginFormEl.elements) {
    if (element.name) {
      formData[element.name] = element.value;
    }
  }
  if (formData.email && formData.password) {
    console.log(formData);
    loginFormEl.reset();
  } else {
    alert('Всі поля повинні бути заповнені');
  }
})

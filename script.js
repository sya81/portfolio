const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  const formResult = document.getElementById("formResult");

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  let isValid = true;

  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  formResult.textContent = "";
  formResult.className = "form-result";

  if (name === "") {
    nameError.textContent = "이름을 입력해주세요.";
    isValid = false;
  }

  if (email === "") {
    emailError.textContent = "이메일을 입력해주세요.";
    isValid = false;
  } else if (!isValidEmail(email)) {
    emailError.textContent = "올바른 이메일 형식이 아닙니다.";
    isValid = false;
  }

  if (message === "") {
    messageError.textContent = "메시지를 입력해주세요.";
    isValid = false;
  }

  if (isValid) {
    formResult.textContent = "문의가 정상적으로 확인되었습니다. 실제 이메일은 전송되지 않습니다.";
    formResult.classList.add("success");
    contactForm.reset();
  } else {
    formResult.textContent = "입력값을 다시 확인해주세요.";
    formResult.classList.add("error");
  }
});

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

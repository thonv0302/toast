import "./style.css";

var btnSuccess = document.querySelector(".control .success");
var btnWarning = document.querySelector(".control .warning");
var btnError = document.querySelector(".control .error");

console.log("btnWarning: ", btnWarning);

btnWarning.addEventListener("click", function () {
  createToast("warning");
});

btnSuccess.addEventListener("click", function () {
  createToast("success");
});

btnError.addEventListener("click", function () {
  createToast("error");
});

function createToast(status) {
  let templateInner = `
    <span class="message">This is a success message</span> <span class="countdown"></span>
    `;
  switch (status) {
    case "success":
      templateInner = `
    <span class="message">This is a success message</span> <span class="countdown"></span>
    `;
      break;
    case "error":
      templateInner = `
    <span class="message">This is a error message</span> <span class="countdown"></span>
    `;
      break;
    case "warning":
      templateInner = `
    <span class="message">This is a warning message</span> <span class="countdown"></span>
    `;
      break;
    default:
      break;
  }
  console.log("vao day");
  //     <div class="toast success">
  //     <i></i>
  //     <span class="message">This is a success message</span>
  //     <span class="countdown"></span>
  //   </div>
  //   <div class="toast warning">
  //     <i></i>
  //     <span class="message">This is a success message</span>
  //     <span class="countdown"></span>
  //   </div>
  //   <div class="toast error">
  //     <i></i>
  //     <span class="message">This is a success message</span>
  //     <span class="countdown"></span>
  //   </div>
  var toast = document.createElement("div");
  toast.classList.add("toast");
  toast.classList.add(status);
  toast.innerHTML = templateInner;
  var toastList = document.getElementById("toasts");
  toastList.appendChild(toast);

  setTimeout(function () {
    toast.style.animation = "slide_hide 2s ease forwards";
  }, 4000);

  setTimeout(function () {
    toast.remove();
  }, 6000);
}

"use strict";

// SHOW INFO

const showInfo = function () {
  document.getElementById("personal-info").classList.remove("hidden");
  document.getElementById("hidden-info").classList.add("hidden");
};

document.getElementById("submit").addEventListener("click", function () {
  const email = document.getElementById("inputEmail").value;
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const testEmail = regex.test(email);
  if (testEmail) {
    showInfo();
  } else if (email === "") {
    alert("Vui lòng nhập email để xác thực");
  } else if (!testEmail) {
    alert("Vui lòng nhập email đúng định dạng");
    // document.write("Vui lòng nhập email đúng định dạng");
  }
});

// VIEW MORE, VIEW LESS BUTTON

const infoList = ["exp", "edu", "act", "hobby", "language", "skill"];

for (let i = 0; i < infoList.length; i++) {
  const infoName = infoList[i];
  document
    .getElementById(`${infoName}-view-more`)
    .addEventListener("click", function () {
      document
        .getElementById(`${infoName}-view-more-content`)
        .classList.remove("hidden");
      document.getElementById(`${infoName}-view-more`).classList.add("hidden");
    });
  document
    .getElementById(`${infoName}-view-less`)
    .addEventListener("click", function () {
      document
        .getElementById(`${infoName}-view-more-content`)
        .classList.add("hidden");
      document
        .getElementById(`${infoName}-view-more`)
        .classList.remove("hidden");
    });
}

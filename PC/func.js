// 이메일 주소 유효성 검사
function validation(address) {
  let valid = true;
  if (address.length === 0) {
    valid = false;
    return valid;
  }
  const result = address.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  if (result === null) {
    valid = false;
  }
  return valid;
}

// 모달창 띄우기
function openPage() {
  document.getElementsByClassName("modal").style.display = "flex";
}

// 모달창 닫기
function closePage() {
  document.getElementsByClassName("modal").style.display = "none";
}

// Subscribe 버튼 클릭
const subsBtn = document.getElementsByClassName("subscribe-btn");
subsBtn.addEventListener("click", function () {
  const valid = document.getElementsByClassName("email-input").value;
  if (validation(valid)) {
    // 유효한 이메일 주소
    // 모달창 띄우기
    openPage();
  } else {
    // 유효하지 않은 이메일 주소
    // 윈도우 알림창으로 경고하기
    window.alert("Invalid Email Address");
  }
});

// 모달창 닫기
const okBtn = document.getElementsByClassName("ok-btn");
okBtn.addEventListener("click", function () {
  closePage();
});

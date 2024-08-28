// 이메일 주소 유효성 검사
function validation(address) {
  let valid = true;
  const result = address.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  if (result === null) {
    valid = false;
  }
  return valid;
}

const modalPage = document.getElementsByClassName("modal");
const subsBtn = document.getElementsByClassName("subscribe-btn");
const okBtn = document.getElementsByClassName("ok-btn");
const scrollBtn = document.getElementsByClassName("scroll-btn");

// 모달창 열기
function openPage() {
  modalPage[0].style.display = "block";
}

// 모달창 닫기
function closePage() {
  modalPage[0].style.display = "none";
}

// Subscribe 버튼 클릭
// 이메일 주소 유효성 검사 후 모달창 열기
subsBtn[0].addEventListener("click", () => {
  const valid = document.getElementsByClassName("email-input")[0].value;
  if (validation(valid)) {
    // 유효한 이메일 주소
    // 모달창 열기
    openPage();
  } else {
    // 유효하지 않은 이메일 주소
    // 윈도우 알림창으로 경고하기
    window.alert("Invalid Email Address");
  }
});

// 'OK! I Love HODU' 버튼 클릭
// 모달창 닫기
okBtn[0].addEventListener("click", () => {
  closePage();
});

// 스크롤 시 스크롤 업 버튼 표시
window.addEventListener("scroll", () => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 20
  ) {
    scrollBtn[0].style.display = "block";
  } else {
    scrollBtn[0].style.display = "none";
  }
});

// 스크롤 업 버튼 클릭 시 페이지 최상단으로 이동
scrollBtn[0].addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

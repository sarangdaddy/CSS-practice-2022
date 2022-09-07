const dDay = document.querySelector(".d-day");

function getDate() {
  const today = new Date();
  const christmasEve = Date.parse("2022/12/24/00:00:00");
  const setDday = christmasEve - Date.parse(today);

  const day = Math.floor(setDday / (1000 * 60 * 60 * 24));
  const hours = String(Math.floor((setDday / (1000 * 60 * 60)) % 24)).padStart(
    2,
    "0"
  );
  const minute = String(Math.floor((setDday / (1000 * 60)) % 60)).padStart(
    2,
    "0"
  );
  const second = String(Math.floor((setDday / 1000) % 60)).padStart(2, "0");

  dDay.innerText = `${day}일 ${hours}시간 ${minute}분 ${second}초`;
}

getDate();
setInterval(getDate, 1000);

// command dibawah berfungsi untuk membuat fungsi agar waktu muncul
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('current-time').innerText = timeString + " WIB";
  }
  setInterval(updateTime, 1000);
  updateTime();

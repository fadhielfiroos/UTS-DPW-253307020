/* ════════════════════════════════════════
   script.js — dipakai semua halaman
════════════════════════════════════════ */

/* ── Nav aktif otomatis ── */
document.addEventListener("DOMContentLoaded", function () {
  var path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("nav a").forEach(function (a) {
    if (a.getAttribute("href") === path) a.classList.add("active");
  });
});

/* ── Notifikasi popup ── */
function showNotification(title, msg) {
  var el = document.getElementById("notification");
  if (!el) return;
  el.innerHTML = "<strong>" + title + "</strong>" + msg;
  el.classList.add("show");
  setTimeout(function () {
    el.classList.remove("show");
  }, 4500);
}

/* ── Tab gelombang (index.html) ── */
function switchTab(n) {
  document.querySelectorAll(".tab-panel").forEach(function (p) {
    p.classList.remove("active");
  });
  document.querySelectorAll(".tab-btn").forEach(function (b) {
    b.classList.remove("active");
  });
  var panel = document.getElementById("panel" + n);
  var btn = document.getElementById("tab" + n);
  if (panel) panel.classList.add("active");
  if (btn) btn.classList.add("active");
}

/* ── Info gelombang (form.html) ── */
function updateGelombangInfo() {
  var val = document.getElementById("gelombang")
    ? document.getElementById("gelombang").value
    : "";
  var box = document.getElementById("gelombang-info");
  if (!box) return;
  box.className = "gelombang-info-box";
  if (val === "1") {
    box.classList.add("g1");
    box.innerHTML =
      "🟢 <strong>Gelombang 1</strong> — Pendaftaran: 1–30 Juni 2030 &nbsp;·&nbsp; Pengumuman: 14 Juli 2030";
  } else if (val === "2") {
    box.classList.add("g2");
    box.innerHTML =
      "🔵 <strong>Gelombang 2</strong> — Pendaftaran: 1–31 Agustus 2030 &nbsp;·&nbsp; Pengumuman: 15 Sept 2030";
  }
}

/* ── Submit form pendaftaran (form.html) ── */
function handleSubmit() {
  var nama = document.getElementById("nama")
    ? document.getElementById("nama").value.trim()
    : "";
  var nik = document.getElementById("nik")
    ? document.getElementById("nik").value.trim()
    : "";
  var gelombang = document.getElementById("gelombang")
    ? document.getElementById("gelombang").value
    : "";
  var jalur = document.getElementById("jalur")
    ? document.getElementById("jalur").value
    : "";
  var jk = document.getElementById("jenis_kelamin")
    ? document.getElementById("jenis_kelamin").value
    : "";
  var alamat = document.getElementById("alamat")
    ? document.getElementById("alamat").value.trim()
    : "";

  if (!nama || !nik || !gelombang || !jalur || !jk || !alamat) {
    showNotification(
      "Data Belum Lengkap",
      "Harap isi semua field yang wajib diisi.",
    );
    return;
  }
  if (nik.length !== 16 || isNaN(nik)) {
    showNotification(
      "NIK Tidak Valid",
      "NIK harus terdiri dari 16 digit angka.",
    );
    return;
  }
  var gelLabel =
    gelombang === "1"
      ? "Gelombang 1 (Juni 2030)"
      : "Gelombang 2 (Agustus 2030)";
  showNotification(
    "Pendaftaran Berhasil!",
    nama + " terdaftar di " + gelLabel + " jalur " + jalur + ".",
  );
  document.getElementById("ppdb-form").reset();
  var box = document.getElementById("gelombang-info");
  if (box) box.className = "gelombang-info-box";
}

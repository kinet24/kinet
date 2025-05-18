document.getElementById("daftarForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Terima kasih, data Anda telah kami terima. Tim KINET akan segera menghubungi Anda!");
  this.reset();
});
document.getElementById("daftarForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const form = e.target;
  const data = {
    nama: form.nama.value,
    whatsapp: form.whatsapp.value,
    alamat: form.alamat.value,
    paket: form.paket.value
  };

  fetch("https://script.google.com/macros/s/AKfycbwbWvrcvUBZt_YhB6PUoZH3-_s4O-1LmgUyfko-ChFejRhsaaz_s3OT1zVQXEyd04jWCw/exec", { // ← Ganti dengan link kamu
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  })
  .then(res => res.json())
  .then(res => {
    alert("Data berhasil dikirim! Tim kami akan segera menghubungi Anda.");
    form.reset();
  });
});

document.getElementById("testimoniForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const form = e.target;
  const nama = form.nama.value;
  const pesan = form.pesan.value;
  const foto = form.foto.value || "https://via.placeholder.com/80";

  const container = document.getElementById("testimoniList");
  const el = document.createElement("div");
  el.className = "testimoni-item";
  el.innerHTML = `
    <img src="${foto}" alt="Foto ${nama}" />
    <div>
      <strong>${nama}</strong>
      <p>${pesan}</p>
    </div>
  `;
  container.prepend(el);
  form.reset();
});

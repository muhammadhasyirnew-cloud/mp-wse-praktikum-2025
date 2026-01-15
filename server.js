const express = require("express");
const app = express();
const PORT = 3001;

app.use(express.json());

// Root
app.get("/", (req, res) => {
  res.send("Server Client–Server WSE berjalan");
});

let mahasiswa = [];

// POST mahasiswa
app.post("/mahasiswa", (req, res) => {
  mahasiswa.push(req.body);
  res.status(201).json({
    message: "Mahasiswa ditambahkan",
    data: req.body
  });
});

// GET mahasiswa
app.get("/mahasiswa", (req, res) => {
  res.json(mahasiswa);
});

// DELETE mahasiswa berdasarkan NIM
app.delete("/mahasiswa/:nim", (req, res) => {
  const nim = req.params.nim;
  const index = mahasiswa.findIndex(m => m.nim === nim);

  if (index === -1) {
    return res.status(404).json({
      message: "Mahasiswa tidak ditemukan"
    });
  }

  mahasiswa.splice(index, 1);
  res.json({
    message: "Mahasiswa berhasil dihapus",
    nim: nim
  });
});

// PUT mahasiswa
app.put("/mahasiswa/:nim", (req, res) => {
  const nim = req.params.nim;
  const mhs = mahasiswa.find(m => m.nim === nim);

  if (!mhs) {
    return res.status(404).json({
      message: "Mahasiswa tidak ditemukan"
    });
  }

  Object.assign(mhs, req.body);
  res.json({
    message: "Mahasiswa berhasil diperbarui",
    data: mhs
  });
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});

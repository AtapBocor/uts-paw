
import { Route, Routes } from 'react-router-dom'
import mahasiswa from '../mahasiswa.json'

import { KoleksiProvider } from './context/KoleksiProvider.jsx'
import Layout from './components/Layout.jsx'

import Koleksi from './Pages/Koleksi.jsx'
import Detail from './Pages/Detail.jsx'
import Tambah from './Pages/Tambah.jsx'
import Statistik from './Pages/Statistik.jsx'
import Tentang from './Pages/Tentang.jsx'

function Beranda() {
  return (
    <section>
      <h1>Destinasi Wisata Lampung</h1>
      <p>
        {mahasiswa.nama || 'Nama belum diisi'} ({mahasiswa.nim || 'NIM belum diisi'})
      </p>
    </section>
  )
}

function TidakDitemukan() {
  return (
    <section>
      <h1>404</h1>
      <p>Halaman tidak ditemukan.</p>
    </section>
  )
}

export default function App() {
  return (
    <KoleksiProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Beranda />} />
          <Route path="/koleksi" element={<Koleksi />} />
          <Route path="/koleksi/:id" element={<Detail />} />
          <Route path="/tambah" element={<Tambah />} />
          <Route path="/statistik" element={<Statistik />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="*" element={<TidakDitemukan />} />
        </Route>
      </Routes>
    </KoleksiProvider>
  )
}

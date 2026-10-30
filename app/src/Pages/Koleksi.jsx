
import { useState } from 'react'
import useKoleksi from '../Hooks/useKoleksi.js'

import Loading from '../components/Loading.jsx'
import PesanError from '../components/PesanError.jsx'
import Pencarian from '../components/Pencarian.jsx'
import KartuWisata from '../components/KartuWisata.jsx'

export default function Koleksi() {
  const { items, loading, error } = useKoleksi()
  const [kataKunci, setKataKunci] = useState('')

  const hasilPencarian = items.filter((item) =>
    item.judul.toLowerCase().includes(kataKunci.toLowerCase())
  )

  if (loading) {
    return <Loading pesan="Memuat data wisata..." />
  }

  if (error) {
    return <PesanError pesan={`Gagal memuat data: ${error}`} />
  }

  return (
    <section>
      <h1>Koleksi Wisata Lampung</h1>

      <Pencarian
        nilai={kataKunci}
        onChange={setKataKunci}
      />

      {hasilPencarian.length === 0 ? (
        <p>Wisata tidak ditemukan.</p>
      ) : (
        <div className="daftar-kartu">
          {hasilPencarian.map((item) => (
            <KartuWisata key={item.id} item={item} />
          ))}
        </div>
      )}
    </section>
  )
}


import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useKoleksi from '../Hooks/useKoleksi.js'

export default function Tambah() {
  const { tambah } = useKoleksi()
  const navigate = useNavigate()

  const [judul, setJudul] = useState('')
  const [kategori, setKategori] = useState('')
  const [kabupaten, setKabupaten] = useState('')
  const [hargaTiket, setHargaTiket] = useState('')
  const [jamBuka, setJamBuka] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    if (!judul.trim()) {
      setError('Judul wisata wajib diisi.')
      return
    }

    tambah({
      judul: judul.trim(),
      kategori,
      kabupaten,
      hargaTiket: Number(hargaTiket),
      jamBuka
    })

    navigate('/koleksi')
  }

  return (
    <section>
      <h1>Tambah Wisata</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="judul">Judul</label>
          <input
            id="judul"
            name="judul"
            type="text"
            value={judul}
            onChange={(e) => {
              setJudul(e.target.value)
              setError('')
            }}
          />
        </div>

        <div>
          <label htmlFor="kategori">Kategori</label>
          <input
            id="kategori"
            name="kategori"
            type="text"
            value={kategori}
            onChange={(e) => setKategori(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="kabupaten">Kabupaten/Kota</label>
          <input
            id="kabupaten"
            name="kabupaten"
            type="text"
            value={kabupaten}
            onChange={(e) => setKabupaten(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="hargaTiket">Harga Tiket (Rp)</label>
          <input
            id="hargaTiket"
            name="hargaTiket"
            type="number"
            min="0"
            value={hargaTiket}
            onChange={(e) => setHargaTiket(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="jamBuka">Jam Buka</label>
          <input
            id="jamBuka"
            name="jamBuka"
            type="text"
            value={jamBuka}
            onChange={(e) => setJamBuka(e.target.value)}
          />
        </div>

        {error && <p role="alert">{error}</p>}

        <button type="submit">Simpan</button>
      </form>
    </section>
  )
}

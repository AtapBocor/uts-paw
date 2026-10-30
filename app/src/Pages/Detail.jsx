import { useParams, useNavigate } from 'react-router-dom'
import useKoleksi from '../Hooks/useKoleksi.js'

export default function Detail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { items, loading, error, hapus } = useKoleksi()

  if (loading) return <p>Memuat data...</p>
  if (error) return <p role="alert">{error}</p>

  const wisata = items.find((item) => item.id === id)

  if (!wisata) {
    return (
      <main>
        <h1>Wisata tidak ditemukan</h1>
        <button onClick={() => navigate('/koleksi')}>
          Kembali ke Koleksi
        </button>
      </main>
    )
  }

  return (
    <main>
      <h1>{wisata.judul}</h1>

      <p>Kategori: {wisata.kategori}</p>
      <p>Kabupaten/Kota: {wisata.kabupaten}</p>
      <p>Harga Tiket (Rp): {wisata.hargaTiket}</p>
      <p>Jam Buka: {wisata.jamBuka}</p>

      <div className="aksi">
        <button onClick={() => navigate('/koleksi')}>
          Kembali
        </button>

        <button
          onClick={() => {
            hapus(wisata.id)
            navigate('/koleksi')
          }}
        >
          Hapus Wisata
        </button>
      </div>
    </main>
  )
}
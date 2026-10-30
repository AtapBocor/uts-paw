import { Link } from 'react-router-dom'

export default function KartuWisata({ item }) {
  return (
    <article className="kartu">
      <h2>{item.judul}</h2>
      <p>{item.kategori}</p>
      <p>{item.kabupaten}</p>
      <p>Harga Tiket: Rp{item.hargaTiket}</p>
      <p>Jam Buka: {item.jamBuka}</p>

      <Link to={`/koleksi/${item.id}`}>
        Lihat Detail
      </Link>
    </article>
  )
}
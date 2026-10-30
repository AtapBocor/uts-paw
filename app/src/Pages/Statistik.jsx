
import useKoleksi from '../Hooks/useKoleksi.js'

export default function Statistik() {
  const { items, loading, error } = useKoleksi()

  if (loading) return <p>Memuat statistik...</p>
  if (error) return <p role="alert">{error}</p>

  const statistik = items.reduce((hasil, item) => {
    const kategori = item.kategori || 'Tidak berkategori'
    hasil[kategori] = (hasil[kategori] || 0) + 1
    return hasil
  }, {})

  return (
    <section>
      <h1>Statistik Wisata</h1>

      <p>Total wisata: {items.length}</p>

      <table>
        <thead>
          <tr>
            <th>Kategori</th>
            <th>Jumlah Wisata</th>
          </tr>
        </thead>

        <tbody>
          {Object.entries(statistik).map(([kategori, jumlah]) => (
            <tr key={kategori}>
              <td>{kategori}</td>
              <td>{jumlah}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

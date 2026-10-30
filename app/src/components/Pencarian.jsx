export default function Pencarian({ nilai, onChange }) {
  return (
    <input
      type="search"
      aria-label="Cari wisata berdasarkan judul"
      placeholder="Cari nama wisata..."
      value={nilai}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}
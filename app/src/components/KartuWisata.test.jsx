
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom/vitest'
import KartuWisata from './KartuWisata'

const itemContoh = {
  id: 1,
  judul: 'Pantai Mutun',
  kategori: 'Pantai',
  kabupaten: 'Pesawaran',
  hargaTiket: 25000,
  jamBuka: '08.00 - 17.00'
}

describe('Pengujian KartuWisata', () => {
  it('menampilkan judul destinasi wisata', () => {
    render(<MemoryRouter><KartuWisata item={itemContoh} /></MemoryRouter>)
    expect(screen.getByText('Pantai Mutun')).toBeInTheDocument()
  })

  it('menampilkan kategori wisata', () => {
    render(<MemoryRouter><KartuWisata item={itemContoh} /></MemoryRouter>)
    expect(screen.getByText('Pantai')).toBeInTheDocument()
  })

  it('menampilkan nama kabupaten', () => {
    render(<MemoryRouter><KartuWisata item={itemContoh} /></MemoryRouter>)
    expect(screen.getByText('Pesawaran')).toBeInTheDocument()
  })

  it('menampilkan harga tiket', () => {
    render(<MemoryRouter><KartuWisata item={itemContoh} /></MemoryRouter>)
    expect(screen.getByText('Harga Tiket: Rp25000')).toBeInTheDocument()
  })

  it('menampilkan jam buka', () => {
    render(<MemoryRouter><KartuWisata item={itemContoh} /></MemoryRouter>)
    expect(screen.getByText('Jam Buka: 08.00 - 17.00')).toBeInTheDocument()
  })

  it('menampilkan link menuju halaman detail', () => {
    render(<MemoryRouter><KartuWisata item={itemContoh} /></MemoryRouter>)
    expect(screen.getByRole('link', { name: 'Lihat Detail' }))
      .toHaveAttribute('href', '/koleksi/1')
  })
})


import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import Loading from './Loading'

describe('Pengujian Loading', () => {
  it('menampilkan pesan default', () => {
    render(<Loading />)

    expect(screen.getByText('Memuat data...')).toBeInTheDocument()
  })

  it('menampilkan pesan sesuai props', () => {
    render(<Loading pesan="Sedang mengambil data wisata..." />)

    expect(
      screen.getByText('Sedang mengambil data wisata...')
    ).toBeInTheDocument()
  })

  it('menampilkan pesan ketika memuat koleksi wisata', () => {
    render(<Loading pesan="Memuat koleksi wisata..." />)

    expect(
      screen.getByText('Memuat koleksi wisata...')
    ).toBeInTheDocument()
  })

  it('menampilkan pesan ketika memuat detail wisata', () => {
    render(<Loading pesan="Memuat detail wisata..." />)

    expect(
      screen.getByText('Memuat detail wisata...')
    ).toBeInTheDocument()
  })

  it('menampilkan pesan dalam elemen paragraf', () => {
    render(<Loading />)

    expect(screen.getByText('Memuat data...').tagName).toBe('P')
  })
})

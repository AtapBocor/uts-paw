
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import PesanError from './PesanError'

describe('Pengujian PesanError', () => {
  it('menampilkan pesan kesalahan', () => {
    render(<PesanError pesan="Terjadi kesalahan" />)

    expect(screen.getByText('Terjadi kesalahan')).toBeInTheDocument()
  })

  it('memiliki atribut role alert', () => {
    render(<PesanError pesan="Terjadi kesalahan" />)

    expect(screen.getByRole('alert')).toBeInTheDocument()
  })

  it('menampilkan pesan kesalahan sesuai props', () => {
    render(<PesanError pesan="Data wisata gagal dimuat" />)

    expect(screen.getByRole('alert')).toHaveTextContent(
      'Data wisata gagal dimuat'
    )
  })

  it('menampilkan pesan ketika terjadi kegagalan koneksi', () => {
    render(<PesanError pesan="Koneksi internet bermasalah" />)

    expect(screen.getByText('Koneksi internet bermasalah')).toBeInTheDocument()
  })

  it('memperbarui pesan ketika props berubah', () => {
    const { rerender } = render(
      <PesanError pesan="Terjadi kesalahan" />
    )

    rerender(<PesanError pesan="Gagal mengambil data wisata" />)

    expect(screen.getByRole('alert')).toHaveTextContent(
      'Gagal mengambil data wisata'
    )
  })
})

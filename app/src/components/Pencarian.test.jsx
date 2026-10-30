
import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import Pencarian from './Pencarian'

describe('Pengujian Pencarian', () => {
  it('menampilkan kolom pencarian', () => {
    render(<Pencarian nilai="" onChange={() => {}} />)

    expect(
      screen.getByRole('searchbox', {
        name: 'Cari wisata berdasarkan judul'
      })
    ).toBeInTheDocument()
  })

  it('menampilkan placeholder pencarian', () => {
    render(<Pencarian nilai="" onChange={() => {}} />)

    expect(
      screen.getByPlaceholderText('Cari nama wisata...')
    ).toBeInTheDocument()
  })

  it('menampilkan nilai pencarian yang diberikan', () => {
    render(<Pencarian nilai="Pantai Mutun" onChange={() => {}} />)

    expect(
      screen.getByRole('searchbox')
    ).toHaveValue('Pantai Mutun')
  })

  it('memanggil onChange ketika pengguna mengetik', () => {
    const handleChange = vi.fn()

    render(<Pencarian nilai="" onChange={handleChange} />)

    fireEvent.change(
      screen.getByRole('searchbox'),
      { target: { value: 'Pantai Mutun' } }
    )

    expect(handleChange).toHaveBeenCalledWith('Pantai Mutun')
  })

  it('memanggil onChange ketika pencarian dihapus', () => {
    const handleChange = vi.fn()

    render(<Pencarian nilai="Pantai Mutun" onChange={handleChange} />)

    fireEvent.change(
      screen.getByRole('searchbox'),
      { target: { value: '' } }
    )

    expect(handleChange).toHaveBeenCalledWith('')
  })
})


import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import '@testing-library/jest-dom/vitest'
import Layout from './Layout'

function renderLayout() {
  return render(
    <MemoryRouter initialEntries={['/']}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<div>Halaman Beranda</div>} />
        </Route>
      </Routes>
    </MemoryRouter>
  )
}

describe('Pengujian Layout', () => {
  it('menampilkan judul aplikasi', () => {
    renderLayout()
    expect(screen.getByText('Destinasi Wisata Lampung')).toBeInTheDocument()
  })

  it('menampilkan menu Beranda', () => {
    renderLayout()
    expect(screen.getByRole('link', { name: 'Beranda' })).toBeInTheDocument()
  })

  it('menampilkan menu Koleksi', () => {
    renderLayout()
    expect(screen.getByRole('link', { name: 'Koleksi' })).toHaveAttribute('href', '/koleksi')
  })

  it('menampilkan menu Tambah', () => {
    renderLayout()
    expect(screen.getByRole('link', { name: 'Tambah' })).toBeInTheDocument()
  })

  it('menampilkan menu Statistik dan Tentang', () => {
    renderLayout()
    expect(screen.getByRole('link', { name: 'Statistik' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Tentang' })).toBeInTheDocument()
  })

  it('menampilkan footer aplikasi', () => {
    renderLayout()
    expect(screen.getByText('Ujian Tengah Semester Pengembangan Aplikasi Web')).toBeInTheDocument()
  })
})

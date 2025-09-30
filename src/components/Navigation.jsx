import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export function Navigation({ onPageChange, currentPage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const handleNavClick = (page) => {
    // If not on home page, navigate first
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        if (onPageChange) {
          onPageChange(page)
        }
      }, 100)
    } else {
      if (onPageChange) {
        onPageChange(page)
      }
    }
    setMobileMenuOpen(false)
  }

  const navItems = [
    { label: 'Home', page: 'home' },
    { label: 'Experience', page: 'experience' },
    { label: 'Projects', page: 'projects' },
    { label: 'Skills', page: 'skills' },
    { label: 'Activities', page: 'activities' },
    { label: 'Contact', page: 'contact' }
  ]

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => handleNavClick('home')}
          className="font-black text-xl gradient-text hover:opacity-80 transition-opacity"
        >
          YR
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => handleNavClick(item.page)}
              className={`text-sm uppercase tracking-wider transition-colors font-medium ${
                currentPage === item.page ? 'text-white' : 'text-gray-300 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white text-2xl mobile-menu-button"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-t border-white/10">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => handleNavClick(item.page)}
              className={`block w-full text-left px-6 py-4 text-sm uppercase tracking-wider transition-colors ${
                currentPage === item.page ? 'text-white bg-white/10' : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
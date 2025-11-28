import HomePage from '@/pages/HomePage'
import Navbar from '@/layouts/Navbar'
import Footer from '@/components/ui/Footer'
import MovieDetailsPage from '@/pages/MovieDetailsPage'
import SearchPage from '@/pages/SearchPage'
import CategoriesPage from '@/pages/CategoriesPage'
import '@/styles/App.css'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <div className='bg-gray-900 min-h-screen flex flex-col'>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MovieDetailsPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

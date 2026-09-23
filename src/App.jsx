import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import BlogPage from './pages/BlogPage'
import BlogDetailsPage from './pages/BlogDetailsPage'
import AboutPage from './pages/AboutPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:postId" element={<BlogDetailsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App

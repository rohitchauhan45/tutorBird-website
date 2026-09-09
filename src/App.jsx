import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.jsx'
import Layout from './components/Layout.jsx'
import HomePage from './pages/HomePage.jsx'
import BecomeTutorPage from './pages/BecomeTutorPage.jsx'
import PricingPage from './pages/PricingPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import SignupPage from './pages/SignupPage.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/find-a-tutor" element={<Navigate to="/#find-a-tutor" replace />} />
          <Route path="/how-it-works" element={<Navigate to="/#how-it-works" replace />} />
          <Route path="/hsc-specialties" element={<Navigate to="/#hsc-specialties" replace />} />
          <Route path="/become-a-tutor" element={<BecomeTutorPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

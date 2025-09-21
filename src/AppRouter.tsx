import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Menu } from './pages/Menu';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';
export function AppRouter() {
  return <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout>
              <Home />
            </Layout>} />
        <Route path="/about" element={<Layout>
              <About />
            </Layout>} />
        <Route path="/menu" element={<Layout>
              <Menu />
            </Layout>} />
        <Route path="/gallery" element={<Layout>
              <Gallery />
            </Layout>} />
        <Route path="/contact" element={<Layout>
              <Contact />
            </Layout>} />
      </Routes>
    </BrowserRouter>;
}
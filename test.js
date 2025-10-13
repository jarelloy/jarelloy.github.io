import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, MusicLessons, JammingStudio, Pricing, Contact } from "./pages";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <nav className="p-4 bg-gray-900 text-white flex justify-between">
          <h1 className="text-2xl font-bold">ASYNC Music School</h1>
          <div>
            <Link to="/" className="mx-2">Home</Link>
            <Link to="/lessons" className="mx-2">Music Lessons</Link>
            <Link to="/studio" className="mx-2">Jamming Studio</Link>
            <Link to="/pricing" className="mx-2">Pricing</Link>
            <Link to="/contact" className="mx-2">Contact</Link>
          </div>
        </nav>
        <main className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lessons" element={<MusicLessons />} />
            <Route path="/studio" element={<JammingStudio />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="p-4 bg-gray-900 text-white text-center">
          &copy; {new Date().getFullYear()} ASYNC Music School. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

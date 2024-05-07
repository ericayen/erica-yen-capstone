import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BeansPage from "./pages/BeansPage";
import BeansDetailPage from "./pages/BeansDetailPage";
import QuizPage from "./pages/QuizPage";
import ResultPage from "./pages/ResultPage";
import CommentsPage from "./pages/CommentsPage";
import Footer from "./components/Footer";
import NotFoundPage from "./pages/NotFoundPage";
import AboutCoffee from "./pages/AboutCoffee";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/beans" element={<BeansPage />} />
        <Route path="/beans/:id" element={<BeansDetailPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/quiz/result" element={<ResultPage />} />
        <Route path="/comments" element={<CommentsPage />} />
        <Route path="/coffee" element={<AboutCoffee />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewGenMainPage from "./pages/MainPage";
import ProjectDetails from "./components/ProjectDetails";
import portfolioData from "./data/portfolioData";
import "./styles/sass/main.css";
import "./App.css";

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<NewGenMainPage />} />
                <Route path="/project/:id" element={<ProjectDetails projects={portfolioData} />} />
            </Routes>
        </Router>

    );
}

export default App;
import ProjectsPage from "./pages/projects/ProjectsPage";
import ResumePage from "./pages/resume/ResumePage";
import { Route, Routes } from "react-router-dom";
import Writings from "./pages/writings/Writings";
import PostPage from "./pages/writings/PostPage";
import AboutPage from "./pages/about/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/home/home";

function App() {
  return (
    <Routes>
      <Route path="/writings/:slug" element={<PostPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/writings" element={<Writings />} />
      <Route path="/resume" element={<ResumePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<ErrorPage />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;

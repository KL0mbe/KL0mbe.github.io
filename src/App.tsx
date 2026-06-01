import ProjectsPage from "./pages/projects/ProjectsPage";
import ResumePage from "./pages/resume/ResumePage";
import { Route, Routes } from "react-router-dom";
import Writings from "./pages/writings/Writings";
import PostPage from "./pages/writings/PostPage";
import AboutPage from "./pages/about/AboutPage";
import Home from "./pages/home/home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/writings" element={<Writings />} />
      <Route path="/writings/:slug" element={<PostPage />} />
      <Route path="/resume" element={<ResumePage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}

export default App;

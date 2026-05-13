import ProjectsPage from "./pages/projects/ProjectsPage";
import { Route, Routes } from "react-router-dom";
import Writings from "./pages/writings/Writings";
import Resume from "./pages/resume/Resume";
import Home from "./pages/home/home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/projects" element={<ProjectsPage />}></Route>
      <Route path="/writings" element={<Writings />}></Route>
      <Route path="/resume" element={<Resume />}></Route>
    </Routes>
  );
}

export default App;

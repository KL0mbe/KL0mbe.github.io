import ProjectsPage from "./pages/projects/ProjectsPage";
import { Route, Routes } from "react-router-dom";
import Writings from "./pages/writings/Writings";
import Home from "./pages/home/home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/projects" element={<ProjectsPage />}></Route>
      <Route path="/writings" element={<Writings />}></Route>
    </Routes>
  );
}

export default App;

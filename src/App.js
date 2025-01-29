import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import { Post } from "./pages/Post";
import Layout from "./pages/Layout";
import { Indexes } from "./pages/Indexes";
import Notfound from "./pages/Notfound";
import { Contact } from "./pages/Contact";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Layout />} >
            <Route index element={<Indexes />} />
            <Route path="post" element={<Post />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<Notfound />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter >
  );
};
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import MediaPlayerLayout from "./MediaPlayerLayout";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MediaPlayerLayout />}>
          <Route></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import MediaPlayerLayout from "./MediaPlayerLayout";
import AlbumPage from "./pages/AlbumPage";
import ArtistPage from "./pages/ArtistPage";
import ForYouPage from "./pages/ForYouPage";
import NotFoundPage from "./pages/NotFoundPage";
import RadioPage from "./pages/RadioPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MediaPlayerLayout />}>
          <Route index element={<ForYouPage />}></Route>
          <Route path="artist" element={<ArtistPage />}></Route>
          <Route path="album" index element={<AlbumPage />}></Route>
          <Route path="radio" index element={<RadioPage />}></Route>
          <Route path="*" index element={<NotFoundPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

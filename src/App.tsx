import "./styles/global.scss";

import { useState } from "react";

import { Content } from "./components/Content";
import { SideBar } from "./components/SideBar";

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar genreId={setSelectedGenreId} />
      <Content id={selectedGenreId} />
    </div>
  );
}

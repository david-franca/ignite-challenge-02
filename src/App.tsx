import "./styles/global.scss";

import { useState } from "react";

import { Content } from "./components/Content";
import { SideBar } from "./components/SideBar";

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar
        handleClickButton={handleClickButton}
        selectedGenreId={selectedGenreId}
      />
      <Content id={selectedGenreId} />
    </div>
  );
}

import { Route, Routes } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import GamePage from "./Pages/GamePage";
import PlayersPage from "./Pages/PlayersPage";
import SettingsPage from "./Pages/SettingsPage";

export default function App() {
  return (
    <main className="w-screen h-screen flex items-start justify-start">
      <Sidebar />
      <div className="flex-[1.5]">
        <Routes>
          <Route path="/" element={<GamePage />} />
          <Route path="/players" element={<PlayersPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </div>
    </main>
  );
}

import { Navigate, Route, Routes } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import GamePage from "./Pages/GamePage";
import PlayersPage from "./Pages/PlayersPage";
import SettingsPage from "./Pages/SettingsPage";
import Login from "./Pages/Login";

export default function App() {
  const isAuthenciated = true;
  return (
    <main className="w-screen h-screen flex items-start justify-start overflow-x-hidden">
      <Sidebar />
      <div className="flex-[1.5]">
        <Routes>
          <Route
            path="/"
            element={isAuthenciated ? <GamePage /> : <Navigate to="/login" />}
          />
          <Route
            path="/players"
            element={
              isAuthenciated ? <PlayersPage /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/settings"
            element={
              isAuthenciated ? <SettingsPage /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/login"
            element={!isAuthenciated ? <Login /> : <Navigate to="/" />}
          />
        </Routes>
      </div>
    </main>
  );
}

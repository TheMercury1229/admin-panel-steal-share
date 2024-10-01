import { create } from "zustand";

type GameState = {
  gameId: string | null;
  players: { id: string; name: string; points: number }[];
  topScorer: string | null;
  startGame: (gameId: string) => void;
  deactivateGame: () => void;
  updatePlayers: (
    players: { id: string; name: string; points: number }[]
  ) => void;
};

export const useGameStore = create<GameState>((set) => ({
  gameId: null,
  players: [],
  topScorer: null,
  startGame: async (gameId) => {
    try {
      const res = await fetch("http://localhost:3000/api/start-game", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ gameId }),
      });

      if (res.ok) {
        set({ gameId });
        console.log(`Game ${gameId} started`);
      }
    } catch (error) {
      console.error("Error starting the game:", error);
    }
  },
  deactivateGame: async () => {
    try {
      const res = await fetch("http://localhost:3000/api/deactivate-game", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ gameId: useGameStore.getState().gameId }),
      });

      if (res.ok) {
        set({ gameId: null });
        console.log("Game deactivated");
      }
    } catch (error) {
      console.error("Error deactivating the game:", error);
    }
  },
  updatePlayers: (players) => set({ players }),
}));

import { useState } from "react";
import { Button } from "@/Components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import {
  Dialog,
  DialogTrigger,
  DialogTitle,
  DialogContent,
} from "@/Components/ui/dialog";

// Custom Loader Component
const Loader = () => (
  <svg
    className="animate-spin h-5 w-5 mr-2 text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
    ></path>
  </svg>
);

export default function GamePage() {
  const [creatingGame, setCreatingGame] = useState(false);
  const [startingGame, setStartingGame] = useState(false);
  const [deactivatingGame, setDeactivatingGame] = useState(false);
  const [fetchingSpreadsheet, setFetchingSpreadsheet] = useState(false);
  const [exportingSpreadsheet, setExportingSpreadsheet] = useState(false);
  const [gettingTopScorer, setGettingTopScorer] = useState(false);
  const [message, setMessage] = useState("");
  const [selectedStartGame, setSelectedStartGame] = useState<string | null>(
    null
  );
  const [selectedDeactivateGame, setSelectedDeactivateGame] = useState<
    string | null
  >(null);
  const [games, setGames] = useState<string[]>([]); // Example state for games
  const [topScorer, setTopScorer] = useState<string | null>(null);

  // Mock API calls

  const handleCreateGame = async () => {
    setCreatingGame(true);
    setMessage("");

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const newGameId = `GAME-${Math.floor(Math.random() * 10000)}`;
      setGames((prevGames) => [...prevGames, newGameId]);
      setMessage(`Game created successfully! Game ID: ${newGameId}`);
    } catch (error: any) {
      setMessage(`Error creating game: ${error.message}`);
    } finally {
      setCreatingGame(false);
    }
  };

  const handleStartGame = async () => {
    if (!selectedStartGame) return;
    setStartingGame(true);
    setMessage("");

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setMessage(`Game started successfully! Game ID: ${selectedStartGame}`);
    } catch (error: any) {
      setMessage(`Error starting game: ${error.message}`);
    } finally {
      setStartingGame(false);
      setSelectedStartGame(null);
    }
  };

  const handleDeactivateGame = async () => {
    if (!selectedDeactivateGame) return;
    setDeactivatingGame(true);
    setMessage("");

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setGames((prevGames) =>
        prevGames.filter((game) => game !== selectedDeactivateGame)
      );
      setMessage(
        `Game deactivated successfully! Game ID: ${selectedDeactivateGame}`
      );
    } catch (error: any) {
      setMessage(`Error deactivating game: ${error.message}`);
    } finally {
      setDeactivatingGame(false);
      setSelectedDeactivateGame(null);
    }
  };

  const fetchSpreadsheet = async () => {
    setFetchingSpreadsheet(true);
    setMessage("");

    try {
      // Simulate fetching spreadsheet
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setMessage("Spreadsheet fetched successfully!");
    } catch (error: any) {
      setMessage(`Error fetching spreadsheet: ${error.message}`);
    } finally {
      setFetchingSpreadsheet(false);
    }
  };

  const exportSpreadsheet = async () => {
    setExportingSpreadsheet(true);
    setMessage("");

    try {
      // Simulate exporting spreadsheet
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setMessage("Spreadsheet exported successfully!");
    } catch (error: any) {
      setMessage(`Error exporting spreadsheet: ${error.message}`);
    } finally {
      setExportingSpreadsheet(false);
    }
  };

  const getTopScorer = async () => {
    setGettingTopScorer(true);
    setMessage("");

    try {
      // Simulate fetching top scorer
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const top = `Player${Math.floor(Math.random() * 100)}`;
      setTopScorer(top);
      setMessage(`Top scorer: ${top}`);
    } catch (error: any) {
      setMessage(`Error fetching top scorer: ${error.message}`);
    } finally {
      setGettingTopScorer(false);
    }
  };

  return (
    <section className="py-8 px-6 bg-white text-black min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Game Management</h2>

      {message && (
        <div className="bg-gray-200 text-gray-800 px-4 py-2 rounded mb-6">
          {message}
        </div>
      )}

      <div className="flex  items-start gap-6">
        {/* Create a Game */}
        <Card className="w-full shadow-md">
          <CardHeader>
            <CardTitle>Create A Game</CardTitle>
            <CardDescription>Initialize a new game session.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              onClick={handleCreateGame}
              disabled={creatingGame}
              className="bg-black text-white flex items-center"
            >
              {creatingGame && <Loader />}
              {creatingGame ? "Creating..." : "Create A Game"}
            </Button>
          </CardContent>
        </Card>

        {/* Start a Game */}
        <Card className="w-full shadow-md">
          <CardHeader>
            <CardTitle>Start A Game</CardTitle>
            <CardDescription>Begin an existing game session.</CardDescription>
          </CardHeader>
          <CardContent>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  disabled={startingGame || games.length === 0}
                  className="bg-black text-white flex items-center"
                >
                  {startingGame && <Loader />}
                  {startingGame ? "Starting..." : "Start A Game"}
                </Button>
              </DialogTrigger>

              <DialogContent>
                <DialogTitle>Select Game to Start</DialogTitle>
                <div className="mt-4 flex flex-col gap-2">
                  {games.length === 0 ? (
                    <p>No games available to start.</p>
                  ) : (
                    games.map((gameId) => (
                      <Button
                        key={gameId}
                        onClick={() => setSelectedStartGame(gameId)}
                        className={`w-full text-left ${
                          selectedStartGame === gameId
                            ? "bg-gray-800 text-white"
                            : "bg-gray-100 text-black"
                        }`}
                      >
                        {gameId}
                      </Button>
                    ))
                  )}
                </div>
                <div className="mt-6 flex justify-end gap-3">
                  <Button
                    onClick={() => setSelectedStartGame(null)}
                    className="bg-gray-300 text-black"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleStartGame}
                    disabled={!selectedStartGame || startingGame}
                    className="bg-black text-white flex items-center"
                  >
                    {startingGame && <Loader />}
                    {startingGame ? "Starting..." : "Start Game"}
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
        {/* Start a Round */}
        <Card className="w-full shadow-md">
          <CardHeader>
            <CardTitle>Start A Round</CardTitle>
            <CardDescription>Begin an existing game's round.</CardDescription>
          </CardHeader>
          <CardContent>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  disabled={startingGame || games.length === 0}
                  className="bg-black text-white flex items-center"
                >
                  {startingGame && <Loader />}
                  {startingGame ? "Starting..." : "Start A Round"}
                </Button>
              </DialogTrigger>

              <DialogContent>
                <DialogTitle>Select Game to Start Round</DialogTitle>
                <div className="mt-4 flex flex-col gap-2">
                  {games.length === 0 ? (
                    <p>No games available to start.</p>
                  ) : (
                    games.map((gameId) => (
                      <Button
                        key={gameId}
                        onClick={() => setSelectedStartGame(gameId)}
                        className={`w-full text-left ${
                          selectedStartGame === gameId
                            ? "bg-gray-800 text-white"
                            : "bg-gray-100 text-black"
                        }`}
                      >
                        {gameId}
                      </Button>
                    ))
                  )}
                </div>
                <div className="mt-6 flex justify-end gap-3">
                  <Button
                    onClick={() => setSelectedStartGame(null)}
                    className="bg-gray-300 text-black"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleStartGame}
                    disabled={!selectedStartGame || startingGame}
                    className="bg-black text-white flex items-center"
                  >
                    {startingGame && <Loader />}
                    {startingGame ? "Starting..." : "Start Game"}
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
        {/* Deactivate a Game */}
        <Card className="w-full shadow-md">
          <CardHeader>
            <CardTitle>Deactivate A Game</CardTitle>
            <CardDescription>
              Remove an existing game from the list.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  disabled={deactivatingGame || games.length === 0}
                  className="bg-black text-white flex items-center"
                >
                  {deactivatingGame && <Loader />}
                  {deactivatingGame ? "Deactivating..." : "Deactivate Game"}
                </Button>
              </DialogTrigger>

              <DialogContent>
                <DialogTitle>Select Game to Deactivate</DialogTitle>
                <div className="mt-4 flex flex-col gap-2">
                  {games.length === 0 ? (
                    <p>No games available to deactivate.</p>
                  ) : (
                    games.map((gameId) => (
                      <Button
                        key={gameId}
                        onClick={() => setSelectedDeactivateGame(gameId)}
                        className={`w-full text-left ${
                          selectedDeactivateGame === gameId
                            ? "bg-red-600 text-white"
                            : "bg-gray-100 text-black"
                        }`}
                      >
                        {gameId}
                      </Button>
                    ))
                  )}
                </div>
                <div className="mt-6 flex justify-end gap-3">
                  <Button
                    onClick={() => setSelectedDeactivateGame(null)}
                    className="bg-gray-300 text-black"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleDeactivateGame}
                    disabled={!selectedDeactivateGame || deactivatingGame}
                    className="bg-red-600 text-white flex items-center"
                  >
                    {deactivatingGame && <Loader />}
                    {deactivatingGame ? "Deactivating..." : "Deactivate Game"}
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
      </div>

      {/* Additional Functionalities */}
      <div className="mt-8 flex  items-start gap-4">
        {/* Fetch Spreadsheet */}
        <Button
          onClick={fetchSpreadsheet}
          disabled={fetchingSpreadsheet}
          className="bg-black text-white flex items-center"
        >
          {fetchingSpreadsheet && <Loader />}
          {fetchingSpreadsheet ? "Fetching..." : "Fetch Spreadsheet"}
        </Button>

        {/* Export Spreadsheet */}
        <Button
          onClick={exportSpreadsheet}
          disabled={exportingSpreadsheet}
          className="bg-black text-white flex items-center"
        >
          {exportingSpreadsheet && <Loader />}
          {exportingSpreadsheet ? "Exporting..." : "Export Spreadsheet"}
        </Button>

        {/* Get Top Scorer */}
        <Button
          onClick={getTopScorer}
          disabled={gettingTopScorer}
          className="bg-black text-white flex items-center"
        >
          {gettingTopScorer && <Loader />}
          {gettingTopScorer ? "Fetching..." : "Get Top Scorer"}
        </Button>
      </div>
      {/* Display Top Scorer */}
      {topScorer && (
        <p className="mt-2 text-lg font-medium">Top Scorer: {topScorer}</p>
      )}
    </section>
  );
}

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
} from "@/Components/ui/dialog"; // Import Shadcn Dialog components
import { Loader } from "@/Components/ui/loader"; // Add loading spinner

export default function GamePage() {
  const [creatingGame, setCreatingGame] = useState(false);
  const [startingGame, setStartingGame] = useState(false);
  const [message, setMessage] = useState("");
  const [selectedGame, setSelectedGame] = useState<string | null>(null);
  const [games, setGames] = useState<string[]>([]); // Example state for games
  const [topScorer, setTopScorer] = useState<string | null>(null);

  // Mock API calls for fetching/exporting spreadsheet and top scorer
  const fetchSpreadsheet = async () => {
    setMessage("Fetching spreadsheet...");
    setTimeout(() => {
      setMessage("Spreadsheet fetched successfully!");
    }, 1000);
  };

  const exportSpreadsheet = async () => {
    setMessage("Exporting spreadsheet...");
    setTimeout(() => {
      setMessage("Spreadsheet exported successfully!");
    }, 1000);
  };

  const fetchTopScorer = async () => {
    setMessage("Fetching top scorer...");
    setTimeout(() => {
      setTopScorer("Player123"); // Mocked top scorer
      setMessage(`Top scorer: Player123`);
    }, 1000);
  };

  const handleCreateGame = async () => {
    setCreatingGame(true);
    setMessage("");
    try {
      const result = { gameId: "12345" };
      setGames([...games, result.gameId]); // Add new game to the list
      setMessage(`Game created successfully! Game ID: ${result.gameId}`);
    } catch (error: any) {
      setMessage(`Error creating game: ${error.message}`);
    } finally {
      setCreatingGame(false);
    }
  };

  const handleConfirmStartGame = async () => {
    setStartingGame(true);
    setMessage("");
    try {
      const result = { gameId: selectedGame };
      setMessage(`Game started successfully! Game ID: ${result.gameId}`);
    } catch (error: any) {
      setMessage(`Error starting game: ${error.message}`);
    } finally {
      setStartingGame(false);
    }
  };

  return (
    <section className="py-8 px-6 max-w-4xl mx-auto flex flex-col gap-6">
      <h2 className="text-3xl font-bold text-center mb-6">Game Management</h2>
      {message && (
        <div className="bg-green-100 text-green-800 px-4 py-2 rounded-md mb-4">
          {message}
        </div>
      )}

      <div className="flex flex-row gap-6 justify-center">
        <Card className="w-80 bg-gray-50 shadow-lg">
          <CardHeader>
            <CardTitle>Create A Game</CardTitle>
            <CardDescription>Create a new game</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Button
              onClick={handleCreateGame}
              disabled={creatingGame}
              className="bg-blue-500 text-white"
            >
              {creatingGame ? <Loader /> : "Create A Game"}
            </Button>
          </CardContent>
        </Card>

        <Card className="w-80 bg-gray-50 shadow-lg">
          <CardHeader>
            <CardTitle>Start A Game</CardTitle>
            <CardDescription>Start an already created game</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  disabled={startingGame}
                  className="bg-green-500 text-white"
                >
                  {startingGame ? <Loader /> : "Start A Game"}
                </Button>
              </DialogTrigger>

              {/* Dialog Content */}
              <DialogContent>
                <DialogTitle>Select Game to Start</DialogTitle>
                <div className="flex flex-col gap-4 mt-4">
                  {games.length === 0 ? (
                    <p className="text-gray-600">
                      No games available to start.
                    </p>
                  ) : (
                    games.map((gameId) => (
                      <Button
                        key={gameId}
                        className={`w-full p-2 ${
                          selectedGame === gameId
                            ? "bg-blue-600 text-white"
                            : "bg-gray-200 text-black"
                        }`}
                        onClick={() => setSelectedGame(gameId)}
                      >
                        Game ID: {gameId}
                      </Button>
                    ))
                  )}
                </div>

                <div className="flex justify-end gap-3 mt-6">
                  <Button
                    className="bg-gray-300 text-black"
                    onClick={() => setSelectedGame(null)}
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleConfirmStartGame}
                    disabled={!selectedGame || startingGame}
                    className="bg-green-500 text-white"
                  >
                    {startingGame ? <Loader /> : "Start Game"}
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-row gap-4 justify-center">
        {/* Fetch Spreadsheet Button */}
        <Button
          onClick={fetchSpreadsheet}
          className="bg-yellow-500 text-white w-60"
        >
          Fetch Spreadsheet
        </Button>

        {/* Export Spreadsheet Button */}
        <Button
          onClick={exportSpreadsheet}
          className="bg-purple-500 text-white w-60"
        >
          Export Spreadsheet
        </Button>
      </div>

      {/* Fetch Top Scorer */}
      <div className="flex flex-row gap-4 justify-center mt-6">
        <Button
          onClick={fetchTopScorer}
          className="bg-pink-500 text-white w-60"
        >
          Get Top Scorer
        </Button>
        {topScorer && (
          <p className="text-lg text-gray-700 font-semibold">
            Top Scorer: {topScorer}
          </p>
        )}
      </div>
    </section>
  );
}

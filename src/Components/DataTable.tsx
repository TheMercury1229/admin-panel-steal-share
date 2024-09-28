import { useEffect, useState } from 'react';

type Player = {
  id: number;
  name: string;
  points: number;
  status: 'Active' | 'Inactive';
};

const DataTable = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  
  const [loading, setLoading] = useState(true);
  const [sorted, setSorted] = useState(false);

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/'); // Replace with your API URL
        const data: Player[] = await response.json();
        setPlayers(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Sort function to be called on button click
  const handleSort = () => {
    setPlayers((prevPlayers) =>
      [...prevPlayers].sort((a, b) => b.points - a.points)
    );
    setSorted(true);
  };

  // Filter players based on ID
  

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">


      <button
        onClick={handleSort}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
        disabled={sorted}
      >
        {sorted ? 'Sorted by Points' : 'Sort by Points'}
      </button>

      <table className="min-w-full bg-gray-50 border border-gray-300 shadow-md">
        <thead className="bg-gray-200 text-gray-700">
          <tr>
            <th className="py-3 px-4 border-b border-gray-300 text-left font-semibold">ID</th>
            <th className="py-3 px-4 border-b border-gray-300 text-left font-semibold">Name</th>
            <th className="py-3 px-4 border-b border-gray-300 text-left font-semibold">Points</th>
            <th className="py-3 px-4 border-b border-gray-300 text-left font-semibold">Status</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="px-4 py-3 border-t border-gray-300 text-gray-700">{player.id}</td>
              <td className="px-4 py-3 border-t border-gray-300 text-gray-700">{player.name}</td>
              <td className="px-4 py-3 border-t border-gray-300 text-gray-700">{player.points}</td>
              <td className="px-4 py-3 border-t border-gray-300 text-gray-700">{player.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;

export default DataTable;

export default DataTable;

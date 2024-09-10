import { useState } from 'react';

type Player = {
  id: number;
  name: string;
  points: number;
  status: 'Active' | 'Inactive';
};

const playersData: Player[] = [
  { id: 1, name: 'Alice', points: 1200, status: 'Active' },
  { id: 2, name: 'Bob', points: 800, status: 'Inactive' },
  { id: 3, name: 'Charlie', points: 1500, status: 'Active' },
  { id: 4, name: 'David', points: 1000, status: 'Active' },
  { id: 5, name: 'Eve', points: 1300, status: 'Inactive' },
  { id: 6, name: 'Frank', points: 950, status: 'Active' },
  { id: 7, name: 'Grace', points: 1450, status: 'Active' },
  { id: 8, name: 'Hank', points: 1100, status: 'Inactive' },
  { id: 9, name: 'Ivy', points: 1600, status: 'Active' },
  { id: 10, name: 'Jack', points: 750, status: 'Active' }
];

const DataTable = () => {
  const [filterID, setFilterID] = useState('');

  const sortedPlayers = playersData
    .filter((player) => player.id.toString().includes(filterID))
    .sort((a, b) => b.points - a.points);

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <label htmlFor="filterID" className="block text-gray-700 font-medium">
          Filter by ID:
        </label>
        <input
          id="filterID"
          type="text"
          value={filterID}
          onChange={(e) => setFilterID(e.target.value)}
          className="px-2 py-1 border rounded w-full"
        />
      </div>

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
          {sortedPlayers.map((player, index) => (
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

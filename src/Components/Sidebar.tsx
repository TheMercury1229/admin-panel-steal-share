import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { useState } from "react";
import { Home, List, Settings } from "lucide-react";

export default function Sidebar() {
  const [active, setActive] = useState<Number>(0);
  return (
    <aside className="flex-[0.2] h-full flex flex-col px-2 py-3 border-r border-r-slate-300">
      <div className="text-2xl font-bold py-1">Logo</div>
      <Separator />
      <nav className="mt-5">
        <ul className="flex flex-col gap-3 px-2">
          <li
            className={`text-xl flex items-center gap-1 font-semibold hover:text-black text-slate-500 ${
              active === 0 && "text-black"
            }`}
            onClick={() => setActive(0)}
          >
            <Home className="w-6 h-6" />
            <Link to="/">Game</Link>
          </li>
          <li
            className={`text-xl flex items-center gap-1  font-semibold hover:text-black text-slate-500 ${
              active === 1 && "text-black"
            }`}
            onClick={() => setActive(1)}
          >
            <List className="w-6 h-6" />
            <Link to="/players">Players List</Link>
          </li>
          <li
            className={`text-xl flex items-center gap-1   font-semibold hover:text-black text-slate-500 ${
              active === 2 && "text-black"
            }`}
            onClick={() => setActive(2)}
          >
            <Settings className="w-6 h-6" />
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ui/table";
import { Button } from "@/Components/ui/button";
import { useState } from "react";

const initialAdmins = [
  {
    id: 0,
    username: "pqr",
  },
  {
    id: 1,
    username: "pqr",
  },
  {
    id: 2,
    username: "pqr",
  },
  {
    id: 3,
    username: "pqr",
  },
  {
    id: 4,
    username: "pqr",
  },
];

export default function AdminTable() {
  const [admins, setAdmins] = useState(initialAdmins);

  const handleDelete = (id: number) => {
    setAdmins(admins.filter((admin) => admin.id !== id));
  };

  const Admin = admins.map((person) => (
    <TableRow key={person.id}>
      <TableCell>{person.id}</TableCell>
      <TableCell>{person.username}</TableCell>
      <TableCell>
        <Button variant="destructive" onClick={() => handleDelete(person.id)}>
          Delete
        </Button>
      </TableCell>
    </TableRow>
  ));

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Admin Log</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Username</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>{Admin}</TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

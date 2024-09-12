"use client"
import { MoreHorizontalIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

function deletentry(){

}
const Admins = [{
  id: 0,
  username:'pqr',
  name: 'Creola Katherine Johnson',
  email: 'mathematician',
}, {
  id: 1,
  username:'pqr',
  name: 'Mario José Molina-Pasquel Henríquez',
  email: 'chemist',
}, {
  id: 2,
  username:'pqr',
  name: 'Mohammad Abdus Salam',
  email: 'physicist',
}, {
  id: 3,
  username:'pqr',
  name: 'Percy Lavon Julian',
  email: 'chemist',  
}, {
  id: 4,
  username:'pqr',
  name: 'Subrahmanyan Chandrasekhar',
  email: 'astrophysicist',
}];

export default function AdminTable() {

  const Admin=Admins.map(person=>
    <TableRow key={person.id}>
    <TableCell className="hidden md:table-cell">{person.username}</TableCell>
    <TableCell className="hidden md:table-cell">{person.name}</TableCell>
    <TableCell className="hidden md:table-cell">{person.email}</TableCell>
    <TableCell>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button aria-haspopup="true" size="icon" variant="ghost">
            <MoreHorizontalIcon className="h-4 w-4" />
            <span className="sr-only">Edit</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem>Edit</DropdownMenuItem>
          <DropdownMenuItem>Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </TableCell>
  </TableRow>
  )

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Admin Log</CardTitle>
        <CardDescription>
          Manage Log of All Admins.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
             
              <TableHead>Username</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="hidden md:table-cell">Email ID</TableHead>
    
            </TableRow>
          </TableHeader>
          <TableBody>{Admin}</TableBody>
        </Table>
      </CardContent>
      <CardFooter>

      </CardFooter>
    </Card>
  )
}

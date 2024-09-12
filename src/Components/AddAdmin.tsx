"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



export default function AddAdminComponent() {
  return (
    <Card className="w-1/3">
      <CardHeader className="pb-3">
        <CardTitle>Admins</CardTitle>
        <CardDescription className="max-w-lg text-balance leading-relaxed">
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button>Add Admin</Button>
      </CardFooter>
    </Card>
  )
}

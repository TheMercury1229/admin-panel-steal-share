import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/Components/ui/sheet";
import ProfileForm from "@/Components/SubmitForm";

export default function SheetComp() {
  return (
    <Sheet>
      <SheetTrigger>Add Admin</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Admin Information Form</SheetTitle>
          <SheetDescription>
            <ProfileForm />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

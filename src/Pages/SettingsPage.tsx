import AdminTable from "./components/AdminTable"
import { SignInButton,SignedIn,SignedOut,UserButton } from "@clerk/clerk-react"
import { ThemeProvider } from "./components/themeprovider"
import { ModeToggle } from "./components/ui/toggle"
import { Card, CardHeader } from "./components/ui/card"
import SheetComp from "./components/sheetcomponent"


export default function SettingsPage() {
   return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <div className="flex justify-between w-screen pt-5 pr-16">
      <div></div>
      <div className="w-3/4">
        <div className="pb-4">
          <Card className="flex justify-between">
            <CardHeader className="text-2xl ">Settings</CardHeader>
            <div className="flex justify-evenly pt-2 pr-3">
            <div>
            <header>
               <SignedOut>
               <SignInButton />
               </SignedOut>
               <SignedIn >
              <UserButton/>
              </SignedIn>
             </header>
            </div>
            <div className="pl-3"><ModeToggle/></div>
            </div>
        </Card>
        </div>
        <div><AdminTable/> </div>
        <div className="flex pt-3"><SheetComp/></div>
      </div>
    </div>
    </ThemeProvider>      
    </>
  )
}

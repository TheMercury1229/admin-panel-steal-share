import AdminTable from "@/Components/AdminTable";

import { Card, CardHeader } from "@/Components/ui/card";
import SheetComp from "@/Components/sheetcomponent";

export default function SettingsPage() {
  return (
    <>
      <div className="flex justify-between min-h-screen p-5 ">
        <div></div>
        <div className="w-full">
          <div className="pb-4">
            <Card className="flex justify-between">
              <CardHeader className="text-2xl ">Settings</CardHeader>
            </Card>
          </div>
          <div>
            <AdminTable />{" "}
          </div>
          <div className="flex pt-3">
            <SheetComp />
          </div>
        </div>
      </div>
    </>
  );
}

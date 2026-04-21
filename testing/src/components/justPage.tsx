import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import type { UiHarini } from "../types/justPage.types";
import { fetchHariniInfo } from "@/services/justPage.service";
import { mapHariniInfoToUiHarini } from "@/services/dto/justPage.dto";

export default function JustPage() {
  const [hariniInfo, setHariniInfo] = useState<UiHarini | null>(null);

  const loadHariniInfo = async () => {
    const dto = await fetchHariniInfo();
    setHariniInfo(mapHariniInfoToUiHarini(dto));
  };

  useEffect(() => {
    void loadHariniInfo();
  }, []);

  return (
    <main className="min-h-screen bg-muted/40 p-6 flex items-center justify-center">
      <Card className="w-full max-w-xl">
        <CardHeader>
          <CardTitle>Harini Info</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button type="button" onClick={() => void loadHariniInfo()}>
            Refresh Info
          </Button>
          <h4>Harini Details</h4>
          <p>Name: {hariniInfo?.personName || "N/A"}</p>
          <p>Message: {hariniInfo?.personMessage || "N/A"}</p>
          <p>Age: {hariniInfo?.personAge || "N/A"}</p>
        </CardContent>
      </Card>
    </main>
  );
}

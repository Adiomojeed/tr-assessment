import { fetchMedals } from "@/api/request";
import MedalTable from "@/components/MedalTable";
import { use } from "react";

export default function Home() {
  const data = use(fetchMedals());

  return (
    <main className="w-screen px-3">
      <MedalTable data={data} />
    </main>
  );
}

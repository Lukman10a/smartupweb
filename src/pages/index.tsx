import LeftDashboard from "@/components/leftDashboard";
import RightDashboard from "@/components/rightDashboard";

export default function Home() {
  return (
    <main className="flex">
      <LeftDashboard />
      <RightDashboard />
    </main>
  );
}

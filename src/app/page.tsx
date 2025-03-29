import HomePage from "@/components/base/Homepage";
import DotPattern from "@/components/ui/dot-pattern";


export default function Home() {
  return (
    <div className="relative min-h-screen select-none">
      <DotPattern className="fixed inset-0 pointer-events-none" />
      <div className="relative z-10">
        <HomePage/>
      </div>
    </div>
  );
}

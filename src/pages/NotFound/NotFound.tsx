import Navbar from "@/widgets/Navbar";

export default function NotFound() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center text-center gap-2">
        <h1 className="text-6xl font-title">404</h1> 
        <span className="text-xl text-lighter">Page not Found</span>
      </main>
    </div>
  );
}
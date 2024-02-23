import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="lg:pl-6 xl:pl-0">
      <section className="flex lg:w-[1200px] min-h-screen w-full mx-auto">
        <Sidebar />
      </section>
    </main>
  );
}

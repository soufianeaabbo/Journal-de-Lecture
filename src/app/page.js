import Lecturedm from "@/Components/ldm";
import Sidebar from "@/Components/Sidebar";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <main className="flex min-h-screen">
        <Sidebar />
        <section className="flex-1 bg-[#FFF8F0] p-8">
          <h2 className="text-3xl font-bold text-[#35231F]">
            Bonjour !
          </h2>
          <p className="text-[#765047]">
            Bienvenue dans ton journal de lecture.
          </p>
          <Lecturedm></Lecturedm>

        </section>
      </main>

    </>
  );
}

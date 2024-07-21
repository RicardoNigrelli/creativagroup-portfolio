import Globe from "@/components/Globe";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <section>
        <Globe />
      </section>
    </main>
  );
}

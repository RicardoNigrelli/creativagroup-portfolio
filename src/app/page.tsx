import { BubbleBg } from "@/components/BubbleBg";
import Globe from "@/components/Globe";
import SelectLanguages from "@/components/SelectLanguages";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <section>
        <SelectLanguages />
      </section>
    </main>
  );
}

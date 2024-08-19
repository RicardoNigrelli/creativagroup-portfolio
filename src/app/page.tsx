import { BubbleBg } from "@/components/BubbleBg";

import SelectLanguages from "@/components/SelectLanguages";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <section>
        <SelectLanguages />
      </section>
    </main>
  );
}

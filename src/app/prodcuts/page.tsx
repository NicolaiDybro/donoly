
import { EvervaultCard } from "@/components/evervault-card";

export default function Home() {
  return (
    <div className="pt-10">
          <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
    <EvervaultCard text="hover" />
    <h2 className="dark:text-white text-black mt-4 text-sm font-light">
      Hover over this card to reveal an awesome effect. Running out of copy
      here.
    </h2>
    <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
      Watch me hover
    </p>
  </div>
    </div>


  );
}


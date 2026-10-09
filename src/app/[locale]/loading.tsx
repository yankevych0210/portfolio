import {Skeleton} from "@/components/ui/skeleton";

export default function LocaleLoading() {
  return (
    <main className="mx-auto max-w-6xl space-y-12 px-4 py-16" aria-busy="true">
      <div className="grid items-center gap-12 md:grid-cols-[1.35fr_1fr]">
        <div className="space-y-5">
          <Skeleton className="h-6 w-48 rounded-full" />
          <Skeleton className="h-14 w-3/4" />
          <Skeleton className="h-5 w-1/2" />
          <Skeleton className="h-20 w-full" />
          <div className="flex gap-3">
            <Skeleton className="h-10 w-36" />
            <Skeleton className="h-10 w-32" />
          </div>
        </div>
        <Skeleton className="mx-auto aspect-[4/5] w-full max-w-[340px] rounded-[2rem]" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({length: 3}).map((_, i) => (
          <Skeleton key={i} className="aspect-[4/3] rounded-2xl" />
        ))}
      </div>
    </main>
  );
}

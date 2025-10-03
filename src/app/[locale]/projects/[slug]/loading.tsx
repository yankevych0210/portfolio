import { Skeleton, SkeletonText } from "@/components/ui/skeleton";

export default function ProjectLoading() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 space-y-6">
      <header className="space-y-2">
        <Skeleton className="h-8 w-2/3" />
        <SkeletonText lines={2} />
        <div className="flex gap-3 pt-1">
          <Skeleton className="h-9 w-28" />
          <Skeleton className="h-9 w-28" />
          <Skeleton className="h-9 w-28" />
        </div>
      </header>
      <section>
        <Skeleton className="h-[360px] w-full rounded-lg" />
        <div className="grid grid-cols-3 gap-3 mt-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-20 w-full rounded-md" />
          ))}
        </div>
      </section>
      <section className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-lg border p-4">
          <Skeleton className="h-5 w-24 mb-3" />
          <SkeletonText lines={4} />
        </div>
        <div className="rounded-lg border p-4">
          <Skeleton className="h-5 w-24 mb-3" />
          <SkeletonText lines={4} />
        </div>
      </section>
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="rounded-lg border p-4">
            <Skeleton className="h-5 w-24 mb-3" />
            <SkeletonText lines={3} />
          </div>
        ))}
      </section>
    </main>
  );
}

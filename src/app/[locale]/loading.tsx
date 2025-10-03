import { Skeleton, SkeletonText } from "@/components/ui/skeleton";

export default function LocaleLoading() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 space-y-12">
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-10 w-2/3" />
          <Skeleton className="h-6 w-1/2" />
          <SkeletonText lines={3} />
          <div className="flex gap-3 pt-2">
            <Skeleton className="h-9 w-28" />
            <Skeleton className="h-9 w-28" />
            <Skeleton className="h-9 w-36" />
          </div>
        </div>
        <Skeleton className="h-64 rounded-full" />
      </section>

      <section className="space-y-4">
        <Skeleton className="h-6 w-40" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="p-4 rounded-lg border">
              <Skeleton className="h-40 w-full" />
              <Skeleton className="mt-3 h-5 w-2/3" />
              <SkeletonText className="mt-2" lines={2} />
              <div className="flex gap-2 pt-2">
                <Skeleton className="h-8 w-24" />
                <Skeleton className="h-8 w-24" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <Skeleton className="h-6 w-32" />
        <SkeletonText lines={4} />
      </section>

      <section className="space-y-4">
        <Skeleton className="h-6 w-36" />
        <div className="grid sm:grid-cols-2 gap-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-11 w-full" />
          ))}
        </div>
      </section>
    </main>
  );
}

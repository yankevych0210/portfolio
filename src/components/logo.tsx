export default function Logo() {
  return (
    <span aria-label="Nazar Yankevych — Portfolio" className="inline-flex items-center gap-2">
      <span
        className="inline-flex select-none items-center justify-center h-8 w-8 rounded-md bg-gradient-to-br from-neutral-900 to-neutral-700 text-white dark:from-neutral-200 dark:to-neutral-400 dark:text-neutral-900 font-extrabold text-[14px] leading-none ring-1 ring-black/10 shadow-sm hover:shadow-md transition-shadow"
      >
        NY
      </span>
      <span className="sr-only">NY</span>
    </span>
  );
}

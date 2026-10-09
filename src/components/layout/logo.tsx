export default function Logo() {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span
        aria-hidden
        className="inline-flex size-9 select-none items-center justify-center rounded-lg bg-gradient-to-br from-[oklch(0.32_0.08_260)] to-[oklch(0.5_0.17_258)] text-[13px] font-extrabold leading-none text-white shadow-sm ring-1 ring-black/10 dark:from-[oklch(0.72_0.14_252)] dark:to-[oklch(0.55_0.15_258)]"
      >
        NY
      </span>
      <span className="hidden text-sm font-semibold tracking-tight sm:inline">Nazar Yankevych</span>
    </span>
  );
}

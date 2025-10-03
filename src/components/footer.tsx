export default function Footer() {
  return (
    <footer className="border-t bg-secondary/30 mt-16">
      <div className="mx-auto max-w-6xl py-4">
        <div className="space-y-1">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Nazar Yankevych.
          </p>
        </div>
      </div>
    </footer>
  );
}

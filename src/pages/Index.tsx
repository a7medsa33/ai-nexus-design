import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-6 transition-colors">
      {/* Header */}
      <header className="mx-auto flex max-w-4xl items-center justify-between pb-10">
        <h1 className="text-4xl font-bold tracking-tight">
          AI Knowledge{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-violet-600 bg-clip-text text-transparent">Hub</span>
        </h1>
        <ThemeToggle />
      </header>

      <main className="mx-auto max-w-4xl space-y-12">
        {/* Typography */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Typography</h2>
          <Card>
            <CardContent className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight">Heading 1 — Bold & Tight</h1>
              <h2 className="text-2xl font-semibold">Heading 2 — Semibold</h2>
              <p className="text-base text-muted-foreground">
                Body text rendered in Inter. Designed for clarity across light and dark modes with proper contrast and
                readability.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Buttons */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Buttons</h2>
          <Card>
            <CardContent className="flex flex-wrap gap-4">
              <Button className="rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 text-white hover:from-indigo-600 hover:to-violet-700">
                Primary Gradient
              </Button>
              <Button variant="default" className="rounded-xl">
                Default
              </Button>
              <Button variant="secondary" className="rounded-xl">
                Secondary
              </Button>
              <Button variant="outline" className="rounded-xl">
                Outline
              </Button>
              <Button variant="ghost" className="rounded-xl">
                Ghost
              </Button>
              <Button variant="destructive" className="rounded-xl">
                Destructive
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Glassmorphism Cards */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Glassmorphism Cards</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Knowledge Base</CardTitle>
                <CardDescription>Centralized AI documentation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Store and organize your AI research, prompts, and insights in one place.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Model Explorer</CardTitle>
                <CardDescription>Compare AI models side by side</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Benchmark performance, cost, and capabilities across providers.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Prompt Library</CardTitle>
                <CardDescription>Curated prompt templates</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Battle-tested prompts for coding, writing, analysis, and more.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Color Palette */}
        <section className="space-y-4 pb-12">
          <h2 className="text-2xl font-semibold">Color Palette</h2>
          <Card>
            <CardContent className="flex flex-wrap gap-3">
              {[
                { label: "Primary", cls: "bg-primary" },
                { label: "Accent", cls: "bg-accent" },
                { label: "Background", cls: "bg-background border" },
                { label: "Muted", cls: "bg-muted" },
                { label: "Destructive", cls: "bg-destructive" },
                { label: "Gradient", cls: "bg-gradient-to-r from-indigo-500 to-violet-600" },
              ].map(({ label, cls }) => (
                <div key={label} className="flex flex-col items-center gap-1">
                  <div className={`h-12 w-12 rounded-xl ${cls}`} />
                  <span className="text-xs text-muted-foreground">{label}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default Index;

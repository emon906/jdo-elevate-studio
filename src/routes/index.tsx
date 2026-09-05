import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState, type FormEvent } from "react";
import { motion, useScroll, useTransform, type Variants } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  ChevronRight,
  Mail,
  Menu,
  Phone,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import heroImage from "@/assets/jdo-hero.jpg";
import heroVideo from "@/assets/jdo-hero-video.mp4.asset.json";
import craftImage from "@/assets/jdo-craft.jpg";
import beforeImage from "@/assets/jdo-before.jpg";
import afterImage from "@/assets/jdo-after.jpg";
import projectOak from "@/assets/project-oak.jpg";
import projectWalnut from "@/assets/project-walnut.jpg";
import projectVinyl from "@/assets/project-vinyl.jpg";
import projectCarpet from "@/assets/project-carpet.jpg";

const navigation = [
  ["About", "about"],
  ["Services", "services"],
  ["Projects", "projects"],
  ["Before / After", "transformation"],
  ["Testimonials", "testimonials"],
  ["Contact", "contact"],
] as const;

const services = [
  ["01", "Hardwood Flooring", "Timeless natural wood, installed and finished with exacting attention to grain, tone, and flow."],
  ["02", "Luxury Vinyl Flooring", "Refined, resilient surfaces selected for beautiful everyday living and lasting performance."],
  ["03", "Carpet Installation", "Softness underfoot, tailored to the room with clean transitions and a flawless stretch."],
  ["04", "Floor Replacement", "Thoughtful removal and renewal that gives the entire space a more considered foundation."],
  ["05", "Floor Repair", "Skilled restoration that resolves damage while preserving the character of the surrounding floor."],
  ["06", "Custom Flooring Solutions", "Material, pattern, and finishing guidance shaped around your architecture and way of living."],
] as const;

const projects = [
  { image: projectOak, title: "White Oak Residence", location: "Buckhead, GA", type: "Hardwood", description: "Wide-plank white oak brings quiet warmth and visual continuity to an elegant family home." },
  { image: projectWalnut, title: "Walnut Dining Room", location: "Roswell, GA", type: "Hardwood", description: "A deep, richly toned floor grounds the room and complements its tailored millwork." },
  { image: projectVinyl, title: "Modern Kitchen", location: "Alpharetta, GA", type: "Luxury Vinyl", description: "A durable pale oak finish gives this light-filled kitchen a seamless, contemporary foundation." },
  { image: projectCarpet, title: "Soft Retreat", location: "Marietta, GA", type: "Carpet", description: "Plush, precisely fitted carpet creates a calm and comfortable private retreat." },
] as const;

const testimonials = [
  { quote: "The precision in every detail was remarkable. Our home feels quieter, warmer, and completely renewed.", name: "Maria R.", project: "White Oak Installation" },
  { quote: "JDO treated our space with real care. The transitions are flawless and the finish is beyond what we imagined.", name: "Daniel & Sofia", project: "Whole-Home Replacement" },
  { quote: "Professional from the first conversation to the final walk-through. Their craftsmanship speaks for itself.", name: "James T.", project: "Floor Restoration" },
  { quote: "They helped us choose the right material, then installed it beautifully. Every room now feels connected.", name: "Elena V.", project: "Luxury Vinyl Installation" },
] as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JDO Flooring | Premium Floor Installation" },
      { name: "description", content: "Expert flooring installation, replacement and repair with premium craftsmanship in Georgia." },
      { property: "og:title", content: "JDO Flooring | Premium Floor Installation" },
      { property: "og:description", content: "Beautiful floors, expertly installed with quality and precision." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [comparison, setComparison] = useState(52);

  const submitQuote = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Flooring quote request from ${String(data.get("name") ?? "")}`);
    const body = encodeURIComponent(`Name: ${String(data.get("name") ?? "")}\nPhone: ${String(data.get("phone") ?? "")}\nEmail: ${String(data.get("email") ?? "")}\n\nProject details:\n${String(data.get("details") ?? "")}`);
    window.location.href = `mailto:flooringjdo@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <main>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-primary-foreground/15 bg-foreground/80 text-primary-foreground backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-[1480px] items-center justify-between px-5 md:px-10">
          <a href="#top" aria-label="JDO Flooring home" className="font-display text-2xl leading-none">JDO <span className="italic">Flooring</span></a>
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
            {navigation.map(([label, id]) => <a key={id} href={`#${id}`} className="text-[11px] uppercase tracking-[0.16em] text-primary-foreground/75 transition-colors hover:text-primary-foreground">{label}</a>)}
          </nav>
          <div className="hidden lg:block"><Button asChild variant="premium-light" size="lg"><a href="#contact">Get a Quote <ArrowRight /></a></Button></div>
          <button type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)} className="grid size-10 place-items-center lg:hidden">{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <nav className="border-t border-primary-foreground/15 bg-foreground px-5 py-6 lg:hidden" aria-label="Mobile navigation">
          {navigation.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className="block border-b border-primary-foreground/10 py-3 text-sm">{label}</a>)}
          <a href="#contact" onClick={() => setMenuOpen(false)} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">Get a Quote <ArrowRight className="size-4" /></a>
        </nav>}
      </header>

      <section id="top" className="relative min-h-[94svh] overflow-hidden bg-foreground text-primary-foreground">
        <img src={heroImage} alt="Luxury living room with wide-plank oak flooring" width={1920} height={1080} className="cinematic-zoom absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/55 to-transparent" />
        <div className="relative mx-auto flex min-h-[94svh] max-w-[1480px] items-end px-5 pb-16 pt-32 md:px-10 md:pb-24">
          <div className="max-w-4xl animate-fade-in">
            <p className="mb-6 text-xs uppercase tracking-[0.28em] text-primary-foreground/70">Crafted interiors · Georgia</p>
            <h1 className="max-w-3xl font-display text-6xl leading-[0.92] md:text-8xl lg:text-[7.2rem]">Beautiful Floors.<br/><span className="italic">Expertly Installed.</span></h1>
            <p className="mt-8 max-w-xl text-base font-light leading-7 text-primary-foreground/75">Expertos en Instalación de Pisos y Carpetas: Transformamos tu espacio con calidad y precisión.</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild variant="premium-light" size="lg"><a href="#contact">Get a Quote <ArrowRight /></a></Button>
              <Button asChild variant="premium-outline" size="lg"><a href="#projects">View Our Work <ArrowDown /></a></Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto grid max-w-[1320px] gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-24">
          <div className="reveal-on-scroll relative">
            <img src={craftImage} alt="Craftsperson carefully installing an oak floor" width={1000} height={1300} loading="lazy" className="aspect-[4/5] w-full object-cover" />
            <div className="absolute -bottom-7 right-0 bg-primary px-7 py-6 text-primary-foreground md:-right-7">
              <strong className="block font-display text-4xl font-normal">Precision</strong><span className="text-[10px] uppercase tracking-[0.2em]">in every detail</span>
            </div>
          </div>
          <div className="reveal-on-scroll pt-8 lg:pt-0">
            <p className="mb-5 text-xs uppercase tracking-[0.22em] text-primary">The JDO Standard</p>
            <h2 className="font-display text-5xl leading-none md:text-7xl">Craftsmanship<br/><span className="italic text-primary">You Can Feel.</span></h2>
            <div className="mt-9 max-w-xl space-y-5 text-base font-light leading-7 text-muted-foreground">
              <p>A remarkable floor changes more than a room. It changes how the entire space feels beneath you—balanced, intentional, and made to last.</p>
              <p>We bring a measured, detail-first approach to every installation, pairing trusted materials with careful preparation and a clean finish.</p>
            </div>
            <div className="mt-10 grid max-w-lg grid-cols-3 border-y border-border py-6 text-center">
              <div><strong className="font-display text-3xl font-normal">01</strong><span className="mt-1 block text-[9px] uppercase tracking-[0.16em] text-muted-foreground">Plan</span></div>
              <div className="border-x border-border"><strong className="font-display text-3xl font-normal">02</strong><span className="mt-1 block text-[9px] uppercase tracking-[0.16em] text-muted-foreground">Prepare</span></div>
              <div><strong className="font-display text-3xl font-normal">03</strong><span className="mt-1 block text-[9px] uppercase tracking-[0.16em] text-muted-foreground">Perfect</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-foreground px-5 py-24 text-primary-foreground md:px-10 md:py-32">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-16 grid gap-6 md:grid-cols-2 md:items-end"><div><p className="mb-4 text-xs uppercase tracking-[0.22em] text-accent">Our expertise</p><h2 className="font-display text-5xl md:text-7xl">Materials meet<br/><span className="italic">mastery.</span></h2></div><p className="max-w-md text-sm font-light leading-6 text-primary-foreground/60 md:justify-self-end">A considered collection of flooring services, tailored to the architecture and demands of your space.</p></div>
          <div className="border-t border-primary-foreground/20">
            {services.map(([number, title, description]) => <article key={title} className="group grid gap-4 border-b border-primary-foreground/20 py-7 transition-colors hover:bg-primary-foreground/[0.03] md:grid-cols-[80px_0.8fr_1.2fr_40px] md:items-center">
              <span className="text-xs text-accent">{number}</span><h3 className="font-display text-3xl">{title}</h3><p className="max-w-xl text-sm font-light leading-6 text-primary-foreground/55">{description}</p><ChevronRight className="hidden size-5 transition-transform group-hover:translate-x-1 md:block" />
            </article>)}
          </div>
        </div>
      </section>

      <section id="projects" className="px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-14 md:flex md:items-end md:justify-between"><div><p className="mb-4 text-xs uppercase tracking-[0.22em] text-primary">Selected work</p><h2 className="font-display text-5xl md:text-7xl">Recent <span className="italic">Projects.</span></h2></div><p className="mt-5 max-w-sm text-sm leading-6 text-muted-foreground md:mt-0">Floors designed to belong—beautifully integrated into the rooms and lives around them.</p></div>
          <div className="space-y-8">
            {projects.map((project, index) => <article key={project.title} className="reveal-on-scroll sticky grid min-h-[68vh] overflow-hidden bg-card shadow-2xl shadow-foreground/10 md:grid-cols-[1.35fr_0.65fr]" style={{ top: `${96 + index * 12}px` }}>
              <img src={project.image} alt={`${project.title} flooring project`} width={800} height={600} loading="lazy" className="h-[44vh] w-full object-cover md:h-full" />
              <div className="flex flex-col justify-between p-7 md:p-10 lg:p-14"><span className="text-xs uppercase tracking-[0.2em] text-primary">{project.type}</span><div className="py-12"><h3 className="font-display text-4xl md:text-5xl">{project.title}</h3><p className="mt-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">{project.location}</p><p className="mt-7 text-sm font-light leading-6 text-muted-foreground">{project.description}</p></div><span className="text-xs text-muted-foreground">0{index + 1} / 04</span></div>
            </article>)}
          </div>
        </div>
      </section>

      <section id="transformation" className="bg-secondary px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-12 max-w-3xl"><p className="mb-4 text-xs uppercase tracking-[0.22em] text-primary">The transformation</p><h2 className="font-display text-5xl leading-none md:text-7xl">See the <span className="italic">Difference.</span></h2></div>
          <div className="relative aspect-[4/3] overflow-hidden md:aspect-[16/9]">
            <img src={beforeImage} alt="Room before flooring renovation" width={1400} height={900} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${comparison}%` }}><img src={afterImage} alt="Room after premium flooring renovation" width={1400} height={900} loading="lazy" className="h-full max-w-none object-cover" style={{ width: "min(1320px, calc(100vw - 40px))" }} /></div>
            <div className="absolute inset-y-0 w-px bg-primary-foreground" style={{ left: `${comparison}%` }}><span className="absolute left-1/2 top-1/2 grid size-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-background text-foreground shadow-lg">↔</span></div>
            <span className="absolute bottom-5 left-5 bg-foreground px-4 py-2 text-[10px] uppercase tracking-[0.16em] text-primary-foreground">After</span><span className="absolute bottom-5 right-5 bg-foreground px-4 py-2 text-[10px] uppercase tracking-[0.16em] text-primary-foreground">Before</span>
            <input type="range" min="0" max="100" value={comparison} onChange={(event) => setComparison(Number(event.target.value))} aria-label="Compare before and after" className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0" />
          </div>
        </div>
      </section>

      <section id="testimonials" className="overflow-hidden px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-[1320px]"><div className="mx-auto mb-14 max-w-2xl text-center"><p className="mb-4 text-xs uppercase tracking-[0.22em] text-primary">Client notes</p><h2 className="font-display text-5xl md:text-7xl">Words from <span className="italic">Home.</span></h2></div>
          <div className="mx-auto max-w-4xl space-y-[-12px] md:space-y-[-36px]">
            {testimonials.map((item, index) => <blockquote key={item.name} className={`reveal-on-scroll relative border border-border bg-card p-8 shadow-xl shadow-foreground/5 md:p-12 ${index % 2 === 0 ? "md:-rotate-1 md:-translate-x-12" : "md:rotate-1 md:translate-x-12"}`}>
              <span className="font-display text-5xl text-primary/35">“</span><p className="max-w-3xl font-display text-2xl leading-snug md:text-3xl">{item.quote}</p><footer className="mt-7 flex items-center justify-between border-t border-border pt-5"><cite className="not-italic text-xs font-semibold uppercase tracking-[0.14em]">{item.name}</cite><span className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">{item.project}</span></footer>
            </blockquote>)}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-primary px-5 py-24 text-primary-foreground md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1320px] gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div><p className="mb-4 text-xs uppercase tracking-[0.22em] text-primary-foreground/60">Begin your project</p><h2 className="font-display text-5xl leading-none md:text-7xl">Let&apos;s Transform<br/><span className="italic">Your Space.</span></h2><p className="mt-7 max-w-md text-sm font-light leading-6 text-primary-foreground/65">Tell us what you have in mind. We’ll help you find the right floor and a clear path to a beautiful installation.</p><div className="mt-10 space-y-4"><a href="tel:+14706172380" className="flex items-center gap-4 text-sm"><Phone className="size-4" /> +1 470-617-2380</a><a href="mailto:flooringjdo@gmail.com" className="flex items-center gap-4 text-sm"><Mail className="size-4" /> flooringjdo@gmail.com</a></div></div>
          <form onSubmit={submitQuote} className="grid gap-5 md:grid-cols-2">
            <label className="text-[10px] uppercase tracking-[0.16em]">Your name<Input required name="name" className="mt-2 h-12 rounded-none border-primary-foreground/30 bg-transparent text-primary-foreground placeholder:text-primary-foreground/40" placeholder="Full name" /></label>
            <label className="text-[10px] uppercase tracking-[0.16em]">Phone<Input required name="phone" type="tel" className="mt-2 h-12 rounded-none border-primary-foreground/30 bg-transparent text-primary-foreground placeholder:text-primary-foreground/40" placeholder="(000) 000-0000" /></label>
            <label className="text-[10px] uppercase tracking-[0.16em] md:col-span-2">Email<Input required name="email" type="email" className="mt-2 h-12 rounded-none border-primary-foreground/30 bg-transparent text-primary-foreground placeholder:text-primary-foreground/40" placeholder="you@email.com" /></label>
            <label className="text-[10px] uppercase tracking-[0.16em] md:col-span-2">Tell us about your project<Textarea required name="details" className="mt-2 min-h-32 rounded-none border-primary-foreground/30 bg-transparent text-primary-foreground placeholder:text-primary-foreground/40" placeholder="Rooms, flooring type, timeline..." /></label>
            <div className="md:col-span-2"><Button type="submit" variant="premium-light" size="lg" className="w-full md:w-auto">Request a Quote <ArrowRight /></Button></div>
          </form>
        </div>
      </section>

      <footer className="bg-foreground px-5 py-10 text-primary-foreground md:px-10">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-8 md:flex-row md:items-end md:justify-between"><div><p className="font-display text-3xl">JDO <span className="italic">Flooring</span></p><p className="mt-3 text-xs text-primary-foreground/50">Beautiful floors. Expertly installed.</p></div><div className="flex flex-wrap gap-x-6 gap-y-3 text-[10px] uppercase tracking-[0.14em] text-primary-foreground/60">{navigation.map(([label, id]) => <a key={id} href={`#${id}`} className="hover:text-primary-foreground">{label}</a>)}</div><div className="text-xs leading-6 text-primary-foreground/60"><a href="tel:+14706172380">+1 470-617-2380</a><br/><a href="mailto:flooringjdo@gmail.com">flooringjdo@gmail.com</a></div></div>
      </footer>
    </main>
  );
}
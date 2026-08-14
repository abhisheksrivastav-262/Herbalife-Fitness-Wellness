import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  Apple,
  CheckCircle2,
  Dumbbell,
  HeartPulse,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
  UserRound,
  Instagram,
  Youtube,
} from "lucide-react";

import { Header, WHATSAPP } from "@/components/site/Header";
import { Reveal } from "@/components/site/Reveal";
import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";
import whyImg from "@/assets/why.jpg";
import weightImg from "@/assets/weight.jpg";
import nutritionImg from "@/assets/nutrition.jpg";
import fitnessImg from "@/assets/fitness.jpg";
import wellnessImg from "@/assets/wellness.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jasbir Health Expert | Fitness, Nutrition & Wellness Coaching" },
      {
        name: "description",
        content:
          "Personalized nutrition, weight management and fitness guidance in Patiala, Punjab. Start your wellness journey today — call or WhatsApp 9478680365.",
      },
      { property: "og:title", content: "Jasbir Health Expert | Fitness & Wellness" },
      {
        property: "og:description",
        content:
          "Transform your health with personalized nutrition and fitness guidance in Patiala, Punjab.",
      },
    ],
  }),
  component: Index,
});

const PHONE = "9478680365";
const TEL = "tel:+919478680365";

const services = [
  {
    title: "Weight Loss",
    text: "Personalized guidance to help you shed weight in a healthy, sustainable way.",
    img: weightImg,
    icon: Sparkles,
  },
  {
    title: "Weight Gain",
    text: "Build muscle and reach a healthier weight with the right nutrition.",
    img: nutritionImg,
    icon: Apple,
  },
  {
    title: "Fitness & Wellness",
    text: "Stay active, energized, and consistent to build a healthier everyday life.",
    img: fitnessImg,
    icon: Dumbbell,
  },
];

const benefits = [
  "Personalized fitness & wellness guidance",
  "Nutrition-focused approach",
  "Supportive and motivating environment",
  "Simple and sustainable lifestyle habits",
  "One-to-one guidance",
  "Convenient WhatsApp communication",
];

function SectionLabel({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary-dark">
      {children}
    </span>
  );
}

function Index() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Hello Jasbir Health Expert!%0A%0AName: ${encodeURIComponent(
      form.name,
    )}%0APhone: ${encodeURIComponent(form.phone)}%0AMessage: ${encodeURIComponent(form.message)}`;
    window.open(`${WHATSAPP}?text=${text}`, "_blank", "noopener");
  };

  const field =
    "w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition-shadow placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/15";

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section id="home" className="relative isolate overflow-hidden">
          <img
            src={heroImg}
            alt="Woman stretching outdoors at sunrise before a workout"
            width={1920}
            height={1088}
            className="absolute inset-0 h-full w-full object-cover object-[60%_center]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(100deg,oklch(0.22_0.05_155/0.92)_0%,oklch(0.22_0.05_155/0.72)_45%,oklch(0.22_0.05_155/0.25)_100%)]" />
          <div className="container-page relative flex min-h-[92vh] items-center py-32">
            <div className="max-w-2xl text-primary-foreground">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] backdrop-blur-sm">
                  WEIGHT LOSS • WEIGHT GAIN • FITNESS
                </span>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">
                  Transform Your Body.
                  <br />
                  <span className="text-accent">Improve Your Lifestyle.</span>
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
                  Personalized fitness and nutrition guidance to help you work toward your health and wellness goals.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-9 flex flex-wrap gap-3">
                  <a href="#contact" className="btn-base btn-primary">
                    Start Your Fitness Journey
                  </a>
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-base border border-primary-foreground/40 bg-primary-foreground/10 text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary-foreground/20"
                  >
                    <MessageCircle className="h-4 w-4" /> WhatsApp Us
                  </a>
                  <a
                    href="https://www.youtube.com/@JasbirKaur-b4g"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-base border border-[#FF0000]/50 bg-[#FF0000]/80 text-white backdrop-blur-sm transition-colors hover:bg-[#FF0000]"
                  >
                    <Youtube className="h-4 w-4" /> YouTube Channel
                  </a>
                </div>
              </Reveal>
              <Reveal delay={400}>
                <div className="mt-8 flex items-center gap-2 text-sm text-primary-foreground/80 font-medium">
                  <MapPin className="h-4 w-4" />
                  <span>Weight Loss • Weight Gain • Fitness &amp; Wellness | Patiala, Punjab</span>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-20 sm:py-28">
          <div className="container-page grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="relative">
                <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-primary-soft" />
                <img
                  src={aboutImg}
                  alt="Green nutrition shake surrounded by fresh fruit and spinach"
                  width={1200}
                  height={1200}
                  loading="lazy"
                  className="h-full w-full rounded-[2rem] object-cover shadow-[var(--shadow-lift)]"
                />
              </div>
            </Reveal>

            <div>
              <Reveal>
                <SectionLabel>About Us</SectionLabel>
                <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
                  Your Fitness. Your Health. Your Transformation.
                </h2>
                <p className="mt-5 leading-relaxed text-muted-foreground">
                  Fitness is not just about looking good — it’s about feeling stronger, healthier, and more confident every day. With the right nutrition, consistent fitness habits, and proper guidance, you can take a meaningful step toward your wellness goals.
                </p>
                <p className="mt-4 leading-relaxed font-semibold text-primary-dark">
                  Start Today • Stay Consistent • See the Difference
                </p>
              </Reveal>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  { icon: UserRound, title: "Personalized Guidance" },
                  { icon: Apple, title: "Healthy Nutrition" },
                  { icon: Dumbbell, title: "Fitness & Wellness" },
                ].map((f, i) => (
                  <Reveal key={f.title} delay={i * 100}>
                    <div className="card-soft h-full p-5">
                      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary-soft text-primary-dark">
                        <f.icon className="h-5 w-5" />
                      </span>
                      <h3 className="mt-4 text-sm font-semibold">{f.title}</h3>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="bg-secondary/60 py-20 sm:py-28">
          <div className="container-page">
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <SectionLabel>What We Do</SectionLabel>
                <h2 className="mt-5 text-3xl font-bold sm:text-4xl">Weight Loss | Weight Gain | Fitness</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Personalized guidance for a healthier, stronger and more confident you.
                </p>
              </div>
            </Reveal>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s, i) => (
                <Reveal key={s.title} delay={i * 90}>
                  <article className="card-soft group h-full overflow-hidden">
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={s.img}
                        alt={s.title}
                        width={900}
                        height={700}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute bottom-3 left-3 grid h-10 w-10 place-items-center rounded-2xl bg-card text-primary-dark shadow-[var(--shadow-soft)]">
                        <s.icon className="h-5 w-5" />
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold">{s.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section id="benefits" className="py-20 sm:py-28">
          <div className="container-page grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <Reveal>
                <SectionLabel>Why Choose Us</SectionLabel>
                <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
                  Why Start Your Wellness Journey With Us?
                </h2>
              </Reveal>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {benefits.map((b, i) => (
                  <Reveal key={b} delay={i * 70}>
                    <li className="flex h-full items-start gap-3 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-primary/40 hover:bg-primary-soft/60">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm font-medium leading-snug">{b}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>

            <Reveal className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-primary-soft" />
                <img
                  src={whyImg}
                  alt="Wellness coach guiding a client through a personalized nutrition plan"
                  width={1200}
                  height={1008}
                  loading="lazy"
                  className="w-full rounded-[2rem] object-cover shadow-[var(--shadow-lift)]"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-20 sm:pb-28">
          <div className="container-page">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2.5rem] bg-[image:var(--gradient-primary)] px-6 py-16 text-center text-primary-foreground sm:px-14">
                <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-primary-foreground/10" />
                <div className="absolute -bottom-24 -left-12 h-64 w-64 rounded-full bg-primary-foreground/10" />
                <div className="relative">
                  <h2 className="text-3xl font-bold sm:text-4xl">
                    Ready to Start Your Fitness Journey?
                  </h2>
                  <p className="mx-auto mt-4 max-w-xl text-primary-foreground/85">
                    Take the first step toward a healthier and more active lifestyle today.
                  </p>
                  <div className="mt-9 flex flex-wrap justify-center gap-3">
                    <a
                      href={WHATSAPP}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-base bg-card text-primary-dark shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
                    >
                      <MessageCircle className="h-4 w-4" /> WhatsApp Now
                    </a>
                    <a
                      href={TEL}
                      className="btn-base border border-primary-foreground/45 bg-primary-foreground/10 text-primary-foreground transition-colors hover:bg-primary-foreground/20"
                    >
                      <Phone className="h-4 w-4" /> Call {PHONE}
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* YouTube Video Showcase & Social Media Section */}
        <section className="py-20 sm:py-28 bg-background">
          <div className="container-page">
            <Reveal>
              <div className="mx-auto max-w-3xl text-center flex flex-col items-center">
                <SectionLabel>Follow Our Fitness &amp; Wellness Journey</SectionLabel>
                <h2 className="mt-5 text-2xl font-bold sm:text-3xl leading-snug">
                  Watch our latest fitness, nutrition and wellness videos on YouTube.
                </h2>
                <div className="mt-9">
                  <a
                    href="https://www.youtube.com/@JasbirKaur-b4g"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-base bg-[#FF0000] text-white hover:bg-[#FF0000]/90 transition-colors shadow-[var(--shadow-soft)] px-8 py-3 text-base"
                  >
                    <Youtube className="h-5 w-5 mr-1" /> Visit Our YouTube Channel
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-secondary/60 py-20 sm:py-28">
          <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <div>
                <SectionLabel>Contact</SectionLabel>
                <h2 className="mt-5 text-3xl font-bold sm:text-4xl">Let&apos;s Talk Wellness</h2>
                <p className="mt-4 text-muted-foreground">
                  Send an enquiry and we&apos;ll get back to you on WhatsApp.
                </p>

                <div className="mt-8 grid gap-3">
                  {[
                    { icon: HeartPulse, label: "Business", value: "Jasbir Health Expert" },
                    { icon: Phone, label: "Phone / WhatsApp", value: PHONE, href: TEL },
                    { icon: MapPin, label: "Location", value: "Patiala, Punjab" },
                    { icon: Instagram, label: "Instagram", value: "@jasbir709", href: "https://www.instagram.com/jasbir709?igsh=NGN2bWRpbDNneDk0" },
                    { icon: Youtube, label: "YouTube", value: "Jasbir Kaur", href: "https://www.youtube.com/@JasbirKaur-b4g" },
                  ].map((c) => (
                    <div key={c.label} className="card-soft flex items-center gap-4 p-5">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary-soft text-primary-dark">
                        <c.icon className="h-5 w-5" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                          {c.label}
                        </p>
                        {c.href ? (
                          <a
                            href={c.href}
                            className="truncate font-semibold text-primary-dark hover:underline"
                          >
                            {c.value}
                          </a>
                        ) : (
                          <p className="truncate font-semibold">{c.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <form
                onSubmit={handleSubmit}
                className="card-soft h-full p-6 hover:translate-y-0 sm:p-8"
              >
                <h3 className="text-xl font-semibold">Send an Enquiry</h3>
                <div className="mt-6 grid gap-4">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your full name"
                      className={field}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      required
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="Your contact number"
                      className={field}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your wellness goals"
                      className={`${field} resize-none`}
                    />
                  </div>
                  <button type="submit" className="btn-base btn-primary w-full">
                    <Send className="h-4 w-4" /> Send Enquiry
                  </button>
                  <p className="text-center text-xs text-muted-foreground">
                    Your enquiry opens directly in WhatsApp.
                  </p>
                </div>
              </form>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-background py-14">
        <div className="container-page grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-lg font-bold">Jasbir Health Expert</p>
            <p className="mt-1 text-sm text-muted-foreground">Fitness &amp; Wellness</p>
            <p className="mt-4 text-sm text-muted-foreground">Patiala, Punjab</p>
            <a href={TEL} className="mt-1 block text-sm font-semibold text-primary-dark">
              {PHONE}
            </a>
          </div>
          <div>
            <p className="text-sm font-semibold">Quick Links</p>
            <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
              {[
                ["Home", "#home"],
                ["About", "#about"],
                ["Fitness & Wellness", "#services"],
                ["Benefits", "#benefits"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="transition-colors hover:text-primary-dark">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold">Focus Areas</p>
            <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
              {services.map((s) => (
                <li key={s.title}>{s.title}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold">Get in touch</p>
            <p className="mt-4 text-sm text-muted-foreground">
              Message us anytime for guidance and enquiries.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="btn-base btn-primary"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a
                href="https://www.instagram.com/jasbir709?igsh=NGN2bWRpbDNneDk0"
                target="_blank"
                rel="noreferrer"
                className="btn-base border border-border bg-card text-primary-dark shadow-[var(--shadow-soft)] hover:bg-primary-soft/60"
              >
                <Instagram className="h-4 w-4" /> Instagram
              </a>
              <a
                href="https://www.youtube.com/@JasbirKaur-b4g"
                target="_blank"
                rel="noreferrer"
                className="btn-base border border-border bg-card text-[#FF0000] shadow-[var(--shadow-soft)] hover:bg-[#FF0000]/10"
              >
                <Youtube className="h-4 w-4" /> YouTube
              </a>
            </div>
          </div>
        </div>
        <div className="container-page mt-10 border-t border-border pt-6">
          <p className="text-center text-xs text-muted-foreground">
            © 2026 Jasbir Health Expert. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

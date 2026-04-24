import { useEffect, useMemo, useState, type ReactNode } from "react";
import logo from "./assets/logo-living-paradise.png";
import heroDemo from "./assets/hero-demo.jpg";
import teamGrowth from "./assets/team-growth.jpg";

type PageId = "inicio" | "demostraciones" | "equipo" | "nosotros" | "contacto" | "privacidad";

function HouseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
      <path d="M9 21v-6h6v6" />
    </svg>
  );
}

function GrowthIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 20h16" />
      <path d="M7 16v-4" />
      <path d="M12 16V9" />
      <path d="M17 16V6" />
      <path d="m13 7 4-4 3 3" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3 5 6v5c0 5 3 8 7 10 4-2 7-5 7-10V6l-7-3Z" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
      <circle cx="9.5" cy="7" r="3.5" />
      <path d="M20 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M14 4.15a3.5 3.5 0 0 1 0 5.7" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 6h16v12H4z" />
      <path d="m4 8 8 6 8-6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.87 19.87 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12.8 19.87 19.87 0 0 1 1.08 4.18 2 2 0 0 1 3.06 2h3a2 2 0 0 1 2 1.72c.12.9.34 1.79.65 2.64a2 2 0 0 1-.45 2.11L7 9.73a16 16 0 0 0 7.27 7.27l1.26-1.26a2 2 0 0 1 2.11-.45c.85.31 1.74.53 2.64.65A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function PrimaryButton({
  children,
  onClick,
  href,
}: {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
}) {
  const className =
    "inline-flex items-center justify-center gap-3 rounded-xl bg-[#123d8c] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0e3274]";

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
        <ArrowIcon />
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
      <ArrowIcon />
    </button>
  );
}

function SecondaryButton({
  children,
  onClick,
  href,
  light = false,
}: {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  light?: boolean;
}) {
  const className = light
    ? "inline-flex items-center justify-center gap-3 rounded-xl border border-white/70 bg-white px-6 py-3 text-sm font-semibold text-[#123d8c] transition hover:bg-blue-50"
    : "inline-flex items-center justify-center gap-3 rounded-xl border border-[#123d8c] bg-white px-6 py-3 text-sm font-semibold text-[#123d8c] transition hover:bg-blue-50";

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
        <ArrowIcon />
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
      <ArrowIcon />
    </button>
  );
}

function RouteCard({
  icon,
  title,
  text,
  onClick,
}: {
  icon: ReactNode;
  title: string;
  text: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center gap-5 rounded-[1.35rem] border border-[#d7dce5] bg-white px-6 py-5 text-left shadow-[0_6px_18px_rgba(16,37,74,0.06)] transition hover:-translate-y-0.5"
    >
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#123d8c] text-white shadow-md">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="text-[1.08rem] font-semibold leading-tight text-[#24395d]">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
      </div>
      <div className="shrink-0 text-[#123d8c]">
        <ArrowIcon />
      </div>
    </button>
  );
}

function StepCard({
  number,
  title,
  text,
  showArrow = true,
}: {
  number: string;
  title: string;
  text: string;
  showArrow?: boolean;
}) {
  return (
    <div className="relative flex items-start gap-4">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#123d8c] text-2xl font-semibold text-white shadow-md">
        {number}
      </div>
      <div className="max-w-[220px]">
        <h3 className="text-[1.05rem] font-semibold text-[#24395d]">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
      </div>
      {showArrow ? (
        <div className="absolute right-[-28px] top-6 hidden text-[#8da2c7] lg:block">
          <svg viewBox="0 0 80 12" className="h-3 w-16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeDasharray="4 4" d="M1 6h72" />
            <path d="m68 1 7 5-7 5" />
          </svg>
        </div>
      ) : null}
    </div>
  );
}

function PageShell({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#1263b8]">{eyebrow}</p>
        <h1 className="heading-serif mt-4 max-w-4xl text-4xl font-semibold leading-tight text-[#1d2e55] md:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600">{description}</p>
      </div>
      <div className="mt-12">{children}</div>
    </section>
  );
}

function PrivacyNotice({ purpose }: { purpose: string }) {
  return (
    <p className="mt-4 text-xs leading-6 text-slate-500">
      Al enviar este formulario, autorizas el tratamiento de tus datos para fines de {purpose}. Puedes
      consultar la política de privacidad en el pie de página.
    </p>
  );
}

export default function App() {
  const [activePage, setActivePage] = useState<PageId>("inicio");

  const whatsappNumber = "573227133590";
  const demoWhatsappMessage = encodeURIComponent(
    "Hola, quiero agendar una demostración de cocina en casa con Living Paradise."
  );
  const recruitWhatsappMessage = encodeURIComponent(
    "Hola, quiero conocer las oportunidades de Living Paradise."
  );

  const hubspotPortalId = "51384006";
  const demoFormId = "719db37c-ec4e-4a8d-bb58-4836e2a2d09d";
  const recruitFormId = "d16650bd-a5e6-402a-a312-2db44f8aaadb";
  const hubspotRegion = "na1";

  useEffect(() => {
    const scriptId = "hubspot-forms-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = `https://js.hsforms.net/forms/embed/${hubspotPortalId}.js`;
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  const pages = useMemo(
    () => [
      { id: "inicio" as const, label: "Inicio" },
      { id: "demostraciones" as const, label: "Demostraciones" },
      { id: "equipo" as const, label: "Únete al equipo" },
      { id: "nosotros" as const, label: "Nosotros" },
      { id: "contacto" as const, label: "Contacto" },
    ],
    []
  );

  const corporateEmails = [
    { title: "Gerencia", email: "gerencia@livingparadise.com.co" },
    { title: "Información general", email: "info@livingparadise.com.co" },
    { title: "Demostraciones", email: "demostraciones@livingparadise.com.co" },
    { title: "Contrataciones", email: "contrataciones@livingparadise.com.co" },
    { title: "Contacto directo", email: "fernando.rodriguez@livingparadise.com.co" },
    { title: "Facturación", email: "facturacion@livingparadise.com.co" },
  ];

  const navButtonClass = (id: PageId) =>
    `relative px-4 py-2 text-[1.04rem] font-semibold transition ${
      activePage === id ? "text-[#163f8d]" : "text-slate-500 hover:text-[#163f8d]"
    }`;

  const renderInicio = () => (
    <>
      <section className="border-b border-[#dde3ee] bg-[#f2f5fa]">
        <div className="mx-auto max-w-[1600px] px-6 py-10 lg:px-10 lg:py-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="pt-4">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#1263b8]">
                Healthy modern home · demostraciones · talleres de cocina
              </p>

              <h1 className="heading-serif mt-4 max-w-[760px] text-5xl leading-[0.98] text-[#18305c] md:text-[4.4rem]">
                Talleres y demostraciones de cocina en casa con una experiencia clara, elegante y personalizada.
              </h1>

              <p className="mt-4 max-w-[690px] text-[1.18rem] leading-8 text-slate-600">
                En Living Paradise llevamos a tu hogar una experiencia práctica para que conozcas una propuesta de cocina moderna, funcional y pensada para el bienestar. Todo se vive de forma guiada, cercana y profesional.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <PrimaryButton onClick={() => setActivePage("demostraciones")}>Agenda tu demostración</PrimaryButton>
                <SecondaryButton onClick={() => setActivePage("contacto")}>Solicita información</SecondaryButton>
              </div>
            </div>

            <div className="overflow-hidden rounded-[1.5rem] border border-[#d7dce5] bg-white shadow-[0_12px_30px_rgba(17,39,81,0.08)]">
              <img
                src={heroDemo}
                alt="Demostración de cocina en casa con familia"
                className="h-[360px] w-full object-cover md:h-[430px] lg:h-[470px]"
              />
            </div>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <RouteCard
              icon={<HouseIcon />}
              title="Demostraciones en casa"
              text="Vive una experiencia práctica, clara y personalizada en tu hogar."
              onClick={() => setActivePage("demostraciones")}
            />
            <RouteCard
              icon={<GrowthIcon />}
              title="Oportunidad de crecimiento"
              text="Únete a un entorno comercial con formación, acompañamiento y proyección."
              onClick={() => setActivePage("equipo")}
            />
            <RouteCard
              icon={<ShieldIcon />}
              title="Marca institucional"
              text="Conoce una propuesta seria, organizada y enfocada en experiencia y bienestar."
              onClick={() => setActivePage("nosotros")}
            />
          </div>
        </div>
      </section>

      <section className="border-b border-[#dde3ee] bg-[#f6f8fb]">
        <div className="mx-auto grid max-w-[1600px] gap-8 px-6 py-7 lg:grid-cols-[1.35fr_0.65fr] lg:items-stretch lg:px-10">
          <div>
            <div className="flex items-center justify-center gap-8">
              <div className="h-px flex-1 max-w-[110px] bg-[#9eb0d0]" />
              <h2 className="heading-serif text-[2.25rem] text-[#24395d]">¿Cómo funciona?</h2>
              <div className="h-px flex-1 max-w-[110px] bg-[#9eb0d0]" />
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-3">
              <StepCard
                number="1"
                title="Solicita tu demostración"
                text="Completa el formulario y cuéntanos qué deseas conocer."
              />
              <StepCard
                number="2"
                title="Confirmamos la visita"
                text="Coordinamos contigo el día y la hora que mejor se adapten a tu agenda."
              />
              <StepCard
                number="3"
                title="Vive la experiencia en casa"
                text="Disfruta una demostración personalizada y resuelve todas tus dudas."
                showArrow={false}
              />
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.4rem] border border-[#d7dce5] bg-white shadow-[0_10px_28px_rgba(17,39,81,0.08)]">
            <img
              src={teamGrowth}
              alt="Equipo reunido revisando crecimiento comercial"
              className="h-full min-h-[250px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#123d8c]">
        <div className="mx-auto grid max-w-[1600px] gap-6 px-6 py-6 text-white lg:grid-cols-[0.72fr_1fr_0.6fr] lg:items-center lg:px-10">
          <div className="flex items-center gap-4">
            <div className="rounded-full border border-white/20 p-3 text-white">
              <UsersIcon />
            </div>
            <p className="heading-serif text-[2rem] leading-tight">Construye una carrera con dirección comercial.</p>
          </div>

          <div className="border-white/25 lg:border-l lg:pl-8">
            <p className="text-[1.1rem] leading-7 text-blue-100">
              Buscamos personas con actitud, disciplina y enfoque en resultados.
            </p>
          </div>

          <div className="flex justify-start lg:justify-end">
            <SecondaryButton light onClick={() => setActivePage("equipo")}>
              Conocer oportunidades
            </SecondaryButton>
          </div>
        </div>
      </section>
    </>
  );

  const demoBenefits = [
    {
      title: "Experiencia en un contexto real",
      description:
        "La demostración ocurre en casa y eso permite entender de forma práctica cómo encaja la propuesta en la rutina diaria.",
    },
    {
      title: "Acompañamiento claro y profesional",
      description:
        "La visita se coordina con orden, se explica con claridad y se atienden dudas con criterio y enfoque consultivo.",
    },
    {
      title: "Enfoque en bienestar y cocina práctica",
      description:
        "La experiencia está alineada con una cocina más cómoda, más consciente y más coherente con un estilo de vida moderno.",
    },
  ];

  const renderDemostraciones = () => (
    <PageShell
      eyebrow="Demostraciones"
      title="Vive una experiencia de cocina en casa clara, elegante y personalizada."
      description="Esta página debe aterrizar el valor sin rodeos: qué es la experiencia, cómo se agenda y por qué vale la pena conocerla."
    >
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-6">
          <div className="overflow-hidden rounded-[1.6rem] border border-[#d7dce5] shadow-[0_12px_30px_rgba(17,39,81,0.08)]">
            <img src={heroDemo} alt="Demostración de cocina Living Paradise" className="h-full w-full object-cover" />
          </div>

          <div className="grid gap-4">
            {demoBenefits.map((item) => (
              <div key={item.title} className="rounded-[1.35rem] border border-[#d7dce5] bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#24395d]">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[1.6rem] border border-[#d7dce5] bg-[#f7f9fc] p-6 shadow-sm md:p-8">
          <h3 className="text-2xl font-semibold text-[#24395d]">Solicita tu demostración</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Déjanos tus datos para coordinar una visita. También puedes escribirnos por WhatsApp o correo si
            quieres avanzar de forma más directa.
          </p>

          <div className="mt-6 overflow-hidden rounded-[1.2rem] border border-[#d7dce5] bg-white p-4">
            <div className="hs-form-frame" data-region={hubspotRegion} data-form-id={demoFormId} data-portal-id={hubspotPortalId} />
          </div>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <SecondaryButton href={`https://wa.me/${whatsappNumber}?text=${demoWhatsappMessage}`}>Escribir por WhatsApp</SecondaryButton>
            <SecondaryButton href="mailto:demolivingp@gmail.com">Escribir por correo</SecondaryButton>
          </div>
          <PrivacyNotice purpose="contacto, seguimiento comercial y gestión de la solicitud de demostración" />
        </div>
      </div>
    </PageShell>
  );

  const recruitmentBenefits = [
    "Proyección de crecimiento comercial y desarrollo personal.",
    "Capacitación y acompañamiento para fortalecer habilidades comerciales.",
    "Ambiente para personas con actitud, disciplina y foco en resultados.",
    "Una ruta seria para construir carrera y no solo buscar ingresos momentáneos.",
  ];

  const recruitmentProfile = [
    "Buena actitud y facilidad para relacionarse con personas.",
    "Interés por el aprendizaje comercial y el desarrollo personal.",
    "Disciplina, constancia y orientación a resultados.",
    "Disponibilidad para trabajar con metas, seguimiento y formación continua.",
  ];

  const renderEquipo = () => (
    <PageShell
      eyebrow="Únete al equipo"
      title="Una oportunidad para personas con actitud comercial, disciplina y hambre de crecimiento."
      description="Aquí no sirve el copy genérico. Esta página debe decir de frente a quién buscan, qué ofrecen y cómo aplicar."
    >
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-6">
          <div className="overflow-hidden rounded-[1.6rem] border border-[#d7dce5] shadow-[0_12px_30px_rgba(17,39,81,0.08)]">
            <img src={teamGrowth} alt="Equipo de trabajo Living Paradise" className="h-full w-full object-cover" />
          </div>

          <div className="rounded-[1.6rem] bg-[#123d8c] p-8 text-white shadow-[0_12px_30px_rgba(17,39,81,0.12)]">
            <p className="text-sm uppercase tracking-[0.25em] text-blue-200">Qué ofrecemos</p>
            <h2 className="heading-serif mt-4 text-4xl leading-tight">Un entorno de formación, acompañamiento y proyección.</h2>
            <ul className="mt-6 grid gap-3 text-sm leading-7 text-blue-100">
              {recruitmentBenefits.map((item) => <li key={item}>• {item}</li>)}
            </ul>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <PrimaryButton href="mailto:contrataciones@livingparadise.com.co">Enviar hoja de vida</PrimaryButton>
              <SecondaryButton light href={`https://wa.me/${whatsappNumber}?text=${recruitWhatsappMessage}`}>Hablar por WhatsApp</SecondaryButton>
            </div>
          </div>
        </div>

        <div>
          <div className="rounded-[1.35rem] border border-[#d7dce5] bg-white p-6 shadow-sm">
            <p className="text-sm uppercase tracking-[0.24em] text-[#1263b8]">Perfil buscado</p>
            <h3 className="mt-3 text-2xl font-semibold text-[#24395d]">Esto es lo que valoramos en los candidatos.</h3>
            <ul className="mt-4 grid gap-3 text-sm leading-7 text-slate-600">
              {recruitmentProfile.map((item) => <li key={item}>• {item}</li>)}
            </ul>
          </div>

          <div className="mt-6 rounded-[1.35rem] border border-[#d7dce5] bg-[#f7f9fc] p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-[#24395d]">Postúlate aquí</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Completa el formulario y nuestro equipo revisará tu información para el proceso de reclutamiento.
            </p>
            <div className="mt-5 overflow-hidden rounded-[1.2rem] border border-[#d7dce5] bg-white p-4">
              <div className="hs-form-frame" data-region={hubspotRegion} data-form-id={recruitFormId} data-portal-id={hubspotPortalId} />
            </div>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <SecondaryButton href="mailto:contrataciones@livingparadise.com.co">Aplicar por correo</SecondaryButton>
              <SecondaryButton href={`https://wa.me/${whatsappNumber}?text=${recruitWhatsappMessage}`}>Aplicar por WhatsApp</SecondaryButton>
            </div>
            <PrivacyNotice purpose="contacto, evaluación del perfil y gestión del proceso de reclutamiento" />
          </div>
        </div>
      </div>
    </PageShell>
  );

  const companyPillars = [
    {
      title: "Experiencia",
      text: "Cada demostración está pensada para que el cliente viva algo claro, cómodo y bien presentado dentro de su propio hogar.",
    },
    {
      title: "Bienestar",
      text: "La propuesta conecta cocina práctica, hábitos más conscientes y una visión moderna del hogar.",
    },
    {
      title: "Confianza",
      text: "La marca busca comunicar orden, profesionalismo y una atención que se siente seria desde el primer contacto.",
    },
  ];

  const renderNosotros = () => (
    <PageShell
      eyebrow="Nosotros"
      title="Living Paradise es una marca que mezcla elegancia, bienestar y dirección comercial."
      description="Nuestra presencia institucional debe comunicar seriedad, experiencia y una propuesta de valor coherente."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {companyPillars.map((pillar) => (
          <div key={pillar.title} className="rounded-[1.35rem] border border-[#d7dce5] bg-white p-7 shadow-sm">
            <h3 className="text-xl font-semibold text-[#24395d]">{pillar.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{pillar.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-[1.6rem] border border-[#d7dce5] bg-[#f7f9fc] p-8">
        <h3 className="text-2xl font-semibold text-[#24395d]">Qué queremos proyectar</h3>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-600">
          Una marca organizada, premium y cercana, capaz de generar confianza en clientes, atraer talento
          comercial y construir posicionamiento institucional.
        </p>
      </div>
    </PageShell>
  );

  const renderContacto = () => (
    <PageShell
      eyebrow="Contacto"
      title="Canales corporativos claros para responder mejor y operar con más orden."
      description="Cada correo cumple una función. Eso mejora la atención, transmite estructura y evita el caos operativo."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {corporateEmails.map((item) => (
          <a
            key={item.email}
            href={`mailto:${item.email}`}
            className="rounded-[1.35rem] border border-[#d7dce5] bg-white p-6 text-sm text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-[#123d8c]"
          >
            <p className="text-xs uppercase tracking-[0.24em] text-[#1263b8]">{item.title}</p>
            <p className="mt-3 font-medium text-[#24395d]">{item.email}</p>
          </a>
        ))}
      </div>
    </PageShell>
  );

  const renderPrivacidad = () => (
    <PageShell
      eyebrow="Privacidad"
      title="Política de privacidad y tratamiento de datos"
      description="Este sitio recopila datos a través de formularios de demostraciones y reclutamiento. Aquí resumimos de forma clara cómo se usan esos datos."
    >
      <div className="rounded-[1.6rem] border border-[#d7dce5] bg-white p-8 shadow-sm">
        <div className="grid gap-6 text-sm leading-7 text-slate-600">
          <p>
            Los datos personales suministrados a través de este sitio serán utilizados por Living Paradise para
            gestionar solicitudes de demostraciones, procesos de reclutamiento, contacto comercial y seguimiento
            relacionado con los servicios y oportunidades ofrecidas por la marca.
          </p>
          <p>
            Al diligenciar los formularios, el titular autoriza el tratamiento de su información para fines de
            contacto, atención, seguimiento comercial y gestión de procesos de selección, de acuerdo con la
            normatividad aplicable en Colombia.
          </p>
          <p>
            El titular podrá solicitar actualización, corrección o eliminación de sus datos escribiendo a
            info@livingparadise.com.co o al canal de contacto correspondiente publicado en este sitio.
          </p>
        </div>
      </div>
    </PageShell>
  );

  const renderPage = () => {
    switch (activePage) {
      case "demostraciones":
        return renderDemostraciones();
      case "equipo":
        return renderEquipo();
      case "nosotros":
        return renderNosotros();
      case "contacto":
        return renderContacto();
      case "privacidad":
        return renderPrivacidad();
      default:
        return renderInicio();
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-[#dde3ee] bg-white">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-4 px-6 py-4 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <button type="button" onClick={() => setActivePage("inicio")} className="flex items-center gap-6 text-left">
            <img src={logo} alt="Living Paradise" className="h-[118px] w-auto object-contain md:h-[142px]" />
            <div className="hidden h-20 w-px bg-[#c9d1df] md:block" />
            <div>
              <p className="text-[1.95rem] font-medium tracking-[0.03em] text-slate-600 md:text-[2.2rem]">Healthy Modern Home</p>
            </div>
          </button>

          <nav className="flex flex-wrap gap-4 md:gap-8">
            {pages.map((page) => (
              <button
                key={page.id}
                type="button"
                onClick={() => setActivePage(page.id)}
                className={navButtonClass(page.id)}
              >
                {page.label}
                {activePage === page.id ? (
                  <span className="absolute inset-x-4 -bottom-2 h-[3px] rounded-full bg-[#163f8d]" />
                ) : null}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main>{renderPage()}</main>

      <footer className="bg-[#071b49] text-white">
        <div className="mx-auto grid max-w-[1600px] gap-10 px-6 py-12 md:grid-cols-[1.05fr_0.9fr_0.9fr_0.7fr] lg:px-10">
          <div>
            <img src={logo} alt="Living Paradise" className="h-20 w-auto object-contain brightness-[3.3]" />
            <p className="mt-5 max-w-sm text-sm leading-7 text-blue-100">
              Experiencias de cocina en casa pensadas para conectar bienestar, atención profesional y una marca que inspira confianza.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-200">Enlaces rápidos</p>
            <div className="mt-4 grid gap-3 text-sm text-blue-50">
              <button type="button" onClick={() => setActivePage("demostraciones")} className="text-left hover:text-white">
                Demostraciones
              </button>
              <button type="button" onClick={() => setActivePage("equipo")} className="text-left hover:text-white">
                Únete al equipo
              </button>
              <button type="button" onClick={() => setActivePage("nosotros")} className="text-left hover:text-white">
                Nosotros
              </button>
              <button type="button" onClick={() => setActivePage("contacto")} className="text-left hover:text-white">
                Contacto
              </button>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-200">Contacto</p>
            <div className="mt-4 grid gap-3 text-sm text-blue-50">
              <a href="mailto:info@livingparadise.com.co" className="flex items-center gap-2 hover:text-white">
                <MailIcon />
                info@livingparadise.com.co
              </a>
              <a href="mailto:demostraciones@livingparadise.com.co" className="flex items-center gap-2 hover:text-white">
                <MailIcon />
                demostraciones@livingparadise.com.co
              </a>
              <a href={`https://wa.me/${whatsappNumber}?text=${demoWhatsappMessage}`} className="flex items-center gap-2 hover:text-white">
                <PhoneIcon />
                322 713 3590
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-200">Legal</p>
            <div className="mt-4 grid gap-3 text-sm text-blue-50">
              <button type="button" onClick={() => setActivePage("privacidad")} className="text-left hover:text-white">
                Política de privacidad
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto max-w-[1600px] px-6 py-5 text-sm text-blue-100 lg:px-10">
            © 2026 Living Paradise. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}

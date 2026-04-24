import { useEffect, useMemo, useState, type ReactNode } from "react";
import logo from "./assets/logo-living-paradise.png";
import heroDemo from "./assets/hero-demo.jpg";
import teamGrowth from "./assets/team-growth.jpg";

type PageId = "inicio" | "demostraciones" | "equipo" | "nosotros" | "contacto" | "privacidad";

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
    "inline-flex items-center justify-center gap-3 rounded-2xl bg-[#123b8b] px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-blue-100 transition hover:-translate-y-0.5 hover:bg-[#0f3276]";

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
        <span aria-hidden="true">→</span>
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
      <span aria-hidden="true">→</span>
    </button>
  );
}

function SecondaryButton({
  children,
  onClick,
  href,
}: {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
}) {
  const className =
    "inline-flex items-center justify-center gap-3 rounded-2xl border border-[#123b8b] bg-white px-6 py-3 text-center text-sm font-semibold text-[#123b8b] transition hover:-translate-y-0.5 hover:bg-blue-50";

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
        <span aria-hidden="true">→</span>
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
      <span aria-hidden="true">→</span>
    </button>
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
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600">{description}</p>
      </div>
      <div className="mt-12">{children}</div>
    </section>
  );
}

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#1263b8]">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold leading-tight text-slate-900 md:text-4xl">{title}</h2>
      {description ? <p className="mt-5 text-base leading-8 text-slate-600">{description}</p> : null}
    </div>
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

function RouteCard({
  icon,
  title,
  text,
  onClick,
}: {
  icon: string;
  title: string;
  text: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center gap-4 rounded-[1.75rem] border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-slate-300"
    >
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#123b8b] text-3xl text-white shadow-md">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-semibold text-slate-900">{title}</h3>
        <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
      </div>
      <div className="text-3xl text-[#123b8b]">›</div>
    </button>
  );
}

function StepItem({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#123b8b] text-2xl font-semibold text-white shadow-md">
        {number}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
      </div>
    </div>
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

  const homeCards = [
    {
      icon: "⌂",
      title: "Demostraciones en casa",
      text: "Vive una experiencia práctica, clara y personalizada directamente en tu hogar.",
      page: "demostraciones" as const,
    },
    {
      icon: "↗",
      title: "Oportunidad de crecimiento",
      text: "Únete a un entorno comercial con formación, acompañamiento y proyección.",
      page: "equipo" as const,
    },
    {
      icon: "🛡",
      title: "Marca institucional",
      text: "Conoce una propuesta seria, organizada y enfocada en experiencia y bienestar.",
      page: "nosotros" as const,
    },
  ];

  const demoBenefits = [
    {
      title: "Experiencia en un contexto real",
      description:
        "La demostración ocurre en casa, lo que permite entender de forma práctica cómo se integra a la rutina diaria.",
    },
    {
      title: "Acompañamiento claro y profesional",
      description:
        "La visita no se siente improvisada. Se coordina con orden, se explica con claridad y se resuelven dudas con criterio.",
    },
    {
      title: "Enfoque en bienestar y cocina práctica",
      description:
        "La experiencia gira en torno a una forma de cocinar más consciente, cómoda y alineada con un estilo de vida moderno.",
    },
  ];

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

  const companyPillars = [
    {
      title: "Experiencia",
      text: "Cada interacción debe transmitir cercanía, orden y una sensación premium coherente con la marca.",
    },
    {
      title: "Bienestar",
      text: "Promovemos una visión del hogar conectada con cocina práctica, hábitos saludables y estilo de vida moderno.",
    },
    {
      title: "Crecimiento",
      text: "Construimos una plataforma comercial e institucional con visión de largo plazo y foco en ejecución.",
    },
  ];

  const navButtonClass = (id: PageId) =>
    `rounded-full px-4 py-2 text-sm font-semibold transition ${
      activePage === id ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
    }`;

  const renderInicio = () => (
    <>
      <section className="border-b border-slate-200 bg-[linear-gradient(180deg,#eef4fb_0%,#ffffff_100%)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-16">
          <div>
            <div className="mb-8 inline-flex rounded-[2rem] border border-slate-200 bg-white px-6 py-5 shadow-sm">
              <img src={logo} alt="Living Paradise" className="h-24 w-auto object-contain md:h-28" />
            </div>

            <p className="text-sm font-semibold uppercase tracking-[0.30em] text-[#1263b8]">
              Healthy modern home · demostraciones · crecimiento
            </p>

            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.05] text-[#11224c] md:text-6xl">
              Demostraciones de cocina en casa y oportunidades de crecimiento con una marca que inspira confianza.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Living Paradise integra experiencias de cocina en casa, desarrollo comercial y presencia institucional
              en una plataforma clara, elegante y orientada a resultados.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <PrimaryButton onClick={() => setActivePage("demostraciones")}>Agenda tu demostración</PrimaryButton>
              <SecondaryButton onClick={() => setActivePage("equipo")}>Únete al equipo</SecondaryButton>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2.2rem] border border-slate-200 bg-white shadow-xl shadow-slate-200">
            <img
              src={heroDemo}
              alt="Demostración de cocina en casa con familia y cookware"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="mx-auto grid max-w-7xl gap-5 px-6 pb-12 md:grid-cols-3">
          {homeCards.map((card) => (
            <RouteCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              text={card.text}
              onClick={() => setActivePage(card.page)}
            />
          ))}
        </div>
      </section>

      <section className="bg-[#f1f5fb] py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <div className="mb-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-slate-300" />
              <h2 className="text-3xl font-semibold text-[#11224c]">¿Cómo funciona?</h2>
              <div className="h-px flex-1 bg-slate-300" />
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <StepItem
                number="1"
                title="Solicita tu demostración"
                text="Completa el formulario o escríbenos y cuéntanos qué quieres conocer."
              />
              <StepItem
                number="2"
                title="Confirmamos la visita"
                text="Coordinamos contigo el día y la hora que mejor se adapten a tu agenda."
              />
              <StepItem
                number="3"
                title="Vive la experiencia en casa"
                text="Disfruta una demostración personalizada y resuelve todas tus dudas."
              />
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-lg shadow-slate-200">
            <img
              src={teamGrowth}
              alt="Equipo de trabajo reunido revisando plan de crecimiento comercial"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#123b8b] py-10 text-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-[1.2fr_1fr_auto] md:items-center">
          <div>
            <p className="text-3xl font-semibold leading-tight">Construye una carrera con dirección comercial.</p>
          </div>
          <p className="text-sm leading-7 text-blue-100">
            Buscamos personas con actitud, disciplina y enfoque en resultados. Si quieres crecer de verdad, aquí sí
            hay una ruta.
          </p>
          <div>
            <SecondaryButton onClick={() => setActivePage("equipo")}>Conocer oportunidades</SecondaryButton>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="Lo que sí debe quedar claro"
          title="Una web que explica mejor lo que haces, vende mejor y proyecta más valor."
          description="Antes el sitio se veía correcto, pero no pegaba. Ahora el mensaje es más directo, el logo tiene más presencia y la marca se siente más premium y más viva."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {companyPillars.map((pillar) => (
            <div key={pillar.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-sm uppercase tracking-[0.24em] text-[#1263b8]">{pillar.title}</p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-900">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{pillar.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );

  const renderDemostraciones = () => (
    <PageShell
      eyebrow="Demostraciones"
      title="Vive una experiencia de cocina en casa clara, elegante y personalizada."
      description="La página debe aterrizar el valor sin rodeos: qué es la experiencia, cómo se agenda y por qué vale la pena conocerla."
    >
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-6">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 shadow-lg shadow-slate-200">
            <img src={heroDemo} alt="Demostración de cocina Living Paradise" className="h-full w-full object-cover" />
          </div>

          <div className="grid gap-4">
            {demoBenefits.map((item) => (
              <div key={item.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm md:p-8">
          <h3 className="text-2xl font-semibold text-slate-900">Solicita tu demostración</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Déjanos tus datos para coordinar una visita. También puedes escribirnos por WhatsApp o correo si quieres
            avanzar de forma más directa.
          </p>

          <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-4">
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

  const renderEquipo = () => (
    <PageShell
      eyebrow="Únete al equipo"
      title="Una oportunidad para personas con actitud comercial, disciplina y hambre de crecimiento."
      description="Aquí no sirve el copy genérico de reclutamiento. Esta página debe decir de frente a quién buscan, qué ofrecen y cómo aplicar."
    >
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-6">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 shadow-lg shadow-slate-200">
            <img src={teamGrowth} alt="Equipo de trabajo Living Paradise" className="h-full w-full object-cover" />
          </div>

          <div className="rounded-[2rem] bg-[#123b8b] p-8 text-white shadow-2xl shadow-slate-200">
            <p className="text-sm uppercase tracking-[0.25em] text-blue-200">Qué ofrecemos</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight">Un entorno de formación, acompañamiento y proyección.</h2>
            <ul className="mt-6 grid gap-3 text-sm leading-7 text-blue-100">
              {recruitmentBenefits.map((item) => <li key={item}>• {item}</li>)}
            </ul>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <PrimaryButton href="mailto:contrataciones@livingparadise.com.co">Enviar hoja de vida</PrimaryButton>
              <SecondaryButton href={`https://wa.me/${whatsappNumber}?text=${recruitWhatsappMessage}`}>Hablar por WhatsApp</SecondaryButton>
            </div>
          </div>
        </div>

        <div>
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm uppercase tracking-[0.24em] text-[#1263b8]">Perfil buscado</p>
            <h3 className="mt-3 text-2xl font-semibold text-slate-900">Esto es lo que valoramos en los candidatos.</h3>
            <ul className="mt-4 grid gap-3 text-sm leading-7 text-slate-600">
              {recruitmentProfile.map((item) => <li key={item}>• {item}</li>)}
            </ul>
          </div>

          <div className="mt-6 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Postúlate aquí</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Completa el formulario y nuestro equipo revisará tu información para el proceso de reclutamiento.
            </p>
            <div className="mt-5 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-4">
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

  const renderNosotros = () => (
    <PageShell
      eyebrow="Nosotros"
      title="Living Paradise es una marca que mezcla elegancia, bienestar y dirección comercial."
      description="Nuestra presencia institucional debe comunicar seriedad, experiencia y una propuesta de valor coherente, no una marca improvisada."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {companyPillars.map((pillar) => (
          <div key={pillar.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">{pillar.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{pillar.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
        <h3 className="text-2xl font-semibold text-slate-900">Qué queremos proyectar</h3>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-600">
          Una marca organizada, premium y cercana, capaz de generar confianza en clientes, atraer talento comercial y
          construir posicionamiento institucional. La web tiene que estar a la altura de esa intención.
        </p>
      </div>
    </PageShell>
  );

  const renderContacto = () => (
    <PageShell
      eyebrow="Contacto"
      title="Canales corporativos claros para responder mejor y operar con más orden."
      description="Cada correo cumple una función. Eso mejora la atención, transmite estructura y evita el caos de meter todo en una sola bandeja."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {corporateEmails.map((item) => (
          <a
            key={item.email}
            href={`mailto:${item.email}`}
            className="rounded-[1.75rem] border border-slate-200 bg-white p-6 text-sm text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-900"
          >
            <p className="text-xs uppercase tracking-[0.24em] text-[#1263b8]">{item.title}</p>
            <p className="mt-3 font-medium text-slate-900">{item.email}</p>
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
      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
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
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-4 lg:flex-row lg:items-center lg:justify-between">
          <button type="button" onClick={() => setActivePage("inicio")} className="flex items-center gap-4 text-left">
            <div className="rounded-[1.5rem] border border-slate-200 bg-white px-5 py-4 shadow-sm">
              <img src={logo} alt="Living Paradise" className="h-14 w-auto object-contain md:h-16" />
            </div>
            <div>
              <p className="text-[1.75rem] font-semibold leading-none text-slate-900">Living Paradise</p>
              <p className="mt-1 text-sm uppercase tracking-[0.28em] text-slate-500">Healthy modern home</p>
            </div>
          </button>

          <nav className="flex flex-wrap gap-2">
            {pages.map((page) => (
              <button
                key={page.id}
                type="button"
                onClick={() => setActivePage(page.id)}
                className={navButtonClass(page.id)}
              >
                {page.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main>{renderPage()}</main>

      <footer className="bg-[#071b49] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-[1.2fr_0.9fr_0.9fr_0.7fr]">
          <div>
            <img src={logo} alt="Living Paradise" className="h-20 w-auto object-contain brightness-[3]" />
            <p className="mt-5 max-w-sm text-sm leading-7 text-blue-100">
              Experiencias que transforman hogares y personas a través de la cocina, el bienestar y el crecimiento.
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
              <a href="mailto:info@livingparadise.com.co" className="hover:text-white">info@livingparadise.com.co</a>
              <a href="mailto:demostraciones@livingparadise.com.co" className="hover:text-white">demostraciones@livingparadise.com.co</a>
              <a href="mailto:contrataciones@livingparadise.com.co" className="hover:text-white">contrataciones@livingparadise.com.co</a>
              <a href={`https://wa.me/${whatsappNumber}?text=${demoWhatsappMessage}`} className="hover:text-white">
                WhatsApp
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
          <div className="mx-auto max-w-7xl px-6 py-5 text-sm text-blue-100">
            © 2026 Living Paradise. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}

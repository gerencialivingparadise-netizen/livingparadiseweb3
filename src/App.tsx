import { useMemo, useState, type ReactNode } from "react";
import logo from "./assets/logo-living-paradise.png";
import heroDemo from "./assets/hero-demo.jpg";
import teamGrowth from "./assets/team-growth.jpg";
import recruitmentPoster from "./assets/recruitment-office-poster.png";

type PageId = "inicio" | "demostraciones" | "equipo" | "nosotros" | "contacto" | "privacidad";

function HouseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
      <path d="M9 21v-6h6v6" />
    </svg>
  );
}

function GrowthIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
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
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3 5 6v5c0 5 3 8 7 10 4-2 7-5 7-10V6l-7-3Z" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
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
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12.5 2.3 2.3 4.7-5.1" />
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
    "inline-flex items-center justify-center gap-2 rounded-xl bg-[#123d8c] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0f3376]";

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
    ? "inline-flex items-center justify-center gap-2 rounded-xl border border-white/60 bg-white px-6 py-3 text-sm font-semibold text-[#123d8c] transition hover:bg-blue-50"
    : "inline-flex items-center justify-center gap-2 rounded-xl border border-[#123d8c] bg-white px-6 py-3 text-sm font-semibold text-[#123d8c] transition hover:bg-blue-50";

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
      className="flex w-full items-start gap-4 rounded-[1.25rem] border border-[#d7deea] bg-white px-5 py-5 text-left shadow-[0_8px_20px_rgba(16,37,74,0.06)] transition hover:-translate-y-0.5"
    >
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#123d8c] text-white shadow-md">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="text-[1rem] font-semibold leading-tight text-[#24395d]">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
      </div>
      <div className="shrink-0 pt-1 text-[#c9a15a]">
        <ArrowIcon />
      </div>
    </button>
  );
}

function StepCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[1.25rem] border border-[#d7deea] bg-white p-6 shadow-sm">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#123d8c] text-lg font-semibold text-white">
        {number}
      </div>
      <h3 className="mt-4 text-[1rem] font-semibold text-[#24395d]">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
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
    <section className="mx-auto max-w-[1450px] px-6 py-14 md:py-18">
      <div className="max-w-4xl">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#1263b8]">{eyebrow}</p>
        <h1 className="heading-serif mt-4 max-w-4xl text-[2.2rem] font-semibold leading-[1.05] text-[#1d2e55] md:text-[3.2rem]">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-[1rem] leading-8 text-slate-600">{description}</p>
      </div>
      <div className="mt-10">{children}</div>
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
    { title: "Teléfono", email: "322 713 3590" },
    { title: "Contrataciones", email: "contrataciones@livingparadise.com.co" },
    { title: "Información general", email: "info@livingparadise.com.co" },
    { title: "Demostraciones", email: "demostraciones@livingparadise.com.co" },
  ];

  const companyPillars = [
    {
      title: "Experiencia",
      text: "Cada visita está pensada para que la familia viva una experiencia clara, cómoda y bien presentada dentro de su propio hogar.",
    },
    {
      title: "Bienestar",
      text: "La propuesta conecta cocina práctica, alimentación más consciente y una visión moderna del hogar.",
    },
    {
      title: "Confianza",
      text: "Buscamos proyectar orden, profesionalismo y una atención que se sienta seria desde el primer contacto.",
    },
  ];

  const demoBenefits = [
    "Experiencia guiada en casa para conocer la propuesta de forma práctica.",
    "Preparación de una receta sin agua, sin sal y sin aceite.",
    "Tips de cocina saludable y espacio para resolver dudas.",
    "Posibilidad de recibir regalos de la marca al vivir la experiencia.",
  ];

  const recruitmentBenefits = [
    "Formación estructurada en ventas y negociación.",
    "Acompañamiento en campo y desarrollo comercial.",
    "Proyección interna basada en desempeño.",
    "Entorno orientado a resultados y estándares profesionales.",
  ];

  const recruitmentProfile = [
    "Habilidades de comunicación y relacionamiento.",
    "Buena presentación personal.",
    "Disciplina, compromiso y actitud comercial.",
    "Interés por desarrollarse dentro del área comercial.",
  ];

  const navButtonClass = (id: PageId) =>
    `relative px-4 py-2 text-[0.98rem] font-semibold transition ${
      activePage === id ? "text-[#163f8d]" : "text-slate-500 hover:text-[#163f8d]"
    }`;

  const renderInicio = () => (
    <>
      <section className="border-b border-[#dde3ee] bg-[#f4f7fb]">
        <div className="mx-auto max-w-[1450px] px-6 py-10 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div className="pt-2">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#1263b8]">
                Living Paradise · crecimiento comercial · expansión
              </p>

              <h1 className="heading-serif mt-5 max-w-[720px] text-[2.8rem] leading-[1.02] text-[#18305c] md:text-[4rem]">
                Únete a un equipo comercial con formación, proyección y una marca que inspira confianza.
              </h1>

              <p className="mt-5 max-w-[680px] text-[1rem] leading-8 text-slate-600">
                En Living Paradise estamos en proceso de expansión y buscamos personas con actitud, disciplina
                y deseo real de crecer. Aquí encontrarás formación estructurada, acompañamiento en campo y una
                oportunidad seria para desarrollarte dentro del área comercial.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <PrimaryButton onClick={() => setActivePage("equipo")}>Conocer oportunidades</PrimaryButton>
                <SecondaryButton href="mailto:contrataciones@livingparadise.com.co">Enviar hoja de vida</SecondaryButton>
              </div>
            </div>

            <div className="overflow-hidden rounded-[1.8rem] border border-[#d7deea] bg-white shadow-[0_16px_36px_rgba(17,39,81,0.08)]">
              <img
                src={recruitmentPoster}
                alt="Reclutamiento Living Paradise"
                className="w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <RouteCard
              icon={<UsersIcon />}
              title="Formación estructurada"
              text="Desarrolla habilidades comerciales con una ruta clara de aprendizaje y acompañamiento."
              onClick={() => setActivePage("equipo")}
            />
            <RouteCard
              icon={<GrowthIcon />}
              title="Proyección interna"
              text="Crece dentro de un entorno orientado a resultados, ejecución y desarrollo profesional."
              onClick={() => setActivePage("equipo")}
            />
            <RouteCard
              icon={<ShieldIcon />}
              title="Marca con respaldo"
              text="Haz parte de una propuesta seria, organizada y enfocada en experiencia, bienestar y posicionamiento."
              onClick={() => setActivePage("nosotros")}
            />
          </div>
        </div>
      </section>

      <section className="border-b border-[#dde3ee] bg-white">
        <div className="mx-auto max-w-[1450px] px-6 py-12 lg:px-10">
          <div className="grid gap-10 overflow-hidden rounded-[1.8rem] border border-[#e3d4ba] bg-gradient-to-r from-[#fffaf2] via-white to-[#f8fbff] p-7 shadow-[0_14px_34px_rgba(17,39,81,0.06)] lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="inline-flex rounded-full bg-[#f4e7d0] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#8b6528]">
                Demostraciones en casa
              </div>
              <h2 className="heading-serif mt-5 max-w-[560px] text-[2.2rem] leading-tight text-[#1d2e55] md:text-[3rem]">
                También llevamos experiencias de cocina en casa a nuevas familias.
              </h2>
              <p className="mt-4 max-w-[560px] text-[1rem] leading-8 text-slate-600">
                Living Paradise desarrolla talleres y demostraciones de cocina en casa con una experiencia
                clara, elegante y bien guiada, pensada para conectar bienestar, atención profesional y
                cercanía con las familias.
              </p>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <PrimaryButton onClick={() => setActivePage("demostraciones")}>Ver demostraciones</PrimaryButton>
                <SecondaryButton onClick={() => setActivePage("contacto")}>Solicitar información</SecondaryButton>
              </div>
            </div>

            <div className="overflow-hidden rounded-[1.6rem] border border-[#d7deea] bg-white shadow-[0_14px_32px_rgba(17,39,81,0.08)]">
              <img
                src={heroDemo}
                alt="Demostración de cocina en casa con familia"
                className="h-[300px] w-full object-cover object-center md:h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#dde3ee] bg-[#f7f9fc]">
        <div className="mx-auto max-w-[1450px] px-6 py-12 lg:px-10">
          <div className="flex items-center justify-center gap-6">
            <div className="h-px flex-1 max-w-[110px] bg-[#d8b884]" />
            <h2 className="heading-serif text-[2rem] text-[#24395d] md:text-[2.25rem]">¿Qué encontrarás aquí?</h2>
            <div className="h-px flex-1 max-w-[110px] bg-[#d8b884]" />
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <StepCard
              number="1"
              title="Postulación clara"
              text="Nos compartes tu información y conocemos tu perfil para el proceso."
            />
            <StepCard
              number="2"
              title="Proceso guiado"
              text="Te mostramos la oportunidad, el enfoque de trabajo y el tipo de acompañamiento que ofrecemos."
            />
            <StepCard
              number="3"
              title="Ruta de crecimiento"
              text="Si encajas con el perfil, avanzas dentro de un entorno comercial con formación y proyección."
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1450px] px-6 py-14 lg:px-10">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#1263b8]">Sobre Living Paradise</p>
          <h2 className="heading-serif mt-4 text-[2.2rem] leading-tight text-[#1d2e55] md:text-[3rem]">
            Una marca enfocada en experiencia, crecimiento y presentación profesional.
          </h2>
          <p className="mt-5 max-w-4xl text-[1rem] leading-8 text-slate-600">
            Living Paradise, distribuidor autorizado de Royal Prestige en Colombia, desarrolla experiencias en
            el hogar y construye una operación comercial orientada a la formación, la ejecución y el
            crecimiento. La marca busca proyectar confianza, orden y una experiencia seria tanto para clientes
            como para nuevos integrantes del equipo.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {companyPillars.map((pillar) => (
            <div key={pillar.title} className="rounded-[1.35rem] border border-[#d7deea] bg-white p-7 shadow-sm">
              <div className="h-1 w-16 rounded-full bg-[#c9a15a]" />
              <h3 className="mt-4 text-lg font-semibold text-[#24395d]">{pillar.title}</h3>
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
      title="Agenda un taller de cocina en casa y vive una experiencia práctica, saludable y bien guiada."
      description="La experiencia está pensada para que conozcas una propuesta de cocina moderna en tu propio hogar, con una demostración clara, acompañamiento profesional y un momento agradable para compartir en familia."
    >
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-6">
          <div className="overflow-hidden rounded-[1.6rem] border border-[#d7deea] bg-white shadow-[0_12px_30px_rgba(17,39,81,0.08)]">
            <img
              src={heroDemo}
              alt="Demostración de cocina Living Paradise"
              className="h-[280px] w-full object-cover object-center md:h-[380px] lg:h-[460px]"
            />
          </div>

          <div className="rounded-[1.35rem] border border-[#e3d4ba] bg-[#fffaf2] p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#123d8c]">Qué incluye</p>
            <ul className="mt-4 grid gap-3 text-sm leading-7 text-slate-700">
              {demoBenefits.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 text-[#c9a15a]"><CheckIcon /></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-[1.6rem] border border-[#d7deea] bg-[#f7f9fc] p-6 shadow-sm md:p-8">
          <div className="inline-flex rounded-full bg-[#f4e7d0] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#8b6528]">
            Solicita tu demostración
          </div>
          <h3 className="mt-4 text-2xl font-semibold text-[#24395d]">Déjanos tus datos y coordinamos la visita</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            También puedes escribirnos por WhatsApp o correo si quieres avanzar de forma más directa.
          </p>

          <div className="mt-6 overflow-hidden rounded-[1.2rem] border border-[#d7deea] bg-white p-4">
            <div
              formId={demoFormId}
              portalId={hubspotPortalId}
              region={hubspotRegion}
              targetId="demo-form-target"
              className="min-h-[420px]"
            />
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
      title="Crece con nosotros y transforma tu futuro dentro de un entorno comercial serio, formativo y con proyección."
      description="Buscamos personas con propósito, enfoque y deseo de crecer. Si te interesa desarrollarte en el área comercial, aquí encontrarás acompañamiento, formación y una ruta clara de crecimiento."
    >
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-6">
          <div className="overflow-hidden rounded-[1.6rem] border border-[#d7deea] bg-white shadow-[0_12px_30px_rgba(17,39,81,0.08)]">
            <img
              src={recruitmentPoster}
              alt="Oficina Living Paradise y llamado de reclutamiento"
              className="w-full object-cover"
            />
          </div>

          <div className="rounded-[1.6rem] bg-[#0a2257] p-8 text-white shadow-[0_12px_30px_rgba(17,39,81,0.12)]">
            <p className="text-xs uppercase tracking-[0.28em] text-[#f0d2a1]">¿Qué ofrecemos?</p>
            <h2 className="heading-serif mt-4 text-[2rem] leading-tight">Formación, acompañamiento y proyección real.</h2>
            <ul className="mt-6 grid gap-3 text-sm leading-7 text-blue-50">
              {recruitmentBenefits.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 text-[#f0d2a1]"><CheckIcon /></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[1.35rem] border border-[#e3d4ba] bg-[#fffaf2] p-6 shadow-sm">
            <p className="text-xs uppercase tracking-[0.24em] text-[#8b6528]">Perfil que buscamos</p>
            <h3 className="mt-3 text-2xl font-semibold text-[#24395d]">Lo que más valoramos en los candidatos</h3>
            <ul className="mt-4 grid gap-3 text-sm leading-7 text-slate-700">
              {recruitmentProfile.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 text-[#c9a15a]"><CheckIcon /></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[1.35rem] border border-[#d7deea] bg-white p-6 shadow-sm">
            <div className="inline-flex rounded-full bg-[#f4e7d0] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#8b6528]">
              Postúlate aquí
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Completa el formulario y nuestro equipo revisará tu información para el proceso de reclutamiento.
            </p>
            <div className="mt-5 overflow-hidden rounded-[1.2rem] border border-[#d7deea] bg-white p-4">
              <div
                formId={recruitFormId}
                portalId={hubspotPortalId}
                region={hubspotRegion}
                targetId="recruit-form-target"
                className="min-h-[420px]"
              />
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
      title="Living Paradise es una marca enfocada en experiencias de cocina en casa con una propuesta seria, elegante y cercana."
      description="Nuestro objetivo es conectar bienestar, atención profesional y crecimiento comercial en una plataforma coherente y bien presentada."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {companyPillars.map((pillar) => (
          <div key={pillar.title} className="rounded-[1.35rem] border border-[#d7deea] bg-white p-7 shadow-sm">
            <div className="h-1 w-16 rounded-full bg-[#c9a15a]" />
            <h3 className="mt-4 text-lg font-semibold text-[#24395d]">{pillar.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{pillar.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-[1.6rem] border border-[#d7deea] bg-[#f7f9fc] p-8">
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
      description="Elige el canal según el tipo de solicitud y nuestro equipo te responderá de la forma más adecuada."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {corporateEmails.map((item) => {
          const href =
            item.title === "Teléfono"
              ? `tel:${item.email.replace(/\s+/g, "")}`
              : `mailto:${item.email}`;

          return (
            <a
              key={item.title}
              href={href}
              className="rounded-[1.35rem] border border-[#d7deea] bg-white p-6 text-sm text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-[#123d8c]"
            >
              <p className="text-xs uppercase tracking-[0.24em] text-[#1263b8]">{item.title}</p>
              <p className="mt-3 font-medium text-[#24395d]">{item.email}</p>
            </a>
          );
        })}
      </div>
    </PageShell>
  );

  const renderPrivacidad = () => (
    <PageShell
      eyebrow="Privacidad"
      title="Política de privacidad y tratamiento de datos"
      description="Este sitio recopila datos a través de formularios de demostraciones y reclutamiento. Aquí resumimos de forma clara cómo se usan esos datos."
    >
      <div className="rounded-[1.6rem] border border-[#d7deea] bg-white p-8 shadow-sm">
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
        <div className="mx-auto flex max-w-[1450px] flex-col gap-4 px-6 py-4 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <button type="button" onClick={() => setActivePage("inicio")} className="flex items-center gap-5 text-left">
            <img src={logo} alt="Living Paradise" className="h-[88px] w-auto object-contain md:h-[108px]" />
            <div className="hidden h-16 w-px bg-[#c9d1df] md:block" />
            <div>
              <p className="text-[1.6rem] font-medium tracking-[0.03em] text-slate-600 md:text-[2rem]">
                Healthy Modern Home
              </p>
            </div>
          </button>

          <nav className="flex flex-wrap gap-4 md:gap-7">
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
        <div className="mx-auto grid max-w-[1450px] gap-10 px-6 py-12 md:grid-cols-[1.05fr_0.9fr_0.9fr_0.7fr] lg:px-10">
          <div>
            <div className="inline-flex rounded-2xl bg-white px-5 py-4 shadow-sm">
              <img src={logo} alt="Living Paradise" className="h-16 w-auto object-contain" />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-7 text-blue-100">
              Experiencias de cocina en casa pensadas para conectar bienestar, atención profesional y una marca
              que inspira confianza.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#f0d2a1]">Enlaces rápidos</p>
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
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#f0d2a1]">Contacto</p>
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
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#f0d2a1]">Legal</p>
            <div className="mt-4 grid gap-3 text-sm text-blue-50">
              <button type="button" onClick={() => setActivePage("privacidad")} className="text-left hover:text-white">
                Política de privacidad
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto max-w-[1450px] px-6 py-5 text-sm text-blue-100 lg:px-10">
            © 2026 Living Paradise. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}

import { useMemo, useState, type ReactNode } from "react";

type PageId = "inicio" | "demostraciones" | "equipo" | "nosotros" | "contacto";

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
    "rounded-2xl bg-slate-900 px-6 py-3 text-center text-sm font-medium text-white shadow-lg shadow-slate-300 transition hover:-translate-y-0.5";

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
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
    "rounded-2xl border border-slate-300 bg-white px-6 py-3 text-center text-sm font-medium text-slate-700 transition hover:border-slate-900 hover:text-slate-900";

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
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
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-sky-700">
          {eyebrow}
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
          {title}
        </h1>
        <p className="mt-6 text-base leading-8 text-slate-600">{description}</p>
      </div>
      <div className="mt-12">{children}</div>
    </section>
  );
}

export default function App() {
  const [activePage, setActivePage] = useState<PageId>("inicio");

  const whatsappNumber = "573227133590";
  const whatsappMessage = encodeURIComponent(
    "Hola, quiero más información sobre Living Paradise."
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
    "gerencia@livingparadise.com.co",
    "info@livingparadise.com.co",
    "demostraciones@livingparadise.com.co",
    "contrataciones@livingparadise.com.co",
    "fernando.rodriguez@livingparadise.com.co",
    "facturacion@livingparadise.com.co",
  ];

  const demoBenefits = [
    {
      title: "Experiencia en casa",
      description:
        "Una visita guiada, clara y personalizada para mostrar valor real en un entorno cómodo y cercano.",
    },
    {
      title: "Atención profesional",
      description:
        "Comunicación directa, proceso organizado y seguimiento serio desde el primer contacto.",
    },
    {
      title: "Conversación real",
      description:
        "Menos discurso prefabricado y más experiencia práctica, preguntas resueltas y confianza.",
    },
  ];

  const recruitingPoints = [
    "Proyección de crecimiento comercial",
    "Acompañamiento y formación constante",
    "Entorno enfocado en actitud, disciplina y resultados",
    "Modelo orientado a desarrollo personal y profesional",
  ];

  const companyPillars = [
    {
      title: "Experiencia",
      text: "Diseñamos cada contacto para que la marca se sienta cercana, premium y confiable.",
    },
    {
      title: "Bienestar",
      text: "Promovemos una propuesta conectada con cocina, hogar y estilo de vida saludable.",
    },
    {
      title: "Ejecución",
      text: "No basta con verse bien. La operación debe ser clara, ordenada y orientada a resultados.",
    },
  ];

  const navButtonClass = (id: PageId) =>
    `rounded-full px-4 py-2 text-sm font-medium transition ${
      activePage === id
        ? "bg-slate-900 text-white"
        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
    }`;

  const renderInicio = () => (
    <>
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-sky-100 via-white to-slate-100">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-sky-700">
              Healthy Modern Home
            </p>
            <h1 className="max-w-2xl text-4xl font-semibold leading-tight md:text-6xl">
              Living Paradise convierte marca, experiencia y oportunidad en un solo ecosistema comercial.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Este sitio organiza las rutas clave del negocio: demostraciones, reclutamiento, información institucional y contacto corporativo.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <PrimaryButton onClick={() => setActivePage("demostraciones")}>
                Ir a demostraciones
              </PrimaryButton>
              <SecondaryButton onClick={() => setActivePage("equipo")}>
                Ver oportunidades
              </SecondaryButton>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-2xl shadow-slate-200">
              <p className="text-sm uppercase tracking-[0.25em] text-sky-300">
                Ruta 1
              </p>
              <h2 className="mt-3 text-2xl font-semibold">Demostraciones</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Página enfocada en captación de leads y agendamiento de experiencias en casa.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm uppercase tracking-[0.25em] text-sky-700">
                  Ruta 2
                </p>
                <h3 className="mt-3 text-xl font-semibold">Únete al equipo</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Espacio para reclutamiento, contrataciones y crecimiento comercial.
                </p>
              </div>
              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm uppercase tracking-[0.25em] text-sky-700">
                  Ruta 3
                </p>
                <h3 className="mt-3 text-xl font-semibold">Contacto</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Correos corporativos organizados para operar con claridad y confianza.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {companyPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm"
            >
              <h3 className="text-xl font-semibold">{pillar.title}</h3>
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
      title="Agenda una experiencia en casa enfocada en bienestar, confianza y atención personalizada."
      description="Esta página está diseñada para convertir visitas en conversaciones reales. El objetivo es simple: captar el lead, ordenar la agenda y facilitar el siguiente paso comercial."
    >
      <div className="grid gap-10 md:grid-cols-[1fr_1fr]">
        <div className="grid gap-4">
          {demoBenefits.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm md:p-8">
          <form className="grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Nombre completo
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-sky-700"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Celular
                <input
                  type="tel"
                  placeholder="Tu número"
                  className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-sky-700"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Ciudad
                <input
                  type="text"
                  placeholder="Tu ciudad"
                  className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-sky-700"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Barrio o zona
                <input
                  type="text"
                  placeholder="Tu ubicación"
                  className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-sky-700"
                />
              </label>
            </div>

            <label className="grid gap-2 text-sm font-medium text-slate-700">
              ¿Cuántas personas asistirían?
              <select className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-sky-700">
                <option>Selecciona una opción</option>
                <option>1 a 2 personas</option>
                <option>3 a 4 personas</option>
                <option>5 o más personas</option>
              </select>
            </label>

            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Horario preferido
              <select className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-sky-700">
                <option>Selecciona un horario</option>
                <option>Mañana</option>
                <option>Tarde</option>
                <option>Noche</option>
                <option>Flexible</option>
              </select>
            </label>

            <div className="flex flex-col gap-4 sm:flex-row">
              <PrimaryButton>Enviar solicitud</PrimaryButton>
              <SecondaryButton href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}>
                Prefiero WhatsApp
              </SecondaryButton>
            </div>
          </form>
        </div>
      </div>
    </PageShell>
  );

  const renderEquipo = () => (
    <PageShell
      eyebrow="Oportunidades"
      title="Construimos equipo con enfoque comercial, crecimiento y proyección."
      description="Aquí va la página de reclutamiento y contrataciones. Debe atraer perfiles con ambición, actitud y disposición para aprender."
    >
      <div className="grid gap-10 md:grid-cols-[1fr_0.9fr] md:items-start">
        <div className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-2xl shadow-slate-200">
          <p className="text-sm uppercase tracking-[0.25em] text-sky-300">
            Perfil que buscamos
          </p>
          <h2 className="mt-4 text-3xl font-semibold">
            Personas con mentalidad comercial y proyección de crecimiento.
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Buscamos perfiles con actitud, disciplina, habilidades de relacionamiento y deseo real de construir una carrera basada en resultados.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <PrimaryButton href="mailto:contrataciones@livingparadise.com.co">
              Enviar hoja de vida
            </PrimaryButton>
            <SecondaryButton href="mailto:contrataciones@livingparadise.com.co">
              Hablar con contrataciones
            </SecondaryButton>
          </div>
        </div>

        <div className="grid gap-4">
          {recruitingPoints.map((point) => (
            <div
              key={point}
              className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-base font-medium text-slate-800">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );

  const renderNosotros = () => (
    <PageShell
      eyebrow="Nosotros"
      title="Living Paradise es una marca enfocada en experiencia, orden comercial y percepción premium."
      description="La web institucional debe reforzar confianza. No solo mostrar una marca bonita. Debe transmitir que hay estructura, dirección y un estándar de atención claro."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {companyPillars.map((pillar) => (
          <div
            key={pillar.title}
            className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm"
          >
            <h3 className="text-xl font-semibold">{pillar.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{pillar.text}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );

  const renderContacto = () => (
    <PageShell
      eyebrow="Contacto"
      title="Canales corporativos claros para operar, responder y escalar mejor."
      description="Cada correo cumple una función específica. Eso transmite orden interno, mejora la atención y evita que todo termine rebotando en un solo inbox."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {corporateEmails.map((email) => (
          <a
            key={email}
            href={`mailto:${email}`}
            className="rounded-[1.75rem] border border-slate-200 bg-white p-6 text-sm font-medium text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-900 hover:text-slate-900"
          >
            {email}
          </a>
        ))}
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
      default:
        return renderInicio();
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xl font-semibold tracking-wide">Living Paradise</p>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
              healthy modern home
            </p>
          </div>
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

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-sky-300">
            livingparadise.com.co
          </p>
          <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
            Una web con rutas claras para vender, reclutar y construir marca.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-slate-300 md:text-base">
            Ya tienes una base seria para que Living Paradise tenga presencia real y no solo buenas intenciones digitales.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <PrimaryButton onClick={() => setActivePage("demostraciones")}>
              Ver demostraciones
            </PrimaryButton>
            <SecondaryButton onClick={() => setActivePage("equipo")}>
              Ver reclutamiento
            </SecondaryButton>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Living Paradise. Todos los derechos reservados.</p>
          <p>livingparadise.com.co</p>
        </div>
      </footer>
    </div>
  );
}

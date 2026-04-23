import { useMemo, useState, type ReactNode } from "react";
import logo from "./assets/logo-living-paradise.png";

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
      <p className="text-sm font-medium uppercase tracking-[0.25em] text-sky-700">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold md:text-4xl">{title}</h2>
      {description ? <p className="mt-5 text-base leading-8 text-slate-600">{description}</p> : null}
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
    "Hola, quiero conocer las oportunidades de reclutamiento de Living Paradise."
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
    { title: "Información general", email: "info@livingparadise.com.co" },
    { title: "Demostraciones", email: "demostraciones@livingparadise.com.co" },
    { title: "Contrataciones", email: "contrataciones@livingparadise.com.co" },
    { title: "Gerencia", email: "gerencia@livingparadise.com.co" },
    { title: "Facturación", email: "facturacion@livingparadise.com.co" },
    { title: "Contacto directo", email: "fernando.rodriguez@livingparadise.com.co" },
  ];

  const homeRoutes = [
    {
      eyebrow: "Demostraciones",
      title: "Agenda una experiencia de cocina en casa",
      text: "Conoce una propuesta práctica, saludable y guiada directamente en tu hogar.",
      cta: "Solicitar demostración",
      page: "demostraciones" as const,
    },
    {
      eyebrow: "Oportunidades",
      title: "Únete a un proyecto con crecimiento comercial",
      text: "Descubre el perfil que buscamos, cómo trabajamos y cómo iniciar tu proceso.",
      cta: "Ver reclutamiento",
      page: "equipo" as const,
    },
    {
      eyebrow: "Marca",
      title: "Conoce la visión de Living Paradise",
      text: "Explora una marca enfocada en experiencia, bienestar y presencia institucional.",
      cta: "Ver la marca",
      page: "nosotros" as const,
    },
  ];

  const customerSteps = [
    {
      title: "Solicita tu demostración",
      text: "Déjanos tus datos o escríbenos por WhatsApp para coordinar una fecha.",
    },
    {
      title: "Confirmamos la visita",
      text: "Definimos horario, ubicación y cantidad de asistentes para organizar la experiencia.",
    },
    {
      title: "Vive la experiencia en casa",
      text: "Conoces la propuesta de cocina en un entorno real, resolviendo dudas de forma práctica.",
    },
  ];

  const demoBenefits = [
    {
      title: "Demostración en tu hogar",
      description:
        "La experiencia ocurre en casa, lo que permite ver de forma real cómo se integra a la rutina diaria.",
    },
    {
      title: "Enfoque en cocina saludable",
      description:
        "La presentación está orientada a hábitos más prácticos y saludables, sin perder comodidad ni experiencia.",
    },
    {
      title: "Atención personalizada",
      description:
        "Cada visita se coordina con claridad para brindar una atención ordenada, cercana y profesional.",
    },
  ];

  const recruitmentBenefits = [
    "Proyección de crecimiento comercial y desarrollo personal.",
    "Capacitación y acompañamiento para fortalecer habilidades comerciales.",
    "Cultura orientada a actitud, disciplina y ejecución.",
    "Ambiente para personas que quieren construir resultados, no solo buscar empleo pasajero.",
  ];

  const recruitmentProfile = [
    "Buena actitud y facilidad para relacionarse con personas.",
    "Interés por el aprendizaje comercial y el desarrollo personal.",
    "Disciplina, constancia y enfoque en resultados.",
    "Disponibilidad para trabajar con metas, seguimiento y formación continua.",
  ];

  const companyPillars = [
    {
      title: "Experiencia",
      text: "Buscamos que cada contacto con la marca transmita cercanía, orden y confianza.",
    },
    {
      title: "Bienestar",
      text: "Promovemos una visión del hogar conectada con cocina práctica, hábitos saludables y estilo de vida moderno.",
    },
    {
      title: "Desarrollo",
      text: "Trabajamos para construir una operación comercial sólida y una marca con proyección a largo plazo.",
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
      <section className="relative overflow-hidden border-b border-slate-200 bg-[radial-gradient(circle_at_top_left,_rgba(191,219,254,0.65),_transparent_32%),linear-gradient(135deg,#eff6ff_0%,#ffffff_46%,#f8fafc_100%)]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-24">
          <div>
            <div className="inline-flex rounded-[2rem] border border-slate-200 bg-white px-5 py-4 shadow-sm">
              <img src={logo} alt="Living Paradise" className="h-20 w-auto object-contain md:h-24" />
            </div>
            <p className="mt-8 text-sm font-medium uppercase tracking-[0.28em] text-sky-700">
              Healthy modern home · demostraciones · crecimiento
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
              Demostraciones de cocina en casa y oportunidades de crecimiento con una marca seria.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Living Paradise conecta tres frentes clave: experiencias de cocina en casa, reclutamiento comercial y presencia institucional. Aquí cada visitante encuentra rápido qué hacemos y cuál es el siguiente paso.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <PrimaryButton onClick={() => setActivePage("demostraciones")}>
                Solicitar demostración
              </PrimaryButton>
              <SecondaryButton onClick={() => setActivePage("equipo")}>
                Ver oportunidades
              </SecondaryButton>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.5rem] border border-slate-200 bg-white/85 p-4 backdrop-blur">
                <p className="text-2xl font-semibold text-slate-900">En casa</p>
                <p className="mt-1 text-sm text-slate-600">Demostración guiada y clara</p>
              </div>
              <div className="rounded-[1.5rem] border border-slate-200 bg-white/85 p-4 backdrop-blur">
                <p className="text-2xl font-semibold text-slate-900">Profesional</p>
                <p className="mt-1 text-sm text-slate-600">Atención organizada y seria</p>
              </div>
              <div className="rounded-[1.5rem] border border-slate-200 bg-white/85 p-4 backdrop-blur">
                <p className="text-2xl font-semibold text-slate-900">Crecimiento</p>
                <p className="mt-1 text-sm text-slate-600">Oportunidades y marca</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[2.2rem] bg-slate-900 p-8 text-white shadow-2xl shadow-slate-200">
              <p className="text-sm uppercase tracking-[0.28em] text-sky-300">Cómo usar este sitio</p>
              <h2 className="mt-4 text-3xl font-semibold">Elige la ruta que mejor encaja con lo que estás buscando.</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Si quieres conocer una experiencia de cocina en casa, ve a Demostraciones. Si buscas crecimiento comercial, entra a Reclutamiento. Si quieres entender la marca, visita Nosotros.
              </p>
              <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-medium uppercase tracking-[0.22em] text-sky-300">
                  Rutas principales
                </p>
                <div className="mt-4 grid gap-3">
                  {homeRoutes.map((item) => (
                    <button
                      key={item.title}
                      type="button"
                      onClick={() => setActivePage(item.page)}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4 text-left transition hover:bg-white/10"
                    >
                      <p className="text-xs uppercase tracking-[0.24em] text-sky-300">{item.eyebrow}</p>
                      <p className="mt-2 text-lg font-semibold">{item.title}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{item.text}</p>
                      <p className="mt-3 text-sm font-medium text-white">{item.cta} →</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="Por qué Living Paradise"
          title="Información más clara para el cliente y una marca mejor presentada."
          description="La home ya no debe sonar bonita pero confusa. Debe explicar rápido qué ofrecemos, para quién es y por dónde avanzar."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {companyPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm"
            >
              <p className="text-sm uppercase tracking-[0.24em] text-sky-700">{pillar.title}</p>
              <h3 className="mt-3 text-2xl font-semibold">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{pillar.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            eyebrow="Proceso para clientes"
            title="Así funciona una demostración de cocina en casa."
            description="La gente no necesita discursos largos. Necesita entender el proceso, sentirse tranquila y saber qué esperar."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {customerSteps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 shadow-sm"
              >
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-sky-700">Paso {index + 1}</p>
                <h3 className="mt-3 text-2xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );

  const renderDemostraciones = () => (
    <PageShell
      eyebrow="Demostraciones"
      title="Conoce una experiencia de cocina en casa de forma clara, práctica y personalizada."
      description="Esta página debe responder tres preguntas sin rodeos: qué es la demostración, cómo se agenda y por qué vale la pena vivirla."
    >
      <div className="grid gap-10 md:grid-cols-[1fr_1fr]">
        <div>
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

          <div className="mt-6 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-sky-700">Qué incluye</p>
            <ul className="mt-4 grid gap-3 text-sm leading-7 text-slate-600">
              <li>• Coordinación previa de fecha, horario y lugar.</li>
              <li>• Presentación guiada enfocada en cocina en casa.</li>
              <li>• Espacio para resolver dudas y conocer la experiencia de forma real.</li>
            </ul>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm md:p-8">
          <h3 className="text-2xl font-semibold text-slate-900">Solicita tu demostración</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Déjanos tus datos para coordinar una visita. Si prefieres ir más rápido, también puedes escribir por WhatsApp.
          </p>
          <form className="mt-6 grid gap-5">
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
              <SecondaryButton href={`https://wa.me/${whatsappNumber}?text=${demoWhatsappMessage}`}>
                Escribir por WhatsApp
              </SecondaryButton>
            </div>
          </form>
        </div>
      </div>
    </PageShell>
  );

  const renderEquipo = () => (
    <PageShell
      eyebrow="Únete al equipo"
      title="Una oportunidad para personas con actitud comercial, disciplina y ganas de crecer."
      description="La página de reclutamiento debe ser directa: a quién buscamos, qué ofrecemos y cómo aplicar. Nada de dejar al candidato adivinando."
    >
      <div className="grid gap-10 md:grid-cols-[1fr_1fr]">
        <div className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-2xl shadow-slate-200">
          <p className="text-sm uppercase tracking-[0.25em] text-sky-300">Qué ofrecemos</p>
          <h2 className="mt-4 text-3xl font-semibold">Un entorno de formación, acompañamiento y proyección.</h2>
          <ul className="mt-6 grid gap-3 text-sm leading-7 text-slate-300">
            {recruitmentBenefits.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <PrimaryButton href="mailto:contrataciones@livingparadise.com.co">
              Enviar hoja de vida
            </PrimaryButton>
            <SecondaryButton href={`https://wa.me/${whatsappNumber}?text=${recruitWhatsappMessage}`}>
              Hablar por WhatsApp
            </SecondaryButton>
          </div>
        </div>

        <div>
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm uppercase tracking-[0.24em] text-sky-700">Perfil buscado</p>
            <h3 className="mt-3 text-2xl font-semibold">Esto es lo que valoramos en los candidatos.</h3>
            <ul className="mt-4 grid gap-3 text-sm leading-7 text-slate-600">
              {recruitmentProfile.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-sky-700">Proceso de aplicación</p>
            <ul className="mt-4 grid gap-3 text-sm leading-7 text-slate-600">
              <li>• Envías tu hoja de vida o tu interés por correo o WhatsApp.</li>
              <li>• El equipo revisa tu perfil y coordina contacto inicial.</li>
              <li>• Si avanzas, recibes información del proceso y siguientes pasos.</li>
            </ul>
          </div>
        </div>
      </div>
    </PageShell>
  );

  const renderNosotros = () => (
    <PageShell
      eyebrow="Nosotros"
      title="Living Paradise es una marca que busca unir experiencia, bienestar y crecimiento comercial."
      description="Nuestra presencia institucional debe transmitir claridad, confianza y una dirección de marca consistente."
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
      <div className="mt-10 rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
        <h3 className="text-2xl font-semibold">Qué queremos proyectar</h3>
        <p className="mt-4 text-sm leading-7 text-slate-600">
          Una marca profesional, organizada y cercana, que cuida tanto la experiencia del cliente como la proyección de su equipo. La web debe reflejar exactamente eso.
        </p>
      </div>
    </PageShell>
  );

  const renderContacto = () => (
    <PageShell
      eyebrow="Contacto"
      title="Canales claros para responder mejor y operar con más orden."
      description="Cada correo tiene una función. Eso mejora la atención, transmite estructura y evita el caos operativo de meter todo en una sola bandeja."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {corporateEmails.map((item) => (
          <a
            key={item.email}
            href={`mailto:${item.email}`}
            className="rounded-[1.75rem] border border-slate-200 bg-white p-6 text-sm text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-900"
          >
            <p className="text-xs uppercase tracking-[0.24em] text-sky-700">{item.title}</p>
            <p className="mt-3 font-medium text-slate-900">{item.email}</p>
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
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 lg:flex-row lg:items-center lg:justify-between">
          <button type="button" onClick={() => setActivePage("inicio")} className="flex items-center gap-4 text-left">
            <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
              <img src={logo} alt="Living Paradise" className="h-14 w-auto object-contain md:h-16" />
            </div>
            <div>
              <p className="text-base font-semibold text-slate-900">Living Paradise</p>
              <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Healthy modern home</p>
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

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-sky-300">livingparadise.com.co</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
            Una base más clara para vender, reclutar y construir marca.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-slate-300 md:text-base">
            Ya no estamos solo maquillando la web. Estamos organizando el mensaje y la estructura para que funcione de verdad como activo comercial e institucional.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <PrimaryButton onClick={() => setActivePage("demostraciones")}>Ver demostraciones</PrimaryButton>
            <SecondaryButton onClick={() => setActivePage("equipo")}>Ver reclutamiento</SecondaryButton>
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

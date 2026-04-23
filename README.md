# Living Paradise Web

Proyecto base en React + Vite para publicar el sitio de Living Paradise.

## Cómo ejecutar localmente

```bash
npm install
npm run dev
```

## Cómo publicar en Vercel

1. Sube esta carpeta a un repositorio de GitHub.
2. Entra a Vercel y elige **Add New Project**.
3. Importa el repositorio.
4. Vercel detectará Vite automáticamente.
5. Haz deploy.
6. En **Settings > Domains**, agrega:
   - `livingparadise.com.co`
   - `www.livingparadise.com.co`

## DNS en Spaceship

No borres tus registros de correo. Solo agrega los registros que Vercel te pida para la web.
Revisa especialmente que sigan intactos:
- MX
- SPF
- DKIM
- DMARC

## Pendientes recomendados

- Conectar el formulario de demostraciones a Formspree, Basin, Google Sheets o un CRM.
- Sustituir textos provisionales por copy final de marca.
- Agregar imágenes y logo oficial.
- Añadir favicon y metadatos sociales.


## Corrección aplicada

Se añadió el plugin oficial `@tailwindcss/vite` para que Tailwind cargue correctamente en Vite. Sin ese plugin, la web puede verse como texto plano sin estilos, que fue exactamente lo que pasó.


## Mejora visual aplicada

- Se integró el logo oficial de Living Paradise en el header y en el hero.
- Se rediseñó la home con enfoque A+B: premium elegante + aspiracional hogar.
- Se reforzaron las tres prioridades de negocio: demostraciones, reclutamiento y marca institucional.

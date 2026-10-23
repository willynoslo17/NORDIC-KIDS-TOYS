# CURSOR-PENDIENTES — ludispel-no

Auditoría 2026-10-23 en la rama `cursor/ludispel-no-auditoria-2026-10`. Nada de esto está fusionado ni desplegado. No se ha borrado ningún producto ni ningún archivo existente.

## Hecho en esta rama

- Textos visibles al cliente en `personvern.html`, `frakt-og-levering.html` y `slik-handler-du.html`: ya no nombran a los proveedores de cumplimiento (se mantienen los plazos y los lugares que esas páginas ya publicaban).
- En `supplier-bridge.js` la ficha sigue saliendo con marca Ludispel. Se quitó la etiqueta de nombres de proveedor que no se pintaba, y el respaldo que metía el nombre comercial en el objeto antes de normalizarlo.
- `docs/ordrebekreftelse-mal.md`: plantilla en bokmål con enlaces a `https://ludispel.no/kjopsvilkar.html`, `https://ludispel.no/angrerett.html` y `https://ludispel.no/angreskjema.html`. Solo el archivo.
- `docs/voec-mva-sjekkliste.md`: checklist sin cifras nuevas.
- Enlaces internos de los `.html`: revisión por script, 21 páginas, ninguno roto (el destino existe como archivo, como `ruta.html` o como `ruta/index.html`).
- `index.html` en Chrome (estático local): 30 tarjetas, sin excepciones JavaScript y sin nombres de proveedor en el texto. En la consola solo aparecen dos 404 de red, `/api/cj-products` y `/api/newsletter`, porque este entorno no ejecuta Pages Functions. En Cloudflare esas rutas existen; no se tocó `functions/`. El catálogo local de respaldo sí se pinta.
- No hay menciones de la app de mensajería prohibida en el repo.
- No hay secretos `sk_live_` / `sk_test_` / `ghp_` / `EAA` pegados en el código.
- `functions/api/create-checkout-session.ts` no se ha modificado. La comprobación `startsWith("sk_live_")` sigue igual. `CHECKOUT_ENABLED` sigue en `false`.

## Por confirmar (no hecho)

- **Rentabilidad y certificación de productos.** `catalog/selected-products.json` (30 filas) y `catalog/cj-products.json` (1 fila) solo tienen `id`, `sku`, `name`, `category`, `supplier`, `image`, `priceNok`. No hay coste ni campo de certificación. No se puede saber si son rentables o si tienen certificación clara. No se ocultó ni se borró ninguno. El flag de ocultar queda **por confirmar**.
- **Títulos que no parecen de la tienda infantil**, sin ocultar: `CJWJWJMR01035` («Voice toys plush chew dog toys») y `CJMR1028991` («Animal Skin Toys Pet Sounding Plush Toys»). Si deben salir del escaparate: **por confirmar**.
- **Campo `supplier` en el JSON público de `catalog/`** y las URLs de imagen (el host lleva el dominio del proveedor). La ficha no pinta ese campo; la marca forzada es Ludispel. No se cambiaron las URLs: las imágenes las pone el dueño. Quitar el campo o sustituir las fotos: **por confirmar**.
- **`supplier-config.json` y `README.md`.** Siguen nombrando proveedores en notas internas / documentación de repo. No se muestran en la tienda. `README.md` aún dice el proyecto Pages `NORDIC-KIDS-TOYS` y «ML Internasjonal». No se tocó el nombre del proyecto ni el README. **por confirmar** si esa documentación debe reescribirse.
- **Personvern y encargados del tratamiento.** Los nombres de cumplimiento se quitaron del HTML público por la regla de la categoría. Si la declaración debe volver a identificarlos por su nombre legal: **por confirmar**. No se inventó un encargado nuevo. Cloudflare, Stripe y Brevo siguen nombrados, como ya estaban (no están en la lista de proveedores de catálogo que hay que ocultar).
- **Qué socios de producción están activos.** En `supplier-config.json`, printify / gelato / printful están en `enabled: false` y el escaparate solo pide el catálogo principal. Las páginas de envío siguen describiendo «trykk på bestilling» y «leverandørlager» con los plazos que ya había. Si ese texto debe quedar solo en almacén: **por confirmar**.
- **Stripe en modo prueba.** Cambiar la comprobación `sk_live_` a modo prueba: **por confirmar**. No se hizo. No se pegó ninguna clave.
- **VOEC.** Número, si la orden aplica a este ENK, umbrales, plazos de reporte y si el 25 % vale para todas las categorías: **por confirmar**. Detalle en `docs/voec-mva-sjekkliste.md`.
- **Plantilla de pedido y Make.** El archivo existe y no está conectado. El escenario Make principal y su ruta propia: **por confirmar**. No se envió ningún correo.
- **Despliegue.** No hay workflow ni `wrangler.toml`. Existe `netlify.toml` (no tocado). Nombre del proyecto Cloudflare Pages y si el alta es integración Git o subida directa: **por confirmar**. No se desplegó.
- **PR #3** (`cursor/ludispel-pe-lima-45ea`, canal `/pe/`): no fusionado, no cerrado, no duplicado. Esta rama sale de `main`.

## Bloqueado / fuera de esta pasada

- No publicar, no fusionar, no cambiar DNS, no desplegar a mano.
- No crear ni descargar imágenes. SuperGrok: ninguno (el prompt lo da por verificado el 2026-10-22).
- No renombrar el repo.
- No tocar `netlify.toml`, `_redirects` ni `functions/`.

## Verificación local (2026-10-23, continuación en local tras corte del agente)

- Enlaces internos de todos los `.html`: comprobados con script, 0 rotos.
- `index.html` cargado en Chrome headless con servidor estático: sin errores de JavaScript. Solo 404 de `/api/cj-products` y `/api/newsletter` (Pages Functions, no existen en un servidor estático local; esperado).
- `node --check` en los `.js` de la raíz: OK. No hay `package.json` ni build.
- Búsqueda de claves `sk_live_`/`sk_test_`/`ghp_`/`EAA`: vacía. `create-checkout-session.ts` sin cambios respecto a `main`.

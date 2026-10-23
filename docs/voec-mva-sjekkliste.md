# Sjekkliste VOEC / MVA — Ludispel

Intern sjekkliste. Ingen betalingsoppsett er endret. Ingen tall er lagt inn utover det som allerede står på nettstedet. Det som ikke kan bekreftes fra repoet står som **por confirmar**.

Butikken oppgir allerede, blant annet i `kjopsvilkar.html` og `personvern.html`:

- Selger: MARTINEZ LOZANO INTERNASJONAL HANDEL, norsk enkeltpersonforetak (ENK).
- Org.nr 935 407 095 MVA, og teksten sier at foretaket er registrert i Merverdiavgiftsregisteret.
- Forretningsadresse: Norbygata 19, 0187 Oslo, Norge.
- Priser i NOK er oppgitt som inkludert 25 % MVA.
- Frakt i Norge er oppgitt som 79 kr per ordre, inkl. MVA. EU/EØS er oppgitt som €7,90.
- Totalpris inkludert MVA og frakt skal vises i kassen før betaling.

Disse punktene er sitater fra sidene som finnes. De er ikke en ny bekreftelse mot Brønnøysund eller Skatteetaten.

## Sjekkliste

1. **Registrering i Merverdiavgiftsregisteret.** Teksten på nettstedet sier at ENK-et er registrert. At oppføringen fortsatt er riktig i registeret: **por confirmar**.
2. **VOEC-nummer.** Det finnes ikke i repoet. Ikke finn på et nummer. Status og eventuelt nummer: **por confirmar**.
3. **Om VOEC i det hele tatt gjelder.** Nettstedet beskriver et norsk ENK som allerede står i MVA-registeret. VOEC brukes normalt av utenlandske selgere. Om Ludispel i tillegg skal være i VOEC-ordningen: **por confirmar**. Ikke endre kassen på grunn av denne sjekklisten.
4. **Sats.** Sidene sier 25 % MVA på priser i NOK. Om noen varegrupper skal ha en annen sats: **por confirmar**. Ikke endre priser.
5. **At hver `priceNok` i `catalog/` faktisk er inkl. 25 % MVA.** Prisregelen i koden er ikke det samme som en kontroll av hvert produkt. **por confirmar**.
6. **MVA-spesifikasjon på ordrebekreftelse og bilag.** Malen `docs/ordrebekreftelse-mal.md` har plassholdere og ingen beløp. Hvordan MVA-grunnlag, sats og beløp skal stå på den ekte bekreftelsen og i regnskapet: **por confirmar**. Ikke koble malen til Make i denne endringen.
7. **Terskel, rapporteringsperiode og innlevering for VOEC.** Ingen tall er lagt inn. Gjeldende terskel og frister: **por confirmar**.
8. **Salg til EU/EØS og land utenfor Norge.** Sidene sier at mottakerlandet kan kreve toll, merverdiavgift eller gebyrer, og at det kan falle på kjøper. Om det stemmer for hvert land butikken faktisk sender til: **por confirmar**.
9. **Stripe og MVA.** Kassen er ikke endret. Kontrollen som krever en nøkkel som starter med `sk_live_` er urørt. Om MVA skal beregnes i Stripe eller bare vises som i dagens tekster: **por confirmar**. Ikke legg inn nøkler.
10. **Fakturaadresse og org.nr på kvitteringen.** Bruk bare selgeropplysningene som allerede står i kjøpsvilkårene. Ikke legg til et annet org.nr, VOEC-nummer eller en påstand om hvor eieren bor.

## Ikke gjort

- Ingen endring av betaling, Stripe, `functions/` eller `netlify.toml`.
- Ingen e-post sendt.
- Ingen nye priser, satser eller terskler.

# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: i18n.spec.ts >> i18n completeness tests >> text at 320px width does not overflow
- Location: tests/i18n.spec.ts:80:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('button[data-lang="it"]').first()
    - locator resolved to <button data-lang="it" class="block w-full text-left px-4 py-2 text-sm hover:bg-accent ">🇮🇹 Italiano</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
      - waiting 100ms
    57 × waiting for element to be visible, enabled and stable
       - element is not visible
     - retrying click action
       - waiting 500ms

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e4]:
      - generic [ref=e5]:
        - generic [ref=e6]: 💰
        - generic [ref=e7]: Where does Ticino money go
      - generic [ref=e8]:
        - button "Menu" [ref=e9] [cursor=pointer]
        - button "Change language" [ref=e13] [cursor=pointer]:
          - generic [ref=e16]: EN
        - button "Toggle theme" [ref=e17] [cursor=pointer]
  - main [ref=e20]:
    - generic [ref=e23]:
      - generic [ref=e24]:
        - generic [ref=e25]: 📊
        - generic [ref=e26]: Official data updated October 3, 2026
      - heading "Where does Ticino money go?" [level=1] [ref=e27]
      - paragraph [ref=e28]: Full transparency on cantonal finances. Every figure verified, every source cited, every number traceable.
      - generic [ref=e29]:
        - generic [ref=e30]:
          - generic [ref=e31]: 2025 Result
          - generic [ref=e35]: "-32M"
          - generic [ref=e36]: Actual deficit (C2025)
        - generic [ref=e37]:
          - generic [ref=e38]: 2025 Debt
          - generic [ref=e42]: 3.056 Bn
          - generic [ref=e43]: CHF +51M vs 2024
        - generic [ref=e44]:
          - generic [ref=e45]: 2025 Spending
          - generic [ref=e49]: 4.583 Bn
          - generic [ref=e50]: Actual spending (C2025)
    - generic [ref=e53]:
      - generic [ref=e54]:
        - heading [level=2] [ref=e55]:
          - text: La situazione finanziaria
          - button "Condividi" [ref=e56] [cursor=pointer]
        - paragraph [ref=e60]: "Il Canton Ticino affronta sfide finanziarie significative: un deficit in crescita, un debito pubblico che supererà i 3 miliardi di franchi e premi di cassa malattia tra i più alti della Svizzera. Questo sito rende accessibili e comprensibili i dati finanziari ufficiali del Cantone."
      - generic [ref=e65]:
        - generic [ref=e66]: Dati verificati e tracciabili
        - generic [ref=e67]: Ogni numero proviene da fonti ufficiali del Canton Ticino e della Confederazione Svizzera. Tutte le cifre sono state verificate matematicamente con test automatici.
    - generic [ref=e69]:
      - generic [ref=e70]:
        - heading [level=2] [ref=e71]:
          - text: Where does the money go?
          - button "Condividi" [ref=e72] [cursor=pointer]
        - paragraph [ref=e76]: Explore interactive visualizations to understand how the 4.7 billion franc cantonal budget is spent
      - generic [ref=e77]:
        - heading "2027 Spending by function" [level=3] [ref=e79]
        - generic [ref=e80]: Tocca per i dettagli
        - img [ref=e81]:
          - generic [ref=e82] [cursor=pointer]: Social welfare
          - generic [ref=e85] [cursor=pointer]: Education
          - generic [ref=e88] [cursor=pointer]: Public health
          - generic [ref=e91] [cursor=pointer]: Finance and taxes
          - generic [ref=e94] [cursor=pointer]: Generaladministration
          - generic [ref=e97] [cursor=pointer]: Public order,security and
          - generic [ref=e100] [cursor=pointer]: Transportand
          - generic [ref=e103] [cursor=pointer]
          - generic [ref=e105] [cursor=pointer]
          - generic [ref=e107] [cursor=pointer]
      - generic [ref=e109]:
        - generic [ref=e110]:
          - heading "Cantonal public debt" [level=3] [ref=e111]
          - img [ref=e112]:
            - generic [ref=e113]:
              - generic [ref=e114]:
                - generic [ref=e116]: "2023"
                - generic [ref=e118]: "2024"
                - generic [ref=e120]: "2025"
                - generic [ref=e122]: "2026"
                - generic [ref=e124]: "2027"
              - generic [ref=e126]:
                - generic [ref=e127]: 0.00 CHF
                - generic [ref=e129]: 1.00 CHF
                - generic [ref=e131]: 2.00 CHF
                - generic [ref=e133]: 3.00 CHF
              - generic [ref=e136] [cursor=pointer]
              - generic [ref=e137] [cursor=pointer]
              - generic [ref=e138] [cursor=pointer]
              - generic [ref=e139] [cursor=pointer]
              - generic [ref=e140] [cursor=pointer]
        - generic [ref=e141]:
          - heading "Annual deficit" [level=3] [ref=e142]
          - img [ref=e143]:
            - generic [ref=e144]:
              - generic [ref=e145]:
                - generic [ref=e147]: "2023"
                - generic [ref=e149]: "2024"
                - generic [ref=e151]: "2025"
                - generic [ref=e153]: "2026"
                - generic [ref=e155]: "2027"
              - generic [ref=e157]:
                - generic [ref=e158]: 0 M
                - generic [ref=e160]: 50 M
                - generic [ref=e162]: 100 M
              - generic [ref=e165] [cursor=pointer]
              - generic [ref=e166] [cursor=pointer]
              - generic [ref=e167] [cursor=pointer]
              - generic [ref=e168] [cursor=pointer]
              - generic [ref=e169] [cursor=pointer]
      - generic [ref=e170]:
        - heading "2025-2027 Comparison" [level=3] [ref=e171]
        - generic [ref=e172]: Evoluzione delle principali voci di bilancio
        - table [ref=e174]:
          - rowgroup [ref=e175]:
            - row [ref=e176]:
              - columnheader "Voce" [ref=e177]
              - columnheader "2025" [ref=e178]
              - columnheader "2027" [ref=e179]
              - columnheader "Δ%" [ref=e180]
          - rowgroup [ref=e181]:
            - row [ref=e182]:
              - cell "Cantonal contributions" [ref=e183]
              - cell "318" [ref=e184]
              - cell "332" [ref=e185]
              - cell "↑ 4.4%" [ref=e186]
            - row [ref=e187]:
              - cell "Average premium TI" [ref=e188]
              - cell "491" [ref=e189]
              - cell "520" [ref=e190]
              - cell "↑ 5.9%" [ref=e191]
            - row [ref=e192]:
              - cell "Average premium CH" [ref=e193]
              - cell "390" [ref=e194]
              - cell "412" [ref=e195]
              - cell "↑ 5.6%" [ref=e196]
        - generic [ref=e197]:
          - generic [ref=e198]: ↑ Aumento
          - generic [ref=e199]: ↓ Diminuzione
          - generic [ref=e200]: → Stabile
      - generic [ref=e202]:
        - heading "2027 Budget - Overview" [level=3] [ref=e203]
        - img [ref=e204]:
          - generic [ref=e205]:
            - generic [ref=e208]:
              - generic [ref=e209]: 0.0Mia
              - generic [ref=e211]: 1.0Mia
              - generic [ref=e213]: 2.0Mia
              - generic [ref=e215]: 3.0Mia
              - generic [ref=e217]: 4.0Mia
            - generic [ref=e219] [cursor=pointer]
            - generic [ref=e220] [cursor=pointer]
            - generic [ref=e221] [cursor=pointer]
            - generic [ref=e222]: Current
            - generic [ref=e223]: expenditure
            - generic [ref=e224]: Current
            - generic [ref=e225]: revenue
            - generic [ref=e226]: Investments
    - generic [ref=e230]:
      - generic [ref=e231]:
        - heading "Stato dei dati" [level=2] [ref=e232]
        - paragraph [ref=e233]: Panoramica completa dei dati disponibili e delle limitazioni
      - generic [ref=e234]:
        - generic [ref=e235]:
          - generic [ref=e236]: Disponibili
          - list [ref=e240]:
            - listitem [ref=e241]: ✓ Consuntivo 2025 (effettivo)
            - listitem [ref=e242]: ✓ Preventivo 2026 (in corso)
            - listitem [ref=e243]: ✓ Serie storiche verificate
            - listitem [ref=e244]: ✓ Dati popolazione
            - listitem [ref=e245]: ✓ Premi e contributi sanità
        - generic [ref=e246]:
          - generic [ref=e247]: Mancanti
          - list [ref=e251]:
            - listitem [ref=e252]: ⏳ Consuntivi 2024, 2026
            - listitem [ref=e253]: ⏳ Spese per dipartimento
            - listitem [ref=e254]: ⏳ Serie storiche pre-2023
      - generic [ref=e255]:
        - link "Metodologia completa" [ref=e256] [cursor=pointer]:
          - /url: ./metodologia.html
        - link "Codice sorgente" [ref=e260] [cursor=pointer]:
          - /url: https://github.com/tiero/dove-vanno-soldi-ticino
    - generic [ref=e266]:
      - generic [ref=e267]:
        - heading [level=2] [ref=e268]:
          - text: "💰 Amministrazione: dove vanno i soldi?"
          - button "Condividi" [ref=e269] [cursor=pointer]
        - paragraph [ref=e273]: "Breakdown economico dettagliato: stipendi, consulenze, IT, locazioni, energia e altri costi di funzionamento."
        - generic [ref=e274]:
          - paragraph [ref=e275]: 📊 Classificazione per natura economica (MCA2)
          - paragraph [ref=e276]: Il Modello Contabile Armonizzato 2 classifica le spese per TIPO di costo (personale, beni, servizi) invece che per FUNZIONE (salute, educazione).
          - generic [ref=e277]:
            - generic [ref=e278]:
              - generic [ref=e279]: ✅
              - text: VERIFICATO
            - generic [ref=e280]:
              - generic [ref=e281]: 📊
              - text: AGGREGATO
            - generic [ref=e282]:
              - generic [ref=e283]: ⚠️
              - text: STIMATO
            - generic [ref=e284]:
              - generic [ref=e285]: ❌
              - text: NON DISPONIBILE
        - generic [ref=e286]:
          - paragraph [ref=e287]: ✅ Dati verificati
          - paragraph [ref=e288]:
            - text: Il Consuntivo 2025 (Messaggio 8672) pubblica i dati effettivi con il
            - strong [ref=e289]: Conto economico per natura
            - text: completo. Tutti i numeri mostrati sono verificabili contro il documento ufficiale.
      - generic [ref=e290]:
        - heading "Spese per natura economica 2025 (Consuntivo)" [level=3] [ref=e291]
        - paragraph [ref=e292]: Clicca su ogni riquadro per vedere dettagli. I colori indicano la qualità del dato.
    - generic [ref=e296]:
      - generic [ref=e297]:
        - 'heading "Healthcare spending: explanation for non-experts" [level=2] [ref=e298]'
        - paragraph [ref=e299]: Healthcare represents one of the main items in the cantonal budget. Here's what you need to know.
      - generic [ref=e300]:
        - heading "Frequently asked question" [level=3] [ref=e301]
        - generic [ref=e302]:
          - paragraph [ref=e303]: Why does the Canton spend money on healthcare if I already pay health insurance premiums every month?
          - paragraph [ref=e304]: Health insurance only covers basic care. The Canton must pay (by federal law) 55% of hospital admissions, help those who cannot afford premiums, and pay for extra services not covered by LAMal (elderly care, prevention, etc.).
          - generic [ref=e305]:
            - group [ref=e306]:
              - generic "1. LAMal only covers basic care" [ref=e307] [cursor=pointer]
            - group [ref=e308]:
              - generic "2. Canton required to pay 55% of hospitals" [ref=e309] [cursor=pointer]
            - group [ref=e310]:
              - generic "3. Very high premiums in Ticino, many cannot afford them" [ref=e311] [cursor=pointer]
            - group [ref=e312]:
              - generic "4. Extra services for elderly and chronically ill" [ref=e313] [cursor=pointer]
            - group [ref=e314]:
              - generic "5. Prevention and public health" [ref=e315] [cursor=pointer]
      - generic [ref=e316]:
        - generic [ref=e317]:
          - heading "Verified data" [level=3] [ref=e322]
          - generic [ref=e323]:
            - generic [ref=e324]:
              - generic [ref=e325]: 627 M CHF
              - generic [ref=e326]: "\"Public health\" function 2027"
              - generic [ref=e327]: "Source: P2027_spese_02.pdf"
            - generic [ref=e328]:
              - generic [ref=e329]: 13.3% of total budget
              - generic [ref=e330]: 1'731 CHF per resident
        - generic [ref=e331]:
          - heading "RIPAM (premium reduction)" [level=3] [ref=e336]
          - generic [ref=e337]:
            - generic [ref=e338]:
              - generic [ref=e339]: 332 M CHF
              - generic [ref=e340]: Classified in "Social welfare"
            - generic [ref=e341]: ⚠️ RIPAM is classified in "Social welfare" function (not "Public health") because it is a direct transfer to families.
      - generic [ref=e342]:
        - heading "Key terms glossary" [level=3] [ref=e343]
        - generic [ref=e344]:
          - generic [ref=e345]:
            - generic [ref=e346]: LAMal (Federal Health Insurance Act)
            - paragraph [ref=e347]: The mandatory health insurance that every person residing in Switzerland must have. Every month you pay a premium to your health insurer (e.g. Helsana, CSS, Assura).
            - generic [ref=e348]: "Legal basis: RS 832.10"
          - generic [ref=e349]:
            - generic [ref=e350]: Transfer expenses
            - paragraph [ref=e351]: Money that the Canton 'transfers' to others (municipalities, hospitals, insurers, families) instead of using it directly for cantonal salaries or materials.
            - generic [ref=e352]: "Examples: RIPAM (transfer to insurers), hospital quota (transfer to hospitals), PC (transfer to elderly)"
          - generic [ref=e353]:
            - generic [ref=e354]: Cantonal quota 55% (hospital financing)
            - paragraph [ref=e355]: "When you are hospitalized, the cost is split by federal law: the Canton pays 55%, your health insurance pays 45%. You only pay the normal deductible."
            - generic [ref=e356]: "Legal basis: LAMal art. 49a"
          - generic [ref=e357]:
            - generic [ref=e358]: PC (Supplementary Benefits AVS/AI)
            - paragraph [ref=e359]: Economic aid for elderly and people with disabilities when pension (AVS or AI) is not enough to live. Also includes contributions for extra health expenses (dentist, glasses, non-reimbursed drugs).
      - generic [ref=e364]:
        - heading "Data NOT available in 2027 Budget" [level=4] [ref=e365]
        - paragraph [ref=e366]: Message 8731 does not contain a detailed breakdown of health spending by individual item. The 627M is an aggregate.
        - generic [ref=e367]:
          - generic [ref=e368]:
            - generic [ref=e369]: •
            - generic [ref=e370]:
              - text: "Hospital contributions: NOT AVAILABLE"
              - generic [ref=e371]: "Where to find it: Detailed accounts (March), Annual reports EOC/OSC"
          - generic [ref=e372]:
            - generic [ref=e373]: •
            - generic [ref=e374]:
              - text: "PC health quota: NOT AVAILABLE"
              - generic [ref=e375]: "Where to find it: Accounts, Economic account by nature"
    - generic [ref=e378]:
      - generic [ref=e379]:
        - 'heading "🏛️ Amministrazione cantonale: chi controlla i controllori?" [level=2] [ref=e380]'
        - paragraph [ref=e381]: Quanto costa l'amministrazione pubblica e chi controlla che i soldi siano spesi bene?
      - generic [ref=e382]:
        - generic [ref=e383]:
          - generic [ref=e384]: Spesa totale 2025
          - generic [ref=e385]: —
          - generic [ref=e386]: Dato C2025 in verifica
          - generic [ref=e387]: (no printed total found)
        - generic [ref=e388]:
          - generic [ref=e389]: "% del bilancio"
          - generic [ref=e390]: —
          - generic [ref=e391]: Dato in verifica
        - generic [ref=e393]:
          - generic [ref=e394]: Per abitante
          - generic [ref=e395]: —
          - generic [ref=e396]: Dato in verifica
      - generic [ref=e397]:
        - heading "🔍 Chi controlla?" [level=3] [ref=e398]
        - generic [ref=e399]:
          - generic [ref=e405]:
            - generic [ref=e406]: Controllo cantonale delle finanze (CCF)
            - paragraph [ref=e407]: I "revisori dei conti" del Cantone. Controllano che i soldi pubblici siano spesi correttamente e legalmente. Indipendente dal Governo, risponde al Parlamento.
            - generic [ref=e408]: "Base legale: Legge 2.4.4.1"
          - generic [ref=e414]:
            - generic [ref=e415]: Commissione della gestione e delle finanze (CGF)
            - paragraph [ref=e416]: Commissione parlamentare permanente che sorveglia gestione finanziaria Governo. Circa 15 deputati del Gran Consiglio.
          - generic [ref=e422]:
            - generic [ref=e423]: Corte dei conti
            - paragraph [ref=e424]: ❌ Il Canton Ticino NON ha una Corte dei conti autonoma (a differenza di GE, VD). Il controllo è tramite CCF + CGF.
      - generic [ref=e429]:
        - heading "Dati Autorità - Verificati" [level=4] [ref=e430]
        - generic [ref=e431]:
          - generic [ref=e432]:
            - text: "• Consiglio di Stato (consulenze/perizie 2025): CHF 1'014'905"
            - generic [ref=e433]: ✅ Rendiconto CdS 2025 - Spese esterne consulenze, non stipendi CdS (stipendi in voce 30 Personale)
          - generic [ref=e434]:
            - text: "• Gran Consiglio (indennità deputati 2025): CHF 1'777'559 nette"
            - generic [ref=e435]: ✅ Resoconto Art. 166a LGC - 90 deputati, indennità + trasferte CHF 162'763
          - generic [ref=e436]:
            - text: "• FTE totali Canton Ticino: NON DISPONIBILE nel Preventivo"
            - generic [ref=e437]: "Dove trovarlo: USTAT \"Il mercato del lavoro nel settore pubblico ticinese\" (pubblicazione annuale) o Consuntivo dettagliato"
          - generic [ref=e438]:
            - text: "• Stipendi membri CdS: NON PUBBLICATI separatamente"
            - generic [ref=e439]: "Inclusi nella voce 30 Personale aggregata (CHF 1'219.7M totale 2025). Base legale: LStip art. 3"
          - generic [ref=e440]:
            - text: "• Budget CCF: NON DISPONIBILE"
            - generic [ref=e441]: "Dove trovarlo: Rapporto annuale CCF o Consuntivo dettagliato"
    - generic [ref=e444]:
      - generic [ref=e445]:
        - heading [level=2] [ref=e446]:
          - text: 🏘️ Dati per comune
          - button "Condividi" [ref=e447] [cursor=pointer]
        - paragraph [ref=e451]: Confronta moltiplicatori, entrate, uscite e debito pro capite dei comuni ticinesi.
        - generic [ref=e452]:
          - paragraph [ref=e453]: 📊 Dati ufficiali 2024
          - paragraph [ref=e454]: Dati estratti dal Rapporto 'I conti dei comuni nel 2024', Allegato statistico tab.8. Popolazione, moltiplicatori fiscali, risorse e indice di forza finanziaria per 106 comuni.
      - searchbox "Cerca un comune..." [ref=e456]
    - generic [ref=e460]:
      - generic [ref=e461]:
        - heading [level=2] [ref=e462]:
          - text: 💡 Quanto costa? Le formule spiegate
          - button "Condividi" [ref=e463] [cursor=pointer]
        - paragraph [ref=e467]: Voci di spesa tradotte in costi per abitante, al giorno e per famiglia. Tutte le formule sono visibili per massima trasparenza.
      - generic [ref=e468]:
        - generic [ref=e469]:
          - generic [ref=e470]:
            - img "Consiglio di Stato" [ref=e471]: 🏛️
            - generic [ref=e472]:
              - heading "Consiglio di Stato" [level=3] [ref=e473]
              - paragraph [ref=e474]: Costo dell'organo esecutivo del cantone (5 consiglieri + segretariato)
          - generic [ref=e475]:
            - generic [ref=e476]: "Formula:"
            - generic [ref=e477]: 3'500'000 CHF ÷ 362'200 abitanti
          - generic [ref=e478]:
            - generic [ref=e479]:
              - generic [ref=e480]: Per abitante
              - generic [ref=e481]: 9.67 CHF/anno
            - generic [ref=e482]:
              - generic [ref=e483]: Al giorno
              - generic [ref=e484]: 0.03 CHF/giorno
            - generic [ref=e485]:
              - generic [ref=e486]: Per famiglia
              - generic [ref=e487]: 20.30 CHF/anno
          - generic [ref=e488]: 💡 Circa 10 franchi all'anno per abitante, meno di 3 centesimi al giorno
        - generic [ref=e489]:
          - generic [ref=e490]:
            - img "Contributi cantonali alla salute" [ref=e491]: 💊
            - generic [ref=e492]:
              - heading "Contributi cantonali alla salute" [level=3] [ref=e493]
              - paragraph [ref=e494]: Sussidi per i premi dell'assicurazione malattia
          - generic [ref=e495]:
            - generic [ref=e496]: "Formula:"
            - generic [ref=e497]: 332'000'000 CHF ÷ 362'200 abitanti
          - generic [ref=e498]:
            - generic [ref=e499]:
              - generic [ref=e500]: Per abitante
              - generic [ref=e501]: 917 CHF/anno
            - generic [ref=e502]:
              - generic [ref=e503]: Al giorno
              - generic [ref=e504]: 2.51 CHF/giorno
            - generic [ref=e505]:
              - generic [ref=e506]: Per famiglia
              - generic [ref=e507]: 1'925 CHF/anno
          - generic [ref=e508]: 💡 Il cantone paga quasi 1000 franchi all'anno per ogni ticinese per aiutare con i premi della cassa malati
        - generic [ref=e509]:
          - generic [ref=e510]:
            - img "Formazione" [ref=e511]: 🎓
            - generic [ref=e512]:
              - heading "Formazione" [level=3] [ref=e513]
              - paragraph [ref=e514]: Scuole pubbliche, università, formazione professionale
          - generic [ref=e515]:
            - generic [ref=e516]: "Formula:"
            - generic [ref=e517]: 850'000'000 CHF ÷ 362'200 abitanti
          - generic [ref=e518]:
            - generic [ref=e519]:
              - generic [ref=e520]: Per abitante
              - generic [ref=e521]: 2'347 CHF/anno
            - generic [ref=e522]:
              - generic [ref=e523]: Al giorno
              - generic [ref=e524]: 6.43 CHF/giorno
            - generic [ref=e525]:
              - generic [ref=e526]: Per famiglia
              - generic [ref=e527]: 4'929 CHF/anno
          - generic [ref=e528]: 💡 Ogni famiglia ticinese "investe" circa 5000 franchi all'anno nell'educazione pubblica
        - generic [ref=e529]:
          - generic [ref=e530]:
            - img "Trasporti pubblici" [ref=e531]: 🚆
            - generic [ref=e532]:
              - heading "Trasporti pubblici" [level=3] [ref=e533]
              - paragraph [ref=e534]: Contributi a FFS, TPL, e altre aziende di trasporto
          - generic [ref=e535]:
            - generic [ref=e536]: "Formula:"
            - generic [ref=e537]: 180'000'000 CHF ÷ 362'200 abitanti
          - generic [ref=e538]:
            - generic [ref=e539]:
              - generic [ref=e540]: Per abitante
              - generic [ref=e541]: 497 CHF/anno
            - generic [ref=e542]:
              - generic [ref=e543]: Al giorno
              - generic [ref=e544]: 1.36 CHF/giorno
            - generic [ref=e545]:
              - generic [ref=e546]: Per famiglia
              - generic [ref=e547]: 1'044 CHF/anno
          - generic [ref=e548]: 💡 Anche chi non prende mai il treno contribuisce con 500 franchi all'anno ai trasporti pubblici
        - generic [ref=e549]:
          - generic [ref=e550]:
            - img "Polizia cantonale" [ref=e551]: 👮
            - generic [ref=e552]:
              - heading "Polizia cantonale" [level=3] [ref=e553]
              - paragraph [ref=e554]: Sicurezza pubblica e ordine
          - generic [ref=e555]:
            - generic [ref=e556]: "Formula:"
            - generic [ref=e557]: 120'000'000 CHF ÷ 362'200 abitanti
          - generic [ref=e558]:
            - generic [ref=e559]:
              - generic [ref=e560]: Per abitante
              - generic [ref=e561]: 331 CHF/anno
            - generic [ref=e562]:
              - generic [ref=e563]: Al giorno
              - generic [ref=e564]: 0.91 CHF/giorno
            - generic [ref=e565]:
              - generic [ref=e566]: Per famiglia
              - generic [ref=e567]: 696 CHF/anno
          - generic [ref=e568]: 💡 Meno di 1 franco al giorno per la sicurezza pubblica
        - generic [ref=e569]:
          - generic [ref=e570]:
            - img "Cultura e tempo libero" [ref=e571]: 🎭
            - generic [ref=e572]:
              - heading "Cultura e tempo libero" [level=3] [ref=e573]
              - paragraph [ref=e574]: Musei, teatri, biblioteche, sport
          - generic [ref=e575]:
            - generic [ref=e576]: "Formula:"
            - generic [ref=e577]: 45'000'000 CHF ÷ 362'200 abitanti
          - generic [ref=e578]:
            - generic [ref=e579]:
              - generic [ref=e580]: Per abitante
              - generic [ref=e581]: 124 CHF/anno
            - generic [ref=e582]:
              - generic [ref=e583]: Al giorno
              - generic [ref=e584]: 0.34 CHF/giorno
            - generic [ref=e585]:
              - generic [ref=e586]: Per famiglia
              - generic [ref=e587]: 261 CHF/anno
          - generic [ref=e588]: 💡 Ogni ticinese "paga" l'equivalente di un caffè all'anno per la cultura
    - generic [ref=e591]:
      - generic [ref=e592]:
        - generic [ref=e593]:
          - generic [ref=e594]: 📋
          - generic [ref=e595]: Preventivo 2027 - In attesa approvazione
        - heading [level=2] [ref=e596]:
          - text: Sguardo al Budget 2027
          - button "Condividi" [ref=e597] [cursor=pointer]
        - paragraph [ref=e601]: Il Preventivo 2027 è stato licenziato dal Consiglio di Stato il 30 settembre 2026. Approvazione finale da parte del Gran Consiglio prevista per dicembre 2026.
      - generic [ref=e602]:
        - generic [ref=e603]:
          - generic [ref=e604]: Disavanzo previsto
          - generic [ref=e605]: "-98.5M"
          - generic [ref=e606]: CHF -274 per abitante
        - generic [ref=e607]:
          - generic [ref=e608]: Spese totali
          - generic [ref=e609]: 4'730M
          - generic [ref=e610]: +3.2% vs C2025
        - generic [ref=e611]:
          - generic [ref=e612]: Ricavi totali
          - generic [ref=e613]: 4'632M
          - generic [ref=e614]: +1.8% vs C2025
      - generic [ref=e615]:
        - paragraph [ref=e616]: ⚠️ Nota importante
        - paragraph [ref=e617]:
          - text: Il focus di questo sito è sui
          - strong [ref=e618]: dati effettivi
          - text: (Consuntivo 2025). I numeri del Preventivo 2027 sono previsioni soggette a modifica e approvazione parlamentare. Per analisi dettagliate, consultare il
          - link "Messaggio 8731 completo" [ref=e619] [cursor=pointer]:
            - /url: https://www4.ti.ch/dfe/dr/finanze/dati-finanziari/p2027/
          - text: .
  - contentinfo [ref=e620]:
    - generic [ref=e622]:
      - generic [ref=e623]:
        - generic [ref=e624]: Where does Ticino money go
        - paragraph [ref=e625]: A financial transparency project. All data comes from official sources of Canton Ticino and the Swiss Confederation.
      - generic [ref=e626]: This site is independent and is not affiliated with the cantonal government.
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | const BASE_URL = process.env.BASE_URL || 'https://tiero.github.io/dove-vanno-soldi-ticino';
  4   | const LANGUAGES = ['it', 'en', 'de', 'fr'];
  5   | 
  6   | test.describe('i18n completeness tests', () => {
  7   |   for (const lang of LANGUAGES) {
  8   |     test(`homepage in ${lang} has no untranslated text`, async ({ page }) => {
  9   |       await page.goto(`${BASE_URL}/`);
  10  |       
  11  |       // Wait for page load
  12  |       await page.waitForSelector('#hero-metrics', { timeout: 10000 });
  13  |       
  14  |       // Select language
  15  |       const langButton = page.locator(`button[data-lang="${lang}"]`).first();
  16  |       if (await langButton.count() > 0) {
  17  |         await langButton.click();
  18  |         await page.waitForTimeout(500);
  19  |       }
  20  |       
  21  |       // Get all text content
  22  |       const bodyText = await page.locator('body').textContent();
  23  |       
  24  |       // Check for common Italian words that should be translated in non-IT languages
  25  |       if (lang !== 'it') {
  26  |         const italianWords = ['Dove vanno i soldi', 'abitante', 'Miliardi', 'Disavanzo'];
  27  |         for (const word of italianWords) {
  28  |           if (bodyText && bodyText.includes(word)) {
  29  |             console.warn(`Warning: Found untranslated Italian word "${word}" in ${lang}`);
  30  |           }
  31  |         }
  32  |       }
  33  |       
  34  |       // Check for data-i18n attributes without translations
  35  |       const untranslatedElements = await page.locator('[data-i18n]').evaluateAll(elements => {
  36  |         return elements.filter(el => {
  37  |           const key = el.getAttribute('data-i18n');
  38  |           const text = el.textContent || '';
  39  |           return key && text.trim() === key;
  40  |         }).length;
  41  |       });
  42  |       
  43  |       expect(untranslatedElements).toBe(0);
  44  |     });
  45  |     
  46  |     test(`language switcher works for ${lang}`, async ({ page }) => {
  47  |       await page.goto(`${BASE_URL}/`);
  48  |       
  49  |       // Check if language button exists
  50  |       const langButton = page.locator(`button[data-lang="${lang}"]`).first();
  51  |       const buttonCount = await langButton.count();
  52  |       
  53  |       // Language switcher should be present
  54  |       expect(buttonCount).toBeGreaterThan(0);
  55  |     });
  56  |   }
  57  |   
  58  |   test('all pages load in all languages', async ({ page }) => {
  59  |     const pages = ['/', '/storia-debito.html', '/tassazione-imprese.html', '/comuni.html', '/metodologia.html'];
  60  |     
  61  |     for (const pagePath of pages) {
  62  |       for (const lang of LANGUAGES) {
  63  |         await page.goto(`${BASE_URL}${pagePath}`);
  64  |         await page.waitForLoadState('networkidle');
  65  |         
  66  |         // Check that page loaded successfully
  67  |         const title = await page.title();
  68  |         expect(title.length).toBeGreaterThan(0);
  69  |         
  70  |         // Check for console errors
  71  |         const errors: string[] = [];
  72  |         page.on('pageerror', err => errors.push(err.message));
  73  |         
  74  |         await page.waitForTimeout(1000);
  75  |         expect(errors.length).toBe(0);
  76  |       }
  77  |     }
  78  |   });
  79  |   
  80  |   test('text at 320px width does not overflow', async ({ page }) => {
  81  |     await page.setViewportSize({ width: 320, height: 568 });
  82  |     
  83  |     const pages = ['/', '/storia-debito.html', '/tassazione-imprese.html', '/comuni.html'];
  84  |     
  85  |     for (const pagePath of pages) {
  86  |       for (const lang of LANGUAGES) {
  87  |         await page.goto(`${BASE_URL}${pagePath}`);
  88  |         
  89  |         // Select language if switcher exists
  90  |         const langButton = page.locator(`button[data-lang="${lang}"]`).first();
  91  |         if (await langButton.count() > 0) {
> 92  |           await langButton.click();
      |                            ^ Error: locator.click: Test timeout of 30000ms exceeded.
  93  |           await page.waitForTimeout(300);
  94  |         }
  95  |         
  96  |         // Check for horizontal overflow
  97  |         const hasOverflow = await page.evaluate(() => {
  98  |           return document.documentElement.scrollWidth > window.innerWidth;
  99  |         });
  100 |         
  101 |         if (hasOverflow) {
  102 |           console.warn(`Warning: Horizontal overflow detected on ${pagePath} in ${lang} at 320px`);
  103 |         }
  104 |         
  105 |         // This is a warning, not a hard failure, as some overflow might be intentional (charts, tables)
  106 |         // But German and French text should not cause layout breaks
  107 |       }
  108 |     }
  109 |   });
  110 | });
  111 | 
```
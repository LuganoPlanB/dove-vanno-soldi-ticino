# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: i18n.spec.ts >> i18n completeness tests >> homepage in it has no untranslated text
- Location: tests/i18n.spec.ts:8:5

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
        - link "Methodology" [ref=e9] [cursor=pointer]:
          - /url: ./metodologia.html
        - button "Change language" [ref=e11] [cursor=pointer]:
          - generic [ref=e14]: EN
        - button "Toggle theme" [ref=e15] [cursor=pointer]
  - main [ref=e18]:
    - generic [ref=e21]:
      - generic [ref=e22]:
        - generic [ref=e23]: 📊
        - generic [ref=e24]: Official data updated October 3, 2026
      - heading "Where does Ticino money go?" [level=1] [ref=e25]
      - paragraph [ref=e26]: Full transparency on cantonal finances. Every figure verified, every source cited, every number traceable.
      - generic [ref=e27]:
        - generic [ref=e28]:
          - generic [ref=e29]: 2025 Result
          - generic [ref=e33]: "-32M"
          - generic [ref=e34]: Actual deficit (C2025)
        - generic [ref=e35]:
          - generic [ref=e36]: 2025 Debt
          - generic [ref=e40]: 3.056 Bn
          - generic [ref=e41]: CHF +51M vs 2024
        - generic [ref=e42]:
          - generic [ref=e43]: 2025 Spending
          - generic [ref=e47]: 4.583 Bn
          - generic [ref=e48]: Actual spending (C2025)
    - generic [ref=e51]:
      - generic [ref=e52]:
        - heading [level=2] [ref=e53]:
          - text: La situazione finanziaria
          - button "Condividi" [ref=e54] [cursor=pointer]
        - paragraph [ref=e58]: "Il Canton Ticino affronta sfide finanziarie significative: un deficit in crescita, un debito pubblico che supererà i 3 miliardi di franchi e premi di cassa malattia tra i più alti della Svizzera. Questo sito rende accessibili e comprensibili i dati finanziari ufficiali del Cantone."
      - generic [ref=e63]:
        - generic [ref=e64]: Dati verificati e tracciabili
        - generic [ref=e65]: Ogni numero proviene da fonti ufficiali del Canton Ticino e della Confederazione Svizzera. Tutte le cifre sono state verificate matematicamente con test automatici.
    - generic [ref=e67]:
      - generic [ref=e68]:
        - heading [level=2] [ref=e69]:
          - text: Where does the money go?
          - button "Condividi" [ref=e70] [cursor=pointer]
        - paragraph [ref=e74]: Explore interactive visualizations to understand how the 4.7 billion franc cantonal budget is spent
      - generic [ref=e75]:
        - heading "2027 Spending by function" [level=3] [ref=e77]
        - generic [ref=e78]: Clicca per vedere i dettagli
        - img [ref=e79]:
          - generic [ref=e80] [cursor=pointer]: Social welfare
          - generic [ref=e83] [cursor=pointer]: Education
          - generic [ref=e86] [cursor=pointer]: Public health
          - generic [ref=e89] [cursor=pointer]: Finance and taxes
          - generic [ref=e92] [cursor=pointer]: General administration
          - generic [ref=e95] [cursor=pointer]: Public order, security anddefense
          - generic [ref=e98] [cursor=pointer]: Transport andtelecommunications
          - generic [ref=e101] [cursor=pointer]: Economy
          - generic [ref=e104] [cursor=pointer]: Culture,sports,leisure and
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
                - generic [ref=e129]: 0.50 CHF
                - generic [ref=e131]: 1.00 CHF
                - generic [ref=e133]: 1.50 CHF
                - generic [ref=e135]: 2.00 CHF
                - generic [ref=e137]: 2.50 CHF
                - generic [ref=e139]: 3.00 CHF
                - generic [ref=e141]: 3.50 CHF
              - generic [ref=e144] [cursor=pointer]
              - generic [ref=e145] [cursor=pointer]
              - generic [ref=e146] [cursor=pointer]
              - generic [ref=e147] [cursor=pointer]
              - generic [ref=e148] [cursor=pointer]
        - generic [ref=e149]:
          - heading "Annual deficit" [level=3] [ref=e150]
          - img [ref=e151]:
            - generic [ref=e152]:
              - generic [ref=e153]:
                - generic [ref=e155]: "2023"
                - generic [ref=e157]: "2024"
                - generic [ref=e159]: "2025"
                - generic [ref=e161]: "2026"
                - generic [ref=e163]: "2027"
              - generic [ref=e165]:
                - generic [ref=e166]: 0 M
                - generic [ref=e168]: 20 M
                - generic [ref=e170]: 40 M
                - generic [ref=e172]: 60 M
                - generic [ref=e174]: 80 M
                - generic [ref=e176]: 100 M
                - generic [ref=e178]: 120 M
                - generic [ref=e180]: 140 M
              - generic [ref=e183] [cursor=pointer]
              - generic [ref=e184] [cursor=pointer]
              - generic [ref=e185] [cursor=pointer]
              - generic [ref=e186] [cursor=pointer]
              - generic [ref=e187] [cursor=pointer]
      - generic [ref=e188]:
        - heading "2025-2027 Comparison" [level=3] [ref=e189]
        - generic [ref=e190]: Evoluzione delle principali voci di bilancio
        - img [ref=e191]:
          - generic [ref=e192]:
            - generic [ref=e193]:
              - generic [ref=e194]: Cantonal contributions
              - generic [ref=e196]: Average premium TI
              - generic [ref=e198]: Average premium CH
            - generic [ref=e200]:
              - generic [ref=e202]: 0.0Mia
              - generic [ref=e204]: 0.1Mia
              - generic [ref=e206]: 0.2Mia
              - generic [ref=e208]: 0.3Mia
              - generic [ref=e210]: 0.4Mia
              - generic [ref=e212]: 0.5Mia
            - generic [ref=e214]:
              - generic [ref=e215]:
                - generic [ref=e216] [cursor=pointer]
                - generic [ref=e217] [cursor=pointer]
                - generic [ref=e218] [cursor=pointer]
              - generic [ref=e219]:
                - generic [ref=e220] [cursor=pointer]
                - generic [ref=e221] [cursor=pointer]
                - generic [ref=e222] [cursor=pointer]
              - generic [ref=e223]:
                - generic [ref=e224] [cursor=pointer]
                - generic [ref=e225] [cursor=pointer]
                - generic [ref=e226] [cursor=pointer]
            - generic [ref=e227]:
              - generic [ref=e228]: Consuntivo 2025
              - generic [ref=e231]: Preventivo 2026
              - generic [ref=e234]: Preventivo 2027
      - generic [ref=e238]:
        - heading "2027 Budget - Overview" [level=3] [ref=e239]
        - img [ref=e240]:
          - generic [ref=e241]:
            - generic [ref=e242]:
              - generic [ref=e243]: Current expenditure
              - generic [ref=e245]: Current revenue
              - generic [ref=e247]: Investments
            - generic [ref=e249]:
              - generic [ref=e251]: "0"
              - generic [ref=e253]: "1000"
              - generic [ref=e255]: "2000"
              - generic [ref=e257]: "3000"
              - generic [ref=e259]: "4000"
            - generic [ref=e261] [cursor=pointer]
            - generic [ref=e262] [cursor=pointer]
            - generic [ref=e263] [cursor=pointer]
    - generic [ref=e267]:
      - generic [ref=e268]:
        - heading "Stato dei dati" [level=2] [ref=e269]
        - paragraph [ref=e270]: Panoramica completa dei dati disponibili e delle limitazioni
      - generic [ref=e271]:
        - generic [ref=e272]:
          - generic [ref=e273]: Disponibili
          - list [ref=e277]:
            - listitem [ref=e278]: ✓ Consuntivo 2025 (effettivo)
            - listitem [ref=e279]: ✓ Preventivo 2026 (in corso)
            - listitem [ref=e280]: ✓ Serie storiche verificate
            - listitem [ref=e281]: ✓ Dati popolazione
            - listitem [ref=e282]: ✓ Premi e contributi sanità
        - generic [ref=e283]:
          - generic [ref=e284]: Mancanti
          - list [ref=e288]:
            - listitem [ref=e289]: ⏳ Consuntivi 2024, 2026
            - listitem [ref=e290]: ⏳ Spese per dipartimento
            - listitem [ref=e291]: ⏳ Serie storiche pre-2023
      - generic [ref=e292]:
        - link "Metodologia completa" [ref=e293] [cursor=pointer]:
          - /url: ./metodologia.html
        - link "Codice sorgente" [ref=e297] [cursor=pointer]:
          - /url: https://github.com/tiero/dove-vanno-soldi-ticino
    - generic [ref=e303]:
      - generic [ref=e304]:
        - heading [level=2] [ref=e305]:
          - text: "💰 Amministrazione: dove vanno i soldi?"
          - button "Condividi" [ref=e306] [cursor=pointer]
        - paragraph [ref=e310]: "Breakdown economico dettagliato: stipendi, consulenze, IT, locazioni, energia e altri costi di funzionamento."
        - generic [ref=e311]:
          - paragraph [ref=e312]: 📊 Classificazione per natura economica (MCA2)
          - paragraph [ref=e313]: Il Modello Contabile Armonizzato 2 classifica le spese per TIPO di costo (personale, beni, servizi) invece che per FUNZIONE (salute, educazione).
          - generic [ref=e314]:
            - generic [ref=e315]:
              - generic [ref=e316]: ✅
              - text: VERIFICATO
            - generic [ref=e317]:
              - generic [ref=e318]: 📊
              - text: AGGREGATO
            - generic [ref=e319]:
              - generic [ref=e320]: ⚠️
              - text: STIMATO
            - generic [ref=e321]:
              - generic [ref=e322]: ❌
              - text: NON DISPONIBILE
        - generic [ref=e323]:
          - paragraph [ref=e324]: ✅ Dati verificati
          - paragraph [ref=e325]:
            - text: Il Consuntivo 2025 (Messaggio 8672) pubblica i dati effettivi con il
            - strong [ref=e326]: Conto economico per natura
            - text: completo. Tutti i numeri mostrati sono verificabili contro il documento ufficiale.
      - generic [ref=e327]:
        - heading "Spese per natura economica 2025 (Consuntivo)" [level=3] [ref=e328]
        - paragraph [ref=e329]: Clicca su ogni riquadro per vedere dettagli. I colori indicano la qualità del dato.
    - generic [ref=e333]:
      - generic [ref=e334]:
        - 'heading "Healthcare spending: explanation for non-experts" [level=2] [ref=e335]'
        - paragraph [ref=e336]: Healthcare represents one of the main items in the cantonal budget. Here's what you need to know.
      - generic [ref=e337]:
        - heading "Frequently asked question" [level=3] [ref=e338]
        - generic [ref=e339]:
          - paragraph [ref=e340]: Why does the Canton spend money on healthcare if I already pay health insurance premiums every month?
          - paragraph [ref=e341]: Health insurance only covers basic care. The Canton must pay (by federal law) 55% of hospital admissions, help those who cannot afford premiums, and pay for extra services not covered by LAMal (elderly care, prevention, etc.).
          - generic [ref=e342]:
            - group [ref=e343]:
              - generic "1. LAMal only covers basic care" [ref=e344] [cursor=pointer]
            - group [ref=e345]:
              - generic "2. Canton required to pay 55% of hospitals" [ref=e346] [cursor=pointer]
            - group [ref=e347]:
              - generic "3. Very high premiums in Ticino, many cannot afford them" [ref=e348] [cursor=pointer]
            - group [ref=e349]:
              - generic "4. Extra services for elderly and chronically ill" [ref=e350] [cursor=pointer]
            - group [ref=e351]:
              - generic "5. Prevention and public health" [ref=e352] [cursor=pointer]
      - generic [ref=e353]:
        - generic [ref=e354]:
          - heading "Verified data" [level=3] [ref=e359]
          - generic [ref=e360]:
            - generic [ref=e361]:
              - generic [ref=e362]: 627 M CHF
              - generic [ref=e363]: "\"Public health\" function 2027"
              - generic [ref=e364]: "Source: P2027_spese_02.pdf"
            - generic [ref=e365]:
              - generic [ref=e366]: 13.3% of total budget
              - generic [ref=e367]: 1'731 CHF per resident
        - generic [ref=e368]:
          - heading "RIPAM (premium reduction)" [level=3] [ref=e373]
          - generic [ref=e374]:
            - generic [ref=e375]:
              - generic [ref=e376]: 332 M CHF
              - generic [ref=e377]: Classified in "Social welfare"
            - generic [ref=e378]: ⚠️ RIPAM is classified in "Social welfare" function (not "Public health") because it is a direct transfer to families.
      - generic [ref=e379]:
        - heading "Key terms glossary" [level=3] [ref=e380]
        - generic [ref=e381]:
          - generic [ref=e382]:
            - generic [ref=e383]: LAMal (Federal Health Insurance Act)
            - paragraph [ref=e384]: The mandatory health insurance that every person residing in Switzerland must have. Every month you pay a premium to your health insurer (e.g. Helsana, CSS, Assura).
            - generic [ref=e385]: "Legal basis: RS 832.10"
          - generic [ref=e386]:
            - generic [ref=e387]: Transfer expenses
            - paragraph [ref=e388]: Money that the Canton 'transfers' to others (municipalities, hospitals, insurers, families) instead of using it directly for cantonal salaries or materials.
            - generic [ref=e389]: "Examples: RIPAM (transfer to insurers), hospital quota (transfer to hospitals), PC (transfer to elderly)"
          - generic [ref=e390]:
            - generic [ref=e391]: Cantonal quota 55% (hospital financing)
            - paragraph [ref=e392]: "When you are hospitalized, the cost is split by federal law: the Canton pays 55%, your health insurance pays 45%. You only pay the normal deductible."
            - generic [ref=e393]: "Legal basis: LAMal art. 49a"
          - generic [ref=e394]:
            - generic [ref=e395]: PC (Supplementary Benefits AVS/AI)
            - paragraph [ref=e396]: Economic aid for elderly and people with disabilities when pension (AVS or AI) is not enough to live. Also includes contributions for extra health expenses (dentist, glasses, non-reimbursed drugs).
      - generic [ref=e401]:
        - heading "Data NOT available in 2027 Budget" [level=4] [ref=e402]
        - paragraph [ref=e403]: Message 8731 does not contain a detailed breakdown of health spending by individual item. The 627M is an aggregate.
        - generic [ref=e404]:
          - generic [ref=e405]:
            - generic [ref=e406]: •
            - generic [ref=e407]:
              - text: "Hospital contributions: NOT AVAILABLE"
              - generic [ref=e408]: "Where to find it: Detailed accounts (March), Annual reports EOC/OSC"
          - generic [ref=e409]:
            - generic [ref=e410]: •
            - generic [ref=e411]:
              - text: "PC health quota: NOT AVAILABLE"
              - generic [ref=e412]: "Where to find it: Accounts, Economic account by nature"
    - generic [ref=e415]:
      - generic [ref=e416]:
        - 'heading "🏛️ Amministrazione cantonale: chi controlla i controllori?" [level=2] [ref=e417]'
        - paragraph [ref=e418]: Quanto costa l'amministrazione pubblica e chi controlla che i soldi siano spesi bene?
      - generic [ref=e419]:
        - generic [ref=e420]:
          - generic [ref=e421]: Spesa totale 2025
          - generic [ref=e422]: —
          - generic [ref=e423]: Dato C2025 in verifica
          - generic [ref=e424]: (no printed total found)
        - generic [ref=e425]:
          - generic [ref=e426]: "% del bilancio"
          - generic [ref=e427]: —
          - generic [ref=e428]: Dato in verifica
        - generic [ref=e430]:
          - generic [ref=e431]: Per abitante
          - generic [ref=e432]: —
          - generic [ref=e433]: Dato in verifica
      - generic [ref=e434]:
        - heading "🔍 Chi controlla?" [level=3] [ref=e435]
        - generic [ref=e436]:
          - generic [ref=e442]:
            - generic [ref=e443]: Controllo cantonale delle finanze (CCF)
            - paragraph [ref=e444]: I "revisori dei conti" del Cantone. Controllano che i soldi pubblici siano spesi correttamente e legalmente. Indipendente dal Governo, risponde al Parlamento.
            - generic [ref=e445]: "Base legale: Legge 2.4.4.1"
          - generic [ref=e451]:
            - generic [ref=e452]: Commissione della gestione e delle finanze (CGF)
            - paragraph [ref=e453]: Commissione parlamentare permanente che sorveglia gestione finanziaria Governo. Circa 15 deputati del Gran Consiglio.
          - generic [ref=e459]:
            - generic [ref=e460]: Corte dei conti
            - paragraph [ref=e461]: ❌ Il Canton Ticino NON ha una Corte dei conti autonoma (a differenza di GE, VD). Il controllo è tramite CCF + CGF.
      - generic [ref=e466]:
        - heading "Dati Autorità - Verificati" [level=4] [ref=e467]
        - generic [ref=e468]:
          - generic [ref=e469]:
            - text: "• Consiglio di Stato (consulenze/perizie 2025): CHF 1'014'905"
            - generic [ref=e470]: ✅ Rendiconto CdS 2025 - Spese esterne consulenze, non stipendi CdS (stipendi in voce 30 Personale)
          - generic [ref=e471]:
            - text: "• Gran Consiglio (indennità deputati 2025): CHF 1'777'559 nette"
            - generic [ref=e472]: ✅ Resoconto Art. 166a LGC - 90 deputati, indennità + trasferte CHF 162'763
          - generic [ref=e473]:
            - text: "• FTE totali Canton Ticino: NON DISPONIBILE nel Preventivo"
            - generic [ref=e474]: "Dove trovarlo: USTAT \"Il mercato del lavoro nel settore pubblico ticinese\" (pubblicazione annuale) o Consuntivo dettagliato"
          - generic [ref=e475]:
            - text: "• Stipendi membri CdS: NON PUBBLICATI separatamente"
            - generic [ref=e476]: "Inclusi nella voce 30 Personale aggregata (CHF 1'219.7M totale 2025). Base legale: LStip art. 3"
          - generic [ref=e477]:
            - text: "• Budget CCF: NON DISPONIBILE"
            - generic [ref=e478]: "Dove trovarlo: Rapporto annuale CCF o Consuntivo dettagliato"
    - generic [ref=e481]:
      - generic [ref=e482]:
        - heading [level=2] [ref=e483]:
          - text: 🏘️ Dati per comune
          - button "Condividi" [ref=e484] [cursor=pointer]
        - paragraph [ref=e488]: Confronta moltiplicatori, entrate, uscite e debito pro capite dei comuni ticinesi.
        - generic [ref=e489]:
          - paragraph [ref=e490]: 📊 Dati ufficiali 2024
          - paragraph [ref=e491]: Dati estratti dal Rapporto 'I conti dei comuni nel 2024', Allegato statistico tab.8. Popolazione, moltiplicatori fiscali, risorse e indice di forza finanziaria per 106 comuni.
      - searchbox "Cerca un comune..." [ref=e493]
    - generic [ref=e497]:
      - generic [ref=e498]:
        - heading [level=2] [ref=e499]:
          - text: 💡 Quanto costa? Le formule spiegate
          - button "Condividi" [ref=e500] [cursor=pointer]
        - paragraph [ref=e504]: Voci di spesa tradotte in costi per abitante, al giorno e per famiglia. Tutte le formule sono visibili per massima trasparenza.
      - generic [ref=e505]:
        - generic [ref=e506]:
          - generic [ref=e507]:
            - img "Consiglio di Stato" [ref=e508]: 🏛️
            - generic [ref=e509]:
              - heading "Consiglio di Stato" [level=3] [ref=e510]
              - paragraph [ref=e511]: Costo dell'organo esecutivo del cantone (5 consiglieri + segretariato)
          - generic [ref=e512]:
            - generic [ref=e513]: "Formula:"
            - generic [ref=e514]: 3'500'000 CHF ÷ 362'200 abitanti
          - generic [ref=e515]:
            - generic [ref=e516]:
              - generic [ref=e517]: Per abitante
              - generic [ref=e518]: 9.67 CHF/anno
            - generic [ref=e519]:
              - generic [ref=e520]: Al giorno
              - generic [ref=e521]: 0.03 CHF/giorno
            - generic [ref=e522]:
              - generic [ref=e523]: Per famiglia
              - generic [ref=e524]: 20.30 CHF/anno
          - generic [ref=e525]: 💡 Circa 10 franchi all'anno per abitante, meno di 3 centesimi al giorno
        - generic [ref=e526]:
          - generic [ref=e527]:
            - img "Contributi cantonali alla salute" [ref=e528]: 💊
            - generic [ref=e529]:
              - heading "Contributi cantonali alla salute" [level=3] [ref=e530]
              - paragraph [ref=e531]: Sussidi per i premi dell'assicurazione malattia
          - generic [ref=e532]:
            - generic [ref=e533]: "Formula:"
            - generic [ref=e534]: 332'000'000 CHF ÷ 362'200 abitanti
          - generic [ref=e535]:
            - generic [ref=e536]:
              - generic [ref=e537]: Per abitante
              - generic [ref=e538]: 917 CHF/anno
            - generic [ref=e539]:
              - generic [ref=e540]: Al giorno
              - generic [ref=e541]: 2.51 CHF/giorno
            - generic [ref=e542]:
              - generic [ref=e543]: Per famiglia
              - generic [ref=e544]: 1'925 CHF/anno
          - generic [ref=e545]: 💡 Il cantone paga quasi 1000 franchi all'anno per ogni ticinese per aiutare con i premi della cassa malati
        - generic [ref=e546]:
          - generic [ref=e547]:
            - img "Formazione" [ref=e548]: 🎓
            - generic [ref=e549]:
              - heading "Formazione" [level=3] [ref=e550]
              - paragraph [ref=e551]: Scuole pubbliche, università, formazione professionale
          - generic [ref=e552]:
            - generic [ref=e553]: "Formula:"
            - generic [ref=e554]: 850'000'000 CHF ÷ 362'200 abitanti
          - generic [ref=e555]:
            - generic [ref=e556]:
              - generic [ref=e557]: Per abitante
              - generic [ref=e558]: 2'347 CHF/anno
            - generic [ref=e559]:
              - generic [ref=e560]: Al giorno
              - generic [ref=e561]: 6.43 CHF/giorno
            - generic [ref=e562]:
              - generic [ref=e563]: Per famiglia
              - generic [ref=e564]: 4'929 CHF/anno
          - generic [ref=e565]: 💡 Ogni famiglia ticinese "investe" circa 5000 franchi all'anno nell'educazione pubblica
        - generic [ref=e566]:
          - generic [ref=e567]:
            - img "Trasporti pubblici" [ref=e568]: 🚆
            - generic [ref=e569]:
              - heading "Trasporti pubblici" [level=3] [ref=e570]
              - paragraph [ref=e571]: Contributi a FFS, TPL, e altre aziende di trasporto
          - generic [ref=e572]:
            - generic [ref=e573]: "Formula:"
            - generic [ref=e574]: 180'000'000 CHF ÷ 362'200 abitanti
          - generic [ref=e575]:
            - generic [ref=e576]:
              - generic [ref=e577]: Per abitante
              - generic [ref=e578]: 497 CHF/anno
            - generic [ref=e579]:
              - generic [ref=e580]: Al giorno
              - generic [ref=e581]: 1.36 CHF/giorno
            - generic [ref=e582]:
              - generic [ref=e583]: Per famiglia
              - generic [ref=e584]: 1'044 CHF/anno
          - generic [ref=e585]: 💡 Anche chi non prende mai il treno contribuisce con 500 franchi all'anno ai trasporti pubblici
        - generic [ref=e586]:
          - generic [ref=e587]:
            - img "Polizia cantonale" [ref=e588]: 👮
            - generic [ref=e589]:
              - heading "Polizia cantonale" [level=3] [ref=e590]
              - paragraph [ref=e591]: Sicurezza pubblica e ordine
          - generic [ref=e592]:
            - generic [ref=e593]: "Formula:"
            - generic [ref=e594]: 120'000'000 CHF ÷ 362'200 abitanti
          - generic [ref=e595]:
            - generic [ref=e596]:
              - generic [ref=e597]: Per abitante
              - generic [ref=e598]: 331 CHF/anno
            - generic [ref=e599]:
              - generic [ref=e600]: Al giorno
              - generic [ref=e601]: 0.91 CHF/giorno
            - generic [ref=e602]:
              - generic [ref=e603]: Per famiglia
              - generic [ref=e604]: 696 CHF/anno
          - generic [ref=e605]: 💡 Meno di 1 franco al giorno per la sicurezza pubblica
        - generic [ref=e606]:
          - generic [ref=e607]:
            - img "Cultura e tempo libero" [ref=e608]: 🎭
            - generic [ref=e609]:
              - heading "Cultura e tempo libero" [level=3] [ref=e610]
              - paragraph [ref=e611]: Musei, teatri, biblioteche, sport
          - generic [ref=e612]:
            - generic [ref=e613]: "Formula:"
            - generic [ref=e614]: 45'000'000 CHF ÷ 362'200 abitanti
          - generic [ref=e615]:
            - generic [ref=e616]:
              - generic [ref=e617]: Per abitante
              - generic [ref=e618]: 124 CHF/anno
            - generic [ref=e619]:
              - generic [ref=e620]: Al giorno
              - generic [ref=e621]: 0.34 CHF/giorno
            - generic [ref=e622]:
              - generic [ref=e623]: Per famiglia
              - generic [ref=e624]: 261 CHF/anno
          - generic [ref=e625]: 💡 Ogni ticinese "paga" l'equivalente di un caffè all'anno per la cultura
    - generic [ref=e628]:
      - generic [ref=e629]:
        - generic [ref=e630]:
          - generic [ref=e631]: 📋
          - generic [ref=e632]: Preventivo 2027 - In attesa approvazione
        - heading [level=2] [ref=e633]:
          - text: Sguardo al Budget 2027
          - button "Condividi" [ref=e634] [cursor=pointer]
        - paragraph [ref=e638]: Il Preventivo 2027 è stato licenziato dal Consiglio di Stato il 30 settembre 2026. Approvazione finale da parte del Gran Consiglio prevista per dicembre 2026.
      - generic [ref=e639]:
        - generic [ref=e640]:
          - generic [ref=e641]: Disavanzo previsto
          - generic [ref=e642]: "-98.5M"
          - generic [ref=e643]: CHF -274 per abitante
        - generic [ref=e644]:
          - generic [ref=e645]: Spese totali
          - generic [ref=e646]: 4'730M
          - generic [ref=e647]: +3.2% vs C2025
        - generic [ref=e648]:
          - generic [ref=e649]: Ricavi totali
          - generic [ref=e650]: 4'632M
          - generic [ref=e651]: +1.8% vs C2025
      - generic [ref=e652]:
        - paragraph [ref=e653]: ⚠️ Nota importante
        - paragraph [ref=e654]:
          - text: Il focus di questo sito è sui
          - strong [ref=e655]: dati effettivi
          - text: (Consuntivo 2025). I numeri del Preventivo 2027 sono previsioni soggette a modifica e approvazione parlamentare. Per analisi dettagliate, consultare il
          - link "Messaggio 8731 completo" [ref=e656] [cursor=pointer]:
            - /url: https://www4.ti.ch/dfe/dr/finanze/dati-finanziari/p2027/
          - text: .
  - contentinfo [ref=e657]:
    - generic [ref=e659]:
      - generic [ref=e660]:
        - generic [ref=e661]: Where does Ticino money go
        - paragraph [ref=e662]: A financial transparency project. All data comes from official sources of Canton Ticino and the Swiss Confederation.
      - generic [ref=e663]: This site is independent and is not affiliated with the cantonal government.
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
> 17  |         await langButton.click();
      |                          ^ Error: locator.click: Test timeout of 30000ms exceeded.
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
  92  |           await langButton.click();
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
# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: all-pages.spec.ts >> All pages at 375px >> Home page: no empty charts, nav works, no console errors
- Location: tests/all-pages.spec.ts:14:5

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  - 1
+ Received  + 4

- Array []
+ Array [
+   "Error loading spese natura: SyntaxError: Expected ',' or '}' after property value in JSON at position 9598 (line 163 column 1)",
+   "Cannot read properties of null (reading 'toLocaleString')",
+ ]
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e4]:
      - generic [ref=e5]:
        - generic [ref=e6]: 💰
        - generic [ref=e7]: Where does Ticino money go
      - generic [ref=e8]:
        - button "Menu" [ref=e9] [cursor=pointer]
        - button "Change language" [ref=e13] [cursor=pointer]:
          - generic [ref=e16]: EN
        - button "Toggle theme" [active] [ref=e17] [cursor=pointer]
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
          - generic [ref=e91] [cursor=pointer]: Financeand
          - generic [ref=e94] [cursor=pointer]: Generaladministration
          - generic [ref=e97] [cursor=pointer]: Publicorder,
          - generic [ref=e100] [cursor=pointer]: Transport andtelecommunications
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
        - generic [ref=e136]:
          - heading "Annual deficit" [level=3] [ref=e137]
          - img [ref=e138]:
            - generic [ref=e139]:
              - generic [ref=e140]:
                - generic [ref=e142]: "2023"
                - generic [ref=e144]: "2024"
                - generic [ref=e146]: "2025"
                - generic [ref=e148]: "2026"
                - generic [ref=e150]: "2027"
              - generic [ref=e152]:
                - generic [ref=e153]: 0 M
                - generic [ref=e155]: 50 M
                - generic [ref=e157]: 100 M
      - generic [ref=e160]:
        - heading "2025-2027 Comparison" [level=3] [ref=e161]
        - generic [ref=e162]: Evoluzione delle principali voci di bilancio
        - table [ref=e164]:
          - rowgroup [ref=e165]:
            - row [ref=e166]:
              - columnheader "Voce" [ref=e167]
              - columnheader "2025" [ref=e168]
              - columnheader "2027" [ref=e169]
              - columnheader "Δ%" [ref=e170]
          - rowgroup [ref=e171]:
            - row [ref=e172]:
              - cell "Cantonal contributions" [ref=e173]
              - cell "318" [ref=e174]
              - cell "332" [ref=e175]
              - cell "↑ 4.4%" [ref=e176]
            - row [ref=e177]:
              - cell "Average premium TI" [ref=e178]
              - cell "491" [ref=e179]
              - cell "520" [ref=e180]
              - cell "↑ 5.9%" [ref=e181]
            - row [ref=e182]:
              - cell "Average premium CH" [ref=e183]
              - cell "390" [ref=e184]
              - cell "412" [ref=e185]
              - cell "↑ 5.6%" [ref=e186]
        - generic [ref=e187]:
          - generic [ref=e188]: ↑ Aumento
          - generic [ref=e189]: ↓ Diminuzione
          - generic [ref=e190]: → Stabile
      - generic [ref=e192]:
        - heading "2027 Budget - Overview" [level=3] [ref=e193]
        - img [ref=e194]:
          - generic [ref=e195]:
            - generic [ref=e198]:
              - generic [ref=e199]: 0.0Mia
              - generic [ref=e201]: 1.0Mia
              - generic [ref=e203]: 2.0Mia
              - generic [ref=e205]: 3.0Mia
              - generic [ref=e207]: 4.0Mia
            - generic [ref=e209] [cursor=pointer]
            - generic [ref=e210] [cursor=pointer]
            - generic [ref=e211] [cursor=pointer]
            - generic [ref=e212]: Current
            - generic [ref=e213]: expenditure
            - generic [ref=e214]: Current
            - generic [ref=e215]: revenue
            - generic [ref=e216]: Investments
    - generic [ref=e220]:
      - generic [ref=e221]:
        - heading "Stato dei dati" [level=2] [ref=e222]
        - paragraph [ref=e223]: Panoramica completa dei dati disponibili e delle limitazioni
      - generic [ref=e224]:
        - generic [ref=e225]:
          - generic [ref=e226]: Disponibili
          - list [ref=e230]:
            - listitem [ref=e231]: ✓ Consuntivo 2025 (effettivo)
            - listitem [ref=e232]: ✓ Preventivo 2026 (in corso)
            - listitem [ref=e233]: ✓ Serie storiche verificate
            - listitem [ref=e234]: ✓ Dati popolazione
            - listitem [ref=e235]: ✓ Premi e contributi sanità
        - generic [ref=e236]:
          - generic [ref=e237]: Mancanti
          - list [ref=e241]:
            - listitem [ref=e242]: ⏳ Consuntivi 2024, 2026
            - listitem [ref=e243]: ⏳ Spese per dipartimento
            - listitem [ref=e244]: ⏳ Serie storiche pre-2023
      - generic [ref=e245]:
        - link "Metodologia completa" [ref=e246] [cursor=pointer]:
          - /url: ./metodologia.html
        - link "Codice sorgente" [ref=e250] [cursor=pointer]:
          - /url: https://github.com/tiero/dove-vanno-soldi-ticino
    - generic [ref=e256]:
      - generic [ref=e257]:
        - heading [level=2] [ref=e258]:
          - text: "💰 Amministrazione: dove vanno i soldi?"
          - button "Condividi" [ref=e259] [cursor=pointer]
        - paragraph [ref=e263]: "Breakdown economico dettagliato: stipendi, consulenze, IT, locazioni, energia e altri costi di funzionamento."
        - generic [ref=e264]:
          - paragraph [ref=e265]: 📊 Classificazione per natura economica (MCA2)
          - paragraph [ref=e266]: Il Modello Contabile Armonizzato 2 classifica le spese per TIPO di costo (personale, beni, servizi) invece che per FUNZIONE (salute, educazione).
          - generic [ref=e267]:
            - generic [ref=e268]:
              - generic [ref=e269]: ✅
              - text: VERIFICATO
            - generic [ref=e270]:
              - generic [ref=e271]: 📊
              - text: AGGREGATO
            - generic [ref=e272]:
              - generic [ref=e273]: ⚠️
              - text: STIMATO
            - generic [ref=e274]:
              - generic [ref=e275]: ❌
              - text: NON DISPONIBILE
        - generic [ref=e276]:
          - paragraph [ref=e277]: ✅ Dati verificati
          - paragraph [ref=e278]:
            - text: Il Consuntivo 2025 (Messaggio 8672) pubblica i dati effettivi con il
            - strong [ref=e279]: Conto economico per natura
            - text: completo. Tutti i numeri mostrati sono verificabili contro il documento ufficiale.
      - generic [ref=e280]:
        - heading "Spese per natura economica 2025 (Consuntivo)" [level=3] [ref=e281]
        - paragraph [ref=e282]: Clicca su ogni riquadro per vedere dettagli. I colori indicano la qualità del dato.
    - generic [ref=e286]:
      - generic [ref=e287]:
        - 'heading "Healthcare spending: explanation for non-experts" [level=2] [ref=e288]'
        - paragraph [ref=e289]: Healthcare represents one of the main items in the cantonal budget. Here's what you need to know.
      - generic [ref=e290]:
        - heading "Frequently asked question" [level=3] [ref=e291]
        - generic [ref=e292]:
          - paragraph [ref=e293]: Why does the Canton spend money on healthcare if I already pay health insurance premiums every month?
          - paragraph [ref=e294]: Health insurance only covers basic care. The Canton must pay (by federal law) 55% of hospital admissions, help those who cannot afford premiums, and pay for extra services not covered by LAMal (elderly care, prevention, etc.).
          - generic [ref=e295]:
            - group [ref=e296]:
              - generic "1. LAMal only covers basic care" [ref=e297] [cursor=pointer]
            - group [ref=e298]:
              - generic "2. Canton required to pay 55% of hospitals" [ref=e299] [cursor=pointer]
            - group [ref=e300]:
              - generic "3. Very high premiums in Ticino, many cannot afford them" [ref=e301] [cursor=pointer]
            - group [ref=e302]:
              - generic "4. Extra services for elderly and chronically ill" [ref=e303] [cursor=pointer]
            - group [ref=e304]:
              - generic "5. Prevention and public health" [ref=e305] [cursor=pointer]
      - generic [ref=e306]:
        - generic [ref=e307]:
          - heading "Verified data" [level=3] [ref=e312]
          - generic [ref=e313]:
            - generic [ref=e314]:
              - generic [ref=e315]: 627 M CHF
              - generic [ref=e316]: "\"Public health\" function 2027"
              - generic [ref=e317]: "Source: P2027_spese_02.pdf"
            - generic [ref=e318]:
              - generic [ref=e319]: 13.3% of total budget
              - generic [ref=e320]: 1'731 CHF per resident
        - generic [ref=e321]:
          - heading "RIPAM (premium reduction)" [level=3] [ref=e326]
          - generic [ref=e327]:
            - generic [ref=e328]:
              - generic [ref=e329]: 332 M CHF
              - generic [ref=e330]: Classified in "Social welfare"
            - generic [ref=e331]: ⚠️ RIPAM is classified in "Social welfare" function (not "Public health") because it is a direct transfer to families.
      - generic [ref=e332]:
        - heading "Key terms glossary" [level=3] [ref=e333]
        - generic [ref=e334]:
          - generic [ref=e335]:
            - generic [ref=e336]: LAMal (Federal Health Insurance Act)
            - paragraph [ref=e337]: The mandatory health insurance that every person residing in Switzerland must have. Every month you pay a premium to your health insurer (e.g. Helsana, CSS, Assura).
            - generic [ref=e338]: "Legal basis: RS 832.10"
          - generic [ref=e339]:
            - generic [ref=e340]: Transfer expenses
            - paragraph [ref=e341]: Money that the Canton 'transfers' to others (municipalities, hospitals, insurers, families) instead of using it directly for cantonal salaries or materials.
            - generic [ref=e342]: "Examples: RIPAM (transfer to insurers), hospital quota (transfer to hospitals), PC (transfer to elderly)"
          - generic [ref=e343]:
            - generic [ref=e344]: Cantonal quota 55% (hospital financing)
            - paragraph [ref=e345]: "When you are hospitalized, the cost is split by federal law: the Canton pays 55%, your health insurance pays 45%. You only pay the normal deductible."
            - generic [ref=e346]: "Legal basis: LAMal art. 49a"
          - generic [ref=e347]:
            - generic [ref=e348]: PC (Supplementary Benefits AVS/AI)
            - paragraph [ref=e349]: Economic aid for elderly and people with disabilities when pension (AVS or AI) is not enough to live. Also includes contributions for extra health expenses (dentist, glasses, non-reimbursed drugs).
      - generic [ref=e354]:
        - heading "Data NOT available in 2027 Budget" [level=4] [ref=e355]
        - paragraph [ref=e356]: Message 8731 does not contain a detailed breakdown of health spending by individual item. The 627M is an aggregate.
        - generic [ref=e357]:
          - generic [ref=e358]:
            - generic [ref=e359]: •
            - generic [ref=e360]:
              - text: "Hospital contributions: NOT AVAILABLE"
              - generic [ref=e361]: "Where to find it: Detailed accounts (March), Annual reports EOC/OSC"
          - generic [ref=e362]:
            - generic [ref=e363]: •
            - generic [ref=e364]:
              - text: "PC health quota: NOT AVAILABLE"
              - generic [ref=e365]: "Where to find it: Accounts, Economic account by nature"
    - generic [ref=e368]:
      - generic [ref=e369]:
        - 'heading "🏛️ Amministrazione cantonale: chi controlla i controllori?" [level=2] [ref=e370]'
        - paragraph [ref=e371]: Quanto costa l'amministrazione pubblica e chi controlla che i soldi siano spesi bene?
      - generic [ref=e372]:
        - generic [ref=e373]:
          - generic [ref=e374]: Spesa totale 2025
          - generic [ref=e375]: —
          - generic [ref=e376]: Dato C2025 in verifica
          - generic [ref=e377]: (no printed total found)
        - generic [ref=e378]:
          - generic [ref=e379]: "% del bilancio"
          - generic [ref=e380]: —
          - generic [ref=e381]: Dato in verifica
        - generic [ref=e383]:
          - generic [ref=e384]: Per abitante
          - generic [ref=e385]: —
          - generic [ref=e386]: Dato in verifica
      - generic [ref=e387]:
        - heading "🔍 Chi controlla?" [level=3] [ref=e388]
        - generic [ref=e389]:
          - generic [ref=e395]:
            - generic [ref=e396]: Controllo cantonale delle finanze (CCF)
            - paragraph [ref=e397]: I "revisori dei conti" del Cantone. Controllano che i soldi pubblici siano spesi correttamente e legalmente. Indipendente dal Governo, risponde al Parlamento.
            - generic [ref=e398]: "Base legale: Legge 2.4.4.1"
          - generic [ref=e404]:
            - generic [ref=e405]: Commissione della gestione e delle finanze (CGF)
            - paragraph [ref=e406]: Commissione parlamentare permanente che sorveglia gestione finanziaria Governo. Circa 15 deputati del Gran Consiglio.
          - generic [ref=e412]:
            - generic [ref=e413]: Corte dei conti
            - paragraph [ref=e414]: ❌ Il Canton Ticino NON ha una Corte dei conti autonoma (a differenza di GE, VD). Il controllo è tramite CCF + CGF.
      - generic [ref=e419]:
        - heading "Dati Autorità - Verificati" [level=4] [ref=e420]
        - generic [ref=e421]:
          - generic [ref=e422]:
            - text: "• Consiglio di Stato (consulenze/perizie 2025): CHF 1'014'905"
            - generic [ref=e423]: ✅ Rendiconto CdS 2025 - Spese esterne consulenze, non stipendi CdS (stipendi in voce 30 Personale)
          - generic [ref=e424]:
            - text: "• Gran Consiglio (indennità deputati 2025): CHF 1'777'559 nette"
            - generic [ref=e425]: ✅ Resoconto Art. 166a LGC - 90 deputati, indennità + trasferte CHF 162'763
          - generic [ref=e426]:
            - text: "• FTE totali Canton Ticino: NON DISPONIBILE nel Preventivo"
            - generic [ref=e427]: "Dove trovarlo: USTAT \"Il mercato del lavoro nel settore pubblico ticinese\" (pubblicazione annuale) o Consuntivo dettagliato"
          - generic [ref=e428]:
            - text: "• Stipendi membri CdS: NON PUBBLICATI separatamente"
            - generic [ref=e429]: "Inclusi nella voce 30 Personale aggregata (CHF 1'219.7M totale 2025). Base legale: LStip art. 3"
          - generic [ref=e430]:
            - text: "• Budget CCF: NON DISPONIBILE"
            - generic [ref=e431]: "Dove trovarlo: Rapporto annuale CCF o Consuntivo dettagliato"
    - generic [ref=e434]:
      - generic [ref=e435]:
        - heading [level=2] [ref=e436]:
          - text: 🏘️ Dati per comune
          - button "Condividi" [ref=e437] [cursor=pointer]
        - paragraph [ref=e441]: Confronta moltiplicatori, entrate, uscite e debito pro capite dei comuni ticinesi.
        - generic [ref=e442]:
          - paragraph [ref=e443]: 📊 Dati ufficiali 2024
          - paragraph [ref=e444]: Dati estratti dal Rapporto 'I conti dei comuni nel 2024', Allegato statistico tab.8. Popolazione, moltiplicatori fiscali, risorse e indice di forza finanziaria per 106 comuni.
      - searchbox "Cerca un comune..." [ref=e446]
    - generic [ref=e450]:
      - generic [ref=e451]:
        - heading [level=2] [ref=e452]:
          - text: 💡 Quanto costa? Le formule spiegate
          - button "Condividi" [ref=e453] [cursor=pointer]
        - paragraph [ref=e457]: Voci di spesa tradotte in costi per abitante, al giorno e per famiglia. Tutte le formule sono visibili per massima trasparenza.
      - generic [ref=e458]:
        - generic [ref=e459]:
          - generic [ref=e460]:
            - img "Consiglio di Stato" [ref=e461]: 🏛️
            - generic [ref=e462]:
              - heading "Consiglio di Stato" [level=3] [ref=e463]
              - paragraph [ref=e464]: Costo dell'organo esecutivo del cantone (5 consiglieri + segretariato)
          - generic [ref=e465]:
            - generic [ref=e466]: "Formula:"
            - generic [ref=e467]: 3'500'000 CHF ÷ 362'200 abitanti
          - generic [ref=e468]:
            - generic [ref=e469]:
              - generic [ref=e470]: Per abitante
              - generic [ref=e471]: 9.67 CHF/anno
            - generic [ref=e472]:
              - generic [ref=e473]: Al giorno
              - generic [ref=e474]: 0.03 CHF/giorno
            - generic [ref=e475]:
              - generic [ref=e476]: Per famiglia
              - generic [ref=e477]: 20.30 CHF/anno
          - generic [ref=e478]: 💡 Circa 10 franchi all'anno per abitante, meno di 3 centesimi al giorno
        - generic [ref=e479]:
          - generic [ref=e480]:
            - img "Contributi cantonali alla salute" [ref=e481]: 💊
            - generic [ref=e482]:
              - heading "Contributi cantonali alla salute" [level=3] [ref=e483]
              - paragraph [ref=e484]: Sussidi per i premi dell'assicurazione malattia
          - generic [ref=e485]:
            - generic [ref=e486]: "Formula:"
            - generic [ref=e487]: 332'000'000 CHF ÷ 362'200 abitanti
          - generic [ref=e488]:
            - generic [ref=e489]:
              - generic [ref=e490]: Per abitante
              - generic [ref=e491]: 917 CHF/anno
            - generic [ref=e492]:
              - generic [ref=e493]: Al giorno
              - generic [ref=e494]: 2.51 CHF/giorno
            - generic [ref=e495]:
              - generic [ref=e496]: Per famiglia
              - generic [ref=e497]: 1'925 CHF/anno
          - generic [ref=e498]: 💡 Il cantone paga quasi 1000 franchi all'anno per ogni ticinese per aiutare con i premi della cassa malati
        - generic [ref=e499]:
          - generic [ref=e500]:
            - img "Formazione" [ref=e501]: 🎓
            - generic [ref=e502]:
              - heading "Formazione" [level=3] [ref=e503]
              - paragraph [ref=e504]: Scuole pubbliche, università, formazione professionale
          - generic [ref=e505]:
            - generic [ref=e506]: "Formula:"
            - generic [ref=e507]: 850'000'000 CHF ÷ 362'200 abitanti
          - generic [ref=e508]:
            - generic [ref=e509]:
              - generic [ref=e510]: Per abitante
              - generic [ref=e511]: 2'347 CHF/anno
            - generic [ref=e512]:
              - generic [ref=e513]: Al giorno
              - generic [ref=e514]: 6.43 CHF/giorno
            - generic [ref=e515]:
              - generic [ref=e516]: Per famiglia
              - generic [ref=e517]: 4'929 CHF/anno
          - generic [ref=e518]: 💡 Ogni famiglia ticinese "investe" circa 5000 franchi all'anno nell'educazione pubblica
        - generic [ref=e519]:
          - generic [ref=e520]:
            - img "Trasporti pubblici" [ref=e521]: 🚆
            - generic [ref=e522]:
              - heading "Trasporti pubblici" [level=3] [ref=e523]
              - paragraph [ref=e524]: Contributi a FFS, TPL, e altre aziende di trasporto
          - generic [ref=e525]:
            - generic [ref=e526]: "Formula:"
            - generic [ref=e527]: 180'000'000 CHF ÷ 362'200 abitanti
          - generic [ref=e528]:
            - generic [ref=e529]:
              - generic [ref=e530]: Per abitante
              - generic [ref=e531]: 497 CHF/anno
            - generic [ref=e532]:
              - generic [ref=e533]: Al giorno
              - generic [ref=e534]: 1.36 CHF/giorno
            - generic [ref=e535]:
              - generic [ref=e536]: Per famiglia
              - generic [ref=e537]: 1'044 CHF/anno
          - generic [ref=e538]: 💡 Anche chi non prende mai il treno contribuisce con 500 franchi all'anno ai trasporti pubblici
        - generic [ref=e539]:
          - generic [ref=e540]:
            - img "Polizia cantonale" [ref=e541]: 👮
            - generic [ref=e542]:
              - heading "Polizia cantonale" [level=3] [ref=e543]
              - paragraph [ref=e544]: Sicurezza pubblica e ordine
          - generic [ref=e545]:
            - generic [ref=e546]: "Formula:"
            - generic [ref=e547]: 120'000'000 CHF ÷ 362'200 abitanti
          - generic [ref=e548]:
            - generic [ref=e549]:
              - generic [ref=e550]: Per abitante
              - generic [ref=e551]: 331 CHF/anno
            - generic [ref=e552]:
              - generic [ref=e553]: Al giorno
              - generic [ref=e554]: 0.91 CHF/giorno
            - generic [ref=e555]:
              - generic [ref=e556]: Per famiglia
              - generic [ref=e557]: 696 CHF/anno
          - generic [ref=e558]: 💡 Meno di 1 franco al giorno per la sicurezza pubblica
        - generic [ref=e559]:
          - generic [ref=e560]:
            - img "Cultura e tempo libero" [ref=e561]: 🎭
            - generic [ref=e562]:
              - heading "Cultura e tempo libero" [level=3] [ref=e563]
              - paragraph [ref=e564]: Musei, teatri, biblioteche, sport
          - generic [ref=e565]:
            - generic [ref=e566]: "Formula:"
            - generic [ref=e567]: 45'000'000 CHF ÷ 362'200 abitanti
          - generic [ref=e568]:
            - generic [ref=e569]:
              - generic [ref=e570]: Per abitante
              - generic [ref=e571]: 124 CHF/anno
            - generic [ref=e572]:
              - generic [ref=e573]: Al giorno
              - generic [ref=e574]: 0.34 CHF/giorno
            - generic [ref=e575]:
              - generic [ref=e576]: Per famiglia
              - generic [ref=e577]: 261 CHF/anno
          - generic [ref=e578]: 💡 Ogni ticinese "paga" l'equivalente di un caffè all'anno per la cultura
    - generic [ref=e581]:
      - generic [ref=e582]:
        - generic [ref=e583]:
          - generic [ref=e584]: 📋
          - generic [ref=e585]: Preventivo 2027 - In attesa approvazione
        - heading [level=2] [ref=e586]:
          - text: Sguardo al Budget 2027
          - button "Condividi" [ref=e587] [cursor=pointer]
        - paragraph [ref=e591]: Il Preventivo 2027 è stato licenziato dal Consiglio di Stato il 30 settembre 2026. Approvazione finale da parte del Gran Consiglio prevista per dicembre 2026.
      - generic [ref=e592]:
        - generic [ref=e593]:
          - generic [ref=e594]: Disavanzo previsto
          - generic [ref=e595]: "-98.5M"
          - generic [ref=e596]: CHF -274 per abitante
        - generic [ref=e597]:
          - generic [ref=e598]: Spese totali
          - generic [ref=e599]: 4'730M
          - generic [ref=e600]: +3.2% vs C2025
        - generic [ref=e601]:
          - generic [ref=e602]: Ricavi totali
          - generic [ref=e603]: 4'632M
          - generic [ref=e604]: +1.8% vs C2025
      - generic [ref=e605]:
        - paragraph [ref=e606]: ⚠️ Nota importante
        - paragraph [ref=e607]:
          - text: Il focus di questo sito è sui
          - strong [ref=e608]: dati effettivi
          - text: (Consuntivo 2025). I numeri del Preventivo 2027 sono previsioni soggette a modifica e approvazione parlamentare. Per analisi dettagliate, consultare il
          - link "Messaggio 8731 completo" [ref=e609] [cursor=pointer]:
            - /url: https://www4.ti.ch/dfe/dr/finanze/dati-finanziari/p2027/
          - text: .
  - contentinfo [ref=e610]:
    - generic [ref=e612]:
      - generic [ref=e613]:
        - generic [ref=e614]: Where does Ticino money go
        - paragraph [ref=e615]: A financial transparency project. All data comes from official sources of Canton Ticino and the Swiss Confederation.
      - generic [ref=e616]: This site is independent and is not affiliated with the cantonal government.
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | const BASE_URL = 'https://tiero.github.io/dove-vanno-soldi-ticino';
  4   | const VIEWPORTS = [
  5   |   { width: 320, height: 568, name: '320px' },
  6   |   { width: 375, height: 667, name: '375px' },
  7   |   { width: 430, height: 932, name: '430px' },
  8   | ];
  9   | 
  10  | for (const viewport of VIEWPORTS) {
  11  |   test.describe(`All pages at ${viewport.name}`, () => {
  12  |     test.use({ viewport });
  13  | 
  14  |     test('Home page: no empty charts, nav works, no console errors', async ({ page }) => {
  15  |       const errors: string[] = [];
  16  |       page.on('pageerror', err => errors.push(err.message));
  17  |       page.on('console', msg => {
  18  |         if (msg.type() === 'error') errors.push(msg.text());
  19  |       });
  20  | 
  21  |       await page.goto(`${BASE_URL}/`);
  22  |       
  23  |       // Check hero metrics loaded
  24  |       await expect(page.locator('#hero-metrics')).toBeVisible();
  25  |       const heroText = await page.locator('#hero-metrics').textContent();
  26  |       expect(heroText).toContain('M'); // Should have numbers in millions
  27  |       
  28  |       // Check charts exist and have content
  29  |       const charts = ['debt-history-chart', 'deficit-history-chart'];
  30  |       for (const chartId of charts) {
  31  |         const chart = page.locator(`#${chartId}`);
  32  |         if (await chart.count() > 0) {
  33  |           await expect(chart).toBeVisible();
  34  |           // Wait for chart to render
  35  |           await page.waitForTimeout(1000);
  36  |           // Check chart has either SVG or canvas
  37  |           const hasContent = await chart.locator('svg, canvas').count();
  38  |           expect(hasContent).toBeGreaterThan(0);
  39  |         }
  40  |       }
  41  |       
  42  |       // Test mobile menu
  43  |       const menuButton = page.locator('#mobile-menu-button');
  44  |       if (await menuButton.isVisible()) {
  45  |         await menuButton.click();
  46  |         await expect(page.locator('#mobile-menu')).toBeVisible();
  47  |         await page.click('body'); // Close menu
  48  |       }
  49  |       
  50  |       // Test theme toggle
  51  |       await page.click('#theme-toggle');
  52  |       await page.waitForTimeout(300);
  53  |       const isDark = await page.locator('html').evaluate(el => el.classList.contains('dark'));
  54  |       expect(typeof isDark).toBe('boolean');
  55  |       
> 56  |       expect(errors).toEqual([]);
      |                      ^ Error: expect(received).toEqual(expected) // deep equality
  57  |     });
  58  | 
  59  |     test('Storia debito page: chart renders, nav works, no hardcoded numbers', async ({ page }) => {
  60  |       const errors: string[] = [];
  61  |       page.on('pageerror', err => errors.push(err.message));
  62  |       page.on('console', msg => {
  63  |         if (msg.type() === 'error') errors.push(msg.text());
  64  |       });
  65  | 
  66  |       await page.goto(`${BASE_URL}/storia-debito.html`);
  67  |       
  68  |       // Wait for page to load
  69  |       await page.waitForLoadState('networkidle');
  70  |       
  71  |       // Check title
  72  |       await expect(page.locator('h1')).toContainText('debito');
  73  |       
  74  |       // Check chart exists and has canvas
  75  |       const chart = page.locator('#debito-chart');
  76  |       await expect(chart).toBeVisible();
  77  |       
  78  |       // Check chart is not empty (has actual rendering)
  79  |       const chartParent = page.locator('#grafico-debito');
  80  |       await expect(chartParent).toBeVisible();
  81  |       const hasCanvas = await chartParent.locator('canvas').count();
  82  |       expect(hasCanvas).toBe(1);
  83  |       
  84  |       // Verify NO hardcoded removed numbers appear in page text
  85  |       const bodyText = await page.textContent('body');
  86  |       expect(bodyText).not.toContain('584M in 2 anni'); // Removed 2003-04 claim
  87  |       expect(bodyText).not.toContain('-353M oro BNS'); // Removed 2005 claim
  88  |       expect(bodyText).not.toContain('901M'); // Removed 2000 value
  89  |       
  90  |       // Test mobile menu
  91  |       const menuButton = page.locator('#mobile-menu-button');
  92  |       if (await menuButton.isVisible()) {
  93  |         await menuButton.click();
  94  |         await expect(page.locator('#mobile-menu')).toBeVisible();
  95  |       }
  96  |       
  97  |       // Test theme toggle
  98  |       await page.click('#theme-toggle');
  99  |       await page.waitForTimeout(300);
  100 |       
  101 |       // Test language selector (if visible)
  102 |       const langButton = page.locator('#lang-button');
  103 |       if (await langButton.count() > 0) {
  104 |         await langButton.click();
  105 |         await expect(page.locator('#lang-menu')).toBeVisible();
  106 |       }
  107 |       
  108 |       expect(errors).toEqual([]);
  109 |     });
  110 | 
  111 |     test('Tassazione imprese page: chart renders, nav works', async ({ page }) => {
  112 |       const errors: string[] = [];
  113 |       page.on('pageerror', err => errors.push(err.message));
  114 |       page.on('console', msg => {
  115 |         if (msg.type() === 'error') errors.push(msg.text());
  116 |       });
  117 | 
  118 |       await page.goto(`${BASE_URL}/tassazione-imprese.html`);
  119 |       
  120 |       await page.waitForLoadState('networkidle');
  121 |       
  122 |       // Check title
  123 |       await expect(page.locator('h1')).toContainText('Tassazione');
  124 |       
  125 |       // Check chart exists
  126 |       const chart = page.locator('#gettito-chart');
  127 |       await expect(chart).toBeVisible();
  128 |       const hasCanvas = await page.locator('canvas#gettito-chart').count();
  129 |       expect(hasCanvas).toBe(1);
  130 |       
  131 |       // Test mobile menu
  132 |       const menuButton = page.locator('#mobile-menu-button');
  133 |       if (await menuButton.isVisible()) {
  134 |         await menuButton.click();
  135 |         await expect(page.locator('#mobile-menu')).toBeVisible();
  136 |       }
  137 |       
  138 |       // Test theme toggle
  139 |       await page.click('#theme-toggle');
  140 |       await page.waitForTimeout(300);
  141 |       
  142 |       expect(errors).toEqual([]);
  143 |     });
  144 | 
  145 |     test('Metodologia page: loads correctly', async ({ page }) => {
  146 |       const errors: string[] = [];
  147 |       page.on('pageerror', err => errors.push(err.message));
  148 | 
  149 |       const response = await page.goto(`${BASE_URL}/metodologia.html`);
  150 |       expect(response?.status()).toBe(200);
  151 |       
  152 |       await expect(page.locator('h1')).toContainText('Metodologia');
  153 |       
  154 |       expect(errors).toEqual([]);
  155 |     });
  156 |   });
```
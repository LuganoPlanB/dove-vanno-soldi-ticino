# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: all-pages.spec.ts >> All pages at 430px >> Home page: no empty charts, nav works, no console errors
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
        - link "Methodology" [ref=e9] [cursor=pointer]:
          - /url: ./metodologia.html
        - button "Change language" [ref=e11] [cursor=pointer]:
          - generic [ref=e14]: EN
        - button "Toggle theme" [active] [ref=e15] [cursor=pointer]
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
        - generic [ref=e78]: Tocca per i dettagli
        - img [ref=e79]:
          - generic [ref=e80] [cursor=pointer]: Social welfare
          - generic [ref=e83] [cursor=pointer]: Education
          - generic [ref=e86] [cursor=pointer]: Public health
          - generic [ref=e89] [cursor=pointer]: Financeand taxes
          - generic [ref=e92] [cursor=pointer]: Generaladministration
          - generic [ref=e95] [cursor=pointer]: Public order,security and
          - generic [ref=e98] [cursor=pointer]: Transportand
          - generic [ref=e101] [cursor=pointer]
          - generic [ref=e103] [cursor=pointer]
          - generic [ref=e105] [cursor=pointer]
      - generic [ref=e107]:
        - generic [ref=e108]:
          - heading "Cantonal public debt" [level=3] [ref=e109]
          - img [ref=e110]:
            - generic [ref=e111]:
              - generic [ref=e112]:
                - generic [ref=e114]: "2023"
                - generic [ref=e116]: "2024"
                - generic [ref=e118]: "2025"
                - generic [ref=e120]: "2026"
                - generic [ref=e122]: "2027"
              - generic [ref=e124]:
                - generic [ref=e125]: 0.00 CHF
                - generic [ref=e127]: 1.00 CHF
                - generic [ref=e129]: 2.00 CHF
                - generic [ref=e131]: 3.00 CHF
        - generic [ref=e134]:
          - heading "Annual deficit" [level=3] [ref=e135]
          - img [ref=e136]:
            - generic [ref=e137]:
              - generic [ref=e138]:
                - generic [ref=e140]: "2023"
                - generic [ref=e142]: "2024"
                - generic [ref=e144]: "2025"
                - generic [ref=e146]: "2026"
                - generic [ref=e148]: "2027"
              - generic [ref=e150]:
                - generic [ref=e151]: 0 M
                - generic [ref=e153]: 50 M
                - generic [ref=e155]: 100 M
      - generic [ref=e158]:
        - heading "2025-2027 Comparison" [level=3] [ref=e159]
        - generic [ref=e160]: Evoluzione delle principali voci di bilancio
        - table [ref=e162]:
          - rowgroup [ref=e163]:
            - row [ref=e164]:
              - columnheader "Voce" [ref=e165]
              - columnheader "2025" [ref=e166]
              - columnheader "2027" [ref=e167]
              - columnheader "Δ%" [ref=e168]
          - rowgroup [ref=e169]:
            - row [ref=e170]:
              - cell "Cantonal contributions" [ref=e171]
              - cell "318" [ref=e172]
              - cell "332" [ref=e173]
              - cell "↑ 4.4%" [ref=e174]
            - row [ref=e175]:
              - cell "Average premium TI" [ref=e176]
              - cell "491" [ref=e177]
              - cell "520" [ref=e178]
              - cell "↑ 5.9%" [ref=e179]
            - row [ref=e180]:
              - cell "Average premium CH" [ref=e181]
              - cell "390" [ref=e182]
              - cell "412" [ref=e183]
              - cell "↑ 5.6%" [ref=e184]
        - generic [ref=e185]:
          - generic [ref=e186]: ↑ Aumento
          - generic [ref=e187]: ↓ Diminuzione
          - generic [ref=e188]: → Stabile
      - generic [ref=e190]:
        - heading "2027 Budget - Overview" [level=3] [ref=e191]
        - img [ref=e192]:
          - generic [ref=e193]:
            - generic [ref=e196]:
              - generic [ref=e197]: 0.0Mia
              - generic [ref=e199]: 1.0Mia
              - generic [ref=e201]: 2.0Mia
              - generic [ref=e203]: 3.0Mia
              - generic [ref=e205]: 4.0Mia
            - generic [ref=e207] [cursor=pointer]
            - generic [ref=e208] [cursor=pointer]
            - generic [ref=e209] [cursor=pointer]
            - generic [ref=e210]: Current
            - generic [ref=e211]: expenditure
            - generic [ref=e212]: Current
            - generic [ref=e213]: revenue
            - generic [ref=e214]: Investments
    - generic [ref=e218]:
      - generic [ref=e219]:
        - heading "Stato dei dati" [level=2] [ref=e220]
        - paragraph [ref=e221]: Panoramica completa dei dati disponibili e delle limitazioni
      - generic [ref=e222]:
        - generic [ref=e223]:
          - generic [ref=e224]: Disponibili
          - list [ref=e228]:
            - listitem [ref=e229]: ✓ Consuntivo 2025 (effettivo)
            - listitem [ref=e230]: ✓ Preventivo 2026 (in corso)
            - listitem [ref=e231]: ✓ Serie storiche verificate
            - listitem [ref=e232]: ✓ Dati popolazione
            - listitem [ref=e233]: ✓ Premi e contributi sanità
        - generic [ref=e234]:
          - generic [ref=e235]: Mancanti
          - list [ref=e239]:
            - listitem [ref=e240]: ⏳ Consuntivi 2024, 2026
            - listitem [ref=e241]: ⏳ Spese per dipartimento
            - listitem [ref=e242]: ⏳ Serie storiche pre-2023
      - generic [ref=e243]:
        - link "Metodologia completa" [ref=e244] [cursor=pointer]:
          - /url: ./metodologia.html
        - link "Codice sorgente" [ref=e248] [cursor=pointer]:
          - /url: https://github.com/tiero/dove-vanno-soldi-ticino
    - generic [ref=e254]:
      - generic [ref=e255]:
        - heading [level=2] [ref=e256]:
          - text: "💰 Amministrazione: dove vanno i soldi?"
          - button "Condividi" [ref=e257] [cursor=pointer]
        - paragraph [ref=e261]: "Breakdown economico dettagliato: stipendi, consulenze, IT, locazioni, energia e altri costi di funzionamento."
        - generic [ref=e262]:
          - paragraph [ref=e263]: 📊 Classificazione per natura economica (MCA2)
          - paragraph [ref=e264]: Il Modello Contabile Armonizzato 2 classifica le spese per TIPO di costo (personale, beni, servizi) invece che per FUNZIONE (salute, educazione).
          - generic [ref=e265]:
            - generic [ref=e266]:
              - generic [ref=e267]: ✅
              - text: VERIFICATO
            - generic [ref=e268]:
              - generic [ref=e269]: 📊
              - text: AGGREGATO
            - generic [ref=e270]:
              - generic [ref=e271]: ⚠️
              - text: STIMATO
            - generic [ref=e272]:
              - generic [ref=e273]: ❌
              - text: NON DISPONIBILE
        - generic [ref=e274]:
          - paragraph [ref=e275]: ✅ Dati verificati
          - paragraph [ref=e276]:
            - text: Il Consuntivo 2025 (Messaggio 8672) pubblica i dati effettivi con il
            - strong [ref=e277]: Conto economico per natura
            - text: completo. Tutti i numeri mostrati sono verificabili contro il documento ufficiale.
      - generic [ref=e278]:
        - heading "Spese per natura economica 2025 (Consuntivo)" [level=3] [ref=e279]
        - paragraph [ref=e280]: Clicca su ogni riquadro per vedere dettagli. I colori indicano la qualità del dato.
    - generic [ref=e284]:
      - generic [ref=e285]:
        - 'heading "Healthcare spending: explanation for non-experts" [level=2] [ref=e286]'
        - paragraph [ref=e287]: Healthcare represents one of the main items in the cantonal budget. Here's what you need to know.
      - generic [ref=e288]:
        - heading "Frequently asked question" [level=3] [ref=e289]
        - generic [ref=e290]:
          - paragraph [ref=e291]: Why does the Canton spend money on healthcare if I already pay health insurance premiums every month?
          - paragraph [ref=e292]: Health insurance only covers basic care. The Canton must pay (by federal law) 55% of hospital admissions, help those who cannot afford premiums, and pay for extra services not covered by LAMal (elderly care, prevention, etc.).
          - generic [ref=e293]:
            - group [ref=e294]:
              - generic "1. LAMal only covers basic care" [ref=e295] [cursor=pointer]
            - group [ref=e296]:
              - generic "2. Canton required to pay 55% of hospitals" [ref=e297] [cursor=pointer]
            - group [ref=e298]:
              - generic "3. Very high premiums in Ticino, many cannot afford them" [ref=e299] [cursor=pointer]
            - group [ref=e300]:
              - generic "4. Extra services for elderly and chronically ill" [ref=e301] [cursor=pointer]
            - group [ref=e302]:
              - generic "5. Prevention and public health" [ref=e303] [cursor=pointer]
      - generic [ref=e304]:
        - generic [ref=e305]:
          - heading "Verified data" [level=3] [ref=e310]
          - generic [ref=e311]:
            - generic [ref=e312]:
              - generic [ref=e313]: 627 M CHF
              - generic [ref=e314]: "\"Public health\" function 2027"
              - generic [ref=e315]: "Source: P2027_spese_02.pdf"
            - generic [ref=e316]:
              - generic [ref=e317]: 13.3% of total budget
              - generic [ref=e318]: 1'731 CHF per resident
        - generic [ref=e319]:
          - heading "RIPAM (premium reduction)" [level=3] [ref=e324]
          - generic [ref=e325]:
            - generic [ref=e326]:
              - generic [ref=e327]: 332 M CHF
              - generic [ref=e328]: Classified in "Social welfare"
            - generic [ref=e329]: ⚠️ RIPAM is classified in "Social welfare" function (not "Public health") because it is a direct transfer to families.
      - generic [ref=e330]:
        - heading "Key terms glossary" [level=3] [ref=e331]
        - generic [ref=e332]:
          - generic [ref=e333]:
            - generic [ref=e334]: LAMal (Federal Health Insurance Act)
            - paragraph [ref=e335]: The mandatory health insurance that every person residing in Switzerland must have. Every month you pay a premium to your health insurer (e.g. Helsana, CSS, Assura).
            - generic [ref=e336]: "Legal basis: RS 832.10"
          - generic [ref=e337]:
            - generic [ref=e338]: Transfer expenses
            - paragraph [ref=e339]: Money that the Canton 'transfers' to others (municipalities, hospitals, insurers, families) instead of using it directly for cantonal salaries or materials.
            - generic [ref=e340]: "Examples: RIPAM (transfer to insurers), hospital quota (transfer to hospitals), PC (transfer to elderly)"
          - generic [ref=e341]:
            - generic [ref=e342]: Cantonal quota 55% (hospital financing)
            - paragraph [ref=e343]: "When you are hospitalized, the cost is split by federal law: the Canton pays 55%, your health insurance pays 45%. You only pay the normal deductible."
            - generic [ref=e344]: "Legal basis: LAMal art. 49a"
          - generic [ref=e345]:
            - generic [ref=e346]: PC (Supplementary Benefits AVS/AI)
            - paragraph [ref=e347]: Economic aid for elderly and people with disabilities when pension (AVS or AI) is not enough to live. Also includes contributions for extra health expenses (dentist, glasses, non-reimbursed drugs).
      - generic [ref=e352]:
        - heading "Data NOT available in 2027 Budget" [level=4] [ref=e353]
        - paragraph [ref=e354]: Message 8731 does not contain a detailed breakdown of health spending by individual item. The 627M is an aggregate.
        - generic [ref=e355]:
          - generic [ref=e356]:
            - generic [ref=e357]: •
            - generic [ref=e358]:
              - text: "Hospital contributions: NOT AVAILABLE"
              - generic [ref=e359]: "Where to find it: Detailed accounts (March), Annual reports EOC/OSC"
          - generic [ref=e360]:
            - generic [ref=e361]: •
            - generic [ref=e362]:
              - text: "PC health quota: NOT AVAILABLE"
              - generic [ref=e363]: "Where to find it: Accounts, Economic account by nature"
    - generic [ref=e366]:
      - generic [ref=e367]:
        - 'heading "🏛️ Amministrazione cantonale: chi controlla i controllori?" [level=2] [ref=e368]'
        - paragraph [ref=e369]: Quanto costa l'amministrazione pubblica e chi controlla che i soldi siano spesi bene?
      - generic [ref=e370]:
        - generic [ref=e371]:
          - generic [ref=e372]: Spesa totale 2025
          - generic [ref=e373]: —
          - generic [ref=e374]: Dato C2025 in verifica
          - generic [ref=e375]: (no printed total found)
        - generic [ref=e376]:
          - generic [ref=e377]: "% del bilancio"
          - generic [ref=e378]: —
          - generic [ref=e379]: Dato in verifica
        - generic [ref=e381]:
          - generic [ref=e382]: Per abitante
          - generic [ref=e383]: —
          - generic [ref=e384]: Dato in verifica
      - generic [ref=e385]:
        - heading "🔍 Chi controlla?" [level=3] [ref=e386]
        - generic [ref=e387]:
          - generic [ref=e393]:
            - generic [ref=e394]: Controllo cantonale delle finanze (CCF)
            - paragraph [ref=e395]: I "revisori dei conti" del Cantone. Controllano che i soldi pubblici siano spesi correttamente e legalmente. Indipendente dal Governo, risponde al Parlamento.
            - generic [ref=e396]: "Base legale: Legge 2.4.4.1"
          - generic [ref=e402]:
            - generic [ref=e403]: Commissione della gestione e delle finanze (CGF)
            - paragraph [ref=e404]: Commissione parlamentare permanente che sorveglia gestione finanziaria Governo. Circa 15 deputati del Gran Consiglio.
          - generic [ref=e410]:
            - generic [ref=e411]: Corte dei conti
            - paragraph [ref=e412]: ❌ Il Canton Ticino NON ha una Corte dei conti autonoma (a differenza di GE, VD). Il controllo è tramite CCF + CGF.
      - generic [ref=e417]:
        - heading "Dati Autorità - Verificati" [level=4] [ref=e418]
        - generic [ref=e419]:
          - generic [ref=e420]:
            - text: "• Consiglio di Stato (consulenze/perizie 2025): CHF 1'014'905"
            - generic [ref=e421]: ✅ Rendiconto CdS 2025 - Spese esterne consulenze, non stipendi CdS (stipendi in voce 30 Personale)
          - generic [ref=e422]:
            - text: "• Gran Consiglio (indennità deputati 2025): CHF 1'777'559 nette"
            - generic [ref=e423]: ✅ Resoconto Art. 166a LGC - 90 deputati, indennità + trasferte CHF 162'763
          - generic [ref=e424]:
            - text: "• FTE totali Canton Ticino: NON DISPONIBILE nel Preventivo"
            - generic [ref=e425]: "Dove trovarlo: USTAT \"Il mercato del lavoro nel settore pubblico ticinese\" (pubblicazione annuale) o Consuntivo dettagliato"
          - generic [ref=e426]:
            - text: "• Stipendi membri CdS: NON PUBBLICATI separatamente"
            - generic [ref=e427]: "Inclusi nella voce 30 Personale aggregata (CHF 1'219.7M totale 2025). Base legale: LStip art. 3"
          - generic [ref=e428]:
            - text: "• Budget CCF: NON DISPONIBILE"
            - generic [ref=e429]: "Dove trovarlo: Rapporto annuale CCF o Consuntivo dettagliato"
    - generic [ref=e432]:
      - generic [ref=e433]:
        - heading [level=2] [ref=e434]:
          - text: 🏘️ Dati per comune
          - button "Condividi" [ref=e435] [cursor=pointer]
        - paragraph [ref=e439]: Confronta moltiplicatori, entrate, uscite e debito pro capite dei comuni ticinesi.
        - generic [ref=e440]:
          - paragraph [ref=e441]: 📊 Dati ufficiali 2024
          - paragraph [ref=e442]: Dati estratti dal Rapporto 'I conti dei comuni nel 2024', Allegato statistico tab.8. Popolazione, moltiplicatori fiscali, risorse e indice di forza finanziaria per 106 comuni.
      - searchbox "Cerca un comune..." [ref=e444]
    - generic [ref=e448]:
      - generic [ref=e449]:
        - heading [level=2] [ref=e450]:
          - text: 💡 Quanto costa? Le formule spiegate
          - button "Condividi" [ref=e451] [cursor=pointer]
        - paragraph [ref=e455]: Voci di spesa tradotte in costi per abitante, al giorno e per famiglia. Tutte le formule sono visibili per massima trasparenza.
      - generic [ref=e456]:
        - generic [ref=e457]:
          - generic [ref=e458]:
            - img "Consiglio di Stato" [ref=e459]: 🏛️
            - generic [ref=e460]:
              - heading "Consiglio di Stato" [level=3] [ref=e461]
              - paragraph [ref=e462]: Costo dell'organo esecutivo del cantone (5 consiglieri + segretariato)
          - generic [ref=e463]:
            - generic [ref=e464]: "Formula:"
            - generic [ref=e465]: 3'500'000 CHF ÷ 362'200 abitanti
          - generic [ref=e466]:
            - generic [ref=e467]:
              - generic [ref=e468]: Per abitante
              - generic [ref=e469]: 9.67 CHF/anno
            - generic [ref=e470]:
              - generic [ref=e471]: Al giorno
              - generic [ref=e472]: 0.03 CHF/giorno
            - generic [ref=e473]:
              - generic [ref=e474]: Per famiglia
              - generic [ref=e475]: 20.30 CHF/anno
          - generic [ref=e476]: 💡 Circa 10 franchi all'anno per abitante, meno di 3 centesimi al giorno
        - generic [ref=e477]:
          - generic [ref=e478]:
            - img "Contributi cantonali alla salute" [ref=e479]: 💊
            - generic [ref=e480]:
              - heading "Contributi cantonali alla salute" [level=3] [ref=e481]
              - paragraph [ref=e482]: Sussidi per i premi dell'assicurazione malattia
          - generic [ref=e483]:
            - generic [ref=e484]: "Formula:"
            - generic [ref=e485]: 332'000'000 CHF ÷ 362'200 abitanti
          - generic [ref=e486]:
            - generic [ref=e487]:
              - generic [ref=e488]: Per abitante
              - generic [ref=e489]: 917 CHF/anno
            - generic [ref=e490]:
              - generic [ref=e491]: Al giorno
              - generic [ref=e492]: 2.51 CHF/giorno
            - generic [ref=e493]:
              - generic [ref=e494]: Per famiglia
              - generic [ref=e495]: 1'925 CHF/anno
          - generic [ref=e496]: 💡 Il cantone paga quasi 1000 franchi all'anno per ogni ticinese per aiutare con i premi della cassa malati
        - generic [ref=e497]:
          - generic [ref=e498]:
            - img "Formazione" [ref=e499]: 🎓
            - generic [ref=e500]:
              - heading "Formazione" [level=3] [ref=e501]
              - paragraph [ref=e502]: Scuole pubbliche, università, formazione professionale
          - generic [ref=e503]:
            - generic [ref=e504]: "Formula:"
            - generic [ref=e505]: 850'000'000 CHF ÷ 362'200 abitanti
          - generic [ref=e506]:
            - generic [ref=e507]:
              - generic [ref=e508]: Per abitante
              - generic [ref=e509]: 2'347 CHF/anno
            - generic [ref=e510]:
              - generic [ref=e511]: Al giorno
              - generic [ref=e512]: 6.43 CHF/giorno
            - generic [ref=e513]:
              - generic [ref=e514]: Per famiglia
              - generic [ref=e515]: 4'929 CHF/anno
          - generic [ref=e516]: 💡 Ogni famiglia ticinese "investe" circa 5000 franchi all'anno nell'educazione pubblica
        - generic [ref=e517]:
          - generic [ref=e518]:
            - img "Trasporti pubblici" [ref=e519]: 🚆
            - generic [ref=e520]:
              - heading "Trasporti pubblici" [level=3] [ref=e521]
              - paragraph [ref=e522]: Contributi a FFS, TPL, e altre aziende di trasporto
          - generic [ref=e523]:
            - generic [ref=e524]: "Formula:"
            - generic [ref=e525]: 180'000'000 CHF ÷ 362'200 abitanti
          - generic [ref=e526]:
            - generic [ref=e527]:
              - generic [ref=e528]: Per abitante
              - generic [ref=e529]: 497 CHF/anno
            - generic [ref=e530]:
              - generic [ref=e531]: Al giorno
              - generic [ref=e532]: 1.36 CHF/giorno
            - generic [ref=e533]:
              - generic [ref=e534]: Per famiglia
              - generic [ref=e535]: 1'044 CHF/anno
          - generic [ref=e536]: 💡 Anche chi non prende mai il treno contribuisce con 500 franchi all'anno ai trasporti pubblici
        - generic [ref=e537]:
          - generic [ref=e538]:
            - img "Polizia cantonale" [ref=e539]: 👮
            - generic [ref=e540]:
              - heading "Polizia cantonale" [level=3] [ref=e541]
              - paragraph [ref=e542]: Sicurezza pubblica e ordine
          - generic [ref=e543]:
            - generic [ref=e544]: "Formula:"
            - generic [ref=e545]: 120'000'000 CHF ÷ 362'200 abitanti
          - generic [ref=e546]:
            - generic [ref=e547]:
              - generic [ref=e548]: Per abitante
              - generic [ref=e549]: 331 CHF/anno
            - generic [ref=e550]:
              - generic [ref=e551]: Al giorno
              - generic [ref=e552]: 0.91 CHF/giorno
            - generic [ref=e553]:
              - generic [ref=e554]: Per famiglia
              - generic [ref=e555]: 696 CHF/anno
          - generic [ref=e556]: 💡 Meno di 1 franco al giorno per la sicurezza pubblica
        - generic [ref=e557]:
          - generic [ref=e558]:
            - img "Cultura e tempo libero" [ref=e559]: 🎭
            - generic [ref=e560]:
              - heading "Cultura e tempo libero" [level=3] [ref=e561]
              - paragraph [ref=e562]: Musei, teatri, biblioteche, sport
          - generic [ref=e563]:
            - generic [ref=e564]: "Formula:"
            - generic [ref=e565]: 45'000'000 CHF ÷ 362'200 abitanti
          - generic [ref=e566]:
            - generic [ref=e567]:
              - generic [ref=e568]: Per abitante
              - generic [ref=e569]: 124 CHF/anno
            - generic [ref=e570]:
              - generic [ref=e571]: Al giorno
              - generic [ref=e572]: 0.34 CHF/giorno
            - generic [ref=e573]:
              - generic [ref=e574]: Per famiglia
              - generic [ref=e575]: 261 CHF/anno
          - generic [ref=e576]: 💡 Ogni ticinese "paga" l'equivalente di un caffè all'anno per la cultura
    - generic [ref=e579]:
      - generic [ref=e580]:
        - generic [ref=e581]:
          - generic [ref=e582]: 📋
          - generic [ref=e583]: Preventivo 2027 - In attesa approvazione
        - heading [level=2] [ref=e584]:
          - text: Sguardo al Budget 2027
          - button "Condividi" [ref=e585] [cursor=pointer]
        - paragraph [ref=e589]: Il Preventivo 2027 è stato licenziato dal Consiglio di Stato il 30 settembre 2026. Approvazione finale da parte del Gran Consiglio prevista per dicembre 2026.
      - generic [ref=e590]:
        - generic [ref=e591]:
          - generic [ref=e592]: Disavanzo previsto
          - generic [ref=e593]: "-98.5M"
          - generic [ref=e594]: CHF -274 per abitante
        - generic [ref=e595]:
          - generic [ref=e596]: Spese totali
          - generic [ref=e597]: 4'730M
          - generic [ref=e598]: +3.2% vs C2025
        - generic [ref=e599]:
          - generic [ref=e600]: Ricavi totali
          - generic [ref=e601]: 4'632M
          - generic [ref=e602]: +1.8% vs C2025
      - generic [ref=e603]:
        - paragraph [ref=e604]: ⚠️ Nota importante
        - paragraph [ref=e605]:
          - text: Il focus di questo sito è sui
          - strong [ref=e606]: dati effettivi
          - text: (Consuntivo 2025). I numeri del Preventivo 2027 sono previsioni soggette a modifica e approvazione parlamentare. Per analisi dettagliate, consultare il
          - link "Messaggio 8731 completo" [ref=e607] [cursor=pointer]:
            - /url: https://www4.ti.ch/dfe/dr/finanze/dati-finanziari/p2027/
          - text: .
  - contentinfo [ref=e608]:
    - generic [ref=e610]:
      - generic [ref=e611]:
        - generic [ref=e612]: Where does Ticino money go
        - paragraph [ref=e613]: A financial transparency project. All data comes from official sources of Canton Ticino and the Swiss Confederation.
      - generic [ref=e614]: This site is independent and is not affiliated with the cantonal government.
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
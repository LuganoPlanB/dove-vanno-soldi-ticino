# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: all-pages.spec.ts >> All pages at 320px >> Home page: no empty charts, nav works, no console errors
- Location: tests/all-pages.spec.ts:14:5

# Error details

```
Error: expect(received).toBeGreaterThan(expected)

Expected: > 0
Received:   0
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
        - heading "La situazione finanziaria" [level=2] [ref=e55]
        - paragraph [ref=e56]: "Il Canton Ticino affronta sfide finanziarie significative: un deficit in crescita, un debito pubblico che supererà i 3 miliardi di franchi e premi di cassa malattia tra i più alti della Svizzera. Questo sito rende accessibili e comprensibili i dati finanziari ufficiali del Cantone."
      - generic [ref=e61]:
        - generic [ref=e62]: Dati verificati e tracciabili
        - generic [ref=e63]: Ogni numero proviene da fonti ufficiali del Canton Ticino e della Confederazione Svizzera. Tutte le cifre sono state verificate matematicamente con test automatici.
    - generic [ref=e65]:
      - generic [ref=e66]:
        - heading "Where does the money go?" [level=2] [ref=e67]
        - paragraph [ref=e68]: Explore interactive visualizations to understand how the 4.7 billion franc cantonal budget is spent
      - generic [ref=e69]:
        - heading "2027 Spending by function" [level=3] [ref=e71]
        - generic [ref=e72]: Tocca per i dettagli
        - img [ref=e73]:
          - generic [ref=e74] [cursor=pointer]: Social welfare
          - generic [ref=e77] [cursor=pointer]: Education
          - generic [ref=e80] [cursor=pointer]: Public health
          - generic [ref=e83] [cursor=pointer]: Finance and taxes
          - generic [ref=e86] [cursor=pointer]: Generaladministration
          - generic [ref=e89] [cursor=pointer]: Public order,security and
          - generic [ref=e92] [cursor=pointer]: Transportand
          - generic [ref=e95] [cursor=pointer]
          - generic [ref=e97] [cursor=pointer]
          - generic [ref=e99] [cursor=pointer]
      - generic [ref=e101]:
        - generic [ref=e102]:
          - heading "Cantonal public debt" [level=3] [ref=e103]
          - img [ref=e104]:
            - generic [ref=e105]:
              - generic [ref=e106]:
                - generic [ref=e108]: "2023"
                - generic [ref=e110]: "2024"
                - generic [ref=e112]: "2025"
                - generic [ref=e114]: "2026"
                - generic [ref=e116]: "2027"
              - generic [ref=e118]:
                - generic [ref=e119]: 0.00 CHF
                - generic [ref=e121]: 1.00 CHF
                - generic [ref=e123]: 2.00 CHF
                - generic [ref=e125]: 3.00 CHF
        - generic [ref=e128]:
          - heading "Annual deficit" [level=3] [ref=e129]
          - img [ref=e130]:
            - generic [ref=e131]:
              - generic [ref=e132]:
                - generic [ref=e134]: "2023"
                - generic [ref=e136]: "2024"
                - generic [ref=e138]: "2025"
                - generic [ref=e140]: "2026"
                - generic [ref=e142]: "2027"
              - generic [ref=e144]:
                - generic [ref=e145]: 0 M
                - generic [ref=e147]: 50 M
                - generic [ref=e149]: 100 M
      - generic [ref=e152]:
        - heading "2025-2027 Comparison" [level=3] [ref=e153]
        - generic [ref=e154]: Evoluzione delle principali voci di bilancio
        - table [ref=e156]:
          - rowgroup [ref=e157]:
            - row [ref=e158]:
              - columnheader "Voce" [ref=e159]
              - columnheader "2025" [ref=e160]
              - columnheader "2027" [ref=e161]
              - columnheader "Δ%" [ref=e162]
          - rowgroup [ref=e163]:
            - row [ref=e164]:
              - cell "Cantonal contributions" [ref=e165]
              - cell "318" [ref=e166]
              - cell "332" [ref=e167]
              - cell "↑ 4.4%" [ref=e168]
            - row [ref=e169]:
              - cell "Average premium TI" [ref=e170]
              - cell "491" [ref=e171]
              - cell "520" [ref=e172]
              - cell "↑ 5.9%" [ref=e173]
            - row [ref=e174]:
              - cell "Average premium CH" [ref=e175]
              - cell "390" [ref=e176]
              - cell "412" [ref=e177]
              - cell "↑ 5.6%" [ref=e178]
        - generic [ref=e179]:
          - generic [ref=e180]: ↑ Aumento
          - generic [ref=e181]: ↓ Diminuzione
          - generic [ref=e182]: → Stabile
      - generic [ref=e184]:
        - heading "2027 Budget - Overview" [level=3] [ref=e185]
        - img [ref=e186]:
          - generic [ref=e187]:
            - generic [ref=e190]:
              - generic [ref=e191]: 0.0Mia
              - generic [ref=e193]: 1.0Mia
              - generic [ref=e195]: 2.0Mia
              - generic [ref=e197]: 3.0Mia
              - generic [ref=e199]: 4.0Mia
            - generic [ref=e201] [cursor=pointer]
            - generic [ref=e202] [cursor=pointer]
            - generic [ref=e203]: Current
            - generic [ref=e204]: expenditure
            - generic [ref=e205]: Current
            - generic [ref=e206]: revenue
            - generic [ref=e207]: Investments
    - generic [ref=e211]:
      - generic [ref=e212]:
        - heading "Stato dei dati" [level=2] [ref=e213]
        - paragraph [ref=e214]: Panoramica completa dei dati disponibili e delle limitazioni
      - generic [ref=e215]:
        - generic [ref=e216]:
          - generic [ref=e217]: Disponibili
          - list [ref=e221]:
            - listitem [ref=e222]: ✓ Consuntivo 2025 (effettivo)
            - listitem [ref=e223]: ✓ Preventivo 2026 (in corso)
            - listitem [ref=e224]: ✓ Serie storiche verificate
            - listitem [ref=e225]: ✓ Dati popolazione
            - listitem [ref=e226]: ✓ Premi e contributi sanità
        - generic [ref=e227]:
          - generic [ref=e228]: Mancanti
          - list [ref=e232]:
            - listitem [ref=e233]: ⏳ Consuntivi 2024, 2026
            - listitem [ref=e234]: ⏳ Spese per dipartimento
            - listitem [ref=e235]: ⏳ Serie storiche pre-2023
      - generic [ref=e236]:
        - link "Metodologia completa" [ref=e237] [cursor=pointer]:
          - /url: ./metodologia.html
        - link "Codice sorgente" [ref=e241] [cursor=pointer]:
          - /url: https://github.com/tiero/dove-vanno-soldi-ticino
    - generic [ref=e247]:
      - generic [ref=e248]:
        - 'heading "💰 Amministrazione: dove vanno i soldi?" [level=2] [ref=e249]'
        - paragraph [ref=e250]: "Breakdown economico dettagliato: stipendi, consulenze, IT, locazioni, energia e altri costi di funzionamento."
        - generic [ref=e251]:
          - paragraph [ref=e252]: 📊 Classificazione per natura economica (MCA2)
          - paragraph [ref=e253]: Il Modello Contabile Armonizzato 2 classifica le spese per TIPO di costo (personale, beni, servizi) invece che per FUNZIONE (salute, educazione).
          - generic [ref=e254]:
            - generic [ref=e255]:
              - generic [ref=e256]: ✅
              - text: VERIFICATO
            - generic [ref=e257]:
              - generic [ref=e258]: 📊
              - text: AGGREGATO
            - generic [ref=e259]:
              - generic [ref=e260]: ⚠️
              - text: STIMATO
            - generic [ref=e261]:
              - generic [ref=e262]: ❌
              - text: NON DISPONIBILE
        - generic [ref=e263]:
          - paragraph [ref=e264]: ✅ Dati verificati
          - paragraph [ref=e265]:
            - text: Il Consuntivo 2025 (Messaggio 8672) pubblica i dati effettivi con il
            - strong [ref=e266]: Conto economico per natura
            - text: completo. Tutti i numeri mostrati sono verificabili contro il documento ufficiale.
      - generic [ref=e267]:
        - heading "Spese per natura economica 2025 (Consuntivo)" [level=3] [ref=e268]
        - paragraph [ref=e269]: Clicca su ogni riquadro per vedere dettagli. I colori indicano la qualità del dato.
    - generic [ref=e273]:
      - generic [ref=e274]:
        - 'heading "Healthcare spending: explanation for non-experts" [level=2] [ref=e275]'
        - paragraph [ref=e276]: Healthcare represents one of the main items in the cantonal budget. Here's what you need to know.
      - generic [ref=e277]:
        - heading "Frequently asked question" [level=3] [ref=e278]
        - generic [ref=e279]:
          - paragraph [ref=e280]: Why does the Canton spend money on healthcare if I already pay health insurance premiums every month?
          - paragraph [ref=e281]: Health insurance only covers basic care. The Canton must pay (by federal law) 55% of hospital admissions, help those who cannot afford premiums, and pay for extra services not covered by LAMal (elderly care, prevention, etc.).
          - generic [ref=e282]:
            - group [ref=e283]:
              - generic "1. LAMal only covers basic care" [ref=e284] [cursor=pointer]
            - group [ref=e285]:
              - generic "2. Canton required to pay 55% of hospitals" [ref=e286] [cursor=pointer]
            - group [ref=e287]:
              - generic "3. Very high premiums in Ticino, many cannot afford them" [ref=e288] [cursor=pointer]
            - group [ref=e289]:
              - generic "4. Extra services for elderly and chronically ill" [ref=e290] [cursor=pointer]
            - group [ref=e291]:
              - generic "5. Prevention and public health" [ref=e292] [cursor=pointer]
      - generic [ref=e293]:
        - generic [ref=e294]:
          - heading "Verified data" [level=3] [ref=e299]
          - generic [ref=e300]:
            - generic [ref=e301]:
              - generic [ref=e302]: 627 M CHF
              - generic [ref=e303]: "\"Public health\" function 2027"
              - generic [ref=e304]: "Source: P2027_spese_02.pdf"
            - generic [ref=e305]:
              - generic [ref=e306]: 13.3% of total budget
              - generic [ref=e307]: 1'731 CHF per resident
        - generic [ref=e308]:
          - heading "RIPAM (premium reduction)" [level=3] [ref=e313]
          - generic [ref=e314]:
            - generic [ref=e315]:
              - generic [ref=e316]: 332 M CHF
              - generic [ref=e317]: Classified in "Social welfare"
            - generic [ref=e318]: ⚠️ RIPAM is classified in "Social welfare" function (not "Public health") because it is a direct transfer to families.
      - generic [ref=e319]:
        - heading "Key terms glossary" [level=3] [ref=e320]
        - generic [ref=e321]:
          - generic [ref=e322]:
            - generic [ref=e323]: LAMal (Federal Health Insurance Act)
            - paragraph [ref=e324]: The mandatory health insurance that every person residing in Switzerland must have. Every month you pay a premium to your health insurer (e.g. Helsana, CSS, Assura).
            - generic [ref=e325]: "Legal basis: RS 832.10"
          - generic [ref=e326]:
            - generic [ref=e327]: Transfer expenses
            - paragraph [ref=e328]: Money that the Canton 'transfers' to others (municipalities, hospitals, insurers, families) instead of using it directly for cantonal salaries or materials.
            - generic [ref=e329]: "Examples: RIPAM (transfer to insurers), hospital quota (transfer to hospitals), PC (transfer to elderly)"
          - generic [ref=e330]:
            - generic [ref=e331]: Cantonal quota 55% (hospital financing)
            - paragraph [ref=e332]: "When you are hospitalized, the cost is split by federal law: the Canton pays 55%, your health insurance pays 45%. You only pay the normal deductible."
            - generic [ref=e333]: "Legal basis: LAMal art. 49a"
          - generic [ref=e334]:
            - generic [ref=e335]: PC (Supplementary Benefits AVS/AI)
            - paragraph [ref=e336]: Economic aid for elderly and people with disabilities when pension (AVS or AI) is not enough to live. Also includes contributions for extra health expenses (dentist, glasses, non-reimbursed drugs).
      - generic [ref=e341]:
        - heading "Data NOT available in 2027 Budget" [level=4] [ref=e342]
        - paragraph [ref=e343]: Message 8731 does not contain a detailed breakdown of health spending by individual item. The 627M is an aggregate.
        - generic [ref=e344]:
          - generic [ref=e345]:
            - generic [ref=e346]: •
            - generic [ref=e347]:
              - text: "Hospital contributions: NOT AVAILABLE"
              - generic [ref=e348]: "Where to find it: Detailed accounts (March), Annual reports EOC/OSC"
          - generic [ref=e349]:
            - generic [ref=e350]: •
            - generic [ref=e351]:
              - text: "PC health quota: NOT AVAILABLE"
              - generic [ref=e352]: "Where to find it: Accounts, Economic account by nature"
    - generic [ref=e355]:
      - generic [ref=e356]:
        - 'heading "🏛️ Amministrazione cantonale: chi controlla i controllori?" [level=2] [ref=e357]'
        - paragraph [ref=e358]: Quanto costa l'amministrazione pubblica e chi controlla che i soldi siano spesi bene?
      - generic [ref=e359]:
        - generic [ref=e360]:
          - generic [ref=e361]: Spesa totale 2025
          - generic [ref=e362]: —
          - generic [ref=e363]: Dato C2025 in verifica
          - generic [ref=e364]: (no printed total found)
        - generic [ref=e365]:
          - generic [ref=e366]: "% del bilancio"
          - generic [ref=e367]: —
          - generic [ref=e368]: Dato in verifica
        - generic [ref=e370]:
          - generic [ref=e371]: Per abitante
          - generic [ref=e372]: —
          - generic [ref=e373]: Dato in verifica
      - generic [ref=e374]:
        - heading "🔍 Chi controlla?" [level=3] [ref=e375]
        - generic [ref=e376]:
          - generic [ref=e382]:
            - generic [ref=e383]: Controllo cantonale delle finanze (CCF)
            - paragraph [ref=e384]: I "revisori dei conti" del Cantone. Controllano che i soldi pubblici siano spesi correttamente e legalmente. Indipendente dal Governo, risponde al Parlamento.
            - generic [ref=e385]: "Base legale: Legge 2.4.4.1"
          - generic [ref=e391]:
            - generic [ref=e392]: Commissione della gestione e delle finanze (CGF)
            - paragraph [ref=e393]: Commissione parlamentare permanente che sorveglia gestione finanziaria Governo. Circa 15 deputati del Gran Consiglio.
          - generic [ref=e399]:
            - generic [ref=e400]: Corte dei conti
            - paragraph [ref=e401]: ❌ Il Canton Ticino NON ha una Corte dei conti autonoma (a differenza di GE, VD). Il controllo è tramite CCF + CGF.
      - generic [ref=e406]:
        - heading "Dati Autorità - Verificati" [level=4] [ref=e407]
        - generic [ref=e408]:
          - generic [ref=e409]:
            - text: "• Consiglio di Stato (consulenze/perizie 2025): CHF 1'014'905"
            - generic [ref=e410]: ✅ Rendiconto CdS 2025 - Spese esterne consulenze, non stipendi CdS (stipendi in voce 30 Personale)
          - generic [ref=e411]:
            - text: "• Gran Consiglio (indennità deputati 2025): CHF 1'777'559 nette"
            - generic [ref=e412]: ✅ Resoconto Art. 166a LGC - 90 deputati, indennità + trasferte CHF 162'763
          - generic [ref=e413]:
            - text: "• FTE totali Canton Ticino: NON DISPONIBILE nel Preventivo"
            - generic [ref=e414]: "Dove trovarlo: USTAT \"Il mercato del lavoro nel settore pubblico ticinese\" (pubblicazione annuale) o Consuntivo dettagliato"
          - generic [ref=e415]:
            - text: "• Stipendi membri CdS: NON PUBBLICATI separatamente"
            - generic [ref=e416]: "Inclusi nella voce 30 Personale aggregata (CHF 1'219.7M totale 2025). Base legale: LStip art. 3"
          - generic [ref=e417]:
            - text: "• Budget CCF: NON DISPONIBILE"
            - generic [ref=e418]: "Dove trovarlo: Rapporto annuale CCF o Consuntivo dettagliato"
    - generic [ref=e421]:
      - generic [ref=e422]:
        - heading "🏘️ Dati per comune" [level=2] [ref=e423]
        - paragraph [ref=e424]: Confronta moltiplicatori, entrate, uscite e debito pro capite dei comuni ticinesi.
        - generic [ref=e425]:
          - paragraph [ref=e426]: 📊 Dati ufficiali 2024
          - paragraph [ref=e427]: Dati estratti dal Rapporto 'I conti dei comuni nel 2024', Allegato statistico tab.8. Popolazione, moltiplicatori fiscali, risorse e indice di forza finanziaria per 106 comuni.
      - searchbox "Cerca un comune..." [ref=e429]
    - generic [ref=e433]:
      - generic [ref=e434]:
        - heading "💡 Quanto costa? Le formule spiegate" [level=2] [ref=e435]
        - paragraph [ref=e436]: Voci di spesa tradotte in costi per abitante, al giorno e per famiglia. Tutte le formule sono visibili per massima trasparenza.
      - generic [ref=e437]:
        - generic [ref=e438]:
          - generic [ref=e439]:
            - img "Consiglio di Stato" [ref=e440]: 🏛️
            - generic [ref=e441]:
              - heading "Consiglio di Stato" [level=3] [ref=e442]
              - paragraph [ref=e443]: Costo dell'organo esecutivo del cantone (5 consiglieri + segretariato)
          - generic [ref=e444]:
            - generic [ref=e445]: "Formula:"
            - generic [ref=e446]: 3'500'000 CHF ÷ 362'200 abitanti
          - generic [ref=e447]:
            - generic [ref=e448]:
              - generic [ref=e449]: Per abitante
              - generic [ref=e450]: 9.67 CHF/anno
            - generic [ref=e451]:
              - generic [ref=e452]: Al giorno
              - generic [ref=e453]: 0.03 CHF/giorno
            - generic [ref=e454]:
              - generic [ref=e455]: Per famiglia
              - generic [ref=e456]: 20.30 CHF/anno
          - generic [ref=e457]: 💡 Circa 10 franchi all'anno per abitante, meno di 3 centesimi al giorno
        - generic [ref=e458]:
          - generic [ref=e459]:
            - img "Contributi cantonali alla salute" [ref=e460]: 💊
            - generic [ref=e461]:
              - heading "Contributi cantonali alla salute" [level=3] [ref=e462]
              - paragraph [ref=e463]: Sussidi per i premi dell'assicurazione malattia
          - generic [ref=e464]:
            - generic [ref=e465]: "Formula:"
            - generic [ref=e466]: 332'000'000 CHF ÷ 362'200 abitanti
          - generic [ref=e467]:
            - generic [ref=e468]:
              - generic [ref=e469]: Per abitante
              - generic [ref=e470]: 917 CHF/anno
            - generic [ref=e471]:
              - generic [ref=e472]: Al giorno
              - generic [ref=e473]: 2.51 CHF/giorno
            - generic [ref=e474]:
              - generic [ref=e475]: Per famiglia
              - generic [ref=e476]: 1'925 CHF/anno
          - generic [ref=e477]: 💡 Il cantone paga quasi 1000 franchi all'anno per ogni ticinese per aiutare con i premi della cassa malati
        - generic [ref=e478]:
          - generic [ref=e479]:
            - img "Formazione" [ref=e480]: 🎓
            - generic [ref=e481]:
              - heading "Formazione" [level=3] [ref=e482]
              - paragraph [ref=e483]: Scuole pubbliche, università, formazione professionale
          - generic [ref=e484]:
            - generic [ref=e485]: "Formula:"
            - generic [ref=e486]: 850'000'000 CHF ÷ 362'200 abitanti
          - generic [ref=e487]:
            - generic [ref=e488]:
              - generic [ref=e489]: Per abitante
              - generic [ref=e490]: 2'347 CHF/anno
            - generic [ref=e491]:
              - generic [ref=e492]: Al giorno
              - generic [ref=e493]: 6.43 CHF/giorno
            - generic [ref=e494]:
              - generic [ref=e495]: Per famiglia
              - generic [ref=e496]: 4'929 CHF/anno
          - generic [ref=e497]: 💡 Ogni famiglia ticinese "investe" circa 5000 franchi all'anno nell'educazione pubblica
        - generic [ref=e498]:
          - generic [ref=e499]:
            - img "Trasporti pubblici" [ref=e500]: 🚆
            - generic [ref=e501]:
              - heading "Trasporti pubblici" [level=3] [ref=e502]
              - paragraph [ref=e503]: Contributi a FFS, TPL, e altre aziende di trasporto
          - generic [ref=e504]:
            - generic [ref=e505]: "Formula:"
            - generic [ref=e506]: 180'000'000 CHF ÷ 362'200 abitanti
          - generic [ref=e507]:
            - generic [ref=e508]:
              - generic [ref=e509]: Per abitante
              - generic [ref=e510]: 497 CHF/anno
            - generic [ref=e511]:
              - generic [ref=e512]: Al giorno
              - generic [ref=e513]: 1.36 CHF/giorno
            - generic [ref=e514]:
              - generic [ref=e515]: Per famiglia
              - generic [ref=e516]: 1'044 CHF/anno
          - generic [ref=e517]: 💡 Anche chi non prende mai il treno contribuisce con 500 franchi all'anno ai trasporti pubblici
        - generic [ref=e518]:
          - generic [ref=e519]:
            - img "Polizia cantonale" [ref=e520]: 👮
            - generic [ref=e521]:
              - heading "Polizia cantonale" [level=3] [ref=e522]
              - paragraph [ref=e523]: Sicurezza pubblica e ordine
          - generic [ref=e524]:
            - generic [ref=e525]: "Formula:"
            - generic [ref=e526]: 120'000'000 CHF ÷ 362'200 abitanti
          - generic [ref=e527]:
            - generic [ref=e528]:
              - generic [ref=e529]: Per abitante
              - generic [ref=e530]: 331 CHF/anno
            - generic [ref=e531]:
              - generic [ref=e532]: Al giorno
              - generic [ref=e533]: 0.91 CHF/giorno
            - generic [ref=e534]:
              - generic [ref=e535]: Per famiglia
              - generic [ref=e536]: 696 CHF/anno
          - generic [ref=e537]: 💡 Meno di 1 franco al giorno per la sicurezza pubblica
        - generic [ref=e538]:
          - generic [ref=e539]:
            - img "Cultura e tempo libero" [ref=e540]: 🎭
            - generic [ref=e541]:
              - heading "Cultura e tempo libero" [level=3] [ref=e542]
              - paragraph [ref=e543]: Musei, teatri, biblioteche, sport
          - generic [ref=e544]:
            - generic [ref=e545]: "Formula:"
            - generic [ref=e546]: 45'000'000 CHF ÷ 362'200 abitanti
          - generic [ref=e547]:
            - generic [ref=e548]:
              - generic [ref=e549]: Per abitante
              - generic [ref=e550]: 124 CHF/anno
            - generic [ref=e551]:
              - generic [ref=e552]: Al giorno
              - generic [ref=e553]: 0.34 CHF/giorno
            - generic [ref=e554]:
              - generic [ref=e555]: Per famiglia
              - generic [ref=e556]: 261 CHF/anno
          - generic [ref=e557]: 💡 Ogni ticinese "paga" l'equivalente di un caffè all'anno per la cultura
    - generic [ref=e560]:
      - generic [ref=e561]:
        - generic [ref=e562]:
          - generic [ref=e563]: 📋
          - generic [ref=e564]: Preventivo 2027 - In attesa approvazione
        - heading "Sguardo al Budget 2027" [level=2] [ref=e565]
        - paragraph [ref=e566]: Il Preventivo 2027 è stato licenziato dal Consiglio di Stato il 30 settembre 2026. Approvazione finale da parte del Gran Consiglio prevista per dicembre 2026.
      - generic [ref=e567]:
        - generic [ref=e568]:
          - generic [ref=e569]: Disavanzo previsto
          - generic [ref=e570]: "-98.5M"
          - generic [ref=e571]: CHF -274 per abitante
        - generic [ref=e572]:
          - generic [ref=e573]: Spese totali
          - generic [ref=e574]: 4'730M
          - generic [ref=e575]: +3.2% vs C2025
        - generic [ref=e576]:
          - generic [ref=e577]: Ricavi totali
          - generic [ref=e578]: 4'632M
          - generic [ref=e579]: +1.8% vs C2025
      - generic [ref=e580]:
        - paragraph [ref=e581]: ⚠️ Nota importante
        - paragraph [ref=e582]:
          - text: Il focus di questo sito è sui
          - strong [ref=e583]: dati effettivi
          - text: (Consuntivo 2025). I numeri del Preventivo 2027 sono previsioni soggette a modifica e approvazione parlamentare. Per analisi dettagliate, consultare il
          - link "Messaggio 8731 completo" [ref=e584] [cursor=pointer]:
            - /url: https://www4.ti.ch/dfe/dr/finanze/dati-finanziari/p2027/
          - text: .
  - contentinfo [ref=e585]:
    - generic [ref=e587]:
      - generic [ref=e588]:
        - generic [ref=e589]: Where does Ticino money go
        - paragraph [ref=e590]: A financial transparency project. All data comes from official sources of Canton Ticino and the Swiss Confederation.
      - generic [ref=e591]: This site is independent and is not affiliated with the cantonal government.
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
  29  |       const charts = ['spending-function-treemap', 'debt-history-chart', 'health-premiums-chart'];
  30  |       for (const chartId of charts) {
  31  |         const chart = page.locator(`#${chartId}`);
  32  |         if (await chart.count() > 0) {
  33  |           await expect(chart).toBeVisible();
  34  |           // Check chart has either SVG or canvas
  35  |           const hasContent = await chart.locator('svg, canvas').count();
> 36  |           expect(hasContent).toBeGreaterThan(0);
      |                              ^ Error: expect(received).toBeGreaterThan(expected)
  37  |         }
  38  |       }
  39  |       
  40  |       // Test mobile menu
  41  |       const menuButton = page.locator('#mobile-menu-button');
  42  |       if (await menuButton.isVisible()) {
  43  |         await menuButton.click();
  44  |         await expect(page.locator('#mobile-menu')).toBeVisible();
  45  |         await page.click('body'); // Close menu
  46  |       }
  47  |       
  48  |       // Test theme toggle
  49  |       await page.click('#theme-toggle');
  50  |       await page.waitForTimeout(300);
  51  |       const isDark = await page.locator('html').evaluate(el => el.classList.contains('dark'));
  52  |       expect(typeof isDark).toBe('boolean');
  53  |       
  54  |       expect(errors).toEqual([]);
  55  |     });
  56  | 
  57  |     test('Storia debito page: chart renders, nav works, no hardcoded numbers', async ({ page }) => {
  58  |       const errors: string[] = [];
  59  |       page.on('pageerror', err => errors.push(err.message));
  60  |       page.on('console', msg => {
  61  |         if (msg.type() === 'error') errors.push(msg.text());
  62  |       });
  63  | 
  64  |       await page.goto(`${BASE_URL}/storia-debito.html`);
  65  |       
  66  |       // Wait for page to load
  67  |       await page.waitForLoadState('networkidle');
  68  |       
  69  |       // Check title
  70  |       await expect(page.locator('h1')).toContainText('debito');
  71  |       
  72  |       // Check chart exists and has canvas
  73  |       const chart = page.locator('#debito-chart');
  74  |       await expect(chart).toBeVisible();
  75  |       
  76  |       // Check chart is not empty (has actual rendering)
  77  |       const chartParent = page.locator('#grafico-debito');
  78  |       await expect(chartParent).toBeVisible();
  79  |       const hasCanvas = await chartParent.locator('canvas').count();
  80  |       expect(hasCanvas).toBe(1);
  81  |       
  82  |       // Verify NO hardcoded removed numbers appear in page text
  83  |       const bodyText = await page.textContent('body');
  84  |       expect(bodyText).not.toContain('584M in 2 anni'); // Removed 2003-04 claim
  85  |       expect(bodyText).not.toContain('-353M oro BNS'); // Removed 2005 claim
  86  |       expect(bodyText).not.toContain('901M'); // Removed 2000 value
  87  |       
  88  |       // Test mobile menu
  89  |       const menuButton = page.locator('#mobile-menu-button');
  90  |       if (await menuButton.isVisible()) {
  91  |         await menuButton.click();
  92  |         await expect(page.locator('#mobile-menu')).toBeVisible();
  93  |       }
  94  |       
  95  |       // Test theme toggle
  96  |       await page.click('#theme-toggle');
  97  |       await page.waitForTimeout(300);
  98  |       
  99  |       // Test language selector (if visible)
  100 |       const langButton = page.locator('#lang-button');
  101 |       if (await langButton.count() > 0) {
  102 |         await langButton.click();
  103 |         await expect(page.locator('#lang-menu')).toBeVisible();
  104 |       }
  105 |       
  106 |       expect(errors).toEqual([]);
  107 |     });
  108 | 
  109 |     test('Tassazione imprese page: chart renders, nav works', async ({ page }) => {
  110 |       const errors: string[] = [];
  111 |       page.on('pageerror', err => errors.push(err.message));
  112 |       page.on('console', msg => {
  113 |         if (msg.type() === 'error') errors.push(msg.text());
  114 |       });
  115 | 
  116 |       await page.goto(`${BASE_URL}/tassazione-imprese.html`);
  117 |       
  118 |       await page.waitForLoadState('networkidle');
  119 |       
  120 |       // Check title
  121 |       await expect(page.locator('h1')).toContainText('Tassazione');
  122 |       
  123 |       // Check chart exists
  124 |       const chart = page.locator('#gettito-chart');
  125 |       await expect(chart).toBeVisible();
  126 |       const hasCanvas = await page.locator('canvas#gettito-chart').count();
  127 |       expect(hasCanvas).toBe(1);
  128 |       
  129 |       // Test mobile menu
  130 |       const menuButton = page.locator('#mobile-menu-button');
  131 |       if (await menuButton.isVisible()) {
  132 |         await menuButton.click();
  133 |         await expect(page.locator('#mobile-menu')).toBeVisible();
  134 |       }
  135 |       
  136 |       // Test theme toggle
```
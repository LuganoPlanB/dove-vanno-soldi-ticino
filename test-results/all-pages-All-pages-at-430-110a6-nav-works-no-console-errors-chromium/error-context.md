# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: all-pages.spec.ts >> All pages at 430px >> Home page: no empty charts, nav works, no console errors
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
        - heading "La situazione finanziaria" [level=2] [ref=e53]
        - paragraph [ref=e54]: "Il Canton Ticino affronta sfide finanziarie significative: un deficit in crescita, un debito pubblico che supererà i 3 miliardi di franchi e premi di cassa malattia tra i più alti della Svizzera. Questo sito rende accessibili e comprensibili i dati finanziari ufficiali del Cantone."
      - generic [ref=e59]:
        - generic [ref=e60]: Dati verificati e tracciabili
        - generic [ref=e61]: Ogni numero proviene da fonti ufficiali del Canton Ticino e della Confederazione Svizzera. Tutte le cifre sono state verificate matematicamente con test automatici.
    - generic [ref=e63]:
      - generic [ref=e64]:
        - heading "Where does the money go?" [level=2] [ref=e65]
        - paragraph [ref=e66]: Explore interactive visualizations to understand how the 4.7 billion franc cantonal budget is spent
      - generic [ref=e67]:
        - heading "2027 Spending by function" [level=3] [ref=e69]
        - generic [ref=e70]: Tocca per i dettagli
        - img [ref=e71]:
          - generic [ref=e72] [cursor=pointer]: Social welfare
          - generic [ref=e75] [cursor=pointer]: Education
          - generic [ref=e78] [cursor=pointer]: Public health
          - generic [ref=e81] [cursor=pointer]: Financeand taxes
          - generic [ref=e84] [cursor=pointer]: Generaladministration
          - generic [ref=e87] [cursor=pointer]: Public order,security and
          - generic [ref=e90] [cursor=pointer]: Transportand
          - generic [ref=e93] [cursor=pointer]
          - generic [ref=e95] [cursor=pointer]
          - generic [ref=e97] [cursor=pointer]
      - generic [ref=e99]:
        - generic [ref=e100]:
          - heading "Cantonal public debt" [level=3] [ref=e101]
          - img [ref=e102]:
            - generic [ref=e103]:
              - generic [ref=e104]:
                - generic [ref=e106]: "2023"
                - generic [ref=e108]: "2024"
                - generic [ref=e110]: "2025"
                - generic [ref=e112]: "2026"
                - generic [ref=e114]: "2027"
              - generic [ref=e116]:
                - generic [ref=e117]: 0.00 CHF
                - generic [ref=e119]: 1.00 CHF
                - generic [ref=e121]: 2.00 CHF
                - generic [ref=e123]: 3.00 CHF
        - generic [ref=e126]:
          - heading "Annual deficit" [level=3] [ref=e127]
          - img [ref=e128]:
            - generic [ref=e129]:
              - generic [ref=e130]:
                - generic [ref=e132]: "2023"
                - generic [ref=e134]: "2024"
                - generic [ref=e136]: "2025"
                - generic [ref=e138]: "2026"
                - generic [ref=e140]: "2027"
              - generic [ref=e142]:
                - generic [ref=e143]: 0 M
                - generic [ref=e145]: 50 M
                - generic [ref=e147]: 100 M
      - generic [ref=e150]:
        - heading "2025-2027 Comparison" [level=3] [ref=e151]
        - generic [ref=e152]: Evoluzione delle principali voci di bilancio
        - table [ref=e154]:
          - rowgroup [ref=e155]:
            - row [ref=e156]:
              - columnheader "Voce" [ref=e157]
              - columnheader "2025" [ref=e158]
              - columnheader "2027" [ref=e159]
              - columnheader "Δ%" [ref=e160]
          - rowgroup [ref=e161]:
            - row [ref=e162]:
              - cell "Cantonal contributions" [ref=e163]
              - cell "318" [ref=e164]
              - cell "332" [ref=e165]
              - cell "↑ 4.4%" [ref=e166]
            - row [ref=e167]:
              - cell "Average premium TI" [ref=e168]
              - cell "491" [ref=e169]
              - cell "520" [ref=e170]
              - cell "↑ 5.9%" [ref=e171]
            - row [ref=e172]:
              - cell "Average premium CH" [ref=e173]
              - cell "390" [ref=e174]
              - cell "412" [ref=e175]
              - cell "↑ 5.6%" [ref=e176]
        - generic [ref=e177]:
          - generic [ref=e178]: ↑ Aumento
          - generic [ref=e179]: ↓ Diminuzione
          - generic [ref=e180]: → Stabile
      - generic [ref=e182]:
        - heading "2027 Budget - Overview" [level=3] [ref=e183]
        - img [ref=e184]:
          - generic [ref=e185]:
            - generic [ref=e188]:
              - generic [ref=e189]: 0.0Mia
              - generic [ref=e191]: 1.0Mia
              - generic [ref=e193]: 2.0Mia
              - generic [ref=e195]: 3.0Mia
              - generic [ref=e197]: 4.0Mia
            - generic [ref=e199] [cursor=pointer]
            - generic [ref=e200] [cursor=pointer]
            - generic [ref=e201]: Current
            - generic [ref=e202]: expenditure
            - generic [ref=e203]: Current
            - generic [ref=e204]: revenue
            - generic [ref=e205]: Investments
    - generic [ref=e209]:
      - generic [ref=e210]:
        - heading "Stato dei dati" [level=2] [ref=e211]
        - paragraph [ref=e212]: Panoramica completa dei dati disponibili e delle limitazioni
      - generic [ref=e213]:
        - generic [ref=e214]:
          - generic [ref=e215]: Disponibili
          - list [ref=e219]:
            - listitem [ref=e220]: ✓ Consuntivo 2025 (effettivo)
            - listitem [ref=e221]: ✓ Preventivo 2026 (in corso)
            - listitem [ref=e222]: ✓ Serie storiche verificate
            - listitem [ref=e223]: ✓ Dati popolazione
            - listitem [ref=e224]: ✓ Premi e contributi sanità
        - generic [ref=e225]:
          - generic [ref=e226]: Mancanti
          - list [ref=e230]:
            - listitem [ref=e231]: ⏳ Consuntivi 2024, 2026
            - listitem [ref=e232]: ⏳ Spese per dipartimento
            - listitem [ref=e233]: ⏳ Serie storiche pre-2023
      - generic [ref=e234]:
        - link "Metodologia completa" [ref=e235] [cursor=pointer]:
          - /url: ./metodologia.html
        - link "Codice sorgente" [ref=e239] [cursor=pointer]:
          - /url: https://github.com/tiero/dove-vanno-soldi-ticino
    - generic [ref=e245]:
      - generic [ref=e246]:
        - 'heading "💰 Amministrazione: dove vanno i soldi?" [level=2] [ref=e247]'
        - paragraph [ref=e248]: "Breakdown economico dettagliato: stipendi, consulenze, IT, locazioni, energia e altri costi di funzionamento."
        - generic [ref=e249]:
          - paragraph [ref=e250]: 📊 Classificazione per natura economica (MCA2)
          - paragraph [ref=e251]: Il Modello Contabile Armonizzato 2 classifica le spese per TIPO di costo (personale, beni, servizi) invece che per FUNZIONE (salute, educazione).
          - generic [ref=e252]:
            - generic [ref=e253]:
              - generic [ref=e254]: ✅
              - text: VERIFICATO
            - generic [ref=e255]:
              - generic [ref=e256]: 📊
              - text: AGGREGATO
            - generic [ref=e257]:
              - generic [ref=e258]: ⚠️
              - text: STIMATO
            - generic [ref=e259]:
              - generic [ref=e260]: ❌
              - text: NON DISPONIBILE
        - generic [ref=e261]:
          - paragraph [ref=e262]: ✅ Dati verificati
          - paragraph [ref=e263]:
            - text: Il Consuntivo 2025 (Messaggio 8672) pubblica i dati effettivi con il
            - strong [ref=e264]: Conto economico per natura
            - text: completo. Tutti i numeri mostrati sono verificabili contro il documento ufficiale.
      - generic [ref=e265]:
        - heading "Spese per natura economica 2025 (Consuntivo)" [level=3] [ref=e266]
        - paragraph [ref=e267]: Clicca su ogni riquadro per vedere dettagli. I colori indicano la qualità del dato.
    - generic [ref=e271]:
      - generic [ref=e272]:
        - 'heading "Healthcare spending: explanation for non-experts" [level=2] [ref=e273]'
        - paragraph [ref=e274]: Healthcare represents one of the main items in the cantonal budget. Here's what you need to know.
      - generic [ref=e275]:
        - heading "Frequently asked question" [level=3] [ref=e276]
        - generic [ref=e277]:
          - paragraph [ref=e278]: Why does the Canton spend money on healthcare if I already pay health insurance premiums every month?
          - paragraph [ref=e279]: Health insurance only covers basic care. The Canton must pay (by federal law) 55% of hospital admissions, help those who cannot afford premiums, and pay for extra services not covered by LAMal (elderly care, prevention, etc.).
          - generic [ref=e280]:
            - group [ref=e281]:
              - generic "1. LAMal only covers basic care" [ref=e282] [cursor=pointer]
            - group [ref=e283]:
              - generic "2. Canton required to pay 55% of hospitals" [ref=e284] [cursor=pointer]
            - group [ref=e285]:
              - generic "3. Very high premiums in Ticino, many cannot afford them" [ref=e286] [cursor=pointer]
            - group [ref=e287]:
              - generic "4. Extra services for elderly and chronically ill" [ref=e288] [cursor=pointer]
            - group [ref=e289]:
              - generic "5. Prevention and public health" [ref=e290] [cursor=pointer]
      - generic [ref=e291]:
        - generic [ref=e292]:
          - heading "Verified data" [level=3] [ref=e297]
          - generic [ref=e298]:
            - generic [ref=e299]:
              - generic [ref=e300]: 627 M CHF
              - generic [ref=e301]: "\"Public health\" function 2027"
              - generic [ref=e302]: "Source: P2027_spese_02.pdf"
            - generic [ref=e303]:
              - generic [ref=e304]: 13.3% of total budget
              - generic [ref=e305]: 1'731 CHF per resident
        - generic [ref=e306]:
          - heading "RIPAM (premium reduction)" [level=3] [ref=e311]
          - generic [ref=e312]:
            - generic [ref=e313]:
              - generic [ref=e314]: 332 M CHF
              - generic [ref=e315]: Classified in "Social welfare"
            - generic [ref=e316]: ⚠️ RIPAM is classified in "Social welfare" function (not "Public health") because it is a direct transfer to families.
      - generic [ref=e317]:
        - heading "Key terms glossary" [level=3] [ref=e318]
        - generic [ref=e319]:
          - generic [ref=e320]:
            - generic [ref=e321]: LAMal (Federal Health Insurance Act)
            - paragraph [ref=e322]: The mandatory health insurance that every person residing in Switzerland must have. Every month you pay a premium to your health insurer (e.g. Helsana, CSS, Assura).
            - generic [ref=e323]: "Legal basis: RS 832.10"
          - generic [ref=e324]:
            - generic [ref=e325]: Transfer expenses
            - paragraph [ref=e326]: Money that the Canton 'transfers' to others (municipalities, hospitals, insurers, families) instead of using it directly for cantonal salaries or materials.
            - generic [ref=e327]: "Examples: RIPAM (transfer to insurers), hospital quota (transfer to hospitals), PC (transfer to elderly)"
          - generic [ref=e328]:
            - generic [ref=e329]: Cantonal quota 55% (hospital financing)
            - paragraph [ref=e330]: "When you are hospitalized, the cost is split by federal law: the Canton pays 55%, your health insurance pays 45%. You only pay the normal deductible."
            - generic [ref=e331]: "Legal basis: LAMal art. 49a"
          - generic [ref=e332]:
            - generic [ref=e333]: PC (Supplementary Benefits AVS/AI)
            - paragraph [ref=e334]: Economic aid for elderly and people with disabilities when pension (AVS or AI) is not enough to live. Also includes contributions for extra health expenses (dentist, glasses, non-reimbursed drugs).
      - generic [ref=e339]:
        - heading "Data NOT available in 2027 Budget" [level=4] [ref=e340]
        - paragraph [ref=e341]: Message 8731 does not contain a detailed breakdown of health spending by individual item. The 627M is an aggregate.
        - generic [ref=e342]:
          - generic [ref=e343]:
            - generic [ref=e344]: •
            - generic [ref=e345]:
              - text: "Hospital contributions: NOT AVAILABLE"
              - generic [ref=e346]: "Where to find it: Detailed accounts (March), Annual reports EOC/OSC"
          - generic [ref=e347]:
            - generic [ref=e348]: •
            - generic [ref=e349]:
              - text: "PC health quota: NOT AVAILABLE"
              - generic [ref=e350]: "Where to find it: Accounts, Economic account by nature"
    - generic [ref=e353]:
      - generic [ref=e354]:
        - 'heading "🏛️ Amministrazione cantonale: chi controlla i controllori?" [level=2] [ref=e355]'
        - paragraph [ref=e356]: Quanto costa l'amministrazione pubblica e chi controlla che i soldi siano spesi bene?
      - generic [ref=e357]:
        - generic [ref=e358]:
          - generic [ref=e359]: Spesa totale 2025
          - generic [ref=e360]: —
          - generic [ref=e361]: Dato C2025 in verifica
          - generic [ref=e362]: (no printed total found)
        - generic [ref=e363]:
          - generic [ref=e364]: "% del bilancio"
          - generic [ref=e365]: —
          - generic [ref=e366]: Dato in verifica
        - generic [ref=e368]:
          - generic [ref=e369]: Per abitante
          - generic [ref=e370]: —
          - generic [ref=e371]: Dato in verifica
      - generic [ref=e372]:
        - heading "🔍 Chi controlla?" [level=3] [ref=e373]
        - generic [ref=e374]:
          - generic [ref=e380]:
            - generic [ref=e381]: Controllo cantonale delle finanze (CCF)
            - paragraph [ref=e382]: I "revisori dei conti" del Cantone. Controllano che i soldi pubblici siano spesi correttamente e legalmente. Indipendente dal Governo, risponde al Parlamento.
            - generic [ref=e383]: "Base legale: Legge 2.4.4.1"
          - generic [ref=e389]:
            - generic [ref=e390]: Commissione della gestione e delle finanze (CGF)
            - paragraph [ref=e391]: Commissione parlamentare permanente che sorveglia gestione finanziaria Governo. Circa 15 deputati del Gran Consiglio.
          - generic [ref=e397]:
            - generic [ref=e398]: Corte dei conti
            - paragraph [ref=e399]: ❌ Il Canton Ticino NON ha una Corte dei conti autonoma (a differenza di GE, VD). Il controllo è tramite CCF + CGF.
      - generic [ref=e404]:
        - heading "Dati Autorità - Verificati" [level=4] [ref=e405]
        - generic [ref=e406]:
          - generic [ref=e407]:
            - text: "• Consiglio di Stato (consulenze/perizie 2025): CHF 1'014'905"
            - generic [ref=e408]: ✅ Rendiconto CdS 2025 - Spese esterne consulenze, non stipendi CdS (stipendi in voce 30 Personale)
          - generic [ref=e409]:
            - text: "• Gran Consiglio (indennità deputati 2025): CHF 1'777'559 nette"
            - generic [ref=e410]: ✅ Resoconto Art. 166a LGC - 90 deputati, indennità + trasferte CHF 162'763
          - generic [ref=e411]:
            - text: "• FTE totali Canton Ticino: NON DISPONIBILE nel Preventivo"
            - generic [ref=e412]: "Dove trovarlo: USTAT \"Il mercato del lavoro nel settore pubblico ticinese\" (pubblicazione annuale) o Consuntivo dettagliato"
          - generic [ref=e413]:
            - text: "• Stipendi membri CdS: NON PUBBLICATI separatamente"
            - generic [ref=e414]: "Inclusi nella voce 30 Personale aggregata (CHF 1'219.7M totale 2025). Base legale: LStip art. 3"
          - generic [ref=e415]:
            - text: "• Budget CCF: NON DISPONIBILE"
            - generic [ref=e416]: "Dove trovarlo: Rapporto annuale CCF o Consuntivo dettagliato"
    - generic [ref=e419]:
      - generic [ref=e420]:
        - heading "🏘️ Dati per comune" [level=2] [ref=e421]
        - paragraph [ref=e422]: Confronta moltiplicatori, entrate, uscite e debito pro capite dei comuni ticinesi.
        - generic [ref=e423]:
          - paragraph [ref=e424]: 📊 Dati ufficiali 2024
          - paragraph [ref=e425]: Dati estratti dal Rapporto 'I conti dei comuni nel 2024', Allegato statistico tab.8. Popolazione, moltiplicatori fiscali, risorse e indice di forza finanziaria per 106 comuni.
      - searchbox "Cerca un comune..." [ref=e427]
    - generic [ref=e431]:
      - generic [ref=e432]:
        - heading "💡 Quanto costa? Le formule spiegate" [level=2] [ref=e433]
        - paragraph [ref=e434]: Voci di spesa tradotte in costi per abitante, al giorno e per famiglia. Tutte le formule sono visibili per massima trasparenza.
      - generic [ref=e435]:
        - generic [ref=e436]:
          - generic [ref=e437]:
            - img "Consiglio di Stato" [ref=e438]: 🏛️
            - generic [ref=e439]:
              - heading "Consiglio di Stato" [level=3] [ref=e440]
              - paragraph [ref=e441]: Costo dell'organo esecutivo del cantone (5 consiglieri + segretariato)
          - generic [ref=e442]:
            - generic [ref=e443]: "Formula:"
            - generic [ref=e444]: 3'500'000 CHF ÷ 362'200 abitanti
          - generic [ref=e445]:
            - generic [ref=e446]:
              - generic [ref=e447]: Per abitante
              - generic [ref=e448]: 9.67 CHF/anno
            - generic [ref=e449]:
              - generic [ref=e450]: Al giorno
              - generic [ref=e451]: 0.03 CHF/giorno
            - generic [ref=e452]:
              - generic [ref=e453]: Per famiglia
              - generic [ref=e454]: 20.30 CHF/anno
          - generic [ref=e455]: 💡 Circa 10 franchi all'anno per abitante, meno di 3 centesimi al giorno
        - generic [ref=e456]:
          - generic [ref=e457]:
            - img "Contributi cantonali alla salute" [ref=e458]: 💊
            - generic [ref=e459]:
              - heading "Contributi cantonali alla salute" [level=3] [ref=e460]
              - paragraph [ref=e461]: Sussidi per i premi dell'assicurazione malattia
          - generic [ref=e462]:
            - generic [ref=e463]: "Formula:"
            - generic [ref=e464]: 332'000'000 CHF ÷ 362'200 abitanti
          - generic [ref=e465]:
            - generic [ref=e466]:
              - generic [ref=e467]: Per abitante
              - generic [ref=e468]: 917 CHF/anno
            - generic [ref=e469]:
              - generic [ref=e470]: Al giorno
              - generic [ref=e471]: 2.51 CHF/giorno
            - generic [ref=e472]:
              - generic [ref=e473]: Per famiglia
              - generic [ref=e474]: 1'925 CHF/anno
          - generic [ref=e475]: 💡 Il cantone paga quasi 1000 franchi all'anno per ogni ticinese per aiutare con i premi della cassa malati
        - generic [ref=e476]:
          - generic [ref=e477]:
            - img "Formazione" [ref=e478]: 🎓
            - generic [ref=e479]:
              - heading "Formazione" [level=3] [ref=e480]
              - paragraph [ref=e481]: Scuole pubbliche, università, formazione professionale
          - generic [ref=e482]:
            - generic [ref=e483]: "Formula:"
            - generic [ref=e484]: 850'000'000 CHF ÷ 362'200 abitanti
          - generic [ref=e485]:
            - generic [ref=e486]:
              - generic [ref=e487]: Per abitante
              - generic [ref=e488]: 2'347 CHF/anno
            - generic [ref=e489]:
              - generic [ref=e490]: Al giorno
              - generic [ref=e491]: 6.43 CHF/giorno
            - generic [ref=e492]:
              - generic [ref=e493]: Per famiglia
              - generic [ref=e494]: 4'929 CHF/anno
          - generic [ref=e495]: 💡 Ogni famiglia ticinese "investe" circa 5000 franchi all'anno nell'educazione pubblica
        - generic [ref=e496]:
          - generic [ref=e497]:
            - img "Trasporti pubblici" [ref=e498]: 🚆
            - generic [ref=e499]:
              - heading "Trasporti pubblici" [level=3] [ref=e500]
              - paragraph [ref=e501]: Contributi a FFS, TPL, e altre aziende di trasporto
          - generic [ref=e502]:
            - generic [ref=e503]: "Formula:"
            - generic [ref=e504]: 180'000'000 CHF ÷ 362'200 abitanti
          - generic [ref=e505]:
            - generic [ref=e506]:
              - generic [ref=e507]: Per abitante
              - generic [ref=e508]: 497 CHF/anno
            - generic [ref=e509]:
              - generic [ref=e510]: Al giorno
              - generic [ref=e511]: 1.36 CHF/giorno
            - generic [ref=e512]:
              - generic [ref=e513]: Per famiglia
              - generic [ref=e514]: 1'044 CHF/anno
          - generic [ref=e515]: 💡 Anche chi non prende mai il treno contribuisce con 500 franchi all'anno ai trasporti pubblici
        - generic [ref=e516]:
          - generic [ref=e517]:
            - img "Polizia cantonale" [ref=e518]: 👮
            - generic [ref=e519]:
              - heading "Polizia cantonale" [level=3] [ref=e520]
              - paragraph [ref=e521]: Sicurezza pubblica e ordine
          - generic [ref=e522]:
            - generic [ref=e523]: "Formula:"
            - generic [ref=e524]: 120'000'000 CHF ÷ 362'200 abitanti
          - generic [ref=e525]:
            - generic [ref=e526]:
              - generic [ref=e527]: Per abitante
              - generic [ref=e528]: 331 CHF/anno
            - generic [ref=e529]:
              - generic [ref=e530]: Al giorno
              - generic [ref=e531]: 0.91 CHF/giorno
            - generic [ref=e532]:
              - generic [ref=e533]: Per famiglia
              - generic [ref=e534]: 696 CHF/anno
          - generic [ref=e535]: 💡 Meno di 1 franco al giorno per la sicurezza pubblica
        - generic [ref=e536]:
          - generic [ref=e537]:
            - img "Cultura e tempo libero" [ref=e538]: 🎭
            - generic [ref=e539]:
              - heading "Cultura e tempo libero" [level=3] [ref=e540]
              - paragraph [ref=e541]: Musei, teatri, biblioteche, sport
          - generic [ref=e542]:
            - generic [ref=e543]: "Formula:"
            - generic [ref=e544]: 45'000'000 CHF ÷ 362'200 abitanti
          - generic [ref=e545]:
            - generic [ref=e546]:
              - generic [ref=e547]: Per abitante
              - generic [ref=e548]: 124 CHF/anno
            - generic [ref=e549]:
              - generic [ref=e550]: Al giorno
              - generic [ref=e551]: 0.34 CHF/giorno
            - generic [ref=e552]:
              - generic [ref=e553]: Per famiglia
              - generic [ref=e554]: 261 CHF/anno
          - generic [ref=e555]: 💡 Ogni ticinese "paga" l'equivalente di un caffè all'anno per la cultura
    - generic [ref=e558]:
      - generic [ref=e559]:
        - generic [ref=e560]:
          - generic [ref=e561]: 📋
          - generic [ref=e562]: Preventivo 2027 - In attesa approvazione
        - heading "Sguardo al Budget 2027" [level=2] [ref=e563]
        - paragraph [ref=e564]: Il Preventivo 2027 è stato licenziato dal Consiglio di Stato il 30 settembre 2026. Approvazione finale da parte del Gran Consiglio prevista per dicembre 2026.
      - generic [ref=e565]:
        - generic [ref=e566]:
          - generic [ref=e567]: Disavanzo previsto
          - generic [ref=e568]: "-98.5M"
          - generic [ref=e569]: CHF -274 per abitante
        - generic [ref=e570]:
          - generic [ref=e571]: Spese totali
          - generic [ref=e572]: 4'730M
          - generic [ref=e573]: +3.2% vs C2025
        - generic [ref=e574]:
          - generic [ref=e575]: Ricavi totali
          - generic [ref=e576]: 4'632M
          - generic [ref=e577]: +1.8% vs C2025
      - generic [ref=e578]:
        - paragraph [ref=e579]: ⚠️ Nota importante
        - paragraph [ref=e580]:
          - text: Il focus di questo sito è sui
          - strong [ref=e581]: dati effettivi
          - text: (Consuntivo 2025). I numeri del Preventivo 2027 sono previsioni soggette a modifica e approvazione parlamentare. Per analisi dettagliate, consultare il
          - link "Messaggio 8731 completo" [ref=e582] [cursor=pointer]:
            - /url: https://www4.ti.ch/dfe/dr/finanze/dati-finanziari/p2027/
          - text: .
  - contentinfo [ref=e583]:
    - generic [ref=e585]:
      - generic [ref=e586]:
        - generic [ref=e587]: Where does Ticino money go
        - paragraph [ref=e588]: A financial transparency project. All data comes from official sources of Canton Ticino and the Swiss Confederation.
      - generic [ref=e589]: This site is independent and is not affiliated with the cantonal government.
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
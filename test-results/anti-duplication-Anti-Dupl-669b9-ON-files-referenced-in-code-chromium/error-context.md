# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: anti-duplication.spec.ts >> Anti-Duplication & Anti-Slop Tests >> No dead/unused JSON files referenced in code
- Location: tests/anti-duplication.spec.ts:151:3

# Error details

```
Error: Unreferenced JSON files (potential dead code): premi-e-contributi-sanita.json, spese-per-funzione-2027.json
```

# Test source

```ts
  76  |       if (limitationsHeading.test(content)) {
  77  |         limitationsCount++;
  78  |         filesWithLimitations.push(file);
  79  |       }
  80  |     }
  81  | 
  82  |     if (limitationsCount > 1) {
  83  |       throw new Error(`"Limitazioni" section found in ${limitationsCount} files: ${filesWithLimitations.join(', ')}. Should only be in metodologia.html.`);
  84  |     }
  85  |     
  86  |     if (limitationsCount === 1 && !filesWithLimitations.includes('metodologia.html')) {
  87  |       throw new Error(`"Limitazioni" section found in ${filesWithLimitations[0]} instead of metodologia.html.`);
  88  |     }
  89  |   });
  90  | 
  91  |   test('No duplicate independence disclaimer (only in metodologia.html)', async () => {
  92  |     const disclaimerText = /Questo sito è indipendente e non è affiliato/i;
  93  |     let disclaimerCount = 0;
  94  |     const filesWithDisclaimer: string[] = [];
  95  | 
  96  |     for (const file of HTML_FILES) {
  97  |       const filePath = path.join(process.cwd(), file);
  98  |       const content = fs.readFileSync(filePath, 'utf-8');
  99  |       
  100 |       if (disclaimerText.test(content)) {
  101 |         disclaimerCount++;
  102 |         filesWithDisclaimer.push(file);
  103 |       }
  104 |     }
  105 | 
  106 |     if (disclaimerCount > 1) {
  107 |       throw new Error(`Independence disclaimer found in ${disclaimerCount} files: ${filesWithDisclaimer.join(', ')}. Should only be in metodologia.html.`);
  108 |     }
  109 |     
  110 |     // Allow 0 (removed) or 1 (in metodologia only)
  111 |     if (disclaimerCount === 1 && !filesWithDisclaimer.includes('metodologia.html')) {
  112 |       throw new Error(`Independence disclaimer found in ${filesWithDisclaimer[0]} instead of metodologia.html.`);
  113 |     }
  114 |   });
  115 | 
  116 |   test('Each JSON file is canonical source (not duplicated data)', async () => {
  117 |     const dataDir = path.join(process.cwd(), 'data');
  118 |     const jsonFiles = fs.readdirSync(dataDir).filter(f => f.endsWith('.json'));
  119 |     
  120 |     // Key identifiers that should be unique per JSON
  121 |     const dataSignatures: Map<string, string[]> = new Map();
  122 |     
  123 |     for (const file of jsonFiles) {
  124 |       const filePath = path.join(dataDir, file);
  125 |       const content = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  126 |       
  127 |       // Extract a simple signature (e.g., top-level keys + first few data points)
  128 |       const signature = JSON.stringify(Object.keys(content).sort());
  129 |       
  130 |       if (!dataSignatures.has(signature)) {
  131 |         dataSignatures.set(signature, []);
  132 |       }
  133 |       dataSignatures.get(signature)!.push(file);
  134 |     }
  135 |     
  136 |     // This test is informational - having similar structure is OK,
  137 |     // but having identical data is suspicious
  138 |     const identicalStructures: string[] = [];
  139 |     for (const [sig, files] of dataSignatures.entries()) {
  140 |       if (files.length > 1) {
  141 |         identicalStructures.push(`${files.join(', ')} have identical structure`);
  142 |       }
  143 |     }
  144 |     
  145 |     // Just log, don't fail (similar structure is OK, it's the data that matters)
  146 |     if (identicalStructures.length > 0) {
  147 |       console.log(`Info: Some JSON files have identical structure (may be OK): ${identicalStructures.join('; ')}`);
  148 |     }
  149 |   });
  150 | 
  151 |   test('No dead/unused JSON files referenced in code', async () => {
  152 |     const dataDir = path.join(process.cwd(), 'data');
  153 |     const jsonFiles = fs.readdirSync(dataDir).filter(f => f.endsWith('.json'));
  154 |     const srcDir = path.join(process.cwd(), 'src');
  155 |     const tsFiles = fs.readdirSync(srcDir).filter(f => f.endsWith('.ts'));
  156 |     
  157 |     const allSrcContent = tsFiles.map(f => 
  158 |       fs.readFileSync(path.join(srcDir, f), 'utf-8')
  159 |     ).join('\n');
  160 |     
  161 |     const htmlContent = HTML_FILES.map(f =>
  162 |       fs.readFileSync(path.join(process.cwd(), f), 'utf-8')
  163 |     ).join('\n');
  164 |     
  165 |     const unreferencedFiles: string[] = [];
  166 |     
  167 |     for (const jsonFile of jsonFiles) {
  168 |       const fileName = jsonFile.replace('.json', '');
  169 |       // Check if the file name appears anywhere in src or HTML
  170 |       if (!allSrcContent.includes(fileName) && !htmlContent.includes(fileName)) {
  171 |         unreferencedFiles.push(jsonFile);
  172 |       }
  173 |     }
  174 |     
  175 |     if (unreferencedFiles.length > 0) {
> 176 |       throw new Error(`Unreferenced JSON files (potential dead code): ${unreferencedFiles.join(', ')}`);
      |             ^ Error: Unreferenced JSON files (potential dead code): premi-e-contributi-sanita.json, spese-per-funzione-2027.json
  177 |     }
  178 |   });
  179 | });
  180 | 
```
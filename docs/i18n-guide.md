# Internationalization (i18n) Guide

## Overview

This project supports 4 languages with 100% automated validation:
- 🇮🇹 **Italian (IT)** - Primary language
- 🇬🇧 **English (EN)**
- 🇩🇪 **German (DE)**
- 🇫🇷 **French (FR)**

## Architecture

### Files Structure
```
src/
├── i18n.ts                 # Core i18n engine
├── locales/
│   ├── index.ts            # Locale registration
│   ├── it.ts               # Italian translations
│   ├── en.ts               # English translations
│   ├── de.ts               # German translations
│   └── fr.ts               # French translations
```

### HTML Integration
All translatable text uses `data-i18n` attributes:
```html
<h1 data-i18n="hero.title">Dove vanno i soldi del Ticino</h1>
```

### Runtime Translation
The `translator.ts` module automatically:
1. Detects user language from `localStorage` or browser
2. Updates all `[data-i18n]` elements on page load
3. Preserves language selection across sessions

## Adding New Translations

### 1. Add Key to HTML
```html
<p data-i18n="new.key">Default Italian text</p>
```

### 2. Add to All Locale Files

**src/locales/it.ts**
```typescript
export default {
  new: {
    key: 'Testo in italiano'
  }
}
```

**src/locales/en.ts**
```typescript
export default {
  new: {
    key: 'Text in English'
  }
}
```

Repeat for `de.ts` and `fr.ts`.

### 3. Run Validation
```bash
npm run test:i18n
```

This will:
- Extract all 63 `data-i18n` keys from HTML
- Verify each key exists in all 4 languages
- Report missing translations

## Automated Testing

### test-i18n-coverage.mjs
Validates 100% translation coverage:
- ✅ Extracts keys from `index.html` and `metodologia.html`
- ✅ Checks all 4 locale files
- ✅ Reports missing keys per language
- ✅ Fails CI if any key is missing

### Current Status
```
✅ 63 keys × 4 languages = 252 translations
✅ 100% coverage in IT, EN, DE, FR
```

## Translation Guidelines

### 1. Keep Keys Semantic
```typescript
// ✅ Good
hero.title
nav.methodology

// ❌ Bad
text1
label_a
```

### 2. Nest Logically
```typescript
health: {
  faqTitle: '...',
  faqQuestion: '...',
  faqAnswer: '...'
}
```

### 3. Include Context Comments
```typescript
// Insight cards showing per-capita costs
insights: {
  consiglio: 'State Council',  // Executive body (5 members)
  perDay: 'per day'
}
```

### 4. Preserve Formatting
HTML and special characters work in translations:
```typescript
subtitle: 'Transparency on <strong>finances</strong>.'
```

## Common Issues

### Missing Key Warning
If a key isn't found, the raw key is displayed:
```
"hero.title" instead of "Dove vanno i soldi del Ticino"
```

Run `npm run test:i18n` to find missing keys.

### Nested Key Access
The i18n engine supports dot notation:
```html
<p data-i18n="health.faq1Title">...</p>
```
Maps to:
```typescript
{
  health: {
    faq1Title: '...'
  }
}
```

## Future Enhancements

1. **Automated Extraction**: Script to scan HTML and generate skeleton locale files
2. **Translation Memory**: Reuse common translations (e.g., "Fonte:", "CHF", dates)
3. **Pluralization**: Handle singular/plural forms automatically
4. **Date/Number Formatting**: Locale-specific number separators (IT: 1.000,50 vs EN: 1,000.50)
5. **Professional Review**: Send EN/DE/FR to native speakers for review

## Resources

- [Vue i18n patterns](https://vue-i18n.intlify.dev/)
- [ICU MessageFormat](https://formatjs.io/docs/core-concepts/icu-syntax/)
- [Unicode CLDR](https://cldr.unicode.org/)

## Testing i18n Locally

```bash
# Run validation
npm run test:i18n

# Build with all locales
npm run build

# Preview and test language switcher
npm run preview
# Visit http://localhost:4173/dove-vanno-soldi-ticino/
# Click language switcher (IT/EN/DE/FR)
```

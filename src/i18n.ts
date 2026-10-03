// Simple i18n system
export type Language = 'it' | 'en' | 'de' | 'fr';

export type Translations = {
  [key: string]: string | Translations | string[] | any;
};

class I18n {
  private currentLang: Language = 'it';
  private translations: Record<Language, Translations> = {
    it: {},
    en: {},
    de: {},
    fr: {}
  };
  
  constructor() {
    this.loadLanguage();
    document.documentElement.lang = this.currentLang;
  }
  
  private loadLanguage() {
    // Check stored preference
    const stored = localStorage.getItem('language') as Language;
    if (stored && ['it', 'en', 'de', 'fr'].includes(stored)) {
      this.currentLang = stored;
      return;
    }
    
    // Detect from browser
    const browserLang = navigator.language.split('-')[0];
    if (['it', 'en', 'de', 'fr'].includes(browserLang)) {
      this.currentLang = browserLang as Language;
    } else {
      this.currentLang = 'it'; // Default to Italian
    }
    
    localStorage.setItem('language', this.currentLang);
  }
  
  setTranslations(lang: Language, translations: Translations) {
    this.translations[lang] = translations;
  }
  
  setLanguage(lang: Language) {
    this.currentLang = lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
  }
  
  getLanguage(): Language {
    return this.currentLang;
  }
  
  t(key: string): string {
    const keys = key.split('.');
    let value: any = this.translations[this.currentLang];
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key; // Return key if not found
      }
    }
    
    return typeof value === 'string' ? value : key;
  }
  
  formatNumber(num: number, options?: Intl.NumberFormatOptions): string {
    const locales: Record<Language, string> = {
      it: 'it-CH',
      en: 'en-US', 
      de: 'de-CH',
      fr: 'fr-CH'
    };
    
    return new Intl.NumberFormat(locales[this.currentLang], options).format(num);
  }
  
  formatCurrency(amount: number): string {
    return this.formatNumber(amount, {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 1
    }) + ' CHF';
  }
}

export const i18n = new I18n();

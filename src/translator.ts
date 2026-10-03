// DOM-based i18n translator
import { i18n } from './locales';

export function translatePage() {
  const lang = i18n.getLanguage();
  
  // Update HTML lang
  document.documentElement.lang = lang;
  
  // Update meta tags
  document.title = i18n.t('meta.title');
  updateMeta('description', i18n.t('meta.description'));
  
  // Translate all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key) {
      const translation = i18n.t(key);
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        (el as HTMLInputElement).placeholder = translation;
      } else {
        el.textContent = translation;
      }
    }
  });
  
  // Translate all elements with data-i18n-html attribute (allows HTML)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (key) {
      el.innerHTML = i18n.t(key);
    }
  });
  
  // Translate attributes
  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    const attrMap = el.getAttribute('data-i18n-attr');
    if (attrMap) {
      attrMap.split(';').forEach(pair => {
        const [attr, key] = pair.split(':');
        if (attr && key) {
          el.setAttribute(attr.trim(), i18n.t(key.trim()));
        }
      });
    }
  });
}

function updateMeta(name: string, content: string) {
  let meta = document.querySelector(`meta[name="${name}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', name);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
}

export function formatNumber(num: number, options?: Intl.NumberFormatOptions): string {
  return i18n.formatNumber(num, options);
}

export function formatCurrency(amount: number): string {
  return i18n.formatCurrency(amount);
}

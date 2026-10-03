import { i18n } from '../i18n';
import it from './it';
import en from './en';
import de from './de';
import fr from './fr';

// Load all translations
i18n.setTranslations('it', it);
i18n.setTranslations('en', en);
i18n.setTranslations('de', de);
i18n.setTranslations('fr', fr);

export { i18n };
export type { Language } from '../i18n';

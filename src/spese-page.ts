import './style.css';
import { mountSiteNav } from './shared-nav';
import { loadSpeseNatura, renderSpesaDetail, type SpesaConto } from './spese-natura';

mountSiteNav();

const list = document.getElementById('spese-dettaglio');

loadSpeseNatura().then((data) => {
  const spese = (data.consuntivo2025?.spese || []) as SpesaConto[];
  const futuri = (data.preventivo2027?.spese || []) as SpesaConto[];
  if (!list) return;
  list.innerHTML = spese.map((spesa) => {
    const match = futuri.find((f) => f.categoria === spesa.categoria);
    return renderSpesaDetail(spesa, match);
  }).join('');
  const scrollToHash = () => {
    const id = decodeURIComponent(location.hash.replace(/^#/, ''));
    const el = id ? document.getElementById(id) : null;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: 'auto' });
  };
  requestAnimationFrame(() => requestAnimationFrame(scrollToHash));
}).catch((err) => {
  console.error(err);
  if (list) list.innerHTML = '<p class="text-muted-foreground">Impossibile caricare le spese.</p>';
});

import './style.css';
import { mountSiteNav } from './shared-nav';
import { translatePage } from './translator';

mountSiteNav();
const title = document.title;
translatePage();
document.title = title;

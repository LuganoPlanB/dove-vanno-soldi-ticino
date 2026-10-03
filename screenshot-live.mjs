import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function takeScreenshots() {
  const browser = await chromium.launch();
  const url = 'https://tiero.github.io/dove-vanno-soldi-ticino/';
  
  console.log('📸 Taking screenshots at 390px...');
  
  // Light mode
  const lightPage = await browser.newPage({
    viewport: { width: 390, height: 2000 },
    colorScheme: 'light'
  });
  
  await lightPage.goto(url, { waitUntil: 'networkidle' });
  await lightPage.waitForTimeout(2000); // Wait for charts to render
  
  await lightPage.screenshot({
    path: join(__dirname, 'screenshot-home-390px-light.png'),
    fullPage: true
  });
  console.log('✅ Light mode screenshot saved');
  
  await lightPage.close();
  
  // Dark mode
  const darkPage = await browser.newPage({
    viewport: { width: 390, height: 2000 },
    colorScheme: 'dark'
  });
  
  await darkPage.goto(url, { waitUntil: 'networkidle' });
  await darkPage.waitForTimeout(2000); // Wait for charts to render
  
  await darkPage.screenshot({
    path: join(__dirname, 'screenshot-home-390px-dark.png'),
    fullPage: true
  });
  console.log('✅ Dark mode screenshot saved');
  
  await darkPage.close();
  await browser.close();
  
  console.log('\n📊 Screenshots saved:');
  console.log('  - screenshot-home-390px-light.png');
  console.log('  - screenshot-home-390px-dark.png');
}

takeScreenshots().catch(console.error);

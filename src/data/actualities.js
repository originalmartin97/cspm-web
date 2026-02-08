import allampapirokContent from '../assets/content/actualities/allampapirok.md';
import onypContent from '../assets/content/actualities/onyp.md';
import szkolcsonContent from '../assets/content/actualities/szemelyi_kolcson.md';
import penzugyKarrierLehetosegContent from '../assets/content/actualities/penzugy_karrier_hirdetes.md';
import udvContent from '../assets/content/actualities/udv.md';
import healthCare00Content from '../assets/content/actualities/healthcare00.md';

// Define your actuality data
const actualitesData = [
  {
    id: 5,
    title: 'Karrier lehetőség',
    image: require('../assets/images/actualities/karrier_lehetoseg.png'),
    contentPath: penzugyKarrierLehetosegContent,
    summary: 'Pénzügyi Tanácsadót keresünk! Készen állsz a következő lépésre a karrieredben? Csatlakozz csapatunkhoz!'

  },
  {
    id: 1,    
    title: 'Személyi kölcsön',
    image: require('../assets/images/actualities/szemelyi_kolcson.png'),
    contentPath: szkolcsonContent,
    summary: 'Nagyszerű terveid vannak? Segítünk megvalósítani az álmaidat!'
},
  {
    id: 2,
    title: 'Nyugdíjpénztár felhasználása lakáscélokra',
    image: require('../assets/images/actualities/cspm_fb_ad_01.png'),
    contentPath: onypContent,
    summary: 'Új lehetőség az önkéntes nyugdíjpénztári megtakarítások lakáscélú felhasználására'
  },
  {
    id: 3,
    title: 'Állampapírok vagy Befektetés + Biztosítás',
    image: require('../assets/images/actualities/allampapirok.png'),
    contentPath: allampapirokContent,
    summary: 'Melyik befektetési forma a legmegfelelőbb az Ön számára? Ismerje meg a lehetőségeket!'
  },
  {
    id: 4,
    title: 'Új Baleseti Biztosítási termékünk!',
    image: require('../assets/images/actualities/healthcare00.png'),
    contentPath: healthCare00Content,
    summary: 'Egy rossz lépés ne kerüljön sokba! Baleseti sérülésekre szóló kiegészítő, amely tényleg térít! 🩹'
  },
    {
    id: 6,
    title: 'Üdvözlöm a CsPM honlapján!',
    image: require('../assets/images/actualities/udv.png'),
    contentPath: udvContent,
    summary: 'Kollégáim és én azért dolgozunk, hogy Önnek a legjobb pénzügyi megoldásokat kínáljuk. Célunk, hogy segítsünk Önnek a pénzügyei kezelésében és a jövője biztosításában.'
  },
];

// Sort the array by id in descending order (highest/newest id first)
actualitesData.sort((a, b) => b.id - a.id);

export default actualitesData;
import allampapirokContent from './actualities/allampapirok.md';
import onypContent from './actualities/onyp.md';
import szkolcsonContent from './actualities/szemelyi_kolcson.md';
import penzugyKarrierLehetosegContent from './actualities/penzugy_karrier_hirdetes.md';
import elderlyAd06Content from './actualities/elderly_ad_06.md';
import udvContent from './actualities/udv.md';

// Define your actuality data
const actualitesData = [
  {
    id: 1,
    title: 'Karrier lehetőség',
    image: require('./adbar/karrier_lehetoseg.png'),
    contentPath: penzugyKarrierLehetosegContent,
    summary: 'Készen állsz a következő lépésre a karrieredben? Csatlakozz csapatunkhoz!'

  },
  {
    id: 2,    
    title: 'Személyi kölcsön',
    image: require('./adbar/szemelyi_kolcson.png'),
    contentPath: szkolcsonContent,
    summary: 'Nagyszerű terveid vannak? Segítünk megvalósítani az álmaidat!'
},
  {
    id: 3,
    title: 'Nyugdíjpénztár felhasználása lakáscélokra',
    image: require('./adbar/cspm_fb_ad_01.png'),
    contentPath: onypContent,
    summary: 'Új lehetőség az önkéntes nyugdíjpénztári megtakarítások lakáscélú felhasználására'
  },
  {
    id: 4,
    title: 'Állampapírok vagy Befektetés + Biztosítás',
    image: require('./adbar/allampapirok.png'),
    contentPath: allampapirokContent,
    summary: 'Melyik befektetési forma a legmegfelelőbb az Ön számára? Ismerje meg a lehetőségeket!'
  },
  {
    id: 5,
    title: 'Szeretnél biztonságban és gondtalanul élni nyugdíjas éveidben?',
    image: require('./adbar/elderly_ad_06.png'),
    contentPath: elderlyAd06Content,
    summary: 'Most van itt az idő, hogy tegyél érte! Nyugdíjbiztosításainkkal biztonságban tudhatod a jövőd.'
  },
    {
    id: 6,
    title: 'Üdvözlöm a CsPM honlapján!',
    image: require('./adbar/udv.png'),
    contentPath: udvContent,
    summary: 'Kollégáim és én azért dolgozunk, hogy Önnek a legjobb pénzügyi megoldásokat kínáljuk. Célunk, hogy segítsünk Önnek a pénzügyei kezelésében és a jövője biztosításában.'
  },
];

// Sort the array by id in descending order (highest/newest id first)
actualitesData.sort((a, b) => b.id - a.id);

export default actualitesData;
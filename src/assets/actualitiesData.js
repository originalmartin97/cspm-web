import allampapirokContent from './actualities/allampapirok.md?raw';
import onypContent from './actualities/onyp.md?raw';
import szkolcsonContent from './actualities/szemelyi_kolcson.md?raw';
import penzugyKarrierLehetosegContent from './actualities/penzugy_karrier_hirdetes.md?raw';
import udvContent from './actualities/udv.md?raw';
import healthCare00Content from './actualities/healthcare00.md?raw';
import karrierLehetosegImage from './adbar/karrier_lehetoseg.png';
import szemelyiKolcsonImage from './adbar/szemelyi_kolcson.png';
import cspmFbAd01Image from './adbar/cspm_fb_ad_01.png';
import allampapirokImage from './adbar/allampapirok.png';
import healthcare00Image from './adbar/healthcare00.png';
import udvImage from './adbar/udv.png';

// Define your actuality data
const actualitesData = [
  {
    id: 1,
    title: 'Karrier lehetőség',
    image: karrierLehetosegImage,
    contentPath: penzugyKarrierLehetosegContent,
    summary: 'Készen állsz a következő lépésre a karrieredben? Csatlakozz csapatunkhoz!'

  },
  {
    id: 2,    
    title: 'Személyi kölcsön',
    image: szemelyiKolcsonImage,
    contentPath: szkolcsonContent,
    summary: 'Nagyszerű terveid vannak? Segítünk megvalósítani az álmaidat!'
},
  {
    id: 3,
    title: 'Nyugdíjpénztár felhasználása lakáscélokra',
    image: cspmFbAd01Image,
    contentPath: onypContent,
    summary: 'Új lehetőség az önkéntes nyugdíjpénztári megtakarítások lakáscélú felhasználására'
  },
  {
    id: 4,
    title: 'Állampapírok vagy Befektetés + Biztosítás',
    image: allampapirokImage,
    contentPath: allampapirokContent,
    summary: 'Melyik befektetési forma a legmegfelelőbb az Ön számára? Ismerje meg a lehetőségeket!'
  },
  {
    id: 5,
    title: 'Új Baleseti Biztosítási termékünk!',
    image: healthcare00Image,
    contentPath: healthCare00Content,
    summary: 'Egy rossz lépés ne kerüljön sokba! Baleseti sérülésekre szóló kiegészítő, amely tényleg térít! 🩹'
  },
    {
    id: 6,
    title: 'Üdvözlöm a CsPM honlapján!',
      image: udvImage,
    contentPath: udvContent,
    summary: 'Kollégáim és én azért dolgozunk, hogy Önnek a legjobb pénzügyi megoldásokat kínáljuk. Célunk, hogy segítsünk Önnek a pénzügyei kezelésében és a jövője biztosításában.'
  },
];

// Sort the array by id in descending order (highest/newest id first)
actualitesData.sort((a, b) => b.id - a.id);

export default actualitesData;
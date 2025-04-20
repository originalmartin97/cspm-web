import allampapirokContent from './actualities/allampapirok.md';
import onypContent from './actualities/onyp.md';
import szkolcsonContent from './actualities/szemelyi_kolcson.md';
import penzugyKarrierLehetosegContent from './actualities/penzugy_karrier_hirdetes.md';

const actualityData = [
  {
    id: 1,
    title: 'Állampapírok vagy Befektetés + Biztosítás',
    image: require('./adbar/allampapirok.png'),
    contentPath: allampapirokContent,
    summary: 'Melyik befektetési forma a legmegfelelőbb az Ön számára? Ismerje meg a lehetőségeket!'
  },
  {
    id: 2,
    title: 'Nyugdíjpénztár felhasználása lakáscélokra',
    image: require('./adbar/cspm_fb_ad_01.png'),
    contentPath: onypContent,
    summary: 'Új lehetőség az önkéntes nyugdíjpénztári megtakarítások lakáscélú felhasználására'
  },
  {
    id: 3,
    title: 'Személyi kölcsön',
    image: require('./adbar/szemelyi_kolcson.png'),
    contentPath: szkolcsonContent,
    summary: 'Nagyszerű terveid vannak? Segítünk megvalósítani az álmaidat!'
  },
  {
    id: 4,
    title: 'Karrier lehetőség',
    image: require('./adbar/karrier_lehetoseg.png'),
    contentPath: penzugyKarrierLehetosegContent,
    summary: 'Készen állsz a következő lépésre a karrieredben? Csatlakozz csapatunkhoz!'
  }
];

export default actualityData;
import logo from './logo.png';
import ss1 from './screenshots/1.PNG';
import ss2 from './screenshots/2.PNG';
import ss3 from './screenshots/3.PNG';
import ss4 from './screenshots/4.PNG';
import ss5 from './screenshots/5.PNG';
import ss6 from './screenshots/6.PNG';
import ss7 from './screenshots/7.PNG';
import ss8 from './screenshots/8.PNG';
import ss9 from './screenshots/9.PNG';
import ss10 from './screenshots/landing1.png';
import video from './video.mp4';

export default {
  title: 'fizy',
  spoiler: 'The easiest way to discover and listen to music is fizy! Search the artists you like, listen to your favorite songs or watch video clips. fizy is FREE for the first month. Now, choose your subscription type and enjoy your music experience.',
  url: 'https://www.fizy.com/',
  appUrl: 'https://apps.apple.com/us/app/zuubi/id1479840772',
  type: 'Cross-platform music streaming app, web page',
  tech: [
    'React', 'React Native', 'Expo', 'Node.js', 'MongoDB', 'AWS',
  ],
  date: '2019-09-01',
  logo,
  screenshots: [ss1, ss2, ss3, ss4, ss5, ss6, ss7, ss8, ss9, ss10],
  video,
  getContent: () => import('./document.mdx'),
};

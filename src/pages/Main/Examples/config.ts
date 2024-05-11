import novakidImg from 'src/assets/examples/novakid.jpg';
import cloudikeImg from 'src/assets/examples/cloudike-admin-ui-users.png';
import crocImg from 'src/assets/examples/c2-ui-demo.png';
import mentorImg from 'src/assets/examples/mentor.png';
import mordoviaImg from 'src/assets/examples/dashboard.jpg';
import uptimeImg from 'src/assets/examples/uptime.png';
import doraImg from 'src/assets/examples/dora.jpg';
import acceptantImg from 'src/assets/examples/acceptant1.jpg';
import alarmImg from 'src/assets/examples/alarm-panel.png';
import detectorImg from 'src/assets/examples/detector_ui.png';
import co2Img from 'src/assets/examples/co2.png';
import safeCityImg from 'src/assets/examples/safeCity.jpg';
import votumImg from 'src/assets/examples/votum.png';
import asrImg from 'src/assets/examples/asr.png';
import imgIz from 'src/assets/examples/iz/iz.jpg';
import imgRen from 'src/assets/examples/iz/ren.jpg';
import imgFos from 'src/assets/examples/iz/fos.jpg';
import imgSuzAdminka from 'src/assets/examples/iz/suz-adminka.jpg';
import imgBkMain from 'src/assets/examples/ren-bk-landing/main.jpg';
import imgBkGallery from 'src/assets/examples/ren-bk-landing/gallery.jpg';

export interface ExampleData {
  id: string;
  nameKey: string;
  imgPath: string;
  urls: string[];
  descKey: string;
  tags: string[];
  year: number;
  customer: string;
}

export const examples: ExampleData[] = [
  {
    id: 'bk',
    nameKey: 'examples__bk__name',
    imgPath: imgBkMain,
    urls: [
      'https://bk.ren.tv/',
      'https://ren.tv/project/boitsovskii-klub',
      imgBkGallery,
      imgBkMain,
    ],
    descKey: 'examples__bk__description',
    tags: [
      'Next.js',
      'React.js',
      'material-ui',
      'Typescript',
      'eslint',
      'prettier',
    ],
    year: 2024,
    customer: 'RenTV',
  },
  {
    id: 'iz',
    nameKey: 'examples__iz__name',
    imgPath: imgIz,
    urls: [imgRen, imgIz, imgFos, imgSuzAdminka],
    descKey: 'examples__iz__description',
    tags: [
      'React.js',
      'Next.js',
      'material-ui',
      'react-query',
      'Web Sockets',
      'Typescript',
      'react-hook-form',
      'react-drop-zone',
      'vite',
      'axios',
      'eslint',
      'prettier',
      'date-fns',
    ],
    year: 2023,
    customer: 'iz.ru',
  },
  {
    id: 'novakid',
    nameKey: 'examples__novakid__name',
    imgPath: novakidImg,
    urls: [
      'https://disk.yandex.ru/i/g0Fu95W_t0AVBQ',
      'https://disk.yandex.ru/i/sFZqrYFxQpBp8w',
      'https://disk.yandex.ru/i/q5uKbilJmSRxcQ',
      'https://disk.yandex.ru/i/ALLvxAb3ivADwg',
      'https://disk.yandex.ru/i/GILAmZIT-oASHw',
      'https://disk.yandex.ru/i/TE_Cel2rAHaABQ',
      'https://disk.yandex.ru/i/_fWBaa9GtfjoLw',
    ],
    descKey: 'examples__novakid__description',
    tags: [
      'React.js',
      'material-ui',
      'react-query',
      'i18next',
      'create-react-app + craco',
      'axios',
      'eslint',
      'prettier',
      'dnd',
      'jest',
      'react-testing-library',
      'date-fns',
      'formik + yup',
    ],
    year: 2021,
    customer: 'NovaKid',
  },
  {
    id: 'cloudike',
    nameKey: 'examples__cloudike__name',
    imgPath: cloudikeImg,
    urls: [
      'https://www.loom.com/share/57abda2591c1470db5e8e9209f820cd8',
      'https://www.loom.com/share/2cfce33d39aa40b8b3834c6e4a37475d',
      'https://www.loom.com/share/a81ed8deeb3a4d1887fa0fb4285d5d7e',
      'https://www.loom.com/share/50194355a0d845839f12f0bf6ca4bfb8',
    ],
    descKey: 'examples__cloudike__description',
    tags: [
      'React.js',
      'material-ui',
      'Babel',
      'Webpack',
      'axios',
      'react-query',
      'i18next',
      'eslint',
      'prettier',
      'dnd',
      'jest',
      'moment.js',
      'formik + yup',
      'recharts',
    ],
    year: 2020,
    customer: 'ASD Technologies',
  },
  {
    id: 'croc',
    nameKey: 'examples__croc__name',
    imgPath: crocImg,
    urls: [
      'https://www.loom.com/share/68b021f3378b4d56a37df0957fe32291',
      'https://www.loom.com/share/a5b9f049a87145d3a4c1349454a4a2a8',
    ],
    descKey: 'examples__croc__description',
    tags: [
      'React.js',
      'Redux',
      'redux-thunk',
      'Babel',
      'Webpack',
      'axios',
      'i18next',
      'postcss',
      'eslint',
      'prettier',
      'recharts',
      'dnd',
      'jest',
      'puppeteer',
      'day.js',
      'formik + yup',
    ],
    year: 2019,
    customer: 'КРОК',
  },
  {
    id: 'mentor',
    nameKey: 'examples__mentor__name',
    imgPath: mentorImg,
    urls: ['https://mentor-pi.vercel.app/'],
    descKey: 'examples__mentor__description',
    tags: ['React.js', 'Redux', 'RxJS', 'es6', 'Webpack', 'create-react-app'],
    year: 2017,
    customer: 'ИТЦ Система-Саров',
  },
  {
    id: 'mordovia',
    nameKey: 'examples__mordovia__name',
    imgPath: mordoviaImg,
    urls: [],
    descKey: 'examples__mordovia__description',
    tags: [
      'angular.js',
      'javascript',
      'es6',
      'jade',
      'less',
      'grunt',
      'flexbox',
    ],
    year: 2015,
    customer: 'Правительство Республики Мордовия',
  },
  {
    id: 'uptime-monitor',
    nameKey: 'examples__uptime__name',
    imgPath: uptimeImg,
    urls: [],
    descKey: 'examples__novakid__description',
    tags: [
      'angular.js',
      'javascript',
      'es6',
      'jade',
      'less',
      'grunt',
      'flexbox',
    ],
    year: 2015,
    customer: 'Правительство Республики Мордовия',
  },
  {
    id: 'dora',
    nameKey: 'examples__dora__name',
    imgPath: doraImg,
    urls: ['https://do-ra.ru'],
    descKey: 'examples__dora__description',
    tags: ['windows-phone', 'C#', 'Silverlight'],
    year: 2011,
    customer: 'Интерсофт-Евразия',
  },
  {
    id: 'acceptant',
    nameKey: 'examples__acceptant__name',
    imgPath: acceptantImg,
    urls: [''],
    descKey: 'examples__acceptant__description',
    tags: [
      'angular.js',
      'javascript',
      'es6',
      'jade',
      'less',
      'grunt',
      'flexbox',
    ],
    year: 2015,
    customer: 'Правительство Республики Мордовия',
  },
  {
    id: 'alarm-panel',
    nameKey: 'examples__alarm__name',
    imgPath: alarmImg,
    urls: [],
    descKey: 'examples__alarm__description',
    tags: [
      'angular.js',
      'javascript',
      'es6',
      'jade',
      'less',
      'grunt',
      'flexbox',
      'node.js',
      'express.js',
      'mongodb',
      'socket.io',
    ],
    year: 2016,
    customer:
      'Муниципалитеты городов Воронеж, Кострома, Архангельск, Калуга, Московский ЦОДД',
  },
  {
    id: 'acoustic-detector',
    nameKey: 'examples__detector__name',
    imgPath: detectorImg,
    urls: [],
    descKey: 'examples__detector__description',
    tags: [
      'angular.js',
      'javascript',
      'grunt',
      'flexbox',
      'node.js',
      'express.js',
      'coffeescript',
      'socket.io',
    ],
    year: 2015,
    customer:
      'Муниципалитеты городов Воронеж, Кострома, Архангельск, Калуга, Московский ЦОДД',
  },
  {
    id: 'co2',
    nameKey: 'examples__co2__name',
    imgPath: co2Img,
    urls: [],
    descKey: 'examples__co2__description',
    tags: [
      'angular.js',
      'javascript',
      'es6',
      'flexbox',
      'grunt',
      'node.js',
      'express.js',
      'socket.io',
    ],
    year: 2016,
    customer: 'ИТЦ Система-Саров',
  },
  {
    id: 'safe-city',
    nameKey: 'examples__safeCity__name',
    imgPath: safeCityImg,
    urls: [],
    descKey: 'examples__safeCity__description',
    tags: ['windows-phone', 'C#', 'Silverlight'],
    year: 2012,
    customer: 'ИТЦ Система-Саров',
  },
  {
    id: 'votum',
    nameKey: 'examples__votum__name',
    imgPath: votumImg,
    urls: [],
    descKey: 'examples__votum__description',
    tags: ['Django', 'Python', 'Django REST Framework'],
    year: 2011,
    customer: 'ЦИК РФ',
  },
  {
    id: 'asr',
    nameKey: 'examples__asr__name',
    imgPath: asrImg,
    urls: [],
    descKey: 'examples__asr__description',
    tags: ['Django', 'Python'],
    year: 2011,
    customer: 'ИТЦ Система-Саров',
  },
];

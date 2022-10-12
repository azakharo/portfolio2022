import { resumeUrl } from 'src/config';
import novakidImg from 'src/assets/examples/novakid.jpg';
import cloudikeImg from 'src/assets/examples/cloudike-admin-ui-users.png';
import crocImg from 'src/assets/examples/c2-ui-demo.png';
import mentorImg from 'src/assets/examples/mentor.png';
import mordoviaImg from 'src/assets/examples/dashboard.png';
import uptimeImg from 'src/assets/examples/uptime.png';
import doraImg from 'src/assets/examples/dora.png';
import acceptantImg from 'src/assets/examples/acceptant1.png';
import alarmImg from 'src/assets/examples/alarm-panel.png';
import detectorImg from 'src/assets/examples/detector_ui.png';
import co2Img from 'src/assets/examples/co2.png';
import safeCityImg from 'src/assets/examples/safeCity.png';
import votumImg from 'src/assets/examples/votum.png';
import asrImg from 'src/assets/examples/asr.png';

export interface ExampleData {
  name: string;
  imgPath: string;
  urls: string[];
  desc: string;
  tags: string[];
  year: number;
  customer: string;
}

export const examples: ExampleData[] = [
  {
    name: 'NovaKid - новый кабинет родителя',
    imgPath: novakidImg,
    urls: [
      'https://disk.yandex.ru/i/ALLvxAb3ivADwg',
      'https://disk.yandex.ru/i/GILAmZIT-oASHw',
      'https://disk.yandex.ru/i/TE_Cel2rAHaABQ',
      'https://disk.yandex.ru/i/_fWBaa9GtfjoLw',
    ],
    desc: 'Frontend на React.js и Material UI. Интерфейс для управления подпиской, бронирования уроков, мониторинга успехов ребёнка и т.д.',
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
    name: 'Новая админка Cloudike',
    imgPath: cloudikeImg,
    urls: [
      'https://www.loom.com/share/57abda2591c1470db5e8e9209f820cd8',
      'https://www.loom.com/share/2cfce33d39aa40b8b3834c6e4a37475d',
      'https://www.loom.com/share/a81ed8deeb3a4d1887fa0fb4285d5d7e',
      'https://www.loom.com/share/50194355a0d845839f12f0bf6ca4bfb8',
    ],
    desc: 'Frontend на React.js. Material UI. Интерфейс для управления бэкендом Cloudike. Что такое Cloudike? - cloudike.com',
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
    name: 'Новая консоль управления Облака КРОК',
    imgPath: crocImg,
    urls: [
      'https://www.loom.com/share/68b021f3378b4d56a37df0957fe32291',
      'https://www.loom.com/share/a5b9f049a87145d3a4c1349454a4a2a8',
    ],
    desc: 'Frontend на React.js, Redux. Интерфейс для управления ресурсами в облаке: создание виртуальных машин, управление дисками, выделение машинам "белых" IP-шников, организация подсетей, управление доступом и многое другое',
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
    name: 'Сервис Речевой Аналитики',
    imgPath: mentorImg,
    urls: ['https://mentor-pi.vercel.app/'],
    desc: 'Frontend на React.js, Redux, RxJS. Прослушивание записей телефонных переговоров, просмотр и изучение результатов анализа речи. Wave-форма, тайм-лайны.',
    tags: ['React.js', 'Redux', 'RxJS', 'es6', 'Webpack', 'create-react-app'],
    year: 2017,
    customer: 'ИТЦ Система-Саров',
  },
  {
    name: 'Dashboard',
    imgPath: mordoviaImg,
    urls: ['https://dashboard-page2.herokuapp.com'],
    desc: 'Мордовия, пилотный проект системы обработки ЕСЭК (Единой Социальной Электронной Карты) для транспортных приложений.',
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
    name: 'Мониторинг оборудования на автобусах/троллейбусах',
    imgPath: uptimeImg,
    urls: ['https://aza-uptime.herokuapp.com'],
    desc: 'Мордовия, пилотный проект системы обработки ЕСЭК (Единой Социальной Электронной Карты) для транспортных приложений.',
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
    name: 'ДО-РА, мобильный дозиметр-радиометр',
    imgPath: doraImg,
    urls: [
      'http://www.windowsphone.com/ru-ru/store/app/do-ra/237e80e8-e719-4fcf-a824-db7db15c129f',
    ],
    desc: 'Мобильное приложение для Windows Phone. Мобильное приложение на JavaME. Измерение текущего значения радиационного фона с помощью датчика, подключенного к смартфону. Более подробная информация на do-ra.ru',
    tags: ['windows-phone', 'C#', 'Silverlight'],
    year: 2011,
    customer: 'Интерсофт-Евразия',
  },
  {
    name: 'АРМ организации поставщика транспортных услуг',
    imgPath: acceptantImg,
    urls: [
      'https://aza-acceptant.herokuapp.com/#/arm/accounting/stat-common-chart',
    ],
    desc: 'Мордовия, пилотный проект системы обработки ЕСЭК (Единой Социальной Электронной Карты) для транспортных приложений.',
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
    name: 'Панель тревог',
    imgPath: alarmImg,
    urls: [resumeUrl],
    desc: 'Проект "Акустический мониторинг".',
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
    name: 'Detector UI',
    imgPath: detectorImg,
    urls: [resumeUrl],
    desc: 'Проект "Акустический мониторинг". Административный интерфейс для управления настройками акустического детектора, аналогичный интерфейсу управления обычным WiFi-роутером. А также back-end.',
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
    name: 'CO2',
    imgPath: co2Img,
    urls: [resumeUrl],
    desc: 'Проект "Мониторинг содержания CO2 в воздухе офиса". Front-end and back-end (angular, node).',
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
    name: 'Безопасный Город',
    imgPath: safeCityImg,
    urls: [
      'https://www.microsoft.com/en-us/store/p/%d0%9c%d0%be%d0%b1%d0%b8%d0%bb%d1%8c%d0%bd%d1%8b%d0%b9-%d0%bc%d0%be%d0%bd%d0%b8%d1%82%d0%be%d1%80/9nblgggzjd45',
    ],
    desc: 'Приложение "Мобильный Монитор" для Windows Phone. Измерение различных параметров состояния окружающей среды с помощью датчиков, подключенных к смартфону.',
    tags: ['windows-phone', 'C#', 'Silverlight'],
    year: 2012,
    customer: 'ИТЦ Система-Саров',
  },
  {
    name: 'Система интернет-голосования Votum',
    imgPath: votumImg,
    urls: ['http://sarov-itc.ru/projects/51765498140ba0a1440000cd/'],
    desc: 'Распределенная система дистанционного электронного голосования с использованием нескольких каналов передачи информации (WEB, SMS, e-mail) и архитектурой SOA (Service Oriented Architecture).',
    tags: ['Django', 'Python', 'Django REST Framework'],
    year: 2011,
    customer: 'ЦИК РФ',
  },
  {
    name: 'Веб-сервис для распознавания русской речи',
    imgPath: asrImg,
    urls: ['http://asr.sarov-itc.ru/'],
    desc: 'ASR (Automatic Speech Recognition) HTTP. HTTP-интерфейс к распознавателю речи, который разрабатывался в «ИТЦ Система-Саров»',
    tags: ['Django', 'Python'],
    year: 2011,
    customer: 'ИТЦ Система-Саров',
  },
];

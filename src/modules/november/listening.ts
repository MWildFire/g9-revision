import {b,type Exercise} from './content';
export const listening=[{
 id:'technology',title:b('Technology and balance','Технологии и баланс'),
 transcript:'Bonjour, je m’appelle Léa. J’utilise mon téléphone pour parler avec mes amis et pour chercher des informations. La semaine dernière, j’ai passé trop de temps sur les réseaux sociaux et je me suis couchée tard. Le lendemain, j’étais fatiguée en classe. Maintenant, je laisse mon téléphone dans le salon après neuf heures du soir. Si j’avais plus de temps libre, je ferais du sport avec ma sœur. À mon avis, la technologie est utile, mais il faut que nous fassions attention à nos habitudes.',
 questions:[
  {id:'use',prompt:b('Name two uses of Léa’s phone.','Назови два способа использования телефона.'),answer:b('Talking with friends and searching for information.','Общение с друзьями и поиск информации.'),marks:2},
  {id:'consequence',prompt:b('What happened last week, and how did she feel the next day?','Что произошло на прошлой неделе и как она чувствовала себя на следующий день?'),answer:b('Too much time on social media, late bedtime; she was tired in class.','Много времени в соцсетях, поздно легла; устала на уроках.'),marks:3},
  {id:'rule',prompt:b('Where and when does she now leave her phone?','Где и когда она теперь оставляет телефон?'),answer:b('In the living room after 9 pm.','В гостиной после девяти вечера.'),marks:2},
  {id:'hypothesis',prompt:b('What would she do with more free time? Identify the two tenses in the si sentence.','Что она делала бы при большем свободном времени? Назови времена в предложении с si.'),answer:b('Play sport with her sister. Si + imparfait (avais), conditionnel présent (ferais).','Занималась бы спортом с сестрой. Si + imparfait (avais), conditionnel présent (ferais).'),marks:3},
 ] as Omit<Exercise,'criterion'>[],
},{
 id:'school-project',title:b('A school project','Школьный проект'),
 transcript:'Hier, notre classe a présenté un projet sur les transports. Nous avions préparé une enquête avant de commencer. Vingt élèves venaient à l’école en voiture, tandis que huit prenaient le bus et deux marchaient. Nous avons proposé un bus supplémentaire, parce que cela pourrait réduire la circulation. Cependant, certains parents trouvent le bus trop lent. Il faudrait donc choisir un trajet plus direct. Demain, nous allons envoyer nos idées à la direction. Je suis content que mes amis aient participé, même si nous n’avons pas tous la même opinion.',
 questions:[
  {id:'sequence',prompt:b('What had the class done before beginning?','Что класс сделал до начала проекта?'),answer:b('Prepared a survey. Nous avions préparé is plus-que-parfait.','Подготовил опрос. Nous avions préparé — plus-que-parfait.'),marks:2},
  {id:'numbers',prompt:b('How many came by car, bus and on foot? What percentage walked?','Сколько приезжали на машине, автобусе и приходили пешком? Какой процент шёл пешком?'),answer:b('20, 8, 2. Total 30, so 2/30×100≈6.7%.','20, 8, 2. Всего 30; пешком около 6,7%.'),marks:4},
  {id:'proposal',prompt:b('What is proposed, what objection is raised and what change is suggested?','Что предложили, какое возражение возникло и как хотят изменить маршрут?'),answer:b('An extra bus; parents find it too slow; a more direct route.','Дополнительный автобус; родители считают его медленным; более прямой маршрут.'),marks:3},
  {id:'next',prompt:b('What will they do tomorrow?','Что они сделают завтра?'),answer:b('Send their ideas to school management.','Отправят идеи руководству школы.'),marks:1},
 ] as Omit<Exercise,'criterion'>[],
}];

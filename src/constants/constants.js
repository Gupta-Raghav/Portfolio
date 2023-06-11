export const projects = [
  {
    title: 'Twitter Engine',
    description: "This is a twitter engine designed hard coded every bit of this applicaiton on erlang. This twitter engine is capable of all the generic features offered by twitter such as Tweet, retweet, query hash-tag, query-mentions, User passwords are encrypted using SHA-256. Currently working on improving the functionalities with websockets",
    image: '/images/twtitter.png',
    tags: ['Erlang', 'Cowboy web-sockets'],
    source: 'https://github.com/Gupta-Raghav/DOSP-COP5615/tree/main/Project-4',
    // visit: 'https://google.com',
    id: 0,
  },
  {
    title: 'MUJ-Event-manager',
    description:"As a minor project for my bachelor's degree, my team mate and I planned and implemented an event management system. This tool can reduce the time it takes to submit an event proposal from 7 days to 1 day. This project was being discussed with college officials in order to be implemented in day-to-day operations.",
    image: '/images/EM.png',
    tags: ['React', 'JavaScript'],
    source: "https://github.com/Gupta-Raghav/eventmanager",
    // visit: 'https://google.com',
    id: 1,
  },
  {
    title: '$N-Recognizer',
    description: "I have developed a gesture recognition system that utilizes the $N multistroke Recognizer algorithm. This system effectively identifies and distinguishes hand-drawn gestures, while also investigating user behavior patterns associated with both simple and complex gestures. By employing this technology, I have achieved an impressive accuracy rate of over 92% in recognizing 16 predefined gestures. Furthermore, this system can easily accommodate the addition of new gestures in the future.",
      image: '/images/dollarN.png',
      tags: ['C++', 'Wx-widgets', 'User-interaction', 'XML'],
    source: 'https://github.com/vikranthgaddam/NdollarRepo',
    // visit: 'https://google.com',
    id: 2,
  },
  {
    title: 'Linux-security-module',
    description: 'I have developed and seamlessly integrated custom security hooks and policies into the Linux kernel. These enhancements effectively prohibit users from setting the system time in the past and prevent processes from setting their affinity to core 0. To ensure the effectiveness of these modifications, rigorous testing was conducted with Yama, and the custom hook named "oss-lsm" was implemented, significantly bolstering the overall security of the system.',
    image: '/images/LSM.png',
    tags: ['C', 'Operating Systems', 'Yama', 'System Calls'],
    source: 'https://github.com/Gupta-Raghav/Linux-Security-Module',
    // visit: 'https://google.com',
    id: 3,
  },
];

export const TimeLineData = [
  { year: 2018, text: 'Started my journey', },
  { year: 2019, text: 'Became the general secretary one of the biggest techical chapter of India', },
  { year: 2020, text: 'Became the Chair-person and did my first internship as a web-developer', },
  { year: 2021, text: 'Developed event management system for my university', },
  { year: 2022, text: 'Started attending University of Florida for my masters degree in computer science', },
];
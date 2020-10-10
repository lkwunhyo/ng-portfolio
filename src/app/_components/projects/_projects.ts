import { Project } from '../../_models/project';

var username: string = 'lkwunhyo';

var bouncemna: Project = {
    name: 'bouncemna',
    description: `A Capstone project in the last year of my degree, written in the Angular framework. 
                    It involves the M(MySQL)EAN stack to record sexual contact to reduce the spread of
                    Sexually Transmitted Infections (STIs) using contact tracing techniques.`,
    username: username,
    tools: ['Angular', 'Node.js', 'Express', 'MySQL'],
    repos_url: 'https://github.com/lkwunhyo/bouncemna',
    web_url: 'https://github.com/lkwunhyo/bouncemna',
    created: new Date("2019-11-06T03:29:29Z")
}

var bethelpc: Project = {
    name: 'Bethel Church',
    description: `An Angular application designed to meet the needs of Bethel Presbyterian Church. 
                    I saw a need of a web presence and gave it a go. The application involves 
                    the Angular framework paired with a .NET Core REST API.`,
    username: username,
    tools: ['Angular', '.NET Core', 'Web API'],
    repos_url: 'https://github.com/lkwunhyo/bethelpc',
    web_url: '',
    created: new Date()
}

var faceRecognition: Project = {
    name: 'Face Recognition',
    description: `A web application created using the React.js library. It makes use of 
                    the Azure Cognitive Services to recognize faces in an image.`,
    username: username,
    tools: ['React', 'Azure Services'],
    repos_url: 'https://github.com/lkwunhyo/face-recognition',
    web_url: '',
    created: new Date()
}

var portfolio = {
    name: 'Portfolio',
    description: 'A portfolio website designed in Angular, consuming the GitHub REST API.',
    username: username,
    tools: ['Angular', 'Web API'],
    repos_url: 'https://github.com/lkwunhyo/ng-portfolio',
    web_url: 'https://www.lkwunhyo.com/',
    created: new Date("2020-01-01T03:29:29Z")
}

var flappyDuck = {
    name: 'Flappy Duck',
    description: 'A Flappy Bird imitation game created in C.',
    username: username,
    tools: ['C Programming Language'],
    repos_url: 'https://github.com/lkwunhyo/FlappyDuck',
    web_url: '',
    created: new Date("2019-01-11T10:33:55Z")
}

export const PROJECTS: Project[] = [bethelpc, faceRecognition, bouncemna, portfolio, flappyDuck];

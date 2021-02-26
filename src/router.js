import VueRouter from 'vue-router'
import StartView from './views/StartView'
import QuestionView from './views/QuestionView'
import ResultView from './views/ResultView'

const routes = [
    {
        path: '/',
        name: 'StartView',
        component: StartView
    },
    {
        path: '/questions/:id',
        name: 'QuestionView',
        component: QuestionView
    },
    {
        path: '/results',
        name: 'ResultView',
        component: ResultView
    }
]

const router = new VueRouter({ routes })

export default router
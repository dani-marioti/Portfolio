import { IRoute } from '../types'
import IdeaRoutes from './IdeaRoutes'
import UserRoutes from './UserRoutes'

const routes: IRoute[] = [
  { path: '/idea', router: IdeaRoutes },
  { path: '/user', router: UserRoutes }
]

export default routes
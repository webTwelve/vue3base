import { userRouter } from './user'
import { eventsRouter } from './events'
import { settingsRouter } from './settings'
import { workbenchRouter } from './workbench'
export const Routes = [
  ...userRouter,
  ...eventsRouter,
  ...settingsRouter,
  ...workbenchRouter
]

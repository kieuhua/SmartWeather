import Reactotron, {asyncStorage} from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'

/*
Reactotron
    .configure()
    .useReactNative()
    .connect()
*/

const reactotron = Reactotron
    .configure({ name: 'Smart Weather App'})
    .use(asyncStorage())
    .use(reactotronRedux())
    .connect()

export default reactotron
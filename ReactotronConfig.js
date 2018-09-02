import { reactotronRedux} from 'reactotron-redux'

const Reactotron = Reactotron
    .configure({ name: 'React Native Demo'})
    .use(reactotronRedux())
    .connect()

export default Reactotron
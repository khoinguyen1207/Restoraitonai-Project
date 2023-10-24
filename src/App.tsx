import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import useRouteElement from './useRouteElement'

function App() {
    const routeElements = useRouteElement()
    return (
        <>
            {routeElements}
            <ToastContainer />
        </>
    )
}

export default App

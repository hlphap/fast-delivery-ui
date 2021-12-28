import { Routes, Route } from 'react-router-dom'

import RouterGuest from './routes/Guest'
import RouterStore from './routes/Store'

import { Footer } from './components'

const App = () => {
    return (
        <div className="container">
            <div className="main">
                <Routes>
                    <Route path='/store/*' element={<RouterStore />} />
                    <Route path='*' element={<RouterGuest />} />
                </Routes >
            </div>
            <Footer />
        </div>
    )
}

export default App
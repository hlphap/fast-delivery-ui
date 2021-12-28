import { Routes, Route } from 'react-router-dom'

import { Home, Login } from '../../pages'

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
    )
}

export default Router
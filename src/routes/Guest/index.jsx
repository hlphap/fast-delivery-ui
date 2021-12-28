import { Routes, Route } from 'react-router-dom'
import { HeaderGuest } from '../../components'

import { Home, Login } from '../../pages'

const Router = () => {
    return (
        <>
            <HeaderGuest />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/store' element={<Home />} />
            </Routes>
        </>

    )
}

export default Router
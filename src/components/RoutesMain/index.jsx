import { Routes, Route } from 'react-router-dom'
import Yes from '../../pages/Yes'
import YesOrNo from '../../pages/YesOrNo'


const RoutesMain = () => {
    return (
        <Routes>
            <Route path='/:name' element={<YesOrNo />} />
            <Route path='/yes' element={<Yes />} /> 
        </Routes>
    )
}

export default RoutesMain
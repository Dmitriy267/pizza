import './App.css';
import { HomePage } from '../src/pages/HomePage/HomePage';
// import { ErrorPage } from '../src/pages/errorPage/ErrorPage';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <>
            <Routes>
                <Route path="" element={<HomePage />} />
                {/* <Route path="*" element={<ErrorPage />} /> */}
            </Routes>
        </>
    );
}

export default App;

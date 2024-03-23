import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import './Home.css'
import App from './App.tsx'
import Film from './Film.tsx'

function Home() {

    return(
        <>
            <Router>
                <Routes>
                    {/* Homeパスでの設定 */}
                    <Route path="/" element={
                        <>
                            <App />
                            <Link to="/film">
                                <button style={{backgroundColor: 'lightsteelblue'}}>To Film</button>
                            </Link>
                        </>
                    } />
                    
                    {/* Filmパスでの設定 */}
                    <Route path="/film" element={<Film />} />
                </Routes>
            </Router>
        </>
    )
}

export default Home
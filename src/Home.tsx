import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import App from './App.tsx'
import './Home.css'
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
                                <button style={{backgroundColor: 'aquamarine'}}>To Film</button>
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
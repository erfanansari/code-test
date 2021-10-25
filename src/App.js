import Header from './components/Header/Header'
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Route
                path="/"
                render={() => (
                    <main role="main" className="main">
                        <div>Main app</div>
                    </main>
                )}
            />
        </BrowserRouter>
    )
}

export default App

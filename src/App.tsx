import { Link } from 'react-router-dom';
import { MainRoutes } from './routes/MainRoutes';

const App = () => {
    return(
        <div>
            <header>
                header <input type="text" /> <Link to="/sobre">sobre</Link>
                <hr />
            </header>
            <main>
                <MainRoutes />
            </main>
            <footer>
                <hr />
                footer
            </footer>
        </div>
    );
}

export default App;
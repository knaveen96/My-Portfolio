import './App.css';
import NavigationBar from './screens/navigationBar/NavigationBar';
import Particles from './Particles';
import Header from './screens/Header/Header';
import AboutMe from './screens/aboutMe/AboutMe';

function App() {
    return (
        <div className='App'>
            <NavigationBar />
            <Header />
            <Particles />
            <AboutMe />
        </div>
    )

}

export default App;

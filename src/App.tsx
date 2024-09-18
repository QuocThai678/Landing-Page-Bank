import Content from './components/Content';
import NavBar from './components/NavBar';
import Slogan from './components/Slogan';
function App() {
    return (
        <div className="container mx-auto h-screen overflow-y-auto overflow-x-hidden bg-gradient-to-b from-white to-pink-500 px-4 py-8 font-sora text-black dark:from-purple-900 dark:to-purple-700 dark:text-white">
            <NavBar />
            <Slogan />
            <Content />
        </div>
    );
}

export default App;

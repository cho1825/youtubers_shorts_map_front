// src/pages/HomePage.jsx
import RegionTab from '../components/RegionTab';
import YouTuberTab from '../components/YouTuberTab';
import MapSection from '../components/MapSection';
import RestaurantInfo from '../components/RestaurantInfo';
import Button from "../components/Button.jsx";

const HomePage = () => {
    const handleClick = () => {
        console.log('Button clicked!!!!');
    };

    return (
        <div className="home-page">
            <aside className="sidebar left">
                <RegionTab />
            </aside>

            <header className="top-bar">
                <YouTuberTab />
            </header>

            <main className="map-container">
                <MapSection />
                <Button onClick={handleClick} label={"ㅗㅓㅗㅗㅗ"}></Button>
                {/*<Button variant="contained">Hello, World!</Button>*/}
                {/*<Button variant="text">Text</Button>*/}
                {/*<Button variant="contained">Contained</Button>*/}
                {/*<Button variant="outlined">Outlined</Button>*/}
                {/*<Button>Primary</Button>*/}
                {/*<Button disabled>Disabled</Button>*/}
                {/*<Button href="#text-buttons">Link</Button>*/}

            </main>

            <aside className="sidebar right">
                <RestaurantInfo />
            </aside>
        </div>
    );
};

export default HomePage;

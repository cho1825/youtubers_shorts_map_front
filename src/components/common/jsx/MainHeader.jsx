import "/src/components/common/css/MainHeader.css"
import useHeadBackHook from "../../../hooks/useHeadBackHook.jsx";


const MainHeader = () => {

    const handleClick = useHeadBackHook();

    return (
        <div className="main-header">
            <div className="image-container" onClick={handleClick}>
                <img
                    src="/img/DaejeonMap2-logo-black.png"
                    alt="logo"
                    className={"logo"}
                />
            </div>
        </div>
    );
}


export default MainHeader;
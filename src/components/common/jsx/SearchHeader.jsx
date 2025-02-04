import "../css/SearchHeader.css";
import useHeadBackHook from "../../../hooks/useHeadBackHook.jsx";

const SearchHeader = () => {
    const handleClick = useHeadBackHook();

    return (
        <div className={"search-header"}>
            <div className={"image-container"} onClick={handleClick}>
                <img
                    src="/img/48.png"
                    alt="back"
                    className={"back-arrow"}
                />
            </div>

        </div>
    )
}


export default SearchHeader;
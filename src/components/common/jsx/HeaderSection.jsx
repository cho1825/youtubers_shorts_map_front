import "../css/HeaderSection.css";
import MainHeader from "./MainHeader.jsx";
import useShowTextSectionStore from "../../../store/useShowTextSectionStore.js";
import SearchHeader from "./SearchHeader.jsx";

const HeaderSection = () => {

    const { showTextSection } = useShowTextSectionStore();

    return (
        <div className="header-container">
            {showTextSection ? <MainHeader/> : <SearchHeader/>}
        </div>
    );

}

export default HeaderSection;
import { motion } from "framer-motion";
import MapFloatBtn from "./MapFloatBtn.jsx";
import "../../css/MapFloatSection.css"


const MapFloatSection = ({getMapDataByApi}) => {
    return (
        <motion.div
            className="floating-div"
            // onClick={handleButtonClick}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <MapFloatBtn
                categoryNm={"모두 다"}
                category={"all"}
                img={""}
                hoverYn={"y"}
                getMapDataByApi={getMapDataByApi}
            />
            <MapFloatBtn
                categoryNm={"음식점"}
                category={"restaurant"}
                img={""}
                hoverYn={"N"}
                getMapDataByApi={getMapDataByApi}
            />
            <MapFloatBtn
                categoryNm={"카페"}
                category={"cafe"}
                img={""}
                hoverYn={"N"}
                getMapDataByApi={getMapDataByApi}
            />
        </motion.div>
    );
}

export default MapFloatSection;
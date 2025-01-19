import "../../css/TextSection.css"
import YoutuberBtn from "./YoutuberBtn.jsx";
import useRecommendersStore from "../../../../store/useRecommendersStore.js";
import log from "eslint-plugin-react/lib/util/log.js";


const TextSection = ({onZoomClick}) => {
    const {recommenders} = useRecommendersStore();
    return (
        <div className="message-container">
            <div>
                <h1 className="large-title">대전 맛집 여행</h1>
            </div>
            <div>
                <h3 className="middle-title">대전의 맛을 느껴보고 솔직한 후기를 나누어 보아요</h3>
            </div>
            <div className="review-container">
                <YoutuberBtn
                    name={recommenders[0].name}
                    count={recommenders[0].placeCnt}
                    regionCode={25}
                    youtuberNm={recommenders[0].name}
                    onZoomClick={onZoomClick}
                />

                <YoutuberBtn
                    name={"주인장 추천"}
                    count={"0"}
                    regionCode={25}
                    youtuberNm={"주인장"}
                    onZoomClick={onZoomClick}
                />
            </div>
        </div>
    );
}

export default TextSection;
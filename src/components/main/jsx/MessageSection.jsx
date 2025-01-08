import "../css/MessageSection.css"
import YoutuberBtn from "./YoutuberBtn.jsx";


const MessageSection = ({onZoomClick, setMapData}) => {

    const getMapDataByApi = async (regionCode,youtuberNm) => {

        try{
            const response = await fetch(`http://192.168.0.177:8080/api/makers?regionCode=${regionCode}&youtuberNm=${youtuberNm}`,{
                method: "GET",
            });
            if (!response.ok) {
                throw new Error("Api 요청 실패: " + response.statusText);
            }

            const placeDtoList = await response.json();
            setMapData(placeDtoList);
        }catch (error){
            console.error("API 요청 중 에러 발생:", error);
            setMapData(null)
        }

    }

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
                    name={"맠카 추천"}
                    count={"300개"}
                    regionCode={25}
                    youtuberNm={"맠카"}
                    getMapDataByApi={getMapDataByApi}
                    onZoomClick={onZoomClick}
                />
                <YoutuberBtn
                    name={"주인장 추천"}
                    count={"50개"}
                    regionCode={25}
                    youtuberNm={"주인장"}
                    getMapDataByApi={getMapDataByApi}
                    onZoomClick={onZoomClick}
                />
                {/*<input type="input" className="custom-review-input"  placeholder="후기를 남겨주세요." />*/}
                {/*<div>*/}
                {/*    <input type="submit" className="custom-button" value="남기러 가기"/>*/}
                {/*</div>*/}
            </div>
        </div>
    );
}

export default MessageSection;
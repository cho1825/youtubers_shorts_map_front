import "./MessageSection.css"


const MessageSection = () => {




    return (
        <div className="message-container">
            <div>
                <h1 className="large-title">대전 맛집 여행</h1>
            </div>
            <div>
                <h3 className="middle-title">대전의 맛을 느껴보고 솔직한 후기를 나누어 보아요</h3>
            </div>
            <div className="review-container">
                <input type="input" className="custom-review-input"  placeholder="후기를 남겨주세요." />
                <div>
                    <input type="submit" className="custom-button" value="남기러 가기"/>
                </div>
            </div>
        </div>
    );
}

export default MessageSection;
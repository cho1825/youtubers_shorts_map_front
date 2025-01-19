import {create} from "zustand";

const useRecommendersStore = create((set) => ({

    recommenders : null,

    getRecommendersDataByApi:async ()=> {
        try {
            const response = await fetch(
                // `http://192.168.0.177:8080/api/recommenders?cityId=1`
                `http://youtube-map.ddns.net:30101/api/recommenders?cityId=1`
                // `http://172.30.1.52:8080/api/recommenders?cityId=1`
                , {
                    method: "GET"
                }
            );
            if (!response.ok) {
                throw new Error("API 요청 실패: " + response.statusText);
            }
            const recommendersList = await response.json();
            set({recommenders: recommendersList});

        }catch (error){
            console.error("API 요청 중 에러 발생:", error);
        }
    }


}));


export default useRecommendersStore;
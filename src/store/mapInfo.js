import { create } from 'zustand';



const useMapInfoStore = create((set) => ({

    // 초기 상태
    regionCode: null,
    youtuberNm: null,
    category: "all",
    mapData: null, // API에서 가져온 데이터 저장


    // 상태를 설정하는 액션
    setRegionCode: (regionCode) => set({ regionCode }),
    setYoutuberNm: (youtuberNm) => set({ youtuberNm }),
    setCategory : (category) => set({category}),
    setMapData : (mapData) => set({mapData}),

// API 호출 함수
    getMapDataByApi: async (regionCode = "", youtuberNm = "", category = "") => {
        try {
            const response = await fetch(
                `http://192.168.0.177:8080/api/makers?regionCode=${regionCode}&youtuberNm=${youtuberNm}&category=${category}`,
                {
                    method: "GET",
                }
            );
            if (!response.ok) {
                throw new Error("API 요청 실패: " + response.statusText);
            }
            const placeDtoList = await response.json();
            set({ mapData: placeDtoList }); // 가져온 데이터를 상태로 설정
        } catch (error) {
            console.error("API 요청 중 에러 발생:", error);
            set({ mapData: null }); // 오류 발생 시 데이터 초기화
        }
    },

}));



export default useMapInfoStore;
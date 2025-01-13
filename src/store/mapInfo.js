import { create } from 'zustand';



const useMapInfoStore = create((set) => ({

    // 초기 상태
    regionCode: null,
    youtuberNm: null,
    category: "all",


    // 상태를 설정하는 액션
    setRegionCode: (regionCode) => set({ regionCode }),
    setYoutuberNm: (youtuberNm) => set({ youtuberNm }),
    setCategory : (category) => set({category})
}));

export default useMapInfoStore;
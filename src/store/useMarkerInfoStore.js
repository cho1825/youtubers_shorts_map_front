import {create} from "zustand";

const useMarkerInfoStore = create((set) => ({

    id: null,
    name: null,
    categoryGroupName: null,
    categoryName: null,
    description: null,
    lotAddress: null,
    roadAddress: null,
    youtuberNm: null,
    videoId: null,
    videoUrl: null,
    latitude: null,
    longitude: null,
    phoneNumber: null,
    isClick: false,
    videoTitle: false,
    publishedAt: null,

    setId:(id) => set({id}),
    setName:(name) => set({name}),
    setCategoryGroupName:(categoryGroupName) => set({categoryGroupName}),
    setCategoryName:(categoryName) => set({categoryName}),
    setDescription:(description) => set({description}),
    setLotAddress:(lotAddress) => set({lotAddress}),
    setRoadAddress:(roadAddress) => set({roadAddress}),
    setYoutuberNm:(youtuberNm) => set({youtuberNm}),
    setVideoId:(videoId) => set({videoId}),
    setVideoUrl:(videoUrl) => set({videoUrl}),
    setLatitude:(latitude) => set({latitude}),
    setLongitude:(longitude) => set({longitude}),
    setPhoneNumber: (phoneNumber) => set({phoneNumber}),
    setIsClick: (isClick) => set({isClick}),
    setVideoTitle: (videoTitle) => set({videoTitle}),
    setPublishedAt: (publishedAt)=> set({publishedAt}),

    setAll: (newState) => set((state) => ({ ...state, ...newState })),
}));

export default useMarkerInfoStore;
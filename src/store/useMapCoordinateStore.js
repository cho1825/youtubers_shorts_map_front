import {create} from "zustand";

const useMapCoordinateStore = create((set) => ({

    center:{
        lat: 36.3504119,
        lng: 127.3845475,
    },
    isPanto: false,
    zoomLevel : 7,

    setCenter: (center) => set({center}),
    setIsPanto:(isPanto) =>set({isPanto}),
    setZoomLevel:(zoomLevel) => set({zoomLevel}),





}));

export default useMapCoordinateStore;
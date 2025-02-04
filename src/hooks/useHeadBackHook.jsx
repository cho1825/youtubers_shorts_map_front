import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import useMapInfoStore from "../store/useMapInfoStore.js";
import useShowTextSectionStore from "../store/useShowTextSectionStore.js";

const useHeadBackHook = () => {
    const navigate = useNavigate();
    const { setMapData } = useMapInfoStore();
    const { changeShowTextSectionState } = useShowTextSectionStore();

    return useCallback(() => {
        changeShowTextSectionState(navigate, setMapData);
    }, [changeShowTextSectionState, navigate, setMapData]);
};

export default useHeadBackHook;
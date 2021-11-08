import { LAY_DANH_SACH_PHIM } from "../actions/types/FilmType"



const stateDefault = {
    mangPhim: [],
    chiTietPhim: {

    }
}



export const FilmReducer = (state=stateDefault,action) => {

    switch(action.type) {

        case LAY_DANH_SACH_PHIM: {
            state.mangPhim = action.data;
            return {...state}
        }
        case 'CHI_TIET_PHIM':{
            state.chiTietPhim = action.data;
            return {...state};
        }

        default : return {...state}
    }


}
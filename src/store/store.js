import {  } from 'react'
import { legacy_createStore , combineReducers, applyMiddleware  } from 'redux'
import { slider3Reducer } from './reducer';
import { thunk } from 'redux-thunk'
import { SliderImgs } from './reducerImg';
import { filterReducer1 } from './filterReducer1';
import { addToCartReducer } from './addToCartReducer';
import { inputDataShowReducer } from './inputDataShowReducer';
import { imgSrcReducer1 } from './imgSrcReducer';

const rootReducer = combineReducers({
    slider3videos : slider3Reducer,
    sliderImage : SliderImgs,
    sortFunctionality : filterReducer1,
    cartFunctionality : addToCartReducer,
    searchInput : inputDataShowReducer,
    imgSrcChange : imgSrcReducer1
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk)) ; 


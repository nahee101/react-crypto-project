import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// 표준 redux 기능에 대한 추상화

// cryptoApi, newsApi import
import { cryptoApi } from '../services/cryptoApi';
import { cryptoNewsApi } from '../services/cryptoNewsApi';

export default configureStore({
    // 단일 함수인 경우 직접 root reducer로 사용
    // reducer? 현재 상태와 액션 객체를 파라미터로 받아와 새로운 상태로 반환해주는 함수
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer
    }
});
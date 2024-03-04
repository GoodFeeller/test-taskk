import { TypedUseSelectorHook, useDispatch, useStore } from 'react-redux';
import { AppDispatch, AppState, AppStore } from '../store/store';
import { useSelector } from 'react-redux';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
export const useAppStore: () => AppStore = useStore;

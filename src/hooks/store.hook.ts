// import { SoreDispatch, SotreState } from '';
import { useDispatch, useSelector } from 'react-redux';
import { SotreDispatch, SotreState } from '../store/store';

export const useAppSelector = useSelector.withTypes<SotreState>();
export const useAppDispatch = useDispatch.withTypes<SotreDispatch>();

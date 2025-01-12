import { SoreDispatch, SotreState } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';

export const useAppSelector = useSelector.withTypes<SotreState>();
export const useAppDispatch = useDispatch.withTypes<SoreDispatch>();

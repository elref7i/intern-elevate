// import { SoreDispatch, SotreState } from '';
// import { useDispatch, useSelector } from 'react-redux';
// import { SotreDispatch, SotreState } from '../store/store';

import { SotreDispatch, SotreState } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';

export const useAppSelector = useSelector.withTypes<SotreState>();
export const useAppDispatch = useDispatch.withTypes<SotreDispatch>();

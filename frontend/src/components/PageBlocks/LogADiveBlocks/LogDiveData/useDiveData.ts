import { useReducer } from 'react';
import { diveDataReducer } from './reducer/reducer';
import { initialDiveDataState } from './state';
import { diveDataActions, diveStepDataActions } from './actions';
import { StepType } from '../types/commonTypes';
import {
  FifthStepType,
  FirstStepType,
  SecondStepType,
  SixthStepType,
  StepsDataType,
  ThirdStepType,
  SeventhStepType,
} from '../types/stepTypes';

export const UseDiveData = () => {
  const [state, dispatch] = useReducer(diveDataReducer, initialDiveDataState);

  console.log('state', { state });

  const setCurrentStep = (step: StepType) => {
    dispatch(diveDataActions.setStep(step));
  };

  const getCurrentStep = (): StepType => state.step;

  const setStepData = (step: StepType, StepData: StepsDataType) => {
    switch (step) {
      case 1:
        return dispatch(diveStepDataActions.setFirstStepData(StepData as FirstStepType));
      case 2:
        return dispatch(diveStepDataActions.setSecondStepData(StepData as SecondStepType));
      case 3:
        return dispatch(diveStepDataActions.setThirdStepData(StepData as ThirdStepType));
      case 5:
        return dispatch(diveStepDataActions.setFifthStepData(StepData as FifthStepType));
      case 6:
        return dispatch(diveStepDataActions.setSixthStepData(StepData as SixthStepType));
      case 7:
        return dispatch(diveStepDataActions.setSeventhStepData(StepData as SeventhStepType));
      default:
        throw new Error('incorrect step');
    }
  };

  const getStepData = (step: StepType): StepsDataType => {
    switch (step) {
      case 1:
        return state.firstStep;
      case 2:
        return state.secondStep;
      case 3:
        return state.thirdStep;
      case 5:
        return state.fifthStep;
      case 6:
        return state.sixthStep;
      case 7:
        return state.seventhStep;
      default:
        throw new Error('incorrect step');
    }
  };

  return {
    setCurrentStep,
    getCurrentStep,
    setStepData,
    getStepData,
  };
};

import { FirstStepType, SecondStepType } from '../types/stepTypes';
import { StepType } from '../types/commonTypes';

export const DiveDataActions = {
  setStep: (step: StepType) => ({
    type: 'set-step',
    payload: { step },
  } as const),

};

export const diveDataActions = {
  setFirstStepData: (firstStepData: FirstStepType) => ({
    type: 'set-first-step-data',
    payload: { firstStepData },
  } as const),
  setSecondStepData: (secondStepData: SecondStepType) => ({
    type: 'set-second-step-data',
    payload: { secondStepData },
  } as const),
};

export type ActionsType = typeof DiveDataActions & typeof diveDataActions;

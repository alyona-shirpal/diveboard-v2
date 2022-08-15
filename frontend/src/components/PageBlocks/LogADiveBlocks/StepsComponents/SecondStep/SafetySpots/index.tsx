import React, { FC } from 'react';
import { InputLabelWrapper } from '../../../inputLabelWrapper';
import { Icon } from '../../../../../Icons/Icon';
import { incrementId } from '../../../LogDiveHelpers/incrementId';
import { Input } from '../../../../../Input/CommonInput';
import { MarginWrapper } from '../../../../../MarginWrapper';
import { SecondStepType } from '../../../types/stepTypes';
import styles from './styles.module.scss';

type Props = {
  parameters: SecondStepType['parameters'];
  setParameters: React.Dispatch<React.SetStateAction<SecondStepType['parameters']>>
};

export const SafetySpots: FC<Props> = ({
  parameters,
  setParameters,
}) => {
  const findSpot = (id: number) => parameters.safetySpots.find((spot) => spot.id === id);

  const spotChange = (id: number, value: string, parameter: 'depth' | 'period') => {
    const foundSpot = findSpot(id);
    const newSpots = parameters.safetySpots.map((spot) => {
      if (spot.id === id) {
        if (parameter === 'depth') {
          foundSpot.depth = +value;
        } else {
          foundSpot.period = +value;
        }
        return foundSpot;
      }
      return spot;
    });
    setParameters({
      ...parameters,
      safetySpots: newSpots,
    });
  };

  const setDepth = (id: number, value: string) => {
    spotChange(id, value, 'depth');
  };

  const setPeriod = (id: number, value: string) => {
    spotChange(id, value, 'period');
  };

  const add = () => {
    setParameters(
      {
        ...parameters,
        safetySpots: [
          ...parameters.safetySpots,
          {
            id: incrementId(parameters.safetySpots),
            depth: undefined,
            period: undefined,
          }],
      },
    );
  };

  const close = (id: number) => {
    const newSpots = parameters.safetySpots.filter((spot) => spot.id !== id);
    setParameters({ ...parameters, safetySpots: newSpots });
  };

  const getSpotData = (id: number | undefined, par: 'depth' | 'period') => {
    const empty = findSpot(id)[par] === undefined ? '' : '0';
    return findSpot(id)[par] ? `${findSpot(id)[par]}` : empty;
  };

  const spots = parameters.safetySpots.map((spot) => (
    <div className={styles.spot} key={spot.id}>
      <Input
        type="number"
        value={getSpotData(spot.id, 'depth')}
        setValue={
          (value) => {
            setDepth(spot.id, value as string);
          }
        }
        height={48}
        width={270}
        placeholder="m"
      />

      <MarginWrapper right={10} />

      <Input
        type="number"
        value={getSpotData(spot.id, 'period')}
        setValue={
          (value) => {
            setPeriod(spot.id, value as string);
          }
        }
        height={48}
        width={270}
        placeholder="mins"
      />

      <span className={styles.close} onClick={() => { close(spot.id); }}>
        <Icon iconName="close" />
      </span>

    </div>
  ));

  return (
    <div className={styles.safetySpotsWrapper}>
      <InputLabelWrapper label="Safety spots:">
        {spots}
        <div
          className={styles.add}
          onClick={add}
        >
          <span className={styles.addStyle}>Add safety Spots</span>
          <Icon iconName="plus" size={10} />
        </div>
      </InputLabelWrapper>
    </div>

  );
};

import React from 'react';
import { DiveCard2 } from '../../../Cards/DiveCard2';
import styles from './styles.module.scss';
import viewMoreStyles from '../viewMore.module.scss';
import { useWindowWidth } from '../../../../hooks/useWindowWidth';

export const DivesInSpot = () => {
  const isMobile = useWindowWidth(500, 768);
  return (
    <div className={styles.divesInSpot}>
      {!isMobile && <h2>Dives</h2>}
      <div className={styles.divesInSpotWrapper}>
        <DiveCard2
          diverName="John Snow"
          imgSrc="/TEST_IMG_THEN_DELETE/fish.jpg"
          date={new Date('11.04.2001')}
          diveTime={50}
          deepness={10}
          diversCount={2}
        />
        <DiveCard2
          diverName="John Snow"
          imgSrc="/TEST_IMG_THEN_DELETE/fish.jpg"
          date={new Date('11.04.2001')}
          diveTime={50}
          deepness={10}
          diversCount={2}
        />
        <DiveCard2
          diverName="John Snow"
          imgSrc="/TEST_IMG_THEN_DELETE/fish.jpg"
          date={new Date('11.04.2001')}
          diveTime={50}
          deepness={10}
          diversCount={2}
        />
        <DiveCard2
          diverName="John Snow"
          imgSrc="/TEST_IMG_THEN_DELETE/fish.jpg"
          date={new Date('11.04.2001')}
          diveTime={50}
          deepness={10}
          diversCount={2}
        />
        <DiveCard2
          diverName="John Snow"
          imgSrc="/TEST_IMG_THEN_DELETE/fish.jpg"
          date={new Date('11.04.2001')}
          diveTime={50}
          deepness={10}
          diversCount={2}
        />
        <DiveCard2
          diverName="John Snow"
          imgSrc="/TEST_IMG_THEN_DELETE/fish.jpg"
          date={new Date('11.04.2001')}
          diveTime={50}
          deepness={10}
          diversCount={2}
        />
        <DiveCard2
          diverName="John Snow"
          imgSrc="/TEST_IMG_THEN_DELETE/fish.jpg"
          date={new Date('11.04.2001')}
          diveTime={50}
          deepness={10}
          diversCount={2}
        />
        <DiveCard2
          diverName="John Snow"
          imgSrc="/TEST_IMG_THEN_DELETE/fish.jpg"
          date={new Date('11.04.2001')}
          diveTime={50}
          deepness={10}
          diversCount={2}
        />
      </div>
      <span className={viewMoreStyles.viewMore}>View More Dives</span>
    </div>
  );
};

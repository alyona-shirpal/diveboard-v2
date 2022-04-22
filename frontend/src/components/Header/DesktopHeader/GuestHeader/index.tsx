import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { useScroll } from '../../../../hooks/useScroll';
import { Logo } from '../../../Icons/Logo/DesktopLogo';
import { Button } from '../../../Buttons/Button';
import { LinkedButton } from '../../../Buttons/LinkedButton';
import { useWindowWidth } from '../../../../hooks/useWindowWidth';

import pagesRoutes from '../../../../routes/pagesRoutes.json';
import styles from './style.module.scss';

export const GuestHeader: FC = (): JSX.Element => {
  const router = useRouter();
  const { scrolled } = useScroll(10);
  const isWidth = useWindowWidth(100, 1025);

  const scrolledHeaderStyle = () => {
    if (scrolled) {
      return `${styles.header} ${styles.filled}`;
    }
    return styles.header;
  };
  return (
    <header className={scrolledHeaderStyle()}>
      <div className={styles.leftGroup}>
        <Logo size={!isWidth ? 'large' : 'medium'} />
        <LinkedButton
          link="/logbook"
          label="Logbook"
          iconName={
            router.pathname === pagesRoutes.mainPageGuest && !scrolled
              ? 'logbook-white'
              : 'logbook'
          }
          labelColor={
            router.pathname === pagesRoutes.mainPageGuest && !scrolled
              ? '#FFFFFF'
              : '#000345'
          }
        />
        <LinkedButton
          link="/"
          label="Wallet"
          iconName={
            router.pathname === pagesRoutes.mainPageGuest && !scrolled
              ? 'wallet-white'
              : 'wallet-mobile'
          }
          labelColor={
            router.pathname === pagesRoutes.mainPageGuest && !scrolled
              ? '#FFFFFF'
              : '#000345'
          }
        />
      </div>

      <div className={styles.rightGroup}>
        <LinkedButton
          link="/"
          iconName={
            router.pathname === pagesRoutes.mainPageGuest && !scrolled
              ? 'search-white'
              : 'search'
          }
        />

        <Button
          width={206}
          height={56}
          borderRadius={30}
          border={`2px solid ${
            router.pathname === pagesRoutes.mainPageGuest && !scrolled
              ? '#FFFFFF'
              : '#000345'
          }`}
          backgroundColor="transparent"
          onClick={() => {
            router.push(pagesRoutes.authPageRout);
          }}
        >
          <span
            style={{
              color: `${
                router.pathname === pagesRoutes.mainPageGuest && !scrolled
                  ? '#FFFFFF'
                  : '#000345'
              }`,
            }}
            className={styles.btnText}
          >
            Log In / Sign Up
          </span>
        </Button>
      </div>
    </header>
  );
};

import React from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { firebaseAdmin } from '../src/firebase/firebaseAdmin';
import { AuthLayout } from '../src/layouts/AuthLayout';
import { SpotBlocks } from '../src/components/PageBlocks/SpotBlocks';
import { useWindowWidth } from '../src/hooks/useWindowWidth';
import { UserHeader } from '../src/components/Header/DesktopHeader';
import { Footer } from '../src/components/Footer/DesktopFooter';
import { MobileNavBar } from '../src/components/MobileNavBar';

const Spot: InferGetServerSidePropsType<typeof getServerSideProps> = ({ user }) => {
  const isMobile = useWindowWidth(500, 768);
  return (
    <AuthLayout user={user}>
      {!isMobile && <UserHeader />}
      <SpotBlocks />
      {!isMobile ? <Footer /> : <MobileNavBar loggedIn={!!user} />}
    </AuthLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const uid = context.req.cookies.__session;

  if (!uid) {
    return {
      props: {
        user: null,
      },
    };
  }

  const {
    email,
    photoURL = '',
    displayName = '',
  } = await firebaseAdmin.auth()
    .getUser(uid);

  return {
    props: {
      user: {
        uid,
        email,
        photoURL,
        name: displayName,
      },
    },
  };
};
export default Spot;

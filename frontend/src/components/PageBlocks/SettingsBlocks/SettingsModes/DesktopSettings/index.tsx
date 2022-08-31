import React, { FC } from 'react';
import { SettingsBlock } from '../../index';
import { EditContextWrapper } from '../../EditContextWrapper';
import { PersonalInfo } from '../../PersonalInfo';
import { Preferences } from '../../Preferences';
import { Notification } from '../../Notifications';
import { NotificationsType, PreferencesType } from '../../../../../firebase/firestore/models';
import { MarginWrapper } from '../../../../MarginWrapper';

type Props = {
  preferences: PreferencesType
  notifications: NotificationsType
};

export const DesktopSettings: FC <Props> = ({ preferences, notifications }) => (
  <SettingsBlock>
    <EditContextWrapper>
      <MarginWrapper top={20} display="block">
        <PersonalInfo />
      </MarginWrapper>

      <MarginWrapper top={20} display="block">
        <Preferences preferences={preferences} />
      </MarginWrapper>

      <MarginWrapper top={20} display="block">
        <Notification notifications={notifications} />
      </MarginWrapper>

    </EditContextWrapper>
  </SettingsBlock>
);

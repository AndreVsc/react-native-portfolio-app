import React, { useState } from 'react';
import { ScrollView ,View } from 'react-native';

import Profile from '../../components/Profile/Profile';

import { styles } from './PerfilStyles';

export function Perfil() {

  return (
    <ScrollView contentContainerStyle={styles.container}>
          <Profile />
    </ScrollView>
  );
}

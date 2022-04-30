import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {color} from '../../styles';

export default function SafeAreaContainer({
  children,
  edges = ['bottom'],
  safeAreaColor = color.primary.background1,
}) {
  return (
    <SafeAreaView
      style={{
        backgroundColor: safeAreaColor,
        flex: 1,
      }}
      edges={edges}>
      {children}
    </SafeAreaView>
  );
}

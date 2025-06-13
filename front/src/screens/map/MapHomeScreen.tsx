import React from 'react';
import {Text, StyleSheet, Button, SafeAreaView, View} from 'react-native';
import useAuth from '@/hooks/queries/useAuth';

function MapHomeScreen() {
  const {logoutMutation} = useAuth();
  return (
    <SafeAreaView>
      <Text>맵 스크린</Text>
      <Button
        title="로그아웃"
        onPress={() => logoutMutation.mutate(null)}></Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default MapHomeScreen;

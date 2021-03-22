import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import AppText from '../components/AppText'
import colors from '../config/colors';

function Card({ title, subTitle, image}) {
  return (
    <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
    </View>
);
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: 'hidden'
  },
  detailsContainer: {
    padding: 20
  },
  image: {
    width: '100%',
    height: 200
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: 'bold'
  },
  title: {
    paddingBottom: 7
  }
})

export default Card;

import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.headings}>Trendy Places To Visit</Text>
      <View style={styles.cards}>
        <View style={styles.fancy}>
          <Image
            style={styles.CardImage}
            source={{
              uri: 'https://images.unsplash.com/photo-1602643163983-ed0babc39797?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            }}
          />
        </View>
        <View style={styles.CardBody}>
          <Text style={styles.CardTitle}>Hawa Mahal</Text>
          <Text style={styles.CardLabel}>Pink City, Jaipur</Text>
          <Text style={styles.CardDescription}>
            The Hawa Mahal is an 18th-century palace in the city of Jaipur,
            Rajasthan, India. Built from red and pink sandstone, it forms the edge
            of the city palace.
          </Text>
          <View style={styles.CardFooterLine}>
            <Image
              style={styles.CardFooterIcon}
              source={{
                uri: 'https://png.pngtree.com/png-vector/20190326/ourmid/pngtree-vector-clock-icon-png-image_865317.jpg',
              }}
            />
            <Text style={styles.CardFooter}>12 mins away</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FancyCard;

const styles = StyleSheet.create({
  headings: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    paddingHorizontal: 16,
    marginTop: 12,
  },
  cards: {
    width: 320,
    height: 320,
    borderRadius: 12,
    marginHorizontal: 'auto',
    marginVertical: 16,
    backgroundColor: '#FFFFFF',
    shadowColor: '#c709f7',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 9,
    elevation: 10,
  },
  fancy: {
    backgroundColor: '#FFFFFF',
    elevation: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 12,
    flex: 1,
  },
  CardImage: {
    height: 160,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  CardBody: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    justifyContent: 'flex-end',
    flex: 1,
    flexGrow: 1,
  },
  CardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  CardLabel: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#666',
    marginBottom: 5,
  },
  CardDescription: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#666',
    marginTop: 8,
    marginBottom: 12,
  },
  CardFooterLine: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  CardFooterIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
    opacity: 0.5,
  },
  CardFooter: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#999',
  },
});

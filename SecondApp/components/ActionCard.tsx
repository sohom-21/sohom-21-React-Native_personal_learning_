import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const ActionCard = () => {
  function openWebsite(WebsiteLink: string) {
    Linking.openURL(WebsiteLink);
  }
  return (
    <View>
    <Text style={styles.headings}>Video Card</Text>
    <View style={styles.containerBox}>
      <Text style={styles.cardText} numberOfLines={2}>
        New Video is Live !!!!
      </Text>
      <View style={[styles.ImageCard]}>
        <View>
          <Image
          style={styles.CardImage}
           source={{
            uri:'https://i.ytimg.com/vi/0fYi8SGA20k/hqdefault.jpg',
           }}
           />
           <TouchableOpacity style={styles.PlayButtonBox}
            onPress={() => openWebsite('https://www.youtube.com/watch?v=0fYi8SGA20k')}
            >
            <Image style={styles.PlayButton}
            source={{
              uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwpWRxrooWX7iAbpFpdj0dxMm6nj5Cxczg7Q&s'}}
            />
           </TouchableOpacity>
           <View style={styles.descBox}>
             <Text style={styles.desc}
             numberOfLines={3}
             >
               🚀 Elevate Your Tech Game! 🚀{'\n\n'}
               Discover cutting-edge technologies and boost your portfolio to new heights!
               This mind-blowing video unveils the hottest tech trends that will set you apart in the digital landscape.
               From AI and blockchain to quantum computing, we've got you covered.
               Don't miss this opportunity to future-proof your skills and stand out in the tech crowd!
               Watch now and transform your career trajectory! 💻✨
             </Text>
           </View>
        </View>
      </View>
      <View style={styles.cardContainer}>
        <View style={[styles.card, styles.cardOne]}>
          <Text
            style={styles.cardText}
            onPress={() => openWebsite('https://www.google.com')}>
            Google
          </Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text
            style={styles.cardText}
            onPress={() => openWebsite('https://www.facebook.com')}>
            Facebook
          </Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text
            style={styles.cardText}
            onPress={() => openWebsite('https://www.twitter.com')}>
            Twitter
          </Text>
        </View>
      </View>
    </View>
  </View>
  );
};

export default ActionCard;

const styles = StyleSheet.create({
  headings: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    paddingHorizontal: 16,
    marginTop: 6,
  },
  containerBox: {
    padding: 8,
    borderRadius: 10,
    marginHorizontal: 13,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  card: {
    height: 100,
    flex: 1,
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    elevation: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.8,
    shadowRadius: 9,
    borderRadius: 14,
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 8,
  },
  cardOne: {
    backgroundColor: '#EF5354',
  },
  cardTwo: {
    backgroundColor: '#50DBB4',
  },
  cardThree: {
    backgroundColor: '#5F27CD',
  },
  CardImage:{
    height: 200,
    margin: 8,
    borderRadius: 4,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    objectFit:'fill',
  },
  ImageCard: {
    backgroundColor: '#FFFFFF',
    elevation: 10,
    marginHorizontal: 12,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.8,
    shadowRadius: 9,
    borderRadius: 14,
    flex:1,
    flexGrow: 1,
  },
  PlayButton: {
    height: 50,
    width: 50,
    margin: 8,
    borderRadius: 4,
    objectFit:'fill',
  },
  PlayButtonBox: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  descBox: {
    margin: 8,
    padding: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  desc: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 600,
    color: '#333',
    textAlign: 'justify',
  },
});

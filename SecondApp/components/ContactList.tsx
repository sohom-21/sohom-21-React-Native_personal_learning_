import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';

const ContactList = () => {
  const ContactListComponent = [
    {
      uid: 1,
      name: 'John Doe',
      status: 'Just an ordinary dev 👨‍💻💻',
      phone: '123-456-7890',
      imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      uid: 2,
      name: 'Jane Smith',
      status: 'I ❤️ to Code and Teach!',
      phone: '987-654-3210',
      imageUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      uid: 3,
      name: 'Mike Johnson',
      status: 'Just a salaryman 💰💵',
      phone: '555-555-5555',
      imageUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
    {
      uid: 4,
      name: 'Emily Davis',
      status: 'I ❤️ to Create Content and Vlog my journey!',
      phone: '222-222-2222',
      imageUrl: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
    {
      uid: 5,
      name: 'Sarah Williams',
      status: 'I ❤️ to Learn and Grow! 🚀',
      phone: '333-333-3333',
      imageUrl: 'https://randomuser.me/api/portraits/women/5.jpg',
    },
    {
      uid: 6,
      name: 'David Brown',
      status: 'Just a student 👨',
      phone: '444-444-4444',
      imageUrl: 'https://randomuser.me/api/portraits/men/6.jpg',
    },
    {
      uid: 7,
      name: 'Michael Clark',
      status: 'I am magnificent 5⭐ Chef with a good fanbase',
      phone: '666-666-6666',
      imageUrl: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
  ];
  return (
    <View>
      <Text style={styles.headingsText}>ContactList</Text>
      <ScrollView style={styles.container}
      scrollEnabled={false}
      >
        {ContactListComponent.map(({uid,name,status,imageUrl}) => {
          return(
            <View key={uid} style={styles.userCard}>
              <Image
               style={styles.UserImage}
              source={{
                uri:imageUrl,
              }}
              />
              <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  headingsText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    paddingHorizontal: 10,
    marginTop: 6,
  },
  container: {
    paddingHorizontal: 16,
    paddingVertical: 9,
    backgroundColor: '#F5F5F5',
    marginBottom: 4,
  },
  userName:{
    fontSize: 18,
    fontWeight: 600,
  },
  userStatus:{
    fontSize: 14,
    fontWeight: 500,
    color: '#666666',
  },
  userCard:{
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical:12,
    borderBottomWidth:1,
    borderBottomColor:'#E2DAD3',
  },
  UserImage:{
    width:70,
    height:65,
    borderRadius: 70 / 2,
    marginRight:14,
  },
});

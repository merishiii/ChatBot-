import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import VehicleProblems from './VehicleProblems.js';
const botAvatar = require('./assets/mascot.png');

const WelcomeMessage = ({onMenuRequested}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showServicesSubMenu, setShowServicesSubMenu] = useState(false);

  const handleMenuRequest = () => {
    setShowMenu(!showMenu);
    if (onMenuRequested) {
      onMenuRequested();
    }
  };

  const handleServicesSubMenu = () => {
    setShowServicesSubMenu(!showServicesSubMenu);
  };

  const handleChat = () => {
    setShowChat(!showChat);
  };

  const renderChat = () => {
    if (showChat) {
      return (
        <>
          <View style={styles.messageContainer1}>
            {/* <Image source={botAvatar} style={styles.avatar} /> */}
            <View style={styles.textContainer}>
              <Text style={styles.messageText1}>
                Email: rishabhpathak620@gmail.com
              </Text>
              
              <Text style={styles.messageText1}>
               Phone no. 7991226322
              </Text>
              <Text style={styles.messageText1}>
                Location: Feroze Gandhi Institue of Enggineering college, Raebareli, 
                UttarPradesh
              </Text>
              <Text></Text>
              <Text></Text>
            </View>
          </View>
        </>
      );
    }
    return null;
  };

  const renderMenuOptions = () => {
    if (showMenu) {
      return (
        <>
          <View style={styles.messageContainer}>
            <Image source={botAvatar} style={styles.avatar} />
            <View style={styles.textContainer}>
              {/* <Text style={styles.messageText}>
            Hi, thanks for connecting Mechwalk. I'm Mechwalk's messaging
            assistant.
          </Text> */}

              <TouchableOpacity
                style={styles.menuOption}
                onPress={() => {
                  handleServicesSubMenu(); // First function
                  console.log('Ac Services & Repair'); // Second function
                }}>
                <Text style={styles.messageText2}>Services we offer</Text>
              </TouchableOpacity>

              {/* <TouchableOpacity
                style={styles.subMenuOption}
                onPress={() => {
                  handleServicesSubMenu(); // First function
                  console.log('Ac Services & Repair'); // Second function
                  // Open a link when the option is pressed
                  Linking.openURL('https://www.google.com');
                }}>
                <Text style={styles.subMenuOptionText}>
                  Ac Services & Repair
                </Text>
              </TouchableOpacity> */}

              <TouchableOpacity
                style={styles.menuOption}
                onPress={() => {
                  // handleServicesSubMenu(); // First function
                  //Set Path

                  Linking.openURL('https://www.google.com');
                  console.log('Appointment Booking'); // Second function
                }}>
                <Text style={styles.messageText2}>Appointment Booking</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menuOption}
                onPress={() => console.log('Vehicle Problems')}>
                <Text style={styles.messageText2}>Vehicle Problems</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menuOption}
                onPress={() => {
                  handleChat(); // First function
                  //Set Path

                  // Linking.openURL('https://www.google.com');
                  console.log('Contact Us'); // Second function
                }}>
                <Text style={styles.messageText2}>Contact Us</Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      );
    }
    return null;
  };

  const renderServicesSubMenu = () => {
    if (showServicesSubMenu) {
      return (
        <>
          <View style={styles.messageContainer}>
            <Image source={botAvatar} style={styles.avatar} />
            <View style={styles.textContainer}>
              {/* <Text style={styles.messageText}>
            Hi, thanks for connecting Mechwalk. I'm Mechwalk's messaging
            assistant.
          </Text> */}

              <TouchableOpacity
                style={styles.menuOption}
                onPress={() => {
                  //Set Path

                  Linking.openURL('https://www.google.com');
                }}>
                <Text style={styles.messageText2}>
                  Ac Services & Repair
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menuOption}
                onPress={() => {
                  //Set Path

                  Linking.openURL('https://www.google.com');
                }}>
                <Text style={styles.messageText2}>
                  Car Denting & Painting
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menuOption}
                onPress={() => {
                  //Set Path

                  Linking.openURL('https://www.google.com');
                }}>
                <Text style={styles.messageText2}>Batteries</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menuOption}
                onPress={() => {
                  //Set Path

                  Linking.openURL('https://www.google.com');
                }}>
                <Text style={styles.messageText2}>Car Inspection</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menuOption}
                onPress={() => {
                  //Set Path

                  Linking.openURL('https://www.google.com');
                }}>
                <Text style={styles.messageText2}>Tyre & wheel Care</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menuOption}
                onPress={() => {
                  //Set Path

                  Linking.openURL('https://www.google.com');
                }}>
                <Text style={styles.messageText2}>Car Cleaning</Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      );
    }
    return null;
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
    <View style={styles.container}>
      <View style={styles.messageContainer}>
        <Image source={botAvatar} style={styles.avatar} />
        <View style={styles.textContainer}>
          <Text style={styles.messageText}>
            Hi, thanks for connecting Mechwalk. I'm Mechwalk's messaging
            assistant.
          </Text>
        </View>
      </View>
      <View style={styles.messageContainer}>
        <Image source={botAvatar} style={styles.avatar} />
        <View style={styles.textContainer}>
          <Text style={styles.messageText}>
            I am here to answer your questions and get the right person to help
            you out.
          </Text>
        </View>
      </View>
      <View style={styles.messageContainer}>
        <Image source={botAvatar} style={styles.avatar} />
        <View style={styles.textContainer}>
        <Text style={styles.messageText4}>Click on Menu to show options</Text>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handleMenuRequest}>
                
            <Text style={styles.messageText2}>Menu</Text>
          </TouchableOpacity>
        </View>
      </View>
      {renderMenuOptions()}
      {showMenu && (
        <TouchableOpacity
          style={styles.menuOption}
          onPress={handleServicesSubMenu}>
         {/* <Text style={styles.menuOptionText}>Services we offer</Text> */}
        </TouchableOpacity>
      )}
      {renderServicesSubMenu()}
      {renderChat()}
    </View>
     </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    margin: 10,
  },
  messageContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    maxWidth: '80%',
    marginVertical: 5,
    // marginBottom: 60,
    // margin:5,
  },
  messageContainer1: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    maxWidth: '80%',
    marginVertical: 5,
  },
  avatar: {
    width: 40,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  messageText: {
    fontSize: 19,
    color: 'black',
    fontWeight: '460'
  },
  messageText1: {
    fontSize: 17,
    color: 'black',
    fontWeight: '860'
  },
  messageText2: {
    fontSize: 19,
    color: '#fff',
    fontWeight: '860',
    height:30,
    padding:2,
    // justifyContent: 'center',
  },
  messageText4: {
    fontSize: 17,
    color: 'black',
    fontWeight: '460'
  },
  buttonContainer: {
    fontSize: 20,
    color: '#FFF',
    backgroundColor: '#910A67',
    marginTop: 10,
    borderRadius: 30,
    paddingHorizontal: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuOption: {
    backgroundColor: '#910A67',
    marginTop: 10,
    borderRadius: 30,
    paddingHorizontal: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuOptionText: {
    fontSize: 18,
    color: '#FFF',
  },
  subMenuOption: {
    backgroundColor: '#5A189A',
    marginTop: 10,
    borderRadius: 30,
    paddingHorizontal: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subMenuOptionText: {
    fontSize: 18,
    color: '#FFF',
  },
});

export default WelcomeMessage;

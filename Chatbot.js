import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import WelcomeMessage from './WelcomeMessage';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);

  const handleMenuRequested = () => {
    const menuMessage = {
      _id: Math.random().toString(),
    //   text: '1. Option 1\n2. Option 2\n3. Option 3\n4. Option 4',
    //   createdAt: new Date(),
    //   user: {
        // _id: 2,
        // name: 'Chatbot',
    //   },
    };
    setMessages(previousMessages => GiftedChat.append(previousMessages, [menuMessage]));
  };

  return (
    <View style={{flex: 1, backgroundColor: '#910A67' }}>
      <WelcomeMessage onMenuRequested={handleMenuRequested} />
      <GiftedChat
        messages={messages}
        onSend={newMessages => setMessages(previousMessages => GiftedChat.append(previousMessages, newMessages))}
        user={{
          _id: 1,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Chatbot;

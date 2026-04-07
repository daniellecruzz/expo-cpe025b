import React from 'react';
import {
  Alert,
  BackHandler,
  Image,
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native';
import Status from './components/Status';
import MessageList from './components/MessageList';
import {
  createImageMessage,
  createLocationMessage,
  createTextMessage,
} from './utils/MessageUtils';

export default class App extends React.Component {
  state = {
    messages: [
      createLocationMessage({
        latitude: 37.78825,
        longitude: -122.4324,
      }),
      createTextMessage('World'),
      createTextMessage('Hello'),
      createImageMessage('https://unsplash.it/300/300'),
    ],
    fullscreenImageId: null,
  };

  componentDidMount() {
    this.subscription = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        const { fullscreenImageId } = this.state;
        if (fullscreenImageId) {
          this.dismissFullscreenImage();
          return true;
        }
        return false;
      }
    );
  }

  componentWillUnmount() {
    this.subscription.remove();
  }

  handlePressMessage = ({ id, type }) => {
    switch (type) {
      case 'text':
        Alert.alert(
          'Delete message?',
          'Are you sure you want to permanently delete this message?',
          [
            {
              text: 'Delete',
              style: 'destructive',
              onPress: () => this.deleteMessage(id),
            },
            {
              text: 'Cancel',
              style: 'cancel',
            },
          ]
        );
        break;
      case 'image':
        this.setState({ fullscreenImageId: id });
        break;
      default:
        break;
    }
  };

  deleteMessage = id => {
    const { messages } = this.state;
    this.setState({
      messages: messages.filter(message => message.id !== id),
    });
  };

  dismissFullscreenImage = () => {
    this.setState({ fullscreenImageId: null });
  };

  renderMessageList() {
    const { messages } = this.state;
    return (
      <View style={styles.content}>
        <MessageList
          messages={messages}
          onPressMessage={this.handlePressMessage}
        />
      </View>
    );
  }

  renderFullscreenImage() {
    const { messages, fullscreenImageId } = this.state;
    if (!fullscreenImageId) return null;
    const image = messages.find(m => m.id === fullscreenImageId);
    if (!image) return null;
    const { uri } = image;
    return (
      <TouchableHighlight
        style={styles.fullscreenOverlay}
        onPress={this.dismissFullscreenImage}
      >
        <Image style={styles.fullscreenImage} source={{ uri }} />
      </TouchableHighlight>
    );
  }

  renderToolbar() {
    return <View style={styles.toolbar} />;
  }

  renderInputMethodEditor() {
    return <View style={styles.inputMethodEditor} />;
  }

  render() {
    return (
      <View style={styles.container}>
        <Status />
        <View style={styles.content}>
          {this.renderMessageList()}
          {this.renderToolbar()}
          {this.renderInputMethodEditor()}
          {this.renderFullscreenImage()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
  },
  inputMethodEditor: {
    flex: 1,
    backgroundColor: 'white',
  },
  toolbar: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.04)',
    backgroundColor: 'white',
  },
  fullscreenOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black',
    zIndex: 10,
  },
  fullscreenImage: {
    flex: 1,
    resizeMode: 'contain',
  },
});
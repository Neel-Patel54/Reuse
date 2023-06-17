import React from 'react';
import {
  Alert,
  View,
  TouchableOpacity,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const SwipeListItem = ({item, onDelete, openItemId, setOpenItemId}: any) => {
  const swipeableRef = React.useRef<any>(null);

  const handleEdit = () => {
    Alert.alert('Edit', `Edit item ${item.id}`);
  };

  const handleDelete = () => {
    onDelete(item.id);
    Alert.alert('Delete', `Delete item ${item.id}`);
  };

  const handleClick = () => {
    Alert.alert('Click', `Clicked item ${item.id}`);
  };

  const renderRightActions = () => {
    return (
      <View style={styles.rightActions}>
        <TouchableOpacity style={styles.actionButton} onPress={handleDelete}>
          <Text style={styles.actionText}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderLeftActions = () => {
    return (
      <View style={styles.leftActions}>
        <TouchableOpacity style={styles.actionButton} onPress={handleEdit}>
          <Text style={styles.actionText}>Edit</Text>
        </TouchableOpacity>
      </View>
    );
  };

  React.useEffect(() => {
    if (openItemId !== item.id) {
      swipeableRef.current?.close();
    }
  }, [openItemId, item.id]);

  return (
    <Swipeable
      ref={swipeableRef}
      onSwipeableOpen={() => setOpenItemId(item.id)}
      onSwipeableWillOpen={() => setOpenItemId(item.id)}
      containerStyle={styles.container}
      renderRightActions={renderRightActions}
      renderLeftActions={renderLeftActions}>
      <Pressable style={styles.listItem} onPress={handleClick}>
        <Text style={styles.txt}>{item.title}</Text>
      </Pressable>
    </Swipeable>
  );
};

export default SwipeListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
  },
  txt: {
    color: 'black',
  },
  listItem: {
    height: 50,
    justifyContent: 'center',
    paddingHorizontal: 16,
    backgroundColor: 'yellow',
  },
  rightActions: {
    width: 100,
    height: 50,
    backgroundColor: '#ff0000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftActions: {
    width: 100,
    height: 50,
    backgroundColor: '#ffd700',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionButton: {
    paddingHorizontal: 16,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionText: {
    color: 'white',
  },
});

import React from 'react';
import {View, Modal, TouchableOpacity, Text} from 'react-native';

import {styles} from './ConfirmationPopup.styles';

export default function ConfirmationPopup({isVisible, onPress1, onPress2}) {
  return (
    <Modal visible={isVisible} transparent animationType="fade">
      <View style={styles.container}>
        <TouchableOpacity
          onPress={onPress1}
          activeOpacity={1}
          style={styles.backgroundButton}>
          <View style={styles.boxMessage}>
            <View style={styles.boxMessage_row1}>
              <Text style={styles.boxMessage_row1_text}>
                Are you sure you want to continue?
              </Text>
            </View>
            <View style={styles.boxMessage_row2}>
              <TouchableOpacity onPress={onPress1}>
                <Text style={styles.boxMessage_row2_text}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={onPress2}>
                <Text style={{...styles.boxMessage_row2_text, color: 'red'}}>
                  Ok
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

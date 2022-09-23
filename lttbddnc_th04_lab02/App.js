import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Rating } from 'react-native-ratings';
import presentPhone from './assets/vsmart_live_xanh 1.png';
import Icon2 from 'react-native-vector-icons/AntDesign';
import { Button } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, textAlign: 'center' }}>
        <Image source={presentPhone} />
        <Text>Điện thoại VSmart Joy 3 - Hàng chính hãng</Text>
        <View style={{ flexDirection: 'row' }}>
          <Rating
            type="star"
            ratingCount={5}
            imageSize={18}
            onFinishRating={this.ratingCompleted}
          />
          <Text style={{ marginLeft: '50px' }}>(Xem 828 đánh giá)</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text>1.790.000 đ</Text>
          <Text
            style={{
              marginLeft: '80px',
              textDecorationLine: 'line-through',
              textDecorationStyle: 'solid',
            }}>
            1.999.999 đ
          </Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
            <Text style={{ color: 'red', fontWeight: 'bold' }}>
              Ở ĐÂU RẺ HƠN HOÀN TIỀN
            </Text>
            &ensp;
            <Icon2 name="questioncircleo" size={20} color="black" />
        </View>
        <Button mode="outlined" icon="arrow-right-bottom">4 MÀU - CHỌN MÀU</Button>
      </View>
      <View>
          <Button mode="contained" color="red">CHỌN MUA</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    textAlign: 'center'
  },
});

import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import imageBook from './assets/book.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from 'react-native-paper';

export default function App() {
  const myButton = (
  <Icon.Button
    name="facebook"
    backgroundColor="#3b5998"
    onPress={this.loginWithFacebook}
  >
    Login with Facebook
  </Icon.Button>
);
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: 'white', padding: '15px', flex: 1}}>
        <View style={ styles.view1 }>
          <View>
              <Image source={imageBook} />
          </View>
          <View style={ {paddingLeft: '15px'} }>
              <Text>Nguyên hàm tích phân và ứng dụng</Text>
              <Text>Cung cấp bởi tiki Trading</Text>
              <Text>141.800 đ</Text>
              <Text>150.000 đ</Text>
              <View style={ {flexDirection: 'row'} }>
                  <Icon name="minus" size={20} color="black" />
                  <Text style={styles.view1Margin}>1</Text>
                  <Icon name="plus" size={20} color="black" style={styles.view1Margin} />
                  <Text style={styles.view1Margin}>Mua sau</Text>
              </View>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
            <Text>Mã giảm giá đã lưu</Text>
            <Text style={{color: 'blue', fontWeight: 'bold', marginLeft: '50px'}}>Xem tại đây</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
            <Button icon="rectangle-outline" textColor="black" mode="outlined" onPress={() => console.log('Pressed')}>
            Mã giảm giá
            </Button>
            <Button mode="contained" style={{marginLeft: '20px'}} color="#0A5EB7">
              Áp dụng
            </Button>
        </View>
      </View>
      <View style={{flexDirection: 'row', backgroundColor: 'white', marginTop: '5px', padding: '15px'}}>
          <Text>Bạn có phiếu quà tặng Tiki/Got it/Urbox?</Text>
          <Text style={{color: 'blue', fontWeight: 'bold'}}>Nhập tại đây?</Text>
      </View>
      <View style={{flexDirection: 'row', backgroundColor: 'white', marginTop: '5px', padding: '15px'}}>
          <Text style={{fontWeight: '900'}}>Tạm tính</Text>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          <Text style={{color: 'red', fontWeight: '900', fontSize: 'larger'}}>141.800 đ</Text>
      </View>
      <View style={{ backgroundColor: 'white', marginTop: '35px', padding: '15px'}}>
          <View style={{flexDirection: 'row'}}>
              <Text style={{ fontWeight: 'bold', color: 'gray' }}>Thành tiền</Text>
              <Text style={{ marginLeft: '150px', color: 'red', fontWeight: '900' }}>141.800 đ</Text>
          </View>
          <Button mode="contained" color="red">TIẾN HÀNH ĐẶT HÀNG</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#C4C4C4',
    padding: 8,
  },
  view1: {
    flexDirection: 'row',
    padding: '10px'
  },
  view1Margin: {
    marginLeft: '15px'
  }
});

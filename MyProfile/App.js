import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

export default function App() {
  return (
    <ImageBackground style={styles.gradient} source={require("./assets/gradient.png")}>
    <View style={styles.boxProfile}>
      <Image source={require("./assets/profile.png")} style={styles.profileImg}/>
      <Text style={styles.nameTxt}>Millena Rosa</Text>
      <Text style={styles.proTxt}>Professora</Text>
      <Text style={styles.text}> Like:</Text>
      <View style={styles.boxInterest}>
        <Image source={require('./assets/devices.png')} style={styles.imgInterest}/>
        <Image source={require('./assets/swiming.png')} style={styles.imgInterest}/>
        <Image source={require('./assets/camera.png')} style={styles.imgInterest}/>
      </View>
      </View>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxProfile:{
    backgroundColor: 'rgba(250,250,250,0.5)',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  profileImg:{
    width:120,
    height:120,
    backgroundColor:'rgba(255,255,255, 0.2)',
    borderRadius: 60,
    borderColor: 'rgb(0,0,0)',
    borderWidth: 0.3,
    margin:20,
  },
  naTxt:{
    fontSize: 30,
    fontWeight: 'bold',
  },
  proTxt:{
    fontSize:20,
    fontWeight:'300',
    fontStyle:'italic',
  },
  text:{
    fontSize:20,
    fontWeight:'300',
    marginTop: 25,
    marginbottom:10,
  },
  boxInterest:{
    flexDirection: 'row',
    justifyContent:'space-evenly',
    width:280,
    backgroundColor: 'rgba(255,255,255,.1)',
    borderRadius: 15,
  },
  imgInterest:{
    width: 50,
    height:50,
    marginVertical: 10,
  },
});

/*import {TouchableOpacity} from 'react-native'

const [email, setEmail] = useState('');
  const [password, setPass] = useState('');

  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);

const handleSignIn = () => {
    email != '' || password != ''
      ? firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(() => {
            setModalVisible2(true);
            alert('Signed In');
            navigation.navigate('Home');
          })
          .catch((error) => {
            setModalVisible3(true);
            alert('Incorrect password');
          })
      : setModalVisible(true);
    alert('Fill in all fields');
  };
  
<TouchableOpacity onPress={handleSignIn}>
  <ImageBackground
    source={btnLogIn}
    style={{
      height: 40,
      width: 200,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Image source={txtLogIn} style={{ height: 20, width: 50 }} />
  </ImageBackground>
</TouchableOpacity>;*/

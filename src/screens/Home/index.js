import React from 'react';
import { 
  NativeBaseProvider, 
  View, 
  Text, 
  Button 
} from "native-base";

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.profile = this._toProfile.bind(this);
  }

  _toProfile = () => {
    return this.props.navigation.navigate('Profile');
  }
  
  render () {
    return (
      <NativeBaseProvider>
          <View>
            <Button width={250} backgroundColor='white' borderRadius={10} onPress={this._toProfile} >Coba Haiyhaa</Button>
          </View>
      </NativeBaseProvider>
    )
  }
}

export default Home;
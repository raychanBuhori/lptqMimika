import React from 'react';
import { 
  NativeBaseProvider, 
  View, 
  Text, 
  Button 
} from "native-base";

class Profile extends React.Component {
  render() {  
    return (
      <NativeBaseProvider>
        <View>
          <Text>Nice try</Text>
        </View>
      </NativeBaseProvider>
    )
  }
}

export default Profile;
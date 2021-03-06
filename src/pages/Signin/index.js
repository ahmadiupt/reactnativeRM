import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Gap, Header, TextInput } from '../../components';

const Signin = () => {
    return (
        <View style={styles.page}>
            <Header />
            <View style={styles.container}>
                <TextInput  label="Email Address" placeholder="Type your email address"/>
                <Gap height={16}/>
                <TextInput  label="Password" placeholder="Type your password"/>
                <Gap height={24}/>
                <Button text="Sign In"/>
                <Gap height={12}/>                
                <Button text="Create New Account" color="#8D92A3" textColor="white"/>
            </View>           
        </View>
    )
}

export default Signin;

const styles = StyleSheet.create({
    page:{flex:1},
    container: { backgroundColor: 'white', paddingHorizontal: 24, paddingVertical: 26,marginTop :24 ,flex:1}
});

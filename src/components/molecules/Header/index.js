import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = (title,subTitle) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign In</Text>
            <Text style={styles.subTitle}>find your best ever meal</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {backgroundColor: 'white',paddingHorizontal: 24, paddingTop: 30,paddingBottom:24},
    title: { fontSize: 22, fontFamily: 'Poppins-Medium', color: '#020202' },
    subTitle: {fontSize: 14, fontFamily: 'Poppins-Light', color: '#8D92A3'}
});

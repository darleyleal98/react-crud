import { View, Text, StatusBar, StyleSheet } from 'react-native';

const UserListScreen = () => {
    return (
        <View>
            <StatusBar barStyle={'light-content'} backgroundColor={'gray'}></StatusBar>
        </View>
    )
};

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 22,
        marginTop: 16,
        fontWeight: '700'
    }
})

export default UserListScreen;
import { View, Text, StatusBar, StyleSheet, FlatList, TouchableOpacity, Alert, ToastAndroid } from 'react-native';
import { Avatar, Button, ListItem } from 'react-native-elements';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { User } from '@/app/data/users-mock';
import { UsersContext } from '@/app/context/UserContext';
import { useContext } from 'react';

const UserListScreen = () => {

    console.error = () => { };
    const navigation = useNavigation();

    const contextValue = useContext(UsersContext);

    if (!contextValue) {
        return <Text>O UserProvider não foi encontrado.</Text>
    }

    const { state } = contextValue;
    const { users } = state

    const confirmDeleteUser = (pessoa: User) => {
        Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
            {
                text: 'Sim',
                onPress: showDeleteUser
            },
            {
                text: 'Não'
            }
        ]);
    };

    const showDeleteUser = () => {
        ToastAndroid.show('Usuário excluído com sucesso!', ToastAndroid.SHORT);
    };

    const getUser = ({ user: user }: { user: User }) => {

        return (
            <ListItem
                key={user.id}
            >
                <ListItem.Content>
                    <View style={styles.itemContainer}>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                            <View style={{ padding: 8 }}>
                                <Avatar size={58} rounded source={{ uri: user.imagem }}></Avatar>
                            </View>
                            <View style={{ paddingTop: 8, paddingLeft: 8 }}>
                                <ListItem.Title style={styles.title}>{user.nome}</ListItem.Title>
                                <ListItem.Subtitle style={styles.subtitle}>{user.email}</ListItem.Subtitle>
                            </View>
                            <View style={[styles.buttonIconsContainer, { flex: 1 }]}>
                                <TouchableOpacity
                                    onPress={() => {
                                        //@ts-ignore
                                        navigation.navigate('UserForm', user)
                                    }}
                                >
                                    <MaterialIcons
                                        name='edit'
                                        size={28}
                                        style={styles.icon}>
                                    </MaterialIcons>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        confirmDeleteUser(user)
                                    }}
                                >
                                    <FontAwesome5
                                        name='trash'
                                        size={22}
                                        style={styles.icon}>
                                    </FontAwesome5>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ListItem.Content>
            </ListItem>
        )
    };

    return (
        <View>
            <StatusBar barStyle={'light-content'} backgroundColor={'#616161'}></StatusBar>
            <FlatList
                data={users}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) =>
                    getUser({ user: item })
                }
            >
            </FlatList>
        </View>
    )
};

const styles = StyleSheet.create({
    itemContainer: {
        width: '100%',
        backgroundColor: 'gray',
        borderRadius: 16
    },
    title: {
        fontSize: 22,
        fontWeight: '700',
        color: 'white'
    },
    subtitle: {
        fontSize: 14,
        fontWeight: '700',
        color: 'white'
    },
    buttonIconsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    icon: {
        marginRight: 16,
        color: 'white'
    }
})

export default UserListScreen;
import { View, Text, StatusBar, StyleSheet, FlatList, ListRenderItemInfo, TouchableOpacity } from 'react-native';
import { pessoas, Pessoa } from '@/app/data/users-mock';
import { Avatar, Button, ListItem } from 'react-native-elements';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

const UserListScreen = () => {

    console.error = () => { };

    const getUser = ({ pessoa }: { pessoa: Pessoa }) => {
        return (
            <ListItem
                key={pessoa.id}
            >
                <ListItem.Content>
                    <View style={styles.itemContainer}>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                            <View style={{ padding: 8 }}>
                                <Avatar size={58} rounded source={{ uri: pessoa.imagem }}></Avatar>
                            </View>
                            <View style={{ paddingTop: 8, paddingLeft: 8 }}>
                                <ListItem.Title style={styles.title}>{pessoa.nome}</ListItem.Title>
                                <ListItem.Subtitle style={styles.subtitle}>{pessoa.email}</ListItem.Subtitle>
                            </View>
                            <View style={[styles.buttonIconsContainer, {flex: 1}]}>
                                <TouchableOpacity
                                    onPress={() => {

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
            <StatusBar barStyle={'light-content'} backgroundColor={'gray'}></StatusBar>
            <FlatList
                data={pessoas}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) =>
                    getUser({ pessoa: item })
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
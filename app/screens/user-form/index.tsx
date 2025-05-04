import { Pessoa } from '@/app/data/users-mock';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { View, TextInput, StyleSheet, StatusBar, TouchableOpacity, Text } from 'react-native';

const UserFormScreen = ({ route }: { route: any }) => {
    const { id, nome, email, imagem, idade } = route.params;

    const [userId, setUserId] = useState(id);

    const [name, setName] = useState(nome);
    const [nameFieldIsValid, setNameFieldIsValid] = useState(true);
    const [nameError, setNameError] = useState('');

    const [userEmail, setUserEmail] = useState(email);
    const [userEmailFieldIsValid, setUserEmailFieldIsValid] = useState(true);
    const [userEmailError, setUserEmailError] = useState('');

    const [imageLinkURL, setImageLinkURL] = useState(imagem);
    const [imageLinkURLFieldIsValid, setImageLinkURLFieldIsValid] = useState(true);
    const [imageLinkURLError, setImageLinkURLError] = useState('');

    const [age, setAge] = useState(idade.toString());
    const [ageFieldIsValid, setAgeFieldIsValid] = useState(true);
    const [ageError, setAgeError] = useState('');

    const handleSubmit = () => {
        if (name.trim().length === 0) {
            setNameError('The name field is required!');
            setNameFieldIsValid(false);
        }
        if (userEmail.trim().length === 0) {
            setUserEmailError('The e-mail field is required!');
            setUserEmailFieldIsValid(false);
        }
        if (age.trim().length === 0) {
            setAgeError('The age field is required!');
            setAgeFieldIsValid(false);
        }
        if (imageLinkURL.trim().length === 0) {
            setImageLinkURLError('The url field is required!');
            setImageLinkURLFieldIsValid(false);
        }
    };

    return (
        <View>
            <StatusBar barStyle={'light-content'} backgroundColor={'#616161'}></StatusBar>
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <MaterialIcons
                        name='person'
                        size={22}
                        style={styles.icon}>
                    </MaterialIcons>
                    <TextInput
                        style={styles.textInput}
                        placeholderTextColor={'white'}
                        placeholder='Name'
                        numberOfLines={1}
                        value={name}
                        onChangeText={text => setName(text)}
                    />
                </View>
                {
                    !nameFieldIsValid && <Text style={styles.errorMessage}>{nameError}</Text>
                }
                <View style={styles.inputContainer}>
                    <MaterialIcons
                        name='mail'
                        size={22}
                        style={styles.icon}>
                    </MaterialIcons>
                    <TextInput
                        style={styles.textInput}
                        value={userEmail}
                        numberOfLines={1}
                        placeholderTextColor={'white'}
                        placeholder='E-mail'
                        onChangeText={text => setUserEmail(text)}
                    />
                </View>
                {
                    !userEmailFieldIsValid && <Text style={styles.errorMessage}>{userEmailError}</Text>
                }
                <View style={styles.inputContainer}>
                    <MaterialCommunityIcons
                        name='numeric'
                        size={22}
                        style={styles.icon}>
                    </MaterialCommunityIcons>
                    <TextInput
                        style={styles.textInput}
                        value={age}
                        numberOfLines={1}
                        placeholderTextColor={'white'}
                        placeholder='Age'
                        onChangeText={text => setAge(text)}
                    />
                </View>
                {
                    !ageFieldIsValid && <Text style={styles.errorMessage}>{ageError}</Text>
                }
                <View style={styles.inputContainer}>
                    <MaterialIcons
                        name='photo'
                        size={22}
                        style={styles.icon}>
                    </MaterialIcons>
                    <TextInput
                        style={styles.textInput}
                        numberOfLines={1}
                        value={imageLinkURL}
                        placeholderTextColor={'white'}
                        placeholder='Image link'
                        onChangeText={text => setImageLinkURL(text)}
                    />
                </View>
                {
                    !imageLinkURLFieldIsValid && <Text style={styles.errorMessage}>{imageLinkURLError}</Text>
                }
                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.6}
                    onPress={() => handleSubmit()}
                >
                    <Text style={styles.textButton}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 8,
        marginTop: 16,
    },
    inputContainer: {
        backgroundColor: '#9E9E9E',
        flexDirection: 'row',
        width: '100%',
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 6,
        marginTop: 6,
    },
    icon: {
        width: 22,
        height: 22,
        color: 'white',
        marginLeft: 12
    },
    textInput: {
        fontSize: 18,
        color: 'white',
        fontWeight: '500',
        paddingVertical: 16,
        paddingHorizontal: 16,
    },
    button: {
        backgroundColor: '#616161',
        paddingVertical: 14,
        borderRadius: 22,
        alignItems: 'center',
        marginTop: 8
    },
    textButton: {
        textAlign: 'center',
        fontSize: 22,
        color: 'white',
        fontWeight: '700'
    },
    errorMessage: {
        fontSize: 14,
        color: 'red',
        marginLeft: 4
    }
});

export default UserFormScreen;
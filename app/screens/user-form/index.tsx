import { Pessoa } from '@/app/data/users-mock';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { View, TextInput, StyleSheet, StatusBar, TouchableOpacity, Text } from 'react-native';

const UserFormScreen = ({ route }: { route: any }) => {
    const { id, nome, email, imagem, idade } = route.params;

    const [userId, setUserId] = useState(id);

    console.log(nome)

    const [name, setName] = useState(nome);
    const [nameFieldIsValid, setNameFieldIsValid] = useState(true);
    const [nameError, setNameError] = useState('');

    const [userEmail, setUserEmail] = useState(email.toString());
    const [userEmailFieldIsValid, setUserEmailFieldIsValid] = useState(true);
    const [userEmailError, setUserEmailError] = useState('');

    const [imageLinkURL, setImageLinkURL] = useState(imagem.toString());
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
        if (imageLinkURL.trim().length === 0) {
            setImageLinkURLError('The name field is required!');
            setImageLinkURLFieldIsValid(false);
        }
        if (age.trim().length === 0) {
            setAgeError('The name field is required!');
            setAgeFieldIsValid(false);
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
                        value={name}
                        onChangeText={text => setName(text)}
                    />
                    {
                        !nameFieldIsValid && <Text style={styles.errorMessage}>{nameError}</Text>
                    }
                </View>
                <View style={styles.inputContainer}>
                    <MaterialIcons
                        name='mail'
                        size={22}
                        style={styles.icon}>
                    </MaterialIcons>
                    <TextInput
                        style={styles.textInput}
                        value={email}
                        placeholderTextColor={'white'}
                        placeholder='E-mail'
                        onChangeText={text => setUserEmail(text)}
                    />
                    {
                        !userEmailFieldIsValid && <Text style={styles.errorMessage}>{userEmailError}</Text>
                    }
                </View>
                <View style={styles.inputContainer}>
                    <MaterialCommunityIcons
                        name='numeric'
                        size={22}
                        style={styles.icon}>
                    </MaterialCommunityIcons>
                    <TextInput
                        style={styles.textInput}
                        value={age}
                        placeholderTextColor={'white'}
                        placeholder='Age'
                        onChangeText={text => setAge(text)}
                    />
                    {
                        !ageFieldIsValid && <Text>{ageError}</Text>
                    }
                </View>
                <View style={styles.inputContainer}>
                    <MaterialIcons
                        name='photo'
                        size={22}
                        style={styles.icon}>
                    </MaterialIcons>
                    <TextInput
                        style={styles.textInput}
                        value={imageLinkURL}
                        placeholderTextColor={'white'}
                        placeholder='Image link'
                        onChangeText={text => setImageLinkURL(text)}
                    />
                    {
                        !imageLinkURLFieldIsValid && <Text>{imageLinkURLError}</Text>
                    }
                </View>
                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.6}
                    onPress={handleSubmit}
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
        marginBottom: 12,
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
        width: '100%',
        paddingVertical: 16,
        paddingHorizontal: 16,
    },
    button: {
        backgroundColor: '#616161',
        paddingVertical: 14,
        borderRadius: 22,
        alignItems: 'center'
    },
    textButton: {
        textAlign: 'center',
        fontSize: 22,
        color: 'white',
        fontWeight: '700'
    },
    errorMessage: {
        fontSize: 22,
        color: 'red',
    }
});

export default UserFormScreen;
import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';
import React, { useState } from 'react';
import { color } from '../constants/color';
import { reduceColorOpacity } from '../utils/color';
import { EyeIcon } from '../assets/icon/eye';
import { EyeOffIcon } from '../assets/icon/eye-off';


interface InputProps extends TextInputProps {
    label?: string;
    type?: 'password' | 'text' | 'search'
}


export default function Input(props: InputProps) {
    const { type = 'text', ...rest } = props;
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    return (
        <View>
            <Text style={styles.label}>{props.label}</Text>
            <View style={styles.inputBody} >
                <TextInput {...rest} style={styles.input} secureTextEntry={isPasswordVisible} />
                {type === 'password' && (isPasswordVisible ? <EyeOffIcon size={24} color={color.black} onPress={() => setIsPasswordVisible(pre => !pre)} /> : <EyeIcon onPress={() => setIsPasswordVisible(pre => !pre)} size={24} color={color.black} />)}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    inputBody: {
        borderWidth: 1,
        borderColor: reduceColorOpacity(color.mute, 50),
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 2,
        paddingHorizontal: 10,
    },
    label: {
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 5,
        color: color.black,
    },
    input: {
        flex: 1,
        fontSize: 17,
        color: color.black,
    },
});

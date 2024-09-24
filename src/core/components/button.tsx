import { Pressable, StyleSheet, Text } from 'react-native';
import React from 'react';
import { color } from '../constants/color';

interface IButtonProps {
    text: string;
    onPress: () => void;
    bg?: string
}


export default function Button(props: IButtonProps) {

    const { bg = color.primary } = props;

    return (
        <Pressable style={[styles.btnBody, { backgroundColor: bg }]} onPress={props.onPress}>
            <Text style={styles.btnText}>{props.text}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    btnBody: {
        borderRadius: 500,
        paddingVertical: 15,
        paddingHorizontal: 10,
    },
    btnText: {
        fontSize: 18,
        color: color.white,
        textAlign: 'center',
        fontWeight: '600',
    },
});

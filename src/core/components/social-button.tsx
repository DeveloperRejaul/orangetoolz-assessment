import { Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { color } from '../constants/color';
import { reduceColorOpacity } from '../utils/color';

interface ISocialButton {
    icon: React.JSX.Element
}


export default function SocialButton(props: ISocialButton) {
    return (
        <Pressable style={styles.btnBody}>
            {props.icon}
        </Pressable>
    );
}

const styles = StyleSheet.create({
    btnBody: {
        borderRadius: 14,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderWidth: 1.3,
        borderColor: reduceColorOpacity(color.mute, 50),
    },
});

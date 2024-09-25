import { Pressable, StyleSheet, Text, TextStyle, View } from 'react-native';
import React from 'react';
import { color } from '../constants/color';
import { reduceColorOpacity } from '../utils/color';

interface IButtonProps {
    text?: string;
    onPress: () => void;
    bg?: string;
    variant?: 'normal' | 'social';
    icon?: React.JSX.Element;
    leftIcon?: React.JSX.Element;
    textStyle?: TextStyle;
    isLoading?: boolean;
}


export default function Button(props: IButtonProps) {
    const { bg = color.primary, variant = 'normal' } = props;
    return (
        <Pressable style={[styles.btnBody, variant === 'social' && styles.btnBodySocial, { backgroundColor: bg }]} onPress={props.onPress}>
            {variant === 'normal' && <View style={styles.innerBtn}>
                {props.isLoading ? <Text style={[styles.btnText, props.textStyle]}>Loading...</Text> : <>
                    {props.leftIcon}
                    <Text style={[styles.btnText, props.textStyle]}>{props.text}</Text>
                </>}
            </View>}
            {variant === 'social' && props.icon}
        </Pressable>
    );
}

const styles = StyleSheet.create({
    btnBody: {
        borderRadius: 500,
        paddingVertical: 15,
        paddingHorizontal: 20,
    },
    btnBodySocial: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1.3,
        borderColor: reduceColorOpacity(color.mute, 50),
        borderRadius: 14,
    },
    btnText: {
        fontSize: 18,
        color: color.white,
        textAlign: 'center',
        fontWeight: '600',
    },
    innerBtn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },
});

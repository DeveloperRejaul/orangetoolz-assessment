import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { color } from '../constants/color';
import { reduceColorOpacity } from '../utils/color';

interface IAvatarProps {
    size?: number
    altText: string
}

export default function Avatar(props: IAvatarProps) {

    const { size = 50 } = props;
    const RADIUS = size / 2;


    return (
        <View style={[{ width: size, height: size, borderRadius: RADIUS }, styles.avatar]}>
            <Text style={{ ...styles.text, fontSize: size * 0.4 }}>{props.altText.toUpperCase()}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    avatar: {
        backgroundColor: reduceColorOpacity(color.secondary, 40),
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    text: {
        fontWeight: '600',
    },
});

import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { color } from '../../core/constants/color';

interface ItemProps {
    label: string;
    text: string;
}


export default function Item(props: ItemProps) {
    return (
        <View style={styles.itemBody}>
            <Text style={styles.label}>{props.label}</Text>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    itemBody: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderColor: color.gray,
    },
    label: {
        fontWeight: 'semibold',
        fontSize: 12,
        color: color.mute,
    },
    text: {
        fontSize: 14,
        color: color.black,
        fontWeight: '400',
    },
});

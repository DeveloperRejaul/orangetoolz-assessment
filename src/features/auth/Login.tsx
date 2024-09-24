import { StatusBar, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import React from 'react';
import { color } from '../../core/constants/color';
import { Vector } from '../../core/assets/icon/vector';
import { Line } from '../../core/assets/icon/lines';
import Input from '../../core/components/input';
import Button from '../../core/components/button';
import SocialButton from '../../core/components/social-button';
import { GoogleIcon } from '../../core/assets/icon/google';
import { FacebookIcon } from '../../core/assets/icon/facebook';
import { Group } from '../../core/assets/icon/group';

export default function Login() {
    const { height: HEIGHT, width } = useWindowDimensions();
    const TOP_HEIGHT = HEIGHT / 3;

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={color.primary} />
            {/* Top Part */}
            <View style={{ width, height: TOP_HEIGHT }}>
                <View style={styles.vector}>
                    <Vector />
                </View>
                <View style={styles.line}>
                    <Line />
                </View>
                <View style={styles.group}>
                    <Group />
                </View>
            </View>
            {/* Bottom part */}
            <View style={styles.bottom}>
                <Input label="Email address" />
                <Input label="Password" type="password" />
                <Button text="Log in" onPress={() => { }} />
                <View style={styles.option}>
                    <View style={styles.line2} />
                    <Text style={styles.text}>Or, Log in with</Text>
                    <View style={styles.line2} />
                </View>
                <View style={styles.social}>
                    <SocialButton icon={<GoogleIcon />} />
                    <SocialButton icon={<FacebookIcon />} />
                </View>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.primary,
        flex: 1,
    },
    line: { position: 'absolute', top: 0 },
    vector: { position: 'absolute', right: 0, top: 0 },
    group: { position: 'absolute', right: 0, top: '50%' },
    bottom: {
        flex: 1,
        backgroundColor: color.white,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        paddingHorizontal: 10,
        paddingVertical: 20,
        rowGap: 20,
    },
    line2: {
        height: 1,
        backgroundColor: color.mute,
        width: 70,
    },
    option: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        columnGap: 10,
    },
    text: {
        color: color.black,
    },
    social: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        columnGap: 8,
    },
});

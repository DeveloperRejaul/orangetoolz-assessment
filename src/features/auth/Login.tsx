import { StatusBar, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import React, { useEffect } from 'react';
import { color } from '../../core/constants/color';
import { Vector } from '../../core/assets/icon/vector';
import { Line } from '../../core/assets/icon/lines';
import Input from '../../core/components/input';
import Button from '../../core/components/button';
import { GoogleIcon } from '../../core/assets/icon/google';
import { FacebookIcon } from '../../core/assets/icon/facebook';
import { Group } from '../../core/assets/icon/group';
import { useAppDispatch } from '../../core/hooks/rtk';
import { login } from './authSlice';
import { useForm, Controller } from 'react-hook-form';
import { useLoginMutation } from './authApi';
import { useTranslation } from 'react-i18next';


export default function Login() {
    const { height: HEIGHT, width } = useWindowDimensions();
    const TOP_HEIGHT = HEIGHT / 3;
    const dispatch = useAppDispatch();
    const [loginUser, res] = useLoginMutation();
    const { t, i18n } = useTranslation();

    const { control, handleSubmit } = useForm({
        defaultValues: { password: '', username: '' },
    });


    useEffect(() => {
        if (res.isSuccess) { dispatch(login()); }
    }, [res.isSuccess, dispatch]);

    const handleLogin = (data) => {
        loginUser({ username: data.username.trim(), password: data.password.trim() });
    };

    const handleTranslation = () => {
        if (i18n.language === 'en') {
            return i18n.changeLanguage('bn');
        }
        i18n.changeLanguage('en');
    };
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
                <Text onPress={handleTranslation} style={styles.testBtn}>{t('name')}</Text>
            </View>
            {/* Bottom part */}
            <View style={styles.bottom}>
                <Controller
                    control={control}
                    rules={{ required: true }}
                    name="username"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            label="User name"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                />
                <Controller
                    control={control}
                    rules={{ required: true }}
                    name="password"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            label="Password"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            type="password"
                        />
                    )}
                />
                <Button text="Log in" onPress={handleSubmit(handleLogin)} isLoading={res.isLoading} />
                <View style={styles.option}>
                    <View style={styles.line2} />
                    <Text style={styles.text}>Or, Log in with</Text>
                    <View style={styles.line2} />
                </View>
                <View style={styles.social}>
                    <Button
                        icon={<GoogleIcon />}
                        onPress={() => { }}
                        variant="social" bg={color.white}
                    />
                    <Button
                        icon={<FacebookIcon />}
                        onPress={() => { }}
                        variant="social"
                        bg={color.white}
                    />
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
    testBtn: {
        fontSize: 20,
        position: 'absolute',
        backgroundColor: color.white,
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 10,
        right: 10,
        color: color.black,
        fontWeight: 'bold',
    },
});

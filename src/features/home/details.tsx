import { Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { color } from '../../core/constants/color';
import { BackIcon } from '../../core/assets/icon/back';
import { useNavigation } from '@react-navigation/native';
import Button from '../../core/components/button';
import { TrashIcon } from '../../core/assets/icon/Trash';
import Avatar from '../../core/components/avatar';
import { fontName } from '../../core/constants/fonts';
import { SaveIcon } from '../../core/assets/icon/save';
import { ShareIcon } from '../../core/assets/icon/share';
import Item from './item';
import { useDeleteUserMutation } from './api';

export default function Details(props: any) {
    const navigation = useNavigation();
    const params = props.route.params;
    const [deleteUser] = useDeleteUserMutation();


    const handleDelete = () => {
        deleteUser(params.id);
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            {/* Header Part */}
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <BackIcon onPress={() => navigation.goBack()} />
                <Pressable style={styles.btnBody} onPress={handleDelete}>
                    <TrashIcon />
                    <Text style={styles.btnText}>Delete</Text>
                </Pressable>
            </View>
            <StatusBar backgroundColor={color.white} barStyle={'dark-content'} />

            {/* Body Part */}
            <View style={styles.body}>
                <Avatar size={100} altText={params?.name?.slice(0, 2)} />
                <View >
                    <Text style={styles.heading}> {params?.name}</Text>
                    <Text style={styles.position}> Full Stack Developer </Text>
                    <Text style={{ ...styles.heading, fontSize: 16 }}> Super Local Fans </Text>
                </View>

                {/* Button Part */}
                <View style={styles.btn}>
                    <Button
                        text="Save to phone"
                        onPress={() => { }}
                        leftIcon={<SaveIcon />}
                        bg={color.gray}
                        textStyle={{ color: color.black }}
                    />
                    <Button
                        text="Share contact"
                        onPress={() => { }}
                        leftIcon={<ShareIcon />}
                        bg={color.black}
                    />
                </View>

                {/* Body Info part */}
                <View style={styles.infoBody}>
                    <Item text={params?.email} label="Email" />
                    <Item label="Phone" text={params?.phone} />
                    <Item label="Date Created" text="25 March, 2024" />
                </View>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.white,
        paddingHorizontal: 10,
    },
    btnBody: {
        flexDirection: 'row', justifyContent: 'space-between',
        alignItems: 'center', columnGap: 5,
    },
    btnText: {
        color: color.primary,
        fontWeight: '600',
    },
    body: {
        paddingTop: 20,
        alignItems: 'center',
        rowGap: 20,
    },
    heading: {
        color: color.black,
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: fontName.SORA_BOLD,
        textAlign: 'center',
    },
    position: {
        color: color.mute,
        fontWeight: '600',
        fontSize: 16,
        fontFamily: fontName.SORA_BOLD,
        textAlign: 'center',
    },
    btn: {
        flexDirection: 'row',
        gap: 10,
    },
    infoBody: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: color.gray,
        width: '100%',
    },
});

import { FlatList, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { color } from '../../core/constants/color';
import { fontName } from '../../core/constants/fonts';
import { LogoutIcon } from '../../core/assets/icon/logout';
import Input from '../../core/components/input';
import Avatar from '../../core/components/avatar';
import { MoreIcon } from '../../core/assets/icon/more';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch } from '../../core/hooks/rtk';
import { logout } from '../auth/authSlice';
import { useGetUsersQuery } from './api';

export default function Home() {
    const navigation = useNavigation();
    const user = useGetUsersQuery({});
    const dispatch = useAppDispatch();

    const [searchText, setSearchText] = useState('');


    const handleLogout = () => {
        dispatch(logout());
    };

    const renderSeparator = () => {
        return <View style={styles.separator} />;
    };

    // handle search operation
    const titleSearch = (data) => {
        if (searchText) {
            return data.name.toLowerCase().includes(searchText.toLowerCase());
        } else {
            return true;
        }
    };
    const filterData = (user.data || []).filter(titleSearch);


    const renderItem = ({ item }) => {
        return <View key={item.id} style={styles.itemBody}>
            <Pressable style={styles.itemLeft} onPress={() => navigation.navigate('Details', item)}>
                <Avatar altText={item?.name?.slice(0, 2)} />
                <View>
                    <Text style={styles.itemTitle}>{item?.name}</Text>
                    <Text style={styles.itemText}>Full Stack Developer, Superlocalfans </Text>
                </View>
            </Pressable>
            <MoreIcon size={23} />
        </View>;
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={color.white} barStyle={'dark-content'} />
            {/* Header  */}
            <View style={styles.header}>
                <Text style={styles.heading}>Contacts</Text>
                <Pressable style={styles.btnBody} onPress={handleLogout}>
                    <LogoutIcon />
                    <Text style={styles.btnText}>Logout</Text>
                </Pressable>
            </View>
            <Text style={styles.total}>Total 25 contacts</Text>
            <View style={styles.input}>
                <Input type="search" placeholder="Search Contacts" onChangeText={setSearchText} value={searchText} />
            </View>
            {/* List of Item  Part */}
            <FlatList
                data={filterData}
                ItemSeparatorComponent={renderSeparator}
                contentContainerStyle={styles.listCon}
                showsVerticalScrollIndicator={false}
                renderItem={renderItem} />
        </View>
    );
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 24,
        color: 'color.black',
        fontFamily: fontName.SORA_BOLD,
        fontWeight: '700',
    },
    container: {
        flex: 1,
        backgroundColor: color.white,
    },
    btnBody: {
        flexDirection: 'row', justifyContent: 'space-between',
        alignItems: 'center', columnGap: 5,
    },
    header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10 },
    btnText: {
        color: color.primary,
        fontWeight: '600',
    },
    itemBody: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10 },
    itemLeft: { flexDirection: 'row', alignItems: 'center', columnGap: 10 },
    listContainer: {
        paddingTop: 20,
    },
    itemTitle: {
        fontSize: 18,
        color: color.black,
        fontWeight: '600',
        fontFamily: fontName.SORA_BOLD,
    },
    itemText: {
        fontSize: 12,
        color: color.mute,
        fontFamily: fontName.SORA_REGULAR,
    },
    total: { fontWeight: '400', fontSize: 12, color: color.mute, paddingHorizontal: 10 },
    separator: {
        height: 1,
        width: '100%',
        backgroundColor: color.gray,
        marginVertical: 10,
    },
    input: { paddingHorizontal: 10 },
    listCon: {
        paddingTop: 20,
        paddingBottom: 100,
    },
});

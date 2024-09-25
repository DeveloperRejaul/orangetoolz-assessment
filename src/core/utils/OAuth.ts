import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Alert } from 'react-native';

export const GoogleSigningConfigure = () => GoogleSignin.configure({});


export const GoogleSign =  async (): Promise<'success'| null> => {
    try {
        // we need to must run app : Google Play Intel x86_64 Atom System emulator or physical device
        await GoogleSignin.hasPlayServices();
        const response = await GoogleSignin.signIn();

        if (response.type === 'success') {
            Alert.alert('Login success', JSON.stringify(response.data), [
                {
                    text: 'Cancel',
                    style: 'cancel',

                },
                { text: 'OK'  },
            ]);

           return 'success';
        }

        if (response.type === 'cancelled') {
            Alert.alert('Login cancelled', 'Request cancelled', [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                { text: 'OK' },
            ]);
        }
        return null;
    } catch (error) {
        console.log(error);
        Alert.alert('Login error', 'Something went wrong', [
            {
                text: 'Cancel',
                style: 'cancel',
            },
            { text: 'OK' },
        ]);
        return null;
    }
};


export const FaceBookSign = async (): Promise<'success'| null> => {
    try {
        Alert.alert('Login Facebook', 'Not Implemented', [
            {
                text: 'Cancel',
                style: 'cancel',

            },
            { text: 'OK'  },
        ]);
    } catch (error) {
        console.log(error);
    }
};

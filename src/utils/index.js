import {
  checkMultiple,
  requestMultiple,
  PERMISSIONS,
  RESULTS,
} from 'react-native-permissions';

export const checkPermissions = () => {
  const permissions = [
    PERMISSIONS.ANDROID.READ_SMS,
    PERMISSIONS.ANDROID.SEND_SMS,
    PERMISSIONS.ANDROID.CALL_PHONE,
    PERMISSIONS.ANDROID.RECEIVE_SMS,
  ];
  return checkMultiple(permissions);
};
export const requestPermissions = () => {
  const permissions = [
    PERMISSIONS.ANDROID.READ_SMS,
    PERMISSIONS.ANDROID.SEND_SMS,
    PERMISSIONS.ANDROID.CALL_PHONE,
    PERMISSIONS.ANDROID.RECEIVE_SMS,
  ];
  return requestMultiple(permissions);
};

export const checkAndRequestPermissions = async () => {
  try {
    const resRequest = await checkPermissions();
    const isAllPermissionGranted = Object.values(resRequest).every(
      (val) => val === RESULTS.GRANTED,
    );
    if (!isAllPermissionGranted) await requestPermissions();
  } catch (error) {
    console.log('Loi cmnr: ', error);
  }
};

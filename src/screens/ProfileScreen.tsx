import React, {FC, useContext} from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import FlaqButton from '../components/common/flaqui/FlaqButton';
import FlaqContainer from '../components/common/flaqui/FlaqContainer';
import FlaqText from '../components/common/flaqui/FlaqText';
import globalStyles from '../utils/global_styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../utils/colors';
import {logout} from '../apis/query';
import {StorageClearAll} from '../utils/storage';
import {AccountStatus, GlobalContext} from '../state/contexts/GlobalContext';
import {setAccountStatus} from '../state/actions/global';
import {showMessage} from 'react-native-flash-message';
import {useQuery} from '@tanstack/react-query';
import axios from '../apis/axios';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ProfileParamList} from '../navigation/Home';
import {useNavigation} from '@react-navigation/native';
import Container from '../components/common/Container';
import FlaqIcon, {IconType} from '../components/common/flaqui/FlaqIcon';

type ProfileScreenProps = NativeStackScreenProps<ProfileParamList, 'Profile'>;

type ProfileType = {
  title: string;
  handleClick: () => void;
  startIcon: string;
  startIconType: IconType;
  endIcon?: string;
  endIconType?: IconType;
};

const ProfileScreen = () => {
  const {state, dispatch} = useContext(GlobalContext);

  const navigation = useNavigation<ProfileScreenProps['navigation']>();

  const logoutUser = async () => {
    try {
      await logout();
      await StorageClearAll();
      dispatch(setAccountStatus(AccountStatus.NEW));
    } catch (e) {
      showMessage({
        message: 'error logging out',
        type: 'danger',
      });
    }
  };

  const handleLogout = async () => {
    Alert.alert('are you sure you want to logout?', '', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Ok',
        onPress: async () => {
          await logoutUser();
        },
      },
    ]);
  };

  const items: ProfileType[] = [
    {
      title: 'change language',
      handleClick: () => {
        navigation.navigate('Language');
      },
      startIcon: 'language',
      startIconType: 'entypo',
      endIcon: 'chevron-right',
      endIconType: 'feather',
    },
    {
      title: 'twitter',
      handleClick: () => {},
      startIcon: 'logo-twitter',
      startIconType: 'ionicons',
      endIcon: 'chevron-right',
      endIconType: 'feather',
    },
    {
      title: 'discord',
      handleClick: () => {},
      startIcon: 'discord',
      startIconType: 'fontisto',
      endIcon: 'chevron-right',
      endIconType: 'feather',
    },
    {
      title: 'website',
      handleClick: () => {},
      startIcon: 'globe-outline',
      startIconType: 'ionicons',
      endIcon: 'chevron-right',
      endIconType: 'feather',
    },
    {
      title: 'log out',
      handleClick: () => {
        handleLogout();
      },
      startIcon: 'logout',
      startIconType: 'mi',
    },
  ];

  return (
    <FlaqContainer>
      <FlaqText
        align="left"
        weight="semibold"
        mt={20}
        mb={20}
        size="lg"
        style={globalStyles.fullWidth}>
        profile
      </FlaqText>
      {items.map(item => {
        return <ProfileItem key={item.title} data={item} />;
      })}
    </FlaqContainer>
  );
};

const ProfileItem = ({data}: {data: ProfileType}) => {
  return (
    <TouchableOpacity
      onPress={data.handleClick}
      style={[
        globalStyles.fullWidth,
        globalStyles.rowSpaceBetween,
        {
          padding: 16,
          marginBottom: 16,
          backgroundColor: Colors.background.dark,
        },
      ]}>
      <View style={[globalStyles.rowCenter]}>
        <FlaqIcon
          type="normal"
          color="white"
          size="lg"
          variant={data.startIconType}
          name={data.startIcon}
        />
        <FlaqText>{data.title}</FlaqText>
      </View>
      {data.endIcon && (
        <FlaqIcon
          type="normal"
          color="white"
          size="lg"
          variant={data.endIconType}
          name={data.endIcon}
        />
      )}
    </TouchableOpacity>
  );
};

export default ProfileScreen;
import {View, Text, Image} from 'react-native';
import React, {FC} from 'react';
import FlaqText from './common/flaqui/FlaqText';
import Container from './common/Container';
import {InfoCardType} from '../screens/HomeScreen';
import globalStyles from '../utils/global_styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Colors} from '../utils/colors';
import LinearGradient from 'react-native-linear-gradient';

type InfoCardProps = {
  data: InfoCardType;
};

const InfoCard: FC<InfoCardProps> = ({data}) => {
  return (
    <LinearGradient
      start={{x: 0.0, y: 0.25}}
      end={{x: 0.5, y: 1.0}}
      colors={['#F64545', '#3384F5']}
      style={{
        backgroundColor: Colors.background.black,
        padding: 16,
        borderRadius: 16,
        borderColor: Colors.background.dark,
        borderWidth: 1,
        width: 170,
        height: 100,
        position: 'relative',
        marginRight: 10,
      }}>
      <Image
        source={require('../../assets/images/icons/Lightning.png')}
        style={{
          width: 70,
          height: 80,
          resizeMode: 'contain',
          position: 'absolute',
          right: -10,
          // zIndex: 100,
          // top: -30,
        }}
      />
      <FlaqText align="left" mt={12}>
        {data.name}
      </FlaqText>
      <FlaqText size="lg" weight="semibold" align="left" mt={6} color="light">
        {data.value}
      </FlaqText>
    </LinearGradient>
  );
};

export default InfoCard;

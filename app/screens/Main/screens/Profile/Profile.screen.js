// import React from 'react';
// import {View, FlatList, TextInput, Image, TouchableOpacity} from 'react-native';
// import {Header} from '_components';
//
// import ProfileStyles from './Profile.styles';
// import {SelectorButton, ProfileInformation} from './components/index';
// // import PencilIcon from '_assets/images/edit.svg';
//
// // const varlamovProfileAvatar = require('_assets/images/varlamov.png');
//
// const ProfileScreen = ({}) => {
//   return (
//     <View style={ProfileStyles.mainContainer}>
//       <View style={ProfileStyles.profileMainInfoContainer}>
//         <View style={ProfileScreen.avatarContainer}>
//           <Image style={ProfileStyles.profileAvatar} />
//           <TouchableOpacity
//             activeOpacity={0.8}
//             style={ProfileStyles.uploadNewAvatar}>
//             <View style={ProfileStyles.uploadIcon}>{/*<PencilIcon />*/}</View>
//           </TouchableOpacity>
//         </View>
//         <Header
//           text="Илья Александрович Варламов"
//           style={ProfileStyles.profileName}
//         />
//         <View style={ProfileStyles.pointsBackground}>
//           <Header text="Баллы: 999к" style={ProfileStyles.pointCount} />
//         </View>
//         <View style={ProfileStyles.subscribeStatisticContainer}>
//           <View style={ProfileStyles.subscribersStat}>
//             <Header text="999к" style={ProfileStyles.subscribersCount} />
//             <Header text="Подписчиков" style={ProfileStyles.subscribersText} />
//           </View>
//           <View style={ProfileStyles.subscribersStat}>
//             <Header text="999к" style={ProfileStyles.subscribersCount} />
//             <Header text="Подписок" style={ProfileStyles.subscribersText} />
//           </View>
//         </View>
//         <TouchableOpacity
//           activeOpacity={0.8}
//           style={ProfileStyles.subsctibeButton}>
//           <View style={ProfileStyles.subsctibeButtonBackground}>
//             <Header
//               style={ProfileStyles.subsctibeButtonText}
//               text="Подписаться"
//             />
//           </View>
//         </TouchableOpacity>
//       </View>
//
//       <View style={ProfileStyles.selectorsContainer}>
//         <SelectorButton buttonText="Идеи" isSelected={false} />
//         <SelectorButton buttonText="Посты" isSelected={false} />
//         <SelectorButton buttonText="Данные" isSelected={true} />
//       </View>
//
//       <View style={ProfileStyles.SelectedContent}>
//         <ProfileInformation
//           townName="Екатеринбург"
//           idesCount="999к"
//           CompletedIdeasCount="999к"
//           LikesCount="999к"
//           DislikesCount="999к"
//         />
//       </View>
//     </View>
//   );
// };
//
// export default ProfileScreen;

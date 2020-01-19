import React from 'react';

import {Image} from 'react-native';

import BasicCarousel from 'react-native-snap-carousel';

import CarouselStyles from './Carousel.styles';

const Carousel = ({photos}) => {
  const renderItem = ({item}) => {
    return <Image style={CarouselStyles.image} source={{uri: item}} />;
  };
  return (
    <BasicCarousel
      containerCustomStyle={CarouselStyles.container}
      data={photos}
      renderItem={renderItem}
      itemWidth={CarouselStyles.item.width}
      sliderWidth={CarouselStyles.slider.width}
      inactiveSlideScale={0.81}
    />
  );
};

export default Carousel;

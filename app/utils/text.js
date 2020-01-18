export const getTextValue = ({nativeEvent: {text}}) => {
  return text;
};

export const cutText = (text, size = 10) => {
  if (text.length <= size) {
    return text;
  }
  return text.slice(0, size) + '...';
};

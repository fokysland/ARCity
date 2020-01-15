import React from 'react';

import {TextInput} from 'react-native';

const Textarea = props => {
  return <TextInput {...props} editable scrollEnabled={true} />;
};

export default Textarea;

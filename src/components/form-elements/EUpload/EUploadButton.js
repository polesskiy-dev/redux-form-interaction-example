import React from 'react';
import Icon from 'antd/lib/icon';

import messages from './UploadButton.messages';

const UploadButton = props => (
  <div>
    <Icon type="plus" />
    <div className="">{messages.upload}</div>
  </div>
);

export default UploadButton;

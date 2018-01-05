import React from 'react';
import PropTypes from 'prop-types';
import Upload from 'antd/lib/upload';
import { isEmpty } from 'lodash/fp';

import './EUpload.less';

import EUploadButton from './EUploadButton';

const EUpload = ({ imageUrl }) => (
  <div className="e-upload">
    <Upload
      name="avatar"
      listType="picture-card"
      className="e-upload__drop-zone"
      onChange={console.log}
      showUploadList={false}
    >
      {isEmpty(imageUrl)
        ? <EUploadButton />
        : <img src={imageUrl} />
      }
    </Upload>
  </div>
);

EUpload.propTypes = {
  imageUrl: PropTypes.string,
};

export default EUpload;

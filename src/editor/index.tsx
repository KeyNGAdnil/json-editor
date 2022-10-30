import React, { useState } from 'react';
import { JsonEditor as Editor } from 'jsoneditor-react';
import 'jsoneditor-react/es/editor.min.css';

const json = {
  paymentId: 'int_2019092712173302010099020003_5631456419257906',
  requestId: '2019092712201901011099020005_5631456419257906',
  userIpAddress: '123.90.0.1',
  userType: '',
  card: {
    cardToken: '',
    expirationMonth: '05',
    expirationYear: '2019',
    cardType: 'CREDIT',
    bin: '123456',
    cardBrand: 'LOCAL BRAND',
    issuingOrganization: '',
    cardCategory: 'UATP',
    issuingCountryCode: 'NI',
    issuingOrgWebsite: '',
    issuingOrgPhone: '',
    panReserved: '14',
    commercial: 'COMMERCIAL',
    regulated: 'N',
  },
  billTo: {
    firstName: 'Jim',
    lastName: 'He',
    street1: '',
    street2: '',
    city: 'Shanghai',
    state: 'Shanghai',
    postalCode: '201304',
    country: 'CN',
    email: 'jim631@sina.com',
  },
  merchant: {
    id: '19621303213',
  },
};

function JsonEditor() {
  const [mode, setMode] = useState('tree');

  const handleChange = (v: string) => {
    console.log('change ', v);
  };
  const onModeChange = (newMode: string, oldMode: string) => {
    setMode(newMode);
    console.log('Mode switched from', oldMode, 'to', newMode);
  };

  return (
    <Editor
      history={true}
      value={json}
      mode={mode}
      allowedModes={['code', 'tree']}
      onChange={handleChange}
      onModeChange={onModeChange}
      enableSort={false}
      enableTransform={false}
    />
  );
}
export default JsonEditor;

const currentMode = process.env.currentMode;
let configs = {};

switch (currentMode) {
  case 'test':
    configs = {
      appKey: '',
      debug: true,
    };
    break;
  case 'dev':
    configs = {
      appKey: '387e7e36aff049c3ca6edef545b92385',
      debug: true,
    };
    break;
  case 'pro':
    configs = {
      appKey: '387e7e36aff049c3ca6edef545b92385',
      debug: false,
    };
}

export default {
  ...configs,
};

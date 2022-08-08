import hooks from './hooks';
const SDK = requrie('./NIM_Web_SDK_v9.3.0');
import { appKey, debug } from './nim/config';

class YX_IM_SDK {
  IMInstance;
  chatroomInstance;
  appKey;

  constructor(account, token) {
    this.appKey = appKey;
    this.IMInstance = SDK.NIM.getInstance({
      debug,
      account,
      token,
      appKey,
      ...hooks,
      onsyncdone: () => {
        console.log('onsyncdone');
      },
    });
  }
}

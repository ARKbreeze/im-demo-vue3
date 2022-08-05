const SDK = requrie('./NIM_Web_SDK_v9.3.0');

class YX_IM_SDK {
  nimInstance;
  chatroomInstance;

  constructor(config) {
    this.nimInstance = SDK.NIM.getInstance();
    this.chatroomInstance = SDK.CHATROOM.getInstance();
  }
}

import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
import { Injectable } from '@angular/core';


export interface ShareInitOptions {
  /**
   * 从Mob开发者后台中得到的Appkey
   */
  appKey: string;

  /**
   * 从Mob开发者后台中得到的AppSecret
   */
  appSecret: string;
}

export interface ShareOptions {
  /**
   * title标题，印象笔记、邮箱、信息、微信、人人网和QQ空间使用
   */
  title: string;

  /**
   * titleUrl是标题的网络链接，仅在人人网和QQ空间使用
   */
  titleUrl?: string;

  /**
   * text是分享文本，所有平台都需要这个字段
   */
  text: string;

  /**
   * imagePath是图片的本地路径，Linked-In以外的平台都支持此参数
   */
  image?: string;

  /**
   * url仅在微信（包括好友和朋友圈）中使用
   */
  url?: string;

  /**
   * site是分享此内容的网站名称，仅在QQ空间使用
   */
  siteName?: string;

  /**
   * siteUrl是分享此内容的网站地址，仅在QQ空间使用
   */
  siteUrl?: string;
}

/**
 * @name ShareSDK
 * @description
 * 该插件使用ShareSDK作为分享插件，使用版本为ShareSDK For Android v3.1.0，ShareSDK For iOS v4.0.2，目前支持微信、腾讯QQ、新浪微博、邮件、短信 
 *
 * Requires Cordova plugin: `cordova-plugin-sharesdk`. For more info, please see the [ShareSDK plugin docs](https://github.com/kuaimacode/cordova-plugin-sharesdk).
 *
 *
 * 1、安装
 * ionic cordova plugin add https://github.com/kuaimacode/cordova-plugin-sharesdk.git
 * npm install git+https://github.com/kuaimacode/ionic-native-sharesdk.git
 *
 *
 * 2、配置参数
 *  android下修改，android\ShareSDK\assets\ShareSDK.xml将参数修改为自己的参数
 *
 * @usage
 * ```typescript
 * import { ShareSDK, ShareInitOptions, ShareOptions } from '@ionic-native/sharesdk';
 *
 * constructor(private sharesdk: ShareSDK) {
 *
 * // 初始化参数
 * const options: ShareInitOptions = {
 *       ...
 *     };
 *
 * this.sharesdk.share(options)
 *    .then(result => {
 *       console.log(result); // Success
 *    })
 *    .catch(error => {
 *       console.log(error); // Failed
 *    });
 * }
 *
 * // 分享参数
 * const options: ShareOptions = {
 *       ...
 *     };
 *
 * this.sharesdk.share(options)
 *    .then(result => {
 *       console.log(result); // Success
 *    })
 *    .catch(error => {
 *       console.log(error); // Failed
 *    });
 * }
 *
 */
@Plugin({
  pluginName: 'ShareSDK',
  plugin: 'cordova-plugin-sharesdk',
  pluginRef: 'ShareSDKPlugin',
  repo: 'https://github.com/kuaimacode/cordova-plugin-sharesdk',
  install: 'ionic cordova plugin add https://github.com/kuaimacode/cordova-plugin-sharesdk.git',
  platforms: ['Android', 'iOS']
})
@Injectable()
export class ShareSDK extends IonicNativePlugin {

  /**
   * 打开分享界面
   * @param params { ShareOptions } sharesdk options
   * @returns {Promise<any>} Returns a Promise that resolves with the success return, or rejects with an error.
   */
  @Cordova()
  init(params: ShareOptions): Promise<any> { return; }


  /**
   * 打开分享界面
   * @param params { ShareOptions } sharesdk options
   * @returns {Promise<any>} Returns a Promise that resolves with the success return, or rejects with an error.
   */
  @Cordova()
  share(params: ShareOptions): Promise<any> { return; }

}
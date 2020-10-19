import { Body, Controller, Logger, Post } from '@nestjs/common';
import { inspect } from 'util';
import { create } from 'xmlbuilder2';

/**
 * 微信回调给开发者的消息
 */
interface IWxMessageXmlData {
  /** 开发者微信号 e.g. `gh_019087f88815`*/
  ToUserName: string;
  /** 发送方帐号（一个OpenID）e.g.: `o5w5awUl***5pIJKY`*/
  FromUserName: string;
  /** 消息创建时间 （整型）e.g.`1595855711` */
  CreateTime: string;
  /** 消息类型，此处为 `event` */
  MsgType: string;
  /** 事件类型，subscribe(订阅)、unsubscribe(取消订阅) */
  Event: 'subscribe' | 'unsubscribe';
  /** 事件KEY值，目前无用 */
  EventKey: string;
}

@Controller()
export class AppController {
  @Post('wxhandler')
  async wxhandler(@Body('xml') xmlData: IWxMessageXmlData) {
    Logger.log(`xml data got:\n ${inspect(xmlData)}\n`);
    const res = create({
      xml: {
        ToUserName: 'openid_xxx', //	接收方帐号（收到的OpenID）
        FromUserName: 'openod_yyy', //	开发者微信号
        CreateTime: new Date().getTime(), //	消息创建时间 （整型）
        MsgType: 'text',
        Content: 'some text',
      },
    }).end({ prettyPrint: true });
    return res;
  }
}

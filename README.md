# xml handling in nest

parse xml and response xml in nest.

## installing

```sh
$ yarn
```

## running

```sh
$ yarn start:dev
```

## testing

```sh
$ curl --location --request POST 'localhost:3000/wxhandler' \
                               --header 'Content-Type: application/xml' \
                               --data-raw '<xml>
                                 <ToUserName><![CDATA[toUser]]></ToUserName>
                                 <FromUserName><![CDATA[fromUser]]></FromUserName>
                                 <CreateTime>1348831860</CreateTime>
                                 <MsgType><![CDATA[text]]></MsgType>
                                 <Content><![CDATA[this is a test]]></Content>
                                 <MsgId>1234567890123456</MsgId>
                               </xml>'
```

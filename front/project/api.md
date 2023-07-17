# 定义
+ 把api放在一个目录里面，方便管理维护 

# demo
+ 在src下面创建api目录 src/api, 后面所有接口都放在这里
+ 用户相关接口：src/api/user/index.ts
```ts
import request from "@/utils/http";
//统一管理接口
enum API {
    LOGIN_API = "/user/login",
    USERINFO_API = "/user/info",
}
//暴露请求函数
//登录方法
export const reqLogin = (data: any) => request.post(API.LOGIN_API, data);
//获取用户信息
export const reqUserInfo = (data: any) => request.get(API.USERINFO_API, { params: data });
```
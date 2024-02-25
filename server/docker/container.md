# docker 容器使用

## 内核选择
+ 容器必须基于linux 内核系统
+ 常见的linux内核系统
  + ubuntu 比较小 更注重用户体验，适合桌面环境以及个人用户
  + centos 比较大 更倾向于企业级服务器应用，稳定性较强 但是免费版不更新维护了
  + debian 底层非常稳定，内核和内存的占用都非常小，在小内存的VPS就可以流畅运行Debian，比如128m的内存，但debian的帮助文档和技术资料比较少。对于小内存，首选debian，对于非常熟悉linux系统的vps高手，首选debian。

## docker run
+ 新建+启动容器
+ 命令: docker run [options] [image] [command] [args] 
  + [options] : 选项
    + --name 容器名称
    + -d : 后台运行容器并返回容器ID。几守护式容器（后台启动）
    + -i 以交互模式运行容器 通常与-t 同时使用
    + -t 为容器重新分配一个伪输入终端，通常与 -i 同时使用
    + -P 大写P 随机端口映射
    + -p 小写p 指定端口映射  主机端口:容器端口
    + -e 设置环境变量 
    + -m 设置最大内存
  + image 镜像
  + [command] : 指令
    + /bin/bash 以bash 执行
  + [args] : 参数 
+ 示例
```bash
# 前台交互式终端启动容器
docker run -i -t ubuntu /bin/bash
# 后台默认执行
docker run -itd ubuntu 
```

## docker ps 
+ 列出所有的运行的容器
+ docker ps -a 列出所有的容器（包含未运行的）

## docker rm [容器ID]
+ 删除容器
```bash
# 删除
docker rm [容器ID]
# 强制删除
docker rm -f [容器ID]
```

## 容器启动/重启/停止
+ docker start [容器ID/名称] 启动容器
+ docker stop [容器ID/名称] 停止容器
+ docker restart [容器ID/名称] 重启容器
+ docker kill [容器ID/名称] 强制停止容器
+ docker rm [容器ID/名称] 删除容器
+ docker rm -rf $(docker ps -a -q) 一次性删除多个容器实例：危险操作
+ docker ps -a -q | xargs docker rm  一次性删除多个容器实例：危险操作

## docker attach [容器ID/名称]
+ 进入已启动的容器
+ 直接进入容器启动命令的终端，不会启动新的进行，用exit退出，会导致容器的停止
+ 不推荐使用此命令

## docker exec [options] [容器ID/名称] [command]
+ 进入已启动的容器
+ 是在容器中打开新的终端，并且可以启动新的进程，用exit退出，不会导致容器的停止
+ 推荐使用

```bash
docker exec -itd [容器ID/名称]
```

##  docker logs [容器ID/名称]
+ 查看容器日志

## docker inspect [容器ID/名称]
+ 查看容器内部信息

## docker cp 
+ 拷贝容器文件到目的主机的路径
+ docker cp [容器ID]:[容器内路径] [目的主机路径]
```bash
docker ps 95cf96470d5e:/usr/local/a.txt /download/a.txt
```

## 导入导出
+ docker export [容器ID] > 文件名.tar
```bash
docker export 95cf96470d5e > ~/Downloads/abc.tar
```
+ cat [.tar包] | docker import - [镜像用户]/[镜像名称]:[版本号]
```bash
cat abc.tar | docker import - test/test:01
```
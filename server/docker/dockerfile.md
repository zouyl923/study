# dockerfile

## 定义
+ Dockerfile：是一个用来构建镜像的文本文件，文本内容包含了一条条构建镜像所需的指令和说明。
+ 文档地址：https://docs.docker.com/engine/reference/builder/#dockerfile-reference
+ 作用：一次性构建镜像所需的环境
+ 命名：必须为Dockerfile 大写D

## 主要指令
+ FROM 基础镜像，当前新镜像是基于哪个镜像的，指定一个已经存在的镜像作为模板，第一条必须是FROM
+ LABEL dockerfile的维护者信息
+ RUN 容器构建时需要运行的命令
    + shell格式 [执行命令]  RUN yum -y install yum
    + exec格式 ["可执行文件","执行参数1","执行参数2"] RUN ["./test.php","dev","ok"] 相当于 RUN ./test.php dev ok
    + 是在docker build时执行
+ WORKDIR  指定在创建容器后，终端默认登陆的进来工作目录，一个落脚点
+ USER 指定该镜像以什么样的用户去执行，如果都不指定，默认是root. 一般不用指定
+ ENV 配置环境变量
+ ADD 将宿主机目录下的文件拷贝进镜像且会自动处理UL和解压tar压缩包，是Dockerfile相对路径
+ COPY 类似ADD 复制宿主机文件到容器
+ VOLUME 容器卷 宿主机与容器映射 用于数据保存和持久化
+ CMD 容器运行时需要运行的命令
    + shell格式 [执行命令]  RUN yum -y install yum
    + exec格式 ["可执行文件","执行参数1","执行参数2"] RUN ["./test.php","dev","ok"] 相当于 RUN ./test.php dev ok
    + 是在docker build后容器启动完毕后执行
    + cmd 可以有多个指令，但是只有最后一个生效 
+ ENTRYPOINT 类似于CMD指令，但是ENTRYPOINT不会被docker run.后面的命令覆盖，而且这些命令行参数会被当作参数送给ENTRYPOINT指令指定的程序

```
FROM ubuntu

LABEL name="value"

ENV MYPATH /usr/local
WORKDIR $MYPATH

EXPOSE 80

RUN echo "Welcome to....."

CMD /bin/bash
```

## docker build 
+ docker build [OPTIONS] PATH | URL | 
+ OPTIONS 
    + -f :指定要使用的Dockerfile路径；
    + -m :设置内存最大值；
    + --tag, -t: 镜像的名字及标签，通常 name:tag 或者 name 格式；可以在一次构建中为一个镜像设置多个标签。

```bash
docker build -t [用户名]/[镜像名]:[版本号] .
```
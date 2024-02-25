# docker 镜像使用

## docker images 
+ 列出本地主机上的镜像
+ options :
  + docker images -a :列出本地所有的镜像（包含历史影像层）
  + docker images -q :只显示镜像ID
+ 各个选项说明:
  + REPOSITORY：表示镜像的仓库源
  + TAG：镜像的标签
  + IMAGE ID：镜像ID
  + CREATED：镜像创建时间
  + SIZE：镜像大小
+ 同一仓库源可以有多个 TAG，代表这个仓库源的不同个版本，如 ubuntu 仓库源里，有 15.10、14.04 等多个不同的版本，我们使用 REPOSITORY:TAG 来定义不同的镜像。

## docker search 
+ 查找xxx镜像是否在远程仓库
  + NAME: 镜像仓库源的名称
  + DESCRIPTION: 镜像的描述
  + OFFICIAL: 是否 docker 官方发布
  + stars: 类似 Github 里面的 star，表示点赞、喜欢的意思。
  + AUTOMATED: 自动构建。
+ docker search --limit 5 redis 限制5条记录 

## docker pull
+ 下载镜像
+ 示例
```bash
docker pull mysql:8.0
```

## docker system df
+ 查看镜像/容器/数据卷所占的空间

## docker rmi 
+ 删除镜像
+ 示例
```bash
# 普通删除
docker rmi [镜像ID]
# 强制删除
docker rmi -f [镜像ID]
```

## docker commit 
+ 更新镜像
+ 参数 
  + -m: 提交的描述信息
  + -a: 指定镜像作者
  + e218edb10161：容器 ID
  + test/ubuntu:v2: 指定要创建的目标镜像名
```bash
docker commit -m="has update" -a="test" e218edb10161 test/ubuntu:v2
```

## docker push 
+ 发布镜像到公共hub仓库
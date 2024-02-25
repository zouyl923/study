## docker安装
[文档地址](https://docs.docker.com/desktop/install/linux-install/)

+ 先卸载旧版本
``` bash
sudo apt-get remove docker \
               docker-engine \
               docker.io
```
+ 鉴于国内网络问题，强烈建议使用国内源，官方源请在注释中查看。

```
$ curl -fsSL https://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# 官方源
# $ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
```

+ 然后，我们需要向 sources.list 中添加 Docker 软件源

```
$ echo \
  "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://mirrors.aliyun.com/docker-ce/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null


# 官方源
# $ echo \
#   "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
#   $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```
 
+ mac 安装
``` bash
brew install docker
```
+ ubuntu 安装
``` bash
sudo apt-get update 
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common
```

+ docker命令
``` bash
# 启动
systemctl start docker
# 停止
systemctl stop docker
# 重启
systemctl restart docker
# 信息
systemctl info docker

# docker 指令集
docker --help

# docker 指令示例
docker cp --help  # cp指令的示例
```

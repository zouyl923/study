# compose 

## 定义
+ Compose 是用于定义和运行多容器 Docker 应用程序的工具。通过 Compose，您可以使用 YML 文件来配置应用程序需要的所有服务。然后，使用一个命令，就可以从 YML 文件配置中创建并启动所有服务。
+ 创建docker-compose.yml文件
+ 文档地址:https://docs.docker.com/get-started/08_using_compose/
+ 镜像 环境变量可在hub.docker.com上面看：例如mysql:
  
## 命令
+ version 指定本 yml 依从的 compose 哪个版本制定的。
+ build 指定为构建镜像上下文路径：例如 webapp 服务，指定为从上下文路径 ./dir/Dockerfile 所构建的镜像：
```yml
version: "3.7"
services:
  webapp:
    build: ./dir
```
+ command 覆盖容器启动的默认命令。
+ container_name 指定自定义容器名称，而不是生成的默认名称。
+ depends_on 设置依赖关系。设置启动优先级
+ deploy 指定与服务的部署和运行有关的配置。只在 swarm 模式下才会有用。
+ entrypoint 覆盖容器默认的 entrypoint。
+ 

```bash
# docker-composer版本
version: '3'
# 定义应用服务
services:
    #定义一个web应用
    web:
        # 自定义容器名称
        container_name: my-web-container
        # 选择镜像文件
        image: centos:centos8
        # 端口映射 主机端口：容器端口
        ports:
            - "5000:5000"
        # 依赖应用
        depends_on:
            - mysql
            - redis
        # 目录映射 主机目录:容器目录
        volumes:
            - /Users/zouyl/www/me/code:/code

    # 定义redis应用
    redis:
        image: redis:7
        # 开机启动
        restart: always
        # 端口映射 主机端口：容器端口
        ports:
            - "6379:6379"
        # 数据卷持久化
        volumes:
            # 同步redis配置
            - /Users/zouyl/docker_data/redis7/redis.conf:/usr/local/etc/redis/redis.conf
            # 同步redis数据
            - /Users/zouyl/docker_data/redis7/data:/data
            # 同步log
            - /Users/zouyl/docker_data/redis7/logs:/logs
        command:
            # 指定配置文件启动
            redis-server /usr/local/etc/redis/redis.conf


    # 定义mysql应用
    mysql:
        # 选择 mysql8.3版本镜像
        image: mysql:8.3
        # 开机启动
        restart: always
        # 端口映射 主机端口：容器端口
        ports:
            - "3306:3306"
        # 配置环境变量 
        environment:
            MYSQL_ROOT_PASSWORD: 123456
        # 数据卷持久化
        volumes:
            # 同步log
            - /Users/zouyl/docker_data/mysql8.3/log:/var/log/mysql
            # 同步 配置文件
            - /Users/zouyl/docker_data/mysql8.3/conf/my.cnf:/etc/mysql/conf.d/my.cnf
            # 同步 配置数据
            - /Users/zouyl/docker_data/mysql8.3/data:/var/lib/mysql
        command: 
            # 设置编码格式
            --character-set-server=utf8mb4
            --collation-server=utf8mb4_general_ci
            # 修改mysql密码插件，兼容低版本mysql
            --default-authentication-plugin=mysql_native_password

```
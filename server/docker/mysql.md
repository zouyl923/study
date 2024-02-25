# mysql 主从复制

## 设置主mysql
```bash
docker run -p 3307:3306 --name mysql-master \
-v ~/mydata/mysql-master/log:/var/log/mysql \
-v ~/mydata/mysql-master/data:/var/lib/mysql \
-v ~/mydata/mysql-master/conf:/etc/mysql/conf.d \
-v ~/mydata/mysql-master/mysql-files:/var/lib/mysql-files \
-e MYSQL_ROOT_PASSWORD=root \
-d mysql:8.3
```

## 设置从mysql
```bash
docker run -p 3308:3306 --name mysql-m \
-v ~/mydata/mysql-slave/log:/var/log/mysql \
-v ~/mydata/mysql-slave/data:/var/lib/mysql \
-v ~/mydata/mysql-slave/conf:/etc/mysql/conf.d \
-e MYSQL_ROOT_PASSWORD=root \
-d mysql:8.3
```
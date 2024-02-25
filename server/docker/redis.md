# redis 集群

## 哈希取余分区
+ 算法：假设有n台redis构成集群。用户读写根据hash(key)/n 计算出哈希值 用来决定映射到那个节点上
+ 优点：简单粗暴，直接有效，只需要预估好数据规划好节点，例如3台、8台、10台，就能保证一段时间的数据支撑。使用Hash算法让固定的一部分请求落到同·一台服务器上，这样每台服务器固定处理一部分请求（并维护这些请求的信息），起到负载均衡+分而治之的作用。
+ 缺点：原来规划好的节点，进行扩容或者缩容就比较麻烦了额，不管扩缩，每次数据变动导致节点有变动，映射关系需要重新进行计算，在服务器个数固定不变时没有问题，如果需要弹性扩容或故障停机的情况下，原来的取模公式就会发生变化：Hash(key)3会变成Hash(key)?。此时地址经过取余运算的结果将发生很大变化，根据公式获取的服务器也会变得不可控。某个redis机器宕机了，由于台数数量变化，会导致hash取余全部数据重新洗牌。

## 一致性哈希算法
+ 算法：为了在节点数目发生改变时尽可能少的迁移数据，将所有的存储节点排列在收尾相接的Hash环上，每个key在计算Hash后会顺时针找到而当有节点加入或退出时仅影响该节点在Hash环上顺时针相邻的后续节点。
+ 优点：
  + 解决哈希取余分区算法 容错性  
  + 解决哈希取余分区算法 扩展性
+ 缺点：数据的分布和节点的位置有关，因为这些节点不是均匀的分布在哈希环上的，所以数据在进行存储时达不到均匀分布的效果。

## 哈希槽分区
+ 算法：Redis 集群中内置了 16384 个哈希槽，当需要在 Redis 集群中放置一个 key-value 时，redis 先对 key 使用 crc16 算法算出一个结果，然后把结果对 16384 求余数，这样每个 key 都会对应一个编号在 0-16383 之间的哈希槽，redis 会根据节点数量大致均等的将哈希槽映射到不同的节点。
+ 优点：大厂基本都是哈希槽分区
+ 缺点：


## 3主3从案例
+ 配置3主3从的redis集群
+ master1(6381) slave1(6385)
+ master2(6382) slave1(6386)
+ master3(6383) slave1(6384)
```bash
# 1.启动6台机器
# --cluster-enabled yes 开启集群
# --appendonly yes 设置持久化
docker run -d --name redis-node-1 --net host --privileged=true -v ~/mydata/redis/share/redis-node-1:/data redis:7 --cluster-enabled yes --appendonly yes --port 6381
docker run -d --name redis-node-2 --net host --privileged=true -v ~/mydata/redis/share/redis-node-2:/data redis:7 --cluster-enabled yes --appendonly yes --port 6382
docker run -d --name redis-node-3 --net host --privileged=true -v ~/mydata/redis/share/redis-node-3:/data redis:7 --cluster-enabled yes --appendonly yes --port 6383
docker run -d --name redis-node-4 --net host --privileged=true -v ~/mydata/redis/share/redis-node-4:/data redis:7 --cluster-enabled yes --appendonly yes --port 6384
docker run -d --name redis-node-5 --net host --privileged=true -v ~/mydata/redis/share/redis-node-5:/data redis:7 --cluster-enabled yes --appendonly yes --port 6385
docker run -d --name redis-node-6 --net host --privileged=true -v ~/mydata/redis/share/redis-node-6:/data redis:7 --cluster-enabled yes --appendonly yes --port 6386
# 对6台机器构成主从关系
# 进入节点1  docker exec -it redis-node-1 /bin/bash
# cluster-replicas 1 表示为每个master创建一个slave节点 
redis-cli --cluster create 127.0.0.1:6381 127.0.0.1:6382 127.0.0.1:6383 127.0.0.1:6384 127.0.0.1:6385 127.0.0.1:6386 --cluster-replicas 1
## 以6381作为切入点 查看集群状态
# 进入6381
redis-cli -p 6381
# 查看cluster信息
cluster info
# 查看节点信息
cluster nodes
```

## 主从容错切换迁移案例
```bash
# 单机连接
redis-cli -p 6381
# -c 集群方式连接
redis-cli -p 6381 -c
# 查看节点信息
redis-cli --cluster check 127.0.0.1:6381

# redis集群主从切换，即某台主机挂掉从机会变成主机，挂掉的机器重启会重新按规则分配主从
# 停掉node1 过一会儿 redis-node-1 对应的slave 会自动变成 master
docker stop redis-node-1 
# 重新开启node1  node1 会重新分配成slave  
docker start redis-node-1 
```


## 主从扩容
+ 增加2台机器
```bash
# 新启动2个节点6387 6388
docker run -d --name redis-node-7 --net host --privileged=true -v ~/mydata/redis/share/redis-node-7:/data redis:7 --cluster-enabled yes --appendonly yes --port 6387
docker run -d --name redis-node-8 --net host --privileged=true -v ~/mydata/redis/share/redis-node-8:/data redis:7 --cluster-enabled yes --appendonly yes --port 6388
# 进入6387节点容器内部
docker exec -it redis-node-7 /bin/bash
# 设置6387为主机 加入集群 6381 是集群的节点
redis-cli --cluster add-node 127.0.0.1:6387 127.0.0.1:6381
# 重新分配槽位 分配规则 平均分配 16384/主机数（不包含从机）
# 分配规则 ： 是把先前的已分配的槽位 每台主机分一部分到新的主机，不是重新分配
redis-cli --cluster reshard  127.0.0.1:6381
# 加入6387的从机6388
# 自动分配
redis-cli --cluster add-node 127.0.0.1:6388 127.0.0.1:6387 --cluster-slave 
# 指定主机
redis-cli --cluster add-node 127.0.0.1:6388 127.0.0.1:6387 --cluster-slave --cluster-master-id [主机ID]
```

## 主从缩容
```bash
# 先删除从机6388
redis-cli --cluster del-node 127.0.0.1:6388 [节点ID]
# check一下
redis-cli --cluster check 127.0.0.1:6387
# 移除主机6387，先把6387的槽位分配给6381
redis-cli --cluster reshard  127.0.0.1:6381
# check一下
redis-cli --cluster check 127.0.0.1:6387
# 删除6387 
redis-cli --cluster del-node 127.0.0.1:6387 [节点ID]
```
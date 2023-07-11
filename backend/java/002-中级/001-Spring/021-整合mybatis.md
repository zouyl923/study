# 

1,勾选MyBatis技术，也就是导入MyBatis对应的starter
2.数据库连接相关信息转换成配置
3.数据库SQL映射需要添加@Mapper被容器识别到
<code>
spring:
  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: jdbc:mysql://49.234.90.23:3306/ns?serverTimezone=PRC
    username: NS
    password: SANhz3rDKKGFFLPy,
</code>
# 常见问题
+ 1、设置时区 serverTimezone=PRC
+ 2、com.mysql.jdbc.Driver已过时。应该使用com.mysql.cj.jdbc.Driver

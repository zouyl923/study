# yaml
## 定义：数据序列化格式
## 优点：
+ 容易阅读
+ 容易与脚本语音交互
+ 以数据为核心，重数据轻格式


## 读取配置
### @value 注解
<code>
@Value("${server.port}")
protected Integer Sport;
</code>
<code>
@Autowired
protected Environment env;
...
env.getProperty(server.port)
</code>


## 使用变量
### 语法：${变量名}
  

## 读取引用类型属性
### 语法
+ 1.使用@ConfigurationProperties注解绑定配置信息到封装类中
+ 2.封装类需要定义为Spring管理的bean,否则无法进行属性注入


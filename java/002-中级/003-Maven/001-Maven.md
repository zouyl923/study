# maven 管理
## 定义：项目管理工具
## 使用：通过POM管理
```
POM： 项目(Project) 对象(Object) 模型(Model)
```
## 作用
+ 1、项目构建：提供标准的，跨平台的自动化构建项目方式
+ 2、依赖管理：方便快捷的项目管理依赖资源（jar包），避免资源间的资源浪费
+ 3、统一的开发结构：提供标准的，统一的项目结构

## 仓库
本地仓库 (个人仓库)
私服仓库（公司维护）
中央仓库（Maven管理）

## 坐标
### 定义：Maven中的坐标描述仓库资源的位置
### 结构：
+ 1、groupId  当前Maven项目 所属组织的名称 （通常是域名反写 例如：org.apche）
+ 2、artifactId 项目名称
+ 3、version 版本号
### 作用：使用唯一标识，唯一性定位资源，通过该唯一标识 可以将资源的识别与下载 工作由机器完成


## 项目标准结构
--project
--|--|src
--|--|--|main (主程序)
--|--|--|--|java （主代码）
--|--|--|--|resource （资源包）

--|--|--|text （测试程序）
--|--|--|--|java （主代码）
--|--|--|--|resource （资源包）

## 指令
+ 1、mvn compile 编译
+ 2、mvn clean 清理编译
+ 3、mvn test 编译测试
+ 4、mvn package 打包
+ 5、mvn install 安装到本地仓库

+ 6、mvn archetype:generate "-DgroupId=com.companyname.bank" "-DartifactId=consumerBanking" "-DarchetypeArtifactId=maven-archetype-quickstart" "-DinteractiveMode=false" 命令创建项目
```
参数说明：

-DgroupId: 组织名，公司网址的反写 + 项目名称
-DartifactId: 项目名-模块名
-DarchetypeArtifactId: 指定 ArchetypeId，maven-archetype-quickstart，创建一个简单的 Java 应用
-DinteractiveMode: 是否使用交互模式
```
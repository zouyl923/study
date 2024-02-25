# 变量

## 定义
+ 变量来源于数学，是计算机语言中能储存计算结果或能表示值抽象概念。
+ 使用```var```关键字声明
+ 变量不可重复
+ 变量 首字母大写 可以让其他包使用 小写其他包不可使用
+ 案例
```go
//声明变量类型
var var1 int
//赋值变量
var1 = 18

//声明+赋值
var var2 string = "john"

//声明但不赋值，会给默认值
var var3 string 

//自动判断类型
var var4 = "John"

//省略关键字var 
var5 := "John"

//使用变量
fmt.Println(var1)
fmt.Println(var2)
fmt.Println(var3)
fmt.Println(var4)
fmt.Println(var5)
```
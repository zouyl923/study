# 函数

## 自定义函数
+ 关键字"func"
+ 函数可以有多个返回值
+ 函数名首字母为小写，只能在本包使用，首字母大写其他包可以使用
+ 函数也是一种变量可以赋给一个变量
+ init函数 在main函数之前调用
+ defer 在函数执行完之后再执行
```go
func test(num1 int , num2 int )(int,int){
    return num1,num2
}
//将test函数复制给fun1
fun1 := test 
//接收2个返回值
n1,n2 = test(10,20)
//第二个值忽略不接受
n1,_= test(10,20)
```

## 系统函数
```go
```
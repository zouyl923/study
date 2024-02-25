# 数据类型

## 基本数据类型
```go
//整数类型 默认值0
var num0 int //32位系统为int32 64位系统为int64
var num1 int8 //长度为-2^7~2^7-1 (-128-127)
var num2 int16 //长度为-2^15~2^15-1 (-32768-32767)
var num3 int32 //长度为-2^31~2^31-1
var num4 int64 //长度为-2^63~2^63-1
//浮点类型  默认值0
//存放小数 建议使用 float64 精度高
var f0 float32 
var f1 float64 
//字符类型 默认值 "" 空
var b1 byte = "a"
//转义字符
var b2 byte= "\n"
//布尔型 默认值false
var b bool = true
//字符串类型 是不可变的，一旦定义好了，就不可变化，但是可以拼接
var s1 string = "你好！"
```

## 基本数据类型数据转换
```go
//int float 互相转换
//T(v) T表示转换类型 v表示要转换的变量
var num1 int = 123
var num2 float64 = float64(num1)
fmt.Println(num1, num2)
// int string 互相转换
//方式1：fmt.Sprint()
var num3 = 18
var str1 string = fmt.Sprintf("%d", num3)
fmt.Printf("%T",str1)
//方式2：包 strconv进行转换 @see:https://studygolang.com/pkgdoc

```

## 复杂数据类型
+ 指针 &符号 输出内存空间地址
+ 指针类型与指针对应值类型必须一致 
```go
//指针 
var age int = 1;
//获取变量age内存地址
fmt.Println(&age)
//定义一直指针变量
var p *int //*int 指向int类型的指针
p = &age //获取变量age内存地址
fmt.Println(p) //获取指针
fmt.Println(*p) //获取指针的值 
// 通过指针改变值
*p = 20
fmt.Println(age) //输出20
//指针类型与指针对应值类型必须一致 
var p2 *float32 = &age  //会报错
```
# 切片

## 定义
+ Go 语言切片是对数组的抽象。
+ Go 数组的长度不可改变，在特定场景中这样的集合就不太适用，Go 中提供了一种灵活，功能强悍的内置类型切片("动态数组")，与数组相比切片的长度是不固定的，可以追加元素，在追加时可能使切片的容量增大。

## 作用
+ 截取数组的某些元素
+ 定义无限制数据

```go
//方式1：先定义一个数据
var arr [6]int = [6]int{1, 2, 3, 4, 5, 6}
//定义切片 截取 数据
var slice1 []int = arr[1:3]
fmt.Println(slice1)

//方式2：用make定义 参数： 切片类型,切片长度,切片的容量
var slice2 = make([]int, 4, 20)
//重新赋值
slice2[0] = 10
fmt.Println(slice2, len(slice2), cap(slice2))

// 方式3：直接指定具体数组
var slice3 = []int{1, 2, 3}
fmt.Println(slice3, len(slice3), cap(slice3))

//遍历切片:1 for循环
for i := 0; i < len(slice3); i++ {
    fmt.Println(slice3[i])
}

//遍历切片:2 键值对
for i, v := range slice3 {
    fmt.Println(i, v)
}

//切片追加
slice3 = append(slice3, 10)
```

## 注意事项
+ 

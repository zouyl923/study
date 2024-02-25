# 映射

## 定义
+ 键值对关联数组
+ map集合使用前一定先要make
+ map 键值对是无序的
+ map key值是不重复的
```go
//方式1：通过make定义
var map1 map[int]string = make(map[int]string, 10)
map1[1] = "张三"
map1[2] = "王五"
fmt.Println(map1)

//方式1：通过make定义 不指定长度
var map2 map[int]string = make(map[int]string)
map2[1] = "张三"
fmt.Println(map2)

//方式3: 键值对初始化
map3 := map[int]string{
    1: "张三",
    2: "王五",
}
fmt.Println(map3)
```

## 常规操作
```go
//增删改
var map4 map[int]string = make(map[int]string)
map4[3] = "王五"  //增加
map4[3] = "李四"  //修改
delete(map4, 3) //删除
fmt.Println(map4)

//遍历1
for i := 0; i < len(map4); i++ {
    fmt.Println(map4[i])
}
//遍历2
for key, value := range map4 {
    fmt.Println(key, value)
}
```
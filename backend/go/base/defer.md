# 延时处理

## 定义
```go
func devide() {
    //defer 等函数执行完毕再执行
	defer func() {
        //recover() //捕获异常错误
		err := recover()
		if err != nil {
			fmt.Println("devide()错误", err)
		}
	}()
	num1 := 10
	num2 := 0
	result := num1 / num2
	fmt.Println(result)
}
```
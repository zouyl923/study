# hello world

##  代码
```go
//声明文件所在的包，每个go文件必须有这个
package main
//导入工具包 fmt 是系统包
import "fmt"
func main() {
    fmt.Println("hello world")
}
```

## 编译
```bash
# 编译
go build test.go

# 编译+执行
go run test.go 
```
# tcp网络编程

##  服务端
```go
package main

import (
	"fmt"
	"net"
)

func process(conn net.Conn) {
	defer conn.Close() //延迟关闭连接
	for {
		//创建一个切片，将读取的数据放入一个切片中
		buf := make([]byte, 1024)
		n, err := conn.Read(buf)
		if err != nil {
			fmt.Println("read error:", err)
			return
		}
		fmt.Println(string(buf[:n]))
	}
}

func main() {
	//进行监听，需要指定服务端tcp协议，服务端ip+port
	listen, err := net.Listen("tcp", ":8088")
	if err != nil {
		//监听失败！
		fmt.Println("listen error:", err)
		return
	}
	//监听成功
	//循环等待链接
	for {
		//等待客户端的链接
		conn, err2 := listen.Accept()
		if err2 != nil {
			//等待失败！
			fmt.Println("accept error:", err)
			return
		}
		// 协程处理客户端服务请求
		go process(conn)
	}
}

```

## 客户端
```go
package main

import (
	"bufio"
	"fmt"
	"net"
	"os"
)

func main() {
	conn, err := net.Dial("tcp", "127.0.0.1:8088")
	if err != nil {
		fmt.Println("error:", err)
	}
	fmt.Println(conn)
	//通过客户端发送数据
	reader := bufio.NewReader(os.Stdin) //os.Stdin 代表终端标准输入
	str, err := reader.ReadString('\n')
	if err != nil {
		fmt.Println("read error:", err)
	}
	n, err := conn.Write([]byte(str))
	if err != nil {
		fmt.Println("write error:", err)
	}
	fmt.Printf("write %d bytes\n", n)
}
```
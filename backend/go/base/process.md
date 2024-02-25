# 协程与管道

## 程序(program)
+ 是为完成特定任务、用某种语言编写的一组指令的集合，是一段静态的代码。(程序是静态的)

## 进程(process)
+ 是程序的一次执行过程。正在运行的一个程序，进程作为资源分配的单位，在内存中会为每个进程分配不同的内存区域。（进程是动态的）是一个动的过程，进程的生命周期：有它自身的产生、存在和消亡的过程

## 线程(thread)
+ 进程可进一步细化为线程，是一个程序内部的一条执行路径。若一个进程同一时间并行执行多个线程，就是支持多线程的。

## 协程(goroutine)
+ 又称为微线程，纤程，协程是一种用户态的轻量级线程
+ 作用：在执行A函数的时候，可以随时中断，去执行B函数，然后中断继续执行A函数（可以自语句)，过程很像多线程，然而协程中只有一个线程在执行（协程的本质是个单线程）
+ 主线程死了协程也死了
+ waitGroup控制线程执行
+ 多个线程操作一个数据容易出现数据混乱问题，可以用锁问题解决问题
  + 互斥锁 其中Mutex为互斥锁，Lock()加锁，Unlock(0解锁，使用Lock0加锁后，便不能再次对其进行加锁，直到利用Unlock()解锁对其解锁后，才能再次加锁.适用于读写不确定场景，即读写次数没有明显的区别
  + 读写锁 RWMutex是一个读写锁，其经常用于读次数远远多于写次数的场景.
```go
package main

import (
	"fmt"
	"sync"
)

var wg sync.WaitGroup //协程控制
var lock sync.Mutex   //协程互斥锁
var num int = 0

func increase() {
	defer wg.Done() //协程完成-1
	for i := 0; i < 100000; i++ {
		//操作数据时加锁
		lock.Lock()
		num++
		//操作完毕解锁
		lock.Unlock()
	}
}

func decrease() {
	defer wg.Done() //协程完成-1
	for i := 0; i < 100000; i++ {
		//操作数据时加锁
		lock.Lock()
		num--
		//操作完毕解锁
		lock.Unlock()
	}
}

func main() {
	//协程开始+1
	wg.Add(2)
	go increase() //开启协程
	go decrease() //开启协程
	//主线程一直阻塞 一直到wg为0时，就停止
	wg.Wait()
	fmt.Println(num)
}

```

## 管道
+ 当管道只写入数据时，没有读数据 会导致阻塞 
+ 写快 读慢 不会阻塞  
+ 管道是先入先出，读取数据时，会自动把数据移出管道
+ select 可以操作其他管道数据
```go
//定义管道
var intChin chan int = make(chan int, 10)
fmt.Println(intChin)
//向管道存放数据 <- 存放
intChin <- 10
num := 20
intChin <- num
fmt.Println(intChin, len(intChin), cap(intChin))

//关闭管道
close(intChin)
//读取管道数据
chan1 := <-intChin
fmt.Println(chan1)

//遍历管道 必须先关闭管道
for v := range chan1 {
    fmt.Println(v)
}
```
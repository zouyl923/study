# 面向对象

## 结构体
```go
package main

import "fmt"

// 定义结构体 定义一个教师结构体
type Teacher struct {
	Name   string
	Age    int
	School string
}

type Student struct {
	Name   string
	Age    int
	School string
}

// 给 Teacher结构体绑定test方法
func (p Teacher) test() {
	fmt.Println(p)
}

// 给Student结构体绑定String方法，
func (s *Student) String() string {
	return fmt.Sprintf("Name = %v,Age = %v", s.Name, s.Age)
}

func main() {
	//初始化结构体
	var teacher1 Teacher
	//结构体赋值
	teacher1.Name = "张三"
	teacher1.Age = 18
	teacher1.School = "北京大学"
	fmt.Println(teacher1)

	var student1 Student
	//结构体转换
	student1 = Student(teacher1)
	fmt.Println(student1)

	student2 := Student{
		Name:   "李四",
		Age:    19,
		School: "北京大学",
	}
	//传入地址 如果绑定String方法会自动调用
	fmt.Println(&student2)
}
```
#restful 风格

# @RestController 
## 类型：类注解
## 位置：基于SpringMVC的Restful开发控制器类定义的上方
## 作用：设置当前控制器类为restful风格，等同于@Controller+@RespinseBody2个注解的组合功能
## 示例：

<code>
@RestController
public class BookController {

}
</code>
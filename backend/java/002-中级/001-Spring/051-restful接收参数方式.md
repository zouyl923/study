# restful接收参数方式

## get接收参数(路径参数url)
<code>
@GetMapping("/{id}")
public User getById(@PathVariable Integer id) {
    System.out.println(id);
    return iUserService.getById(id);
}
<code>
+ 1、@PathVariable 注解表示url中的参数。get接收参数

## post接收参数(实体参数body)
<code>
@PostMapping
public Boolean save(@RequestBody User user) {
    return iUserService.save(user);
}
<code>

+ 1、@RequestBody 表示post接受参数 


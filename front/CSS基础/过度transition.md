## 过度效果(transition)
### 
+ 过度属性：
+ 过度的时长：
```
.box{
    width:100px;
    height:100px;
    background:ping;
    transition: with 2s;
}

.box:hover{
    width:600px;
}

```

### 使用
+ 如果过度属性多，可以使用all 变化所有

```
.box{
    width:100px;
    height:100px;
    background:ping;
    transition: all 2s;
}

.box:hover{
    width:600px;
    background:red;
}

```
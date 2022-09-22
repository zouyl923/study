
## collection
### 常用类型
--| list
--|--| ArrayList
--|--| LinkedList

<code>
Collection list = new ArrayList();
</code>

--| set
--|--| HashSet
--|--| TreeSet

<code>
Collection list = new HashSet();
</code>

## 泛型 支持
<code>
//集合  只支持字符串
Collection<String> list = new ArrayList<String>();
Collection<String> list = new ArrayList<>();//jdk1.7后可以默认不写
</code>

## 常用API
+ addAll 合并
+ add 添加
+ remove 移除
+ clear 清空
+ size 大小
+ contains 包含

## 遍历
+ 1、iterator 迭代器遍历
<code>
Collection<String> list = new ArrayList<>();
list.add("mysql");
list.add("java");
list.add("python");

Iterator<String> it = list.iterator();
while (it.hasNext()) {
    System.out.println(it.next());
}
</code>
+ 2、
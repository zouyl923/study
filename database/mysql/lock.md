# 锁

## 并发一致性问题
- 在并发环境下，事务的隔离性很难保证，因此会出现很多并发一致性问题。
> T1 和 T2 两个事务都对一个数据进行修改，T1 先修改，T2 随后修改，T2 的修改覆盖了 T1 的修改。

- 读脏数据
> T1 修改一个数据，T2 随后读取这个数据。如果 T1 撤销了这次修改，那么 T2 读取的数据是脏数据。

- 不可重复读
> T2 读取一个数据，T1 对该数据做了修改。如果 T2 再次读取这个数据，此时读取的结果和第一次读取的结果不同。

- 幻影读
> T1 读取某个范围的数据，T2 在这个范围内插入新的数据，T1 再次读取这个范围的数据，此时读取的结果和和第一次读取的结果不同。

产生并发不一致性问题主要原因是破坏了事务的隔离性，解决方法是通过并发控制来保证隔离性。并发控制可以通过封锁来实现，但是封锁操作需要用户自己控制，相当复杂。数据库管理系统提供了事务的隔离级别，让用户以一种更轻松的方式处理并发一致性问题。



## 封锁
- 封锁粒度
  - 行级锁
  - 表级锁

- 封锁类型
  - 读写锁
    - 排它锁(Exclusive)，简写为 X 锁，又称写锁。
    >一个事务对数据对象 A 加了 X 锁，就可以对 A 进行读取和更新。加锁期间其它事务不能对 A 加任何锁。
    - 共享锁(Shared)，简写为 S 锁，又称读锁。
    >一个事务对数据对象 A 加了 S 锁，可以对 A 进行读取操作，但是不能进行更新操作。加锁期间其它事务能对 A 加 S 锁，但是不能加 X 锁。
  - 意向锁
    -  意向锁在原来的 X/S 锁之上引入了 IX/IS，IX/IS 都是表锁，用来表示一个事务想要在表中的某个数据行上加 X 锁或 S锁。
    > 一个事务在获得某个数据行对象的 S 锁之前，必须先获得表的 IS 锁或者更强的锁；
    > 一个事务在获得某个数据行对象的 X 锁之前，必须先获得表的 IX 锁。

## 封锁协议
- 一级封锁协议
  - 事务 T 要修改数据 A 时必须加 X 锁，直到 T 结束才释放锁。
  - 可以解决丢失修改问题，因为不能同时有两个事务对同一个数据进行修改，那么事务的修改就不会被覆盖。
- 二级封锁协议
  - 在一级的基础上，要求读取数据 A 时必须加 S 锁，读取完马上释放 S 锁。
  - 可以解决读脏数据问题，因为如果一个事务在对数据 A 进行修改，根据 1 级封锁协议，会加 X 锁，那么就不能再加 S 锁了，也就是不会读入数据。
- 三级封锁协议
  - 在二级的基础上，要求读取数据 A 时必须加 S 锁，直到事务结束了才能释放 S 锁。
  - 可以解决不可重复读的问题，因为读A时，其它事务不能对 A 加 X 锁，从而避免了在读的期间数据发生改变。


## 隔离级别
- 未提交读(READ UNCOMMITTED)
  - 事务中的修改，即使没有提交，对其它事务也是可见的。
- 提交读(READ COMMITTED)
  - 一个事务只能读取已经提交的事务所做的修改。换句话说，一个事务所做的修改在提交之前对其它事务是不可见的。
- 可重复读(REPEATABLE READ)
  - 保证在同一个事务中多次读取同样数据的结果是一样的。
- 可串行化(SERIALIZABLE)
  - 强制事务串行执行。


 




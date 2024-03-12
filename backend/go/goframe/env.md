# 配置环境变量
+ 为方便开发，在开发环境往往需要设置三个环境变量：
    1. $GOROOT：go的安装目录，配置后不会再更改；
    2. $GOPATH：go项目在本地的开发环境的的项目根路径(以便项目编译，go build, go install)，不同的项目在编译的时候该环境变量可以不同；
    3. $PATH（重要）：需要将go的bin目录添加到系统$PATH中以便方便使用go的相关命令，配置后也不会再更改；

```bash
#查看go环境变量
go env

#设置 GOROOT go的安装目录，配置后不会再更改；安装时会自动选择
export GOROOT=/usr/local/go 
# 设置 GOPATH go项目在本地的开发环境的的项目根路径(以便项目编译，go build, go install)，不同的项目在编译的时候该环境变量可以不同；
export GOPATH=/Users/zouyl/www/go
export PATH=$GOPATH/bin:$GOROOT/bin:$PATH
```
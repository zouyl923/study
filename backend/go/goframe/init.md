# 项目初始化

## gf 安装
+ 下载地址:[https://github.com/gogf/gf/releases](https://github.com/gogf/gf/releases)
+ mac & Linux环境安装
```bash
wget -O gf https://github.com/gogf/gf/releases/latest/download/gf_$(go env GOOS)_$(go env GOARCH) && chmod +x gf && ./gf install -y && rm ./gf

```

## 配置代理
```bash
#开启代理
go env -w GO111MODULE=on
# 设置中国代理
go env -w GOPROXY=https://goproxy.cn
```

## 初始化项目
```bash
gf init projectname -u 
cd projectname && go run main.go
```

## 代码目录分析
+ 
# 网络基础

## URL
- Uniform Resource Locator（统一资源定位符）
- 网络中每一个资源都对应唯一的地址——URL


## IP地址
- IP地址就是计算机在网络中的唯一身份ID，与现实世界中快递的配送需要有具体的住宅地址是一个道理。
- ip地址以圆点分隔号的四个十进制数字表示，每个数字从0到255，如某一台主机的ip地址为：128.20.4.1
- IP地址是一个32位的二进制数，它由网络ID和主机ID两部份组成，用来在网络中唯一的标识的一台计算机。
- IP地址 = 网络地址 + 主机地址(又称：主机号和网络号组成)
- 示例：IP地址 192.168.1.168, 子网掩码 255.255.255.0 则 **192.168.1.168（IP地址） = 192.168.1.0 (网络地址) + 0.0.0.168（主机地址）**
- IP地址分类
  - 网络地址： 
    - IP地址由网络号（包括子网号）和主机号组成，网络地址的主机号为全0，网络地址代表着整个网络。如对于网段：192.168.1.0/24，其对应的网络地址为：192.168.1.0
  - 广播地址：    
    - 广播地址与网络地址的主机号正好相反，广播地址中，主机号为全1。当向某个网络的广播地址发送消息时，该网络内的所有主机都能收到该广播消息。如对于网段：192.168.1.0/24，其对应的广播地址为：192.168.1.255
  - 各类地址:
    - A类地址以0开头，第一个字节作为网络号，地址范围为：0.0.0.0~127.255.255.255；
    - B类地址以10开头，前两个字节作为网络号，地址范围是：128.0.0.0~191.255.255.255;
    - C类地址以110开头，前三个字节作为网络号，地址范围是：192.0.0.0~223.255.255.255。
    - D类地址以1110开头，地址范围是224.0.0.0~239.255.255.255，D类地址作为组播地址（一对多的通信）；
    - E类地址以1111开头，地址范围是240.0.0.0~255.255.255.255，E类地址为保留地址，供以后使用。
-  192.168.10.100/24 分析
   - “/24”表示这个IP的子网为24位，为子网掩码，指有24个“1”，即“255.255.255.0”。
   - 子网掩码是4个8位2进制数组成的, 换化成10进制是就是现在这样的, 如255.255.255.0, 换成2进制的话就是11111111 11111111 11111111 00000000, 前面有24个1, 也就是ip/24，10.10.1.1/24 就表示ip是10.10.1.1, 子网掩码是255.255.255.0

## 子网掩码
- 子网掩码不能单独存在，它必须结合IP地址一起使用。
- 子网掩码只有一个作用，就是将某个IP地址划分成网络地址和主机地址两部分。
- 子网掩码使用在局域网中，内网。
-  255.255.255.0 这个子网掩码将网络化分为一个子网，这个子网的容量是254（2^8-2）台主机+一个网络地址（255.255.255.0）+一个广播地址（255.255.255.255）

## 网关
- 连接两个不同的网络的设备都可以叫网关设备；网关的作用就是实现两个网络之间进行通讯与控制。
- 网关设备可以是 交互机（三层及以上才能跨网络）、路由器、启用了路由协议的服务器、代理服务器、防火墙等

## DNS服务器
- 我们访问一个网站的时候，往往使用的是域名（相对IP来说更加语义清晰、更加容易记忆，例如**www.baidu.com**）。然而计算机之间的通信网络通信是通过IP进行的， 因此需要将域名解析为对应的IP，DNS就是进行域名解析的服务器。
- DNS 维护着 域名(domain name)和IP地址 (IP address)的对照表表，以解析消息的域名。

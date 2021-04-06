---
alias: change dns settings
---
set to cloudflare dns
```bat
netsh interface ipv4 set dnsserver "Wi-Fi" static 1.1.1.1 primary
netsh interface ipv4 add dnsserver "Wi-Fi" 1.0.0.1 index=2

netsh interface ipv6 set dnsserver "Wi-Fi" static 2620:0:ccc::2 primary
netsh interface ipv6 add dnsserver "Wi-Fi" 2620:0:ccd::2 index=2

netsh interface ipv4 set dnsserver "ethernet" static 1.1.1.1 primary
netsh interface ipv4 add dnsserver "ethernet" 1.0.0.1 index=2

netsh interface ipv6 set dnsserver "ethernet" static 2620:0:ccc::2 primary
netsh interface ipv6 add dnsserver "ethernet" 2620:0:ccd::2 index=2
```
ipconfig


to set to dhcp

```bat
netsh interface ipv4 set dnsserver "Wi-Fi" dhcp
netsh interface ipv6 set dnsserver "Wi-Fi" dhcp
netsh interface ipv6 set dnsserver "ethernet" dhcp
```
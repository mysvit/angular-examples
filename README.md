# Angular Examples

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.4.

# angular-examples
Created from empty multiple projects:
```shell
ng new angular-examples --createApplication="false"
```

#Linux
###### errors:
#### 1)
<font color="red">Watchpack Error (watcher): Error: ENOSPC: System limit for number of file watchers reached, watch  </font>

insert the new value into the system config
```
echo fs.inotify.max_user_watches=524288 | tee -a /etc/sysctl.conf && sysctl -p
```
check that the new value was applied
```
cat /proc/sys/fs/inotify/max_user_watches
```
config variable name (not runnable)
```
fs.inotify.max_user_watches=524288
```

# Lerna

# npm上创建组织

evay-cli

后续的包就是@evay-cli/core      @evay-cli/utils 等等



# 创建lerna

**安装**

```
npm i -D lerna
```

**初始化项目**

```
lerna init
```

**创建包**

```
lerna create core
```

```
lerna create utils
```

这个时候就会自动在根目录中创建一个packages文件夹

在这个文件夹下面创建出了两个包



# 创建包与包之间的连接

```
lerna exec -- npm link
```

其中， lerna exec 是在每一个包中执行命令

​		-- 是分隔符  后面接想要执行的命令



# 执行包中的命令

```	
lerna run test
```

这就相当于在每一个子包中执行

```
npm run test
```

## 针对某一个包执行命令

````
lerna run --scope @evay-cli/utils test
````

这就相当于在utils包中执行

```
npm tun test
```


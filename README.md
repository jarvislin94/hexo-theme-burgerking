## 君の名は。

君の名は。是一款基于电影《你的名字》客制化的 hexo 主题，基于 hexo，使用了 ejs，stylus，normalize.css，主题简洁明了，仅此表达对电影你的名字的喜爱。

<p align="center">

[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badge/) [![GPL Licence](https://badges.frapsoft.com/os/gpl/gpl.svg?v=103)](https://opensource.org/licenses/GPL-2.0)

</p>

## Live Demo

<p align="center">
➡️ <a href="https://jackzong.github.io">Demo</a>
</p>

## Screenshot

![你的名字](https://github.com/JackZong/burger-king-hexo-theme/blob/master/source/imgs/Burgerking.png)

## Install

1. 下载主题文件，直接`git clone`本仓库或者下载.zip 包
2. 在`themes`主题文件夹下创建新目录`burgerking`,然后将本主题文件全部拷贝过去
3. 然后在 hexo 全局配置文件\_config.yml 中应用主题：

```
theme: burgerking
```

## 个性化配置

theme/\_config.yml

```yml
## highlight 主题选择
highlight:
  theme: vs2015
## pv pu
busuanzi:
  enable: true
```

## 配置 Gitalk

root/\_config.yml

```yml
// Gitalk settings, check at: https://github.com/gitalk/gitalk#usage
Gitalk:
  enable: true
  clientID: ""
  clientSecret: ""
  repo: ""
  owner: ""
  admin: ["xx"]
```

这样就安装好了，尽情享受吧！

## Release notes

### v1.4

- Mobile device support
- PU & PV

### v1.3

- Add Gitalk

### v1.2

- Add code highlight support
- hexo theme unit test check([checklist](https://github.com/hexojs/hexo-theme-unit-test))

### v1.1

- 样式更新
- 背景画像 toggle

### V1.0

- 主题基本功能可用，包括主页、文章归档、about、文档详情页
- 主题分页器

## TODO

- [x] V1.0 博客基础页面设计和动态化
- [x] Archiver 文章归档时间轴
- [x] Tag 页面
- [x] Analytics tool
- [x] Gitalk
- [x] 移动端适配
- [ ] Category 页面
- [ ] Music bar

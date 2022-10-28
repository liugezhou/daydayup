---
title: Settings
---

本章主要记录如图所示的 settings 内的目录配置内容，入口如下。

![settings_entry](https://cdn.staticaly.com/gh/liugezhou/image@master/settings_entry.webp)

## Public profile

进入 settings 后如图所示。
![settings_public](https://cdn.staticaly.com/gh/liugezhou/image@master/settings_public.webp)

### 字段介绍

| 属性                     | 介绍                                                                |
| ------------------------ | ------------------------------------------------------------------- |
| Name                     | 该字段用来配置,你的名字可能会出现在 GitHub 上你的贡献或被提及的地方 |
| Public email             | 公开的邮箱地址设置,可以在设置的多个邮箱中挑选显示。                 |
| Bio                      | 个人主页上的介绍设置。                                              |
| URL                      | 个人主页上的主页地址设置。                                          |
| Twitter username         | 推特主页设置                                                        |
| Compony                  | 公司显示设置                                                        |
| Location                 | 地址设置，可选择市区                                                |
| Contributions & Activity | 个人活动页的隐私设置                                                |
| Profile settings         | 是否显示官方给予的成就                                              |

## Account

| 属性                | 介绍                                                             |
| ------------------- | ---------------------------------------------------------------- |
| Change username     | 修改用户名会发生意想不到的副作用，相当于个人域名的全部更改，慎改 |
| Export account data | 导出所有存储库和配置文件的元数据，通过 email 发生下载链接        |
| Successor settings  | 账号的继承者,即使发生了死亡事件,还需要参阅 Github 已故政策       |
| Delete Account      | 删除你的账户                                                     |

## Appearance

| 属性                            | 介绍                                      |
| ------------------------------- | ----------------------------------------- |
| Theme preferences               | Github 网页主题,暗黑和标准模式            |
| Emoji skin tone preference      | 个人主页页面头像旁边的欢迎 emoji 皮肤设置 |
| Tab size preference             | 🤔 暂时没找到表现                         |
| Markdown editor font preference | 🤔 暂时没找到表现                         |

## Accessibility

| 属性               | 介绍                                          |
| ------------------ | --------------------------------------------- |
| ⭐️ Character keys | 选中状态可以在 Github 网站使用快捷键 `?` `gn` |
| Motion             | 设置当看到图片、视频的时候的加载方式          |
| Editor settings    | 🤔 选择 URL 是否应该在粘贴时进行格式化        |

## Notifications

| 属性                        | 介绍                                         |
| --------------------------- | -------------------------------------------- |
| Default notifications email | 默认接收通知的邮件设置                       |
| Subscriptions               | 设置关注、提醒、actions、alerts 等的通知方式 |

## Billing and plans

| 属性             | 介绍                                                                                    |
| ---------------- | --------------------------------------------------------------------------------------- |
| Current plan     | 个人账单设置、可以升级付费,Pro 版本的售价为 $4,主要比免费版多出的功能是关于私有仓库的。 |
| GitHub Copilot   | $10/month 代码助手                                                                      |
| Usage this month | 🤔 本月使用量的一些内容                                                                 |
| Github Sponsors  | 捐助                                                                                    |

## Email
Email的添加、设置主邮件、备份邮件、邮件地址私密隐藏、邮件订阅列表等功能。

## Password and authentication
密码修改、双重认证、设备登录记录

## SSH and GPG keys
- SSH添加后代码提交使用git方式不用验证密码。  
- 🤔 GPG设置、使用流程暂未体验
- 🤔 Vigilant mode

## Organizations
- New organization: 创建组织、可以对组织进行一系列的设置
- Transform account: 将账户转为组织,用户自动注销

## Moderation
- Blocked users: 拉黑用户的设置
- Interaction limits:🤔 互动设置
- Code review limits:🤔 代码检查限制

## Repository
- Repository default branch:设置你的项目主分支,默认是main,如果还对主分支是master有要求,可以在这里设置。 
- Repositories: 罗列出了你的所有仓库,以及最近删除的仓库,在一段时间内你所删除的仓库可以恢复至私有项目，恢复后可再做公开操作。

## Codespaces
- Dotfiles:🤔 代码空间可以自动将点文件安装到您创建的每个代码空间中。  
- Codespaces secrets: 生成新的secret以及已生成的列表,可选择在多个仓库使用，🤔暂未使用过
- GPG verification: 从以下存储库创建的代码空间可以具有GPG功能并对提交进行签名，以便GitHub可以验证它们来自可信的源。仅为您信任的存储库启用此功能 
- TODO: 剩下的内容在了解完 Codespaces功能后再补充

## Packages
这些是以前已删除的属于您的包。您可以恢复在过去30天内删除的包。

## Github Copilot
GitHub Copilot 编码时提供自动完成风格的建议，有60天的免费试用。

## Pages
TODO: 🤔待设置后补充

## Saved replies
保存回复用作可重用的文本片段，可以在 GitHub 的评论中使用。如果经常输入类似的回复，保存的回复可以节省时间。  
使用保存的回复在评论栏的最后一侧(TODO:添加图片说明)

## Code security and analysis
🤔 安全和分析功能有助于保持存储库的安全和更新。通过启用这些功能，您将授予我们对存储库执行只读分析的权限。

## Applications
- Installed Github Apps: 安装的工作流(worrflows)的一些第三方开源工具，比如Travis CI、Imgbot等。   
- Authorized Github Apps: 授权的一些Github Apps
- Authorized OAuth Apps: 通过这个列表可以看到使用Github账号在哪些第三方网站登录过(一般是网站的评论、注册功能)

## Scheduled reminders
🤔 管理团队的预定提醒,与团队有关的题型设置。

## Security log
这里展示的是账户的一些安全操作日志

## Sponsorship log
这里展示的是捐助的日志列表。

## Developer settings
- Github Apps:如果想要构建与GitHub集成并扩展的东西，可以注册一个新的GitHub应用程序，开始在GitHubAPI上开发。还可以在Github提供的开发者文档中阅读更多关于构建GitHub应用程序的信息。 
- OAuth Apps: 目前使用比较多的是网站的评论功能,创建了一个新的 OAuth App后会得到了相应的 Client ID 和 Client Secret,然后进行相应配置。 
- Personal access tokens
  - Fine-grained tokens:目前是beta版，与原始的token相比，颗粒度更小、更专注。
  - Tokens(classic):tokens设置给予所有仓库权限,每次生成后只会出现一次,在项目部署等中有用，TODO:具体实例待补充
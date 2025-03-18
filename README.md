<!--
 * @Author: jiayouuu 3010336955@qq.com
 * @Date: 2025-03-19 00:04:37
 * @LastEditors: jiayouuu 3010336955@qq.com
 * @LastEditTime: 2025-03-19 00:06:29
 * @FilePath: /pets/README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

# 宠爱有家 - 宠物领养系统 HTML 原型

这是一个基于 HTML、CSS 和 JavaScript 的宠物领养系统原型，提供完整的用户界面设计和基本交互功能。

## 项目特点

- 响应式设计，适配不同设备
- 模块化 CSS，易于维护和扩展
- 基本的 JavaScript 交互效果
- 符合中国用户习惯的界面设计

## 主要功能模块

本原型包含以下主要页面：

1. **首页** - 展示平台介绍、服务特点和领养流程
2. **宠物列表** - 展示可领养宠物，提供筛选功能
3. **宠物详情** - 展示宠物详细信息和领养申请入口
4. **登录/注册** - 用户账号管理
5. **领养申请** - 填写领养申请表，电子签名

## 如何使用

1. 克隆或下载本仓库到本地
2. 直接在浏览器中打开 `index.html` 文件
3. 浏览和体验各个功能页面

## 项目结构

```
pets/
├── css/               # CSS样式文件
│   └── style.css      # 主样式文件
├── js/                # JavaScript文件
│   └── main.js        # 主脚本文件
├── img/               # 图片资源
├── pages/             # 页面文件
│   ├── pets.html      # 宠物列表页
│   ├── pet-detail.html # 宠物详情页
│   ├── login.html     # 登录注册页
│   └── ...            # 其他页面
├── components/        # 组件存放目录
├── index.html         # 首页
└── README.md          # 项目说明
```

## 后续开发建议

这是一个前端 HTML 原型，可以作为后续开发的基础。对于完整系统的开发，建议：

1. 使用 Spring Boot 3 构建后端 API
2. 采用 Spring Security + JWT 实现认证授权
3. 使用 MySQL 8.x + Redis 存储数据
4. 使用 MyBatis-Plus 作为 ORM 框架
5. 完善在线问诊、社区论坛等扩展功能

## 图片来源

原型中的图片仅用于演示，实际项目中请使用自有版权图片或商用授权图片。

## 许可

本项目仅用于学习和参考，未经授权不得用于商业用途。

---

© 2023 宠爱有家 - 宠物领养平台

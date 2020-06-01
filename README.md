# Vue+Webpack+Koa2+Mysql 构建个人主页-服务端


## 项目介绍

- 整个项目分为两个部分：前端页面、Koa2服务端。
- 此处只包含服务端代码，[前端代码请点击此处](https://github.com/frank-980/webpack-vue)。
- 提供API供前端调用。

## 项目架构

  ### 项目架构图：

![服务层→控制层→路由层→API](https://raw.githubusercontent.com/frank-980/nodeJS-koa2/master/frameDesign.png)

  ### 数据库EL关系图：

![EL关系图](https://raw.githubusercontent.com/frank-980/nodeJS-koa2/master/dbModel.png)

## 技术栈
- [x] Koa2
- [x] Sequelize+Mysql
- [x] Redis
- [x] session

## 开发环境

  **下载源码** 

    git clone https://github.com/frank-980/nodeJS-koa2.git

  **安装服务**

    mysql，reids

  **运行** 

    npm install  

    npm run start 

## 结构简介 

  **app.js**
    创建koa2实例，注册中间件，设置跨域，绑定路由等。

  **src目录下** 
  
    1.路由层

      routes ：为前端某个请求提供响应头和响应体，也就是提供后台数据。按需引入【身份验证】，【数据过滤】等中间件。
      middleWares ：提供给路由层的中间件
      validate ：校验模型，提供【数据校验】中间件的内容

    2.控制层

      controller ：为路由层提供标准化数据。请求services层拿到原始数据后，结合业务逻辑，格式化数据递交给路由层。
      model ：数据返回模型，提供给controller层

    3.服务层

      services ：为控制层提供数据。引用sequelize模型，直接请求本地服务如mysql的增删改查。
      db ：为services提供sequelize的数据模型

    4.其他

      conf ：保存一些常量和配置项。
      test ：单元测试。
      utils ：一些工具。
      views ：可忽略。服务端渲染ejs模版，SSR内容。


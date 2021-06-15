#!/bin/bash
# @Author: Just be free
# @Date:   2021-06-02 15:20:12
# @Last Modified by:   Just be free
# @Last Modified time: 2021-06-15 10:34:30

# 当发生错误时中止脚本
set -e

# 构建
npm run build-storybook

npm run build

mkdir dist/docs

mv storybook-static/* dist/docs

# cd 到构建输出的目录下 
cd dist



# 部署到自定义域域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 部署到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

git push -f git@github.com:dullarjs/dullar.github.io.git master:gh-pages

# 部署到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
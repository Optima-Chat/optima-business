# 部署文档

## 🌐 网站信息

**正式网站**: https://optima-ai.biz
**备用域名**: https://optima-business.vercel.app

**部署平台**: Vercel
**部署状态**: ✅ 生产环境运行中

---

## 📋 环境变量配置

已在 Vercel 生产环境配置以下环境变量：

### 必需环境变量

```bash
# Resend 邮件服务 API Key
RESEND_API_KEY=re_2cPKZEmg_5vnWhETXWhW1hwwhSks7KxNQ

# 网站 URL（用于 CSRF 验证等）
NEXT_PUBLIC_SITE_URL=https://optima-ai.biz

# 联系邮箱
NEXT_PUBLIC_CONTACT_EMAIL=business@optima.chat
```

---

## 🔧 本地开发

### 1. 克隆仓库
```bash
git clone https://github.com/Optima-Chat/optima-business.git
cd optima-business
```

### 2. 安装依赖
```bash
npm install
```

### 3. 配置环境变量
复制 `.env.example` 为 `.env.local`：
```bash
cp .env.example .env.local
```

编辑 `.env.local` 并填入正确的值。

### 4. 启动开发服务器
```bash
npm run dev
```

访问 http://localhost:3000

---

## 🚀 部署流程

### 自动部署（推荐）

项目已配置 Vercel 自动部署：

1. 推送代码到 `main` 分支
   ```bash
   git push origin main
   ```

2. Vercel 自动触发部署
   - 构建时间：约 30-40 秒
   - 自动部署到生产环境
   - 自动更新 https://optima-ai.biz

### 手动部署

使用 Vercel CLI 手动部署：

```bash
# 部署到生产环境
vercel --prod

# 部署到预览环境
vercel
```

---

## 🔐 环境变量管理

### 查看环境变量
```bash
vercel env ls
```

### 添加环境变量
```bash
vercel env add VARIABLE_NAME production
```

### 删除环境变量
```bash
vercel env rm VARIABLE_NAME production
```

---

## 📧 邮件服务配置

### Resend 配置

**发件人**: `Optima AI 官网 <noreply@optima.sh>`
**收件人**: `business@optima.chat`

#### 验证发件域名

需要在 Resend 后台验证以下域名：
- `optima.sh` ✅ 已验证

#### 邮件配额

- 免费计划：100 封/天，3000 封/月
- 当前使用：已发送 113 封（本月）

---

## 🔍 监控与调试

### 查看部署日志

1. **Vercel 控制台**
   - 访问：https://vercel.com/veryverypros-projects/optima-business
   - 点击 "Deployments" 查看部署历史
   - 点击具体部署查看构建日志

2. **CLI 查看日志**
   ```bash
   vercel logs https://optima-ai.biz --follow
   ```

### 检查网站状态

```bash
# 检查 HTTP 状态
curl -I https://optima-ai.biz

# 检查响应时间
curl -w "@-" -o /dev/null -s https://optima-ai.biz <<'EOF'
time_namelookup:  %{time_namelookup}s\n
time_connect:     %{time_connect}s\n
time_total:       %{time_total}s\n
EOF
```

---

## 🐛 常见问题

### 1. 构建失败：缺少环境变量

**错误**: `Missing API key`

**解决**:
```bash
vercel env add RESEND_API_KEY production
```

### 2. 邮件发送失败

**检查**:
1. Resend API Key 是否正确
2. 发件域名是否已验证
3. 邮件配额是否用完

**查看日志**:
```bash
vercel logs https://optima-ai.biz --follow
```

### 3. 域名访问失败

**检查 DNS 配置**:
```bash
dig optima-ai.biz
nslookup optima-ai.biz
```

**Vercel DNS 记录**:
- A 记录: 76.76.21.21
- 或 CNAME: cname.vercel-dns.com

---

## 📊 性能优化

### 已实施的优化

- ✅ 静态生成（SSG）- 所有页面预渲染
- ✅ 图片优化（Next.js Image）
- ✅ 代码分割（动态导入）
- ✅ 字体优化（next/font）
- ✅ CDN 加速（Vercel Edge Network）

### 性能指标

| 指标 | 目标 | 当前 |
|-----|------|------|
| First Load JS | < 100KB | ~96KB ✅ |
| 页面加载时间 | < 1s | ~0.6s ✅ |
| LCP | < 2.5s | 待测试 |
| CLS | < 0.1 | 待测试 |

---

## 🔄 更新流程

### 更新代码

1. 修改代码
2. 本地测试
   ```bash
   npm run build
   npm start
   ```
3. 提交并推送
   ```bash
   git add .
   git commit -m "feat: 新功能描述"
   git push origin main
   ```
4. Vercel 自动部署

### 更新环境变量

1. 更新变量
   ```bash
   vercel env rm VARIABLE_NAME production
   vercel env add VARIABLE_NAME production
   ```
2. 触发重新部署
   ```bash
   vercel --prod
   ```

---

## 📝 备注

- 项目使用 Next.js 14 (App Router)
- TypeScript 严格模式
- Tailwind CSS 样式
- 部署到 Vercel 生产环境
- 自定义域名：optima-ai.biz

---

**最后更新**: 2025-12-18
**部署版本**: v1.0.0

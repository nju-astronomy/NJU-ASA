# 贡献方法

## 贡献方法

本项目使用标准 Markdown 语法

### 方法一. 提交 Pull Request（推荐）

1、Fork（页面右上角）本仓库

2.1、**修改/添加现有回答**：


1. 在 [GitHub 仓库](https://github.com/nju-astronomy/NJU-ASA) 中找到要修改 `docs/` 目录下对应的Markdown 文件

2. 点击文件右上角的编辑图标

3. 修改内容后，点击「Commit changes」→ 勾选「Create a new branch for this commit」→ 提交

2.2、**上传新文件/资料**：

1. 打开要上传的文件夹（如 `docs/appendix/courses/courses_files/大一上/微积分/`）

2. 点击「Add file」→「Upload files」

3. 拖拽或选择文件上传

4. 点击「Commit changes」→ 勾选「Create a new branch for this commit」→ 提交

> 若上传课程资料，请统一存放至 `docs/appendix/courses/courses_files/` 目录，并在相应的 Markdown 文件中做好记录与说明

2.3、**创建新文件夹并上传**：

1. 打开任意文件夹，点击「Add file」→「Upload files」

2. 在文件名输入框中输入路径，如：`docs/appendix/courses/courses_files/大一上/微积分/my_file.pdf`

3. 系统会自动创建对应的文件夹结构

4. 上传完成后提交

3、提交 Pull Request，**PR标题请注明署名方式**：
- 匿名：自拟昵称，并标注年级与专业/方向（例: 2024级_天体生物学方向_匿名」），如果你想的话在[作者页面](../authors.md)添加你的联系方式。
- 实名：真实姓名，附年级与专业/方向（例：张三_2024级_宇宙社会学方向」）

### 方法二. 在 [GitHub Issues](https://github.com/nju-astronomy/NJU-ASA/issues) 上提交文件和相关内容，有维护者后续添加。

---
## 内容组织规范

### 目录结构

```
docs/
├── freshman/           # 新生指南
├── choice/             # 专业分流 & 科研兴趣
├── academics/          # 课程学习
├── research_undergrad/ # 本科生科研
├── pathway/            # 研究生申请
├── abroad_exchange/    # 本科生交换
├── student_affairs/    # 学生工作
├── beyond_astro/       # 天文之外
├── appendix/           # 附录
│   └── courses/
│       └── courses_files/  # 课程资料统一存放处
└── ...
```

### 课程资料上传示例

若要为「大一上学期」的课程上传资料，目录结构参考：

```
docs/appendix/courses/courses_files/
├── 大一上/
│   ├── 微积分/
│   │   ├── 2024_匿名_笔记.pdf
│   │  
│   ├── 线性代数/
│   └── ...
```

在对应的 Markdown 文件（如 `docs/appendix/courses/1_1_semester.md`）中记录与说明：

```markdown
## 微积分

- [2024年匿名笔记](courses_files/大一上/微积分/2024_匿名_笔记.pdf)（by 2024级_天文_匿名）
- 简介：课程要点总结、复习重点等（可写可不写）...
```

---
## 仓库部署

- 本仓库使用 [MkDocs](https://www.mkdocs.org/) + Material for MkDocs 构建
- `main` 分支存放源文件（`docs/` 目录下的 Markdown 文件）
- 通过 GitHub Actions 自动构建并部署到 `gh-pages` 分支

> **重要**：
> - 避免提交单个大于 100MB 的文件（仓库未启用 Git LFS），大文件请用网盘 + 链接
> - **请勿手动修改 `gh-pages` 分支**，部署由 CI 自动维护
> - 不要运行 `mkdocs gh-deploy`，这会干扰自动部署流程
---

**感谢你的贡献！** 
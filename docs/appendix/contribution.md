# 贡献方法

**感谢你的贡献！** 

## 贡献方式

本项目使用标准 Markdown 语法

### 方法一

提交 Pull Request（推荐）

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

### 方法二

在 [GitHub Issues](https://github.com/nju-astronomy/NJU-ASA/issues) 上提交文件和相关内容，有维护者后续添加。

---
## 内容组织规范

### 目录结构

```
docs/
├── index.md                          # 首页
├── preface.md                        # 序
├── authors.md                        # 作者
├── contents.md                       # 目录
├── assets/                           # 资源文件
│
├── freshman/                         # 新生指南
│   ├── welcome.md                    # 欢迎来到天空院
│   ├── self_driven.md                # 自我驱动
│   ├── motivation.md                 # 什么是你真正想要的？
│   └── career_reality.md             # 兴趣之外：天文作为职业的另一面
│
├── choice/                           # 专业分流 & 科研兴趣
│   ├── fields.md                     # 专业方向
│   └── research_interest.md          # 研究兴趣
│
├── academics/                        # 课程学习
│   ├── gpa_goals.md                  # 绩点有什么用？
│   ├── gpa_anxiety.md                # 绩点焦虑
│   ├── course_selection.md           # 课程选择
│   ├── study_methods.md              # 课程学习方法
│   ├── exam_preparation.md           # 考前复习
│   └── attending_classes.md          # 如何上课？
│
├── research_undergrad/               # 本科生科研
│   ├── undergrad_research_meaning.md # 本科生科研意味着什么
│   ├── goals.md                      # 本科生科研的"好"成果？
│   ├── projects.md                   # 本科生科研项目
│   ├── supervisor.md                 # 导师的重要性
│   └── skills/                       # 从入门到推进：本科生科研如何上手
│       ├── methods_ai.md             # 合理运用AI
│       ├── literature_reading.md     # 论文阅读
│       ├── fast_handle.md            # 快速入门技巧
│       └── collaboration.md          # 团队合作
│
├── pathway/                          # 研究生申请
│   ├── why_grad.md                   # 硕士生与博士生？
│   ├── domestic_grad/                # 国内申请
│   │   ├── by_recommended/           # 保研
│   │   │   ├── prepare.md            # 为了保研你需要准备什么？
│   │   │   ├── what_is_summer_camp.md # 夏令营（预推免）是什么？
│   │   │   ├── prepare_summer_camp.md # 如何准备一场夏令营（预推免）？
│   │   │   └── summer_camp_focus/    # 不同夏令营（预推免）的侧重点
│   │   │       ├── nju.md            # 南京大学
│   │   │       ├── ustc.md           # 中国科学技术大学
│   │   │       ├── pku.md            # 北京大学
│   │   │       ├── tsinghua.md       # 清华大学
│   │   │       ├── sjtu.md           # 上海交通大学
│   │   │       ├── cas.md            # 国家天文台
│   │   │       └── other_camps.md    # 其他院校
│   │   └── by_exam/                  # 考研
│   │       ├── prepare_kaoyan.md     # 考研的准备
│   │       ├── process_kaoyan.md     # 考研的流程
│   │       └── others_kaoyan.md      # 其他
│   └── abroad/                       # 出国
│       ├── abroad_overview.md        # 常见的出国路径概览
│       ├── why_abroad.md             # 为什么出国？
│       ├── abroad_past.md            # 天文方向往年出国情况
│       ├── abroad_application.md     # 出国申请流程
│       ├── abroad_countries.md       # 各个国家的出国情况
│       └── abroad_cost.md            # 出国的隐性成本
│
├── abroad_exchange/                  # 本科生交换
│   ├── exchange_intro.md             # 出国交流项目介绍
│   ├── college_project.md            # 学院项目
│   ├── personal_project.md           # 个人（导师）项目
│   └── zhenggang_project.md          # 郑钢海外奖学金项目
│
├── student_affairs/                  # 学生工作
│   ├── why_affairs.md                # 学生工作是什么？
│   ├── student_union.md              # 天空院团学联
│   ├── youth_league_committee.md     # 天空院本科生团支部
│   └── astronomy_association.md      # 天协
│
├── beyond_astro/                     # 天文之外
│   ├── leaving_astro.md              # 后来那些不做天文的人都去哪了？
│   ├── living_nanjing.md             # 生活在南京
│   └── others.md                     # 大学生活的其他方面
│
└── appendix/                         # 附录
    ├── group.md                      # 课题组概览
    ├── references.md                 # 参考书目
    ├── contribution.md               # 贡献方法
    └── courses/                      # 课程资料
        ├── 1_semester.md           # 大一
        ├── 2_semester.md           # 大二
        ├── 3_semester.md           # 大三
        ├── 4_semester.md           # 大四
        ├── summer.md           # 暑期学校
        └── courses_files/            # 课程资料统一存放处
            └── [按学期组织]
```

### 回答上传示例

若为“绩点有什么用？”小节分享你的回答，找到`docs/academics/gpa_goals.md`文件中记录说明：
```markdown

你的回答你的回答你的回答你的回答你的回答你的回答你的回答你的回答你的回答（你的名字（实名或者匿名），你的方向，你的年级

--- #下划线分割

```

### 课程资料上传示例

若要为「大一上学期」的课程上传资料，目录结构参考：

```
docs/appendix/courses/courses_files/
├── 大一/
│   │   ├── 2024_匿名_微积分_笔记或试卷等资料.pdf
│   └── ...
```

在对应的 Markdown 文件（如 `docs/appendix/courses/1_semester.md`）中记录与说明：

```markdown
## 微积分

- [2024年匿名笔记](courses_files/大一/微积分/2024_匿名_微积分_笔记或试卷等资料.pdf)
- 简介：课程要点总结、复习重点等（可写可不写）...
（你的名字（实名或者匿名），你的方向，你的年级）

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


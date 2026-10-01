# 提交与推送身份

本仓库所有 Git 提交的作者和提交者都使用：

- 名称：`anjing-le`
- 邮箱：`245548353+anjing-le@users.noreply.github.com`

提交前用 `git var GIT_AUTHOR_IDENT` 和 `git var GIT_COMMITTER_IDENT` 检查实际身份；不匹配时修正本仓库的 `user.name`、`user.email`，并检查环境变量是否覆盖了配置。不要修改其他项目或全局 Git 身份。

推送使用 `anjing-le` 的 SSH 身份。本机已通过仓库 `core.sshCommand` 指定 `id_rsa_anjing`；在其他设备上使用对应账号的密钥，不能根据提交作者推断推送认证账号。

---
sidebar_position: 1
---

# How to use croc?

### How to download?
Download the latest release for your system, or install a release from the command-line:
```bash
curl https://getcroc.schollz.com | bash
```
On macOS you can install the latest release with Homebrew:
```bash
brew install croc
```
On Windows you can install the latest release with Scoop, Chocolatey, or Winget:

```bash
scoop install croc
```

```bash
choco install croc
```
```bash
winget install schollz.croc
```

:::tip
For more information, : visit https://github.com/schollz/croc
:::

### How to use?

```bash
croc send ./path/to/file.zip
```

### How to send file with custom code?

```bash
 croc send --code custom-code ./file.md
```
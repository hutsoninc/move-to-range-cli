# move-to-range-cli

Move files to a range of directories.

## Installation

`npm install --global move-to-range-cli`

## Usage

```
$ move-to-range --help

  Move files to a range of directories.

  Usage
    $ move-to-range <int>-<int> <file-type>
  Options
    --destination, -d  Destination for dirs
  Example
    $ move-to-range 1-5,7,9-10 .txt
```

```
$ tree
.
├── 1.txt
├── 2.txt
├── 3.txt
├── 5.txt
├── 1
├── 2
├── 3
├── 5
│ ...

$ move-to-range 1-3,5 .txt

# tree
.
├── 1
│   └── 1.txt
├── 2
│   └── 2.txt
├── 3
│   └── 3.txt
├── 5
│   └── 5.txt
│ ...
```

With options:

```
$ tree
.
├── 1.txt
├── 2.txt
├── 3.txt
├── 5.txt
├── out
│   ├── 1
│   ├── 2
│   ├── 3
│   └── 5
│ ...

$ move-to-range 1-3,5 .txt --destination out

$ tree
.
├── out
│   ├── 1
│   │   └── 1.txt
│   ├── 2
│   │   └── 2.txt
│   ├── 3
│   │   └── 3.txt
│   └── 5
│       └── 5.txt
│ ...
```

Create a shell alias:

```
alias mtr=move-to-range
```

## Related

- [move-to-range](https://github.com/hutsoninc/move-to-range) - API for this module
- [copy-to-range-cli](https://github.com/hutsoninc/copy-to-range-cli) - Copy files to a range of directories
- [make-dir-range-cli](https://github.com/hutsoninc/make-dir-range-cli) - Make directories from a range of integers

## Authors

* **Austin Gordon** - *Development* - [GitHub](https://github.com/AustinLeeGordon)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
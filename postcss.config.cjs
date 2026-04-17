// postcss.config.js

module.exports = {
  plugins: {
    tailwindcss: {},
    "postcss-rtl": {
      // 默认输出 [dir="ltr"] 与 [dir="rtl"] 双向规则
      // onlyDirection: undefined,  // 可设置 'rtl' 单独生成
      // 排除 background 相关属性不被 RTL 处理（这些属性不需要方向性）
      blacklist: [
        "background",
        "background-attachment",
        "background-color",
        "background-clip",
        "-webkit-background-clip",
        "background-image",
        "background-position",
        "background-position-x",
        "background-position-y",
        "background-repeat",
        "background-size",
        "placeholder"
      ],
      // 针对白名单属性执行方向翻转，匹配阿拉伯语等 RTL 语言阅读习惯
      whitelist: [
        "margin-left",
        "margin-right",
        "padding-left",
        "padding-right",
        "border-left",
        "border-right",
        "border-radius",
        "left",
        "right",
        "text-align",
        "text-indent",
        "float",
        "clear",
        "flex-direction",
        "justify-content",
        "gap",
        "column-gap",
        "transform",
        "transform-origin"
      ]
    },
    autoprefixer: {}
  }
};

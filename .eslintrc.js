module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'accessor-pairs': 2,     //在对象中使用getter/setter
    'arrow-spacing': [2, {   //=>的前/后括号
        'before': true,
        'after': true
    }],
    'block-spacing': [2, 'always'], //块语句中使用var
    'brace-style': [2, '1tbs', {    //大括号风格
        'allowSingleLine': true
    }],
    'camelcase': [0, {              //强制驼峰法命名
        'properties': 'always'
    }],
    'comma-dangle': [2, 'never'],   //对象字面量项尾不能有逗号
    'comma-spacing': [2, {          //逗号前后的空格
        'before': false,
        'after': true
    }],
    'comma-style': [2, 'last'],    //逗号风格，换行时在行首还是行尾
    'constructor-super': 2,      //非派生类不能调用super，派生类必须调用super
    'curly': [2, 'multi-line'],  //必须使用 if(){} 中的{}
    'dot-location': [2, 'property'], //对象访问符的位置，换行的时候在行首还是行尾
    'eol-last': 0,                  //文件以单一的换行符结束
    'eqeqeq': [2, 'allow-null'],    //必须使用全等
    'generator-star-spacing': [2, {     //生成器函数*的前后空格
        'before': true,
        'after': true
    }],
    'handle-callback-err': [0, '^(err|error)$'],  //nodejs 处理错误
    'indent': [2, 2, {          //缩进风格
        'SwitchCase': 1
    }],
    'jsx-quotes': [2, 'prefer-single'], //规则强制在 JSX 属性中一致使用双引号或单引号。"prefer-double" （缺省值）对所有不包含双引号的JSX属性值强制使用双引号"prefer-single" 对所有不包含单引号的JSX属性值强制使用单引号
    'key-spacing': [2, {// 强制在对象字面量的属性中键和值之间使用一致的间距
        'beforeColon': false,
        'afterColon': true

        // "beforeColon": false （默认值）不允许在对象文字中的键和冒号之间使用空格。
        // "beforeColon": true 在对象文字中至少需要一个键和冒号之间的空格。
        //"afterColon": true （默认）需要在冒号和对象文字中的值之间至少有一个空格。
        //"afterColon": false 禁止冒号和对象字面值之间的空格。
        // "mode": "strict" （默认）在对象文字中冒号前或后执行一个空格。
        // "mode": "minimum" 在对象文字中的冒号之前或之后强制执行一个或多个空格。
        //"align": "value" 强制对象文字中值的水平对齐。
        // "align": "colon" 强制执行对象文字中冒号和值的水平对齐。
        // "align" 当值在对象文字中对齐时，使用对象值可以实现细粒度的间距。
        // "singleLine" 指定单线对象文字的间距样式。
        //"multiLine" 指定多线对象文字的间距样式。
    }],
    'keyword-spacing': [2, {     //此规则强制执行围绕关键字和关键字标记的一致空格
        'before': true,
        'after': true
        //"before": true （默认）在关键字之前至少需要一个空格
        //"before": false 在关键字之前禁止使用空格
        //"after": true （默认）在关键字后至少需要一个空格
        //"after": false 在关键字后禁止使用空格
        // "overrides" 允许覆盖指定关键字的间距样式
    }],
    'new-cap': [0, {  //要求构造函数名以大写字母开头。某些内置标识符可免除此规则,Array,Boolean,Data
        // 'newIsCap': true,
        // 'capIsNew': false
        // "newIsCap": true（默认）要求new使用大写启动函数调用所有操作符。
        //"newIsCap": false允许new使用小写启动或大写启动功能调用运算符。

        //"capIsNew": true（默认）要求所有大写启动的函数与new操作符一起调用。
        //"capIsNew": false允许在没有new操作符的情况下调用大写启动的函数。
        // "newIsCapExceptions"允许new操作员调用指定的小写启动函数名称。
    }],
    'new-parens': 2,     // 在使用new关键字调用不带参数的构造函数时需要括号
    'no-array-constructor': 2,  //不允许使用Array构造函数
    'no-caller': 2,      //不可能使用arguments.caller并arguments.callee进行几次代码优化
    'no-console': 'off',    //是否禁止调用console对象的方法。
    'no-class-assign': 2,   //标记修改类声明的变量。
    'no-cond-assign': 2,    //是否允许在试验条件不明确赋值运算符if，for，while，和do...while语句。
    /*[
        "except-parens"（缺省值）只允许在测试条件下进行赋值，如果它们被括在圆括号中（例如，允许在while或do...while循环的测试中重新赋值变量）
        "always" 不允许在测试条件下的所有分配
        ]*/
    'no-const-assign': 2,  //不能修改使用const关键字声明的变量。它会引发运行时错误。
    'no-control-regex': 2,  //不允许正则表达式中的控制字符
    'no-delete-var': 2, //不允许在变量上使用delete操作符。
    'no-dupe-args': 2,   //不允许在函数声明或表达式中使用重复的参数名称
    'no-dupe-class-members': 2, //不允许在类成员中有相同名称的声明
    'no-dupe-keys': 2,   //不允许对象文字中具有相同键的多个属性
    'no-duplicate-case': 2, //不允许在switch语句的case子句中使用重复的测试表达式。
    'no-empty-character-class': 2,//不允许在正则表达式中使用空字符类。
    'no-empty-pattern': 2,  // 标记解构结构对象和数组中的任何空模式
    'no-eval': 0,   //禁止使用全局的eval函数
    'no-ex-assign': 2, //不允许在catch子句中重新分配例外
    'no-extend-native': 2, //不允许直接修改内建对象的原型
    'no-extra-bind': 2, //避免不必要的使用，bind()因此只要立即调用的函数表达式（ IIFE ）正在使用bind()并且没有适当的this值，就会发出警告
    'no-extra-boolean-cast': 2,  //禁止不必要的布尔转换。
    'no-extra-parens': [2, 'functions'], //仅在必要时限制使用括号
    //"all"（默认）禁止在任何表达式周围使用不必要的括号
    // "functions"仅在函数表达式附近禁止不必要的括号

    'no-fallthrough': 2,        // 禁止 case 语句落空
    'no-floating-decimal': 2,  //要求浮点型数值小数点前后必须有数字
    'no-func-assign': 2,       //不允许重新分配function声明。
    'no-implied-eval': 2,       //消除隐含eval()通过使用setTimeout()，setInterval()或execScript()。因此，它会在任何一个函数与字符串一起用作第一个参数时发出警告。
    'no-inner-declarations': [2, 'functions'],  //要求函数声明和可选的变量声明位于程序的根节点或函数的主体中。
    //"functions"（默认）不允许function嵌套块中的声明
    //"both"在嵌套块中禁止function和var声明
    'no-invalid-regexp': 2,   // 不允许RegExp构造函数中的无效正则表达式字符串。
    'no-irregular-whitespace': 2, // 不允许出现不规则的空白符
    // "skipStrings": true (default) allows any whitespace characters in string literals
    // "skipComments": true allows any whitespace characters in comments
    // "skipRegExps": true allows any whitespace characters in regular expression literals
    //" skipTemplates": true allows any whitespace characters in template literals
    'no-iterator': 2,   // 使用该__iterator__属性时可能出现的错误，该错误在多个浏览器中未实现。因此，它会在遇到__iterator__财产时发出警告
    'no-label-var': 2,  // 禁止创建与范围内的变量共享名称的标签的不良做法来创建更清晰的代码。
    'no-labels': [2, {   // 消除 JavaScript 中使用带标签的语句。只要遇到带标签的语句以及每次break或continue使用标签时，它都会发出警告
        'allowLoop': false,   //for,while 循环里
        'allowSwitch': false  // switch里
    }],
    'no-lone-blocks': 2,   // 不允许脚本顶层或其他块中不必要的和可能混淆的块。
    'no-mixed-spaces-and-tabs': 2, // 不允许使用混合空格和制表符进行缩进。0->2统一使用空格
    'no-multi-spaces': 2,  // 禁止在逻辑表达式，条件表达式，声明，数组元素，对象属性，序列和函数参数周围使用多个空格。
    'no-multi-str': 2,    // 禁止使用多行字符串
    'no-multiple-empty-lines': [2, {  // 减少阅读代码时所需的滚动。它会在超过最大空行数量时发出警告
        'max': 1         //最大空行数为1
    }],
    'no-native-reassign': 2, // 不允许修改只读全局变量
    'no-negated-in-lhs': 2,  // 不允许否定in表达式中的左操作数 !key in object
    'no-new-object': 2,   // 不允许使用Object构造函数。
    'no-new-require': 2,  // 禁止使用new require表达的使用
    'no-new-symbol': 2,  // 禁止 Symbolnew 操作符和 new 一起使用
    'no-new-wrappers': 2,// 禁止对 String，Number 和 Boolean 使用 new 操作符
    'no-obj-calls': 2,// 禁止把全局对象作为函数调用
    'no-octal': 2,// 禁用八进制字面量
    'no-octal-escape': 2,// 禁止在字符串中使用八进制转义序列
    'no-path-concat': 2,// 禁止对?__dirname?和?__filename?进行字符串连接
    'no-proto': 2,// 禁用 __proto__ 属性
    'no-redeclare': 2, // 禁止多次声明同一变量
    'no-regex-spaces': 2,// 禁止正则表达式字面量中出现多个空格
    'no-return-assign': [2, 'except-parens'],// 禁止在 return 语句中使用赋值语句
    'no-self-assign': 2,// 禁止自我赋值
    'no-self-compare': 2,// 禁止自身比较
    'no-sequences': 2,// 禁用逗号操作符
    'no-shadow-restricted-names': 2,// 禁止将标识符定义为受限的名字
    'no-spaced-func': 2,//此规则不允许功能标识符与其应用程序之间的间距
    'no-sparse-arrays': 2,// 禁用稀疏数组
    'no-this-before-super': 2,// 禁止在构造函数中，在调用?super()?之前使用?this?或?super
    'no-throw-literal': 2,// 禁止抛出异常字面量
    'no-trailing-spaces': 0,// 警告行尾空格
    'no-undef': 2,// 禁用未声明的变量，除非它们在?/*global*/?注释中被提到
    'no-undef-init': 2,// 禁止将变量初始化为?undefined
    'no-unexpected-multiline': 2,// 禁止出现令人困惑的多行表达式
    'no-unmodified-loop-condition': 2,// 禁用一成不变的循环条件
    'no-unneeded-ternary': [2, {// 禁止可以在有更简单的可替代的表达式时使用三元操作符
        'defaultAssignment': false
    }],
    'no-unreachable': 2,// 禁止在 return、throw、continue 和 break 语句之后出现不可达代码
    'no-unsafe-finally': 2,// 禁止在 finally 语句块中出现控制流语句
    'no-unused-vars': [0, { // 禁止出现未使用过的变量
        'vars': 'all',
        'args': 'none'
    }],
    'no-useless-call': 2,// 禁止不必要的 .call() 和 .apply()
    'no-useless-computed-key': 2,// 禁止在对象中使用不必要的计算属性
    'no-useless-constructor': 2,// 禁用不必要的构造函数
    'no-useless-escape': 0,// 不禁用不必要的转义字符
    'no-whitespace-before-property': 2,// 禁止属性前有空白
    'no-with': 2,
    'one-var': [2, {
        'initialized': 'never'
    }],
    'operator-linebreak': [2, 'after', {// 强制操作符使用一致的换行符
        'overrides': {
            '?': 'before',
            ':': 'before'
        }
    }],
    'padded-blocks': [2, 'never'],// 要求或禁止块内填充
    'quotes': [2, 'single', {// 强制使用一致的反勾号、双引号或单引号
        'avoidEscape': true,
        'allowTemplateLiterals': true
    }],
    'semi': [2, 'never'],// 要求或禁止使用分号代替": 2, // ASI
    'semi-spacing': [2, {// 强制分号之前和之后使用一致的空格
        'before': false,
        'after': true
    }],
    'space-before-blocks': [2, 'always'],// 强制在块之前使用一致的空格
    'space-before-function-paren': [2, 'never'],// 强制在 function 的左括号之前使用一致的空格
    'space-in-parens': [2, 'never'],// 强制在圆括号内使用一致的空格
    'space-infix-ops': 2,// 要求操作符周围有空格
    'space-unary-ops': [2, {// 强制在一元操作符前后使用一致的空格
        'words': true,
        'nonwords': false
    }],
    'spaced-comment': [2, 'always', {// 强制在注释中 // 或 /* 使用一致的空格/
        'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
    }],
    'template-curly-spacing': [2, 'never'],// 要求或禁止模板字符串中的嵌入表达式周围空格的使用
    'use-isnan': 2,// 要求使用 isNaN() 检查 NaN
    'valid-typeof': 2,// 强制 typeof 表达式与有效的字符串进行比较
    'wrap-iife': [2, 'any'],// 要求 IIFE(函数表达式) 使用括号括起来
    'yield-star-spacing': [2, 'both'],// 强制在 yield* 表达式中 * 周围使用空格
    'yoda': [2, 'never'],// 要求或禁止 “Yoda” // 条件
    'prefer-const': 2,// 要求使用?const?声明那些声明后不再被修改的变量
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,// 是否禁用 debugger
    'object-curly-spacing': [2, 'always', {// 不允许大括号内的空格
        objectsInObjects: false
    }],
    'array-bracket-spacing': [2, 'never']// 强制数组方括号中使用一致的空格
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        mocha: true
      }
    }
  ]
}

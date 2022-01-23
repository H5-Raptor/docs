# JSON-Schema 
Raptor 采用开源库 [vue-json-schema-form](https://github.com/lljj-x/vue-json-schema-form) 解析，支持丰富的控件类型，
同时支持扩展类型。

目前 Raptor 已支持以下控件，基本能覆盖日常业务所需。
#### 基础控件
1. 字符串
2. 数字
3. 布尔开关
4. 单选
5. 多选
6. 下拉选择
7. 日期
8. 颜色

#### 引用类型控件
1. 列表
2. 对象

#### 扩展控件
1. 图片
2. 颜色

完整的 JSON Schema 示例结构如下，包含属性`name`和`age`，分别是字符串类型、数字类型。
```json
{
    "type": "object",
    "required": [],
    "properties": {
        "name": {
            "title": "名称",
            "type": "string",
            "ui:options": {
                "placeholder": "请输入名称"
            }
        },
        "age": {
            "title": "年龄",
            "type": "number",
            "default": 0,
            "multipleOf": 1
        }
    }
}
```
**UI 展示如下 ↓**
<JsonSchema-Demo />

## 基础控件

**字符串**
```json
{
  "title": "名称",
  "type": "string",
  "ui:options": {
    "placeholder": "请输入名称"
  }
}
```
**UI 展示如下 ↓**
<JsonSchema-String />

**数字**
```json
{
  "title": "年龄",
  "type": "number",
  "default": 0,
  "multipleOf": 1
}
```
**UI 展示如下 ↓**
<JsonSchema-Number />

**布尔、开关**
```json
{
    "title": "是否选择(Switch)",
    "type": "boolean"
}
```
**UI 展示如下 ↓**
<JsonSchema-Switch />

**单选（Radio样式）**
```json
{
    "title": "单选(Radio)",
    "type": "string",
    "ui:widget": "RadioWidget",
    "enum": [
        "1",
        "2",
        "3"
    ],
    "enumNames": [
        "一",
        "二",
        "三"
    ]
}
```
**UI 展示如下 ↓**
<JsonSchema-One-Radio />

**单选（Select）样式**
```json
{
    "title": "单选(Select)",
    "type": "string",
    "ui:widget": "SelectWidget",
    "enum": [
        "1",
        "2",
        "3"
    ],
    "enumNames": [
        "一",
        "二",
        "三"
    ]
}
```
**UI 展示如下 ↓**
<JsonSchema-One-Select />

**多选（Select）样式**
```json
{
    "type": "array",
    "uniqueItems": true,
    "items": {
        "type": "string",
        "enum": [
            "1",
            "2",
            "3"
        ],
        "enumNames": [
            "一",
            "二",
            "三"
        ]
    },
    "title": "多选(Select)",
    "ui:widget": "SelectWidget"
}
```
**UI 展示如下 ↓**
<JsonSchema-Many-Select />

**多选（Checkbox）样式**
```json
{
    "type": "array",
    "uniqueItems": true,
    "items": {
        "type": "string",
        "enum": [
            "1",
            "2",
            "3"
        ],
        "enumNames": [
            "一",
            "二",
            "三"
        ]
    },
    "title": "多选(Checkbox)",
    "ui:widget": "CheckboxesWidget"
}
```
**UI 展示如下 ↓**
<JsonSchema-Mayn-Checkbox />

**颜色**
颜色的值是字符串，同样可以使用字符串的输入框控件，但使用颜色专用控件，交互体验更好。
```json
{
    "title": "颜色选择器",
    "type": "string",
    "format": "color"
}
```
**UI 展示如下 ↓**
<JsonSchema-Color />

## 引用类型控件

## 扩展控件

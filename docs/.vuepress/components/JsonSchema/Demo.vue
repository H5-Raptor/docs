<template>
  <div style="border: 1px solid #aaaaaa;padding: 30px;">
    <vue-form
      v-model="jsonSchemaValue"
      :schema="jsonSchema"
      :formFooter="formFooter"
    />
  </div>
</template>
<script>
import VueForm from '@lljj/vue-json-schema-form';

export default {
  name: 'JsonSchemaDemo',
  components: {
    VueForm,
  },
  data: function() {
    const jsonSchemaValue = {
      name: '',
      age: 0,
    };
    const jsonSchema = {
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
    };

    return {
      jsonSchemaValue,
      jsonSchema,
      formFooter: {
        show: false, // 是否显示默认底部
      },
    }
  }
};
</script>

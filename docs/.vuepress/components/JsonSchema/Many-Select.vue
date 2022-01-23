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
  name: 'JsonSchemaManySelect',
  components: {
    VueForm,
  },
  data: function() {
    const jsonSchemaValue = {
      index: ['1', '2'],
    };
    const jsonSchema = {
      "type": "object",
      "required": [],
      "properties": {
        "index": {
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

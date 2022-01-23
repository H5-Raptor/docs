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
  name: 'JsonSchemaOneRadio',
  components: {
    VueForm,
  },
  data: function() {
    const jsonSchemaValue = {
      index: '1',
    };
    const jsonSchema = {
      "type": "object",
      "required": [],
      "properties": {
        "index": {
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

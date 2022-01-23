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
  name: 'JsonSchemaSwitch',
  components: {
    VueForm,
  },
  data: function() {
    const jsonSchemaValue = {
      color: '',
    };
    const jsonSchema = {
      "type": "object",
      "required": [],
      "properties": {
        "color": {
          "title": "颜色选择器",
          "type": "string",
          "format": "color"
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

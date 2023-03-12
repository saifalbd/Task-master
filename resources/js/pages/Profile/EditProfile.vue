<template>
  <el-dialog
    :model-value="props.show"
    title="Profile Information"
    :before-close="handleClose"
    style="max-width: 470px"
  
  >
    <el-form
      label-position="right"
      label-width="100px"
      :model="formFields"
      :rules="rules"
      ref="ruleFormRef"
      style="max-width: 460px"
    >
      <el-form-item label="Birth Date" prop="birth_date">
        <el-date-picker
          v-model="formFields.birth_date"
          type="date"
          placeholder="Pick a day"
        />
      </el-form-item>
      <el-form-item label="Gender" prop="gender">
        <el-select v-model="formFields.gender" placeholder="Select">
          <el-option label="Male" value="male" />
          <el-option label="Female" value="female" />
        </el-select>
      </el-form-item>
      <el-form-item label="Address" prop="address">
        <el-input autosize type="textarea" v-model="formFields.address" />
      </el-form-item>
    </el-form>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClose(() => {})">Cancel</el-button>
        <el-button type="primary" @click="submit(ruleFormRef)">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    item:{
      type:Object,
      required:true
    }
  },
  setup(props, { emit }) {
    const ruleFormRef = ref();
    const dialogVisible = ref(false);
    const handleClose = (done) => {
      done();
      emit("update:show", false);
    };

    const formFields = reactive({
      birth_date:props.item.birth_date,
      address:props.item.address,
      gender:props.item.gender,
    });

    const rules = reactive({
      	birth_date: [
        {
          required: true,
          message: "Birth Date Required",
          trigger: "change",
        },
      ],
      address: [
        {
          required: true,
          message: "Address Required",
          trigger: "change",
        },
      ],
      gender: [
        {
          required: true,
          message: "Gender Required",
          trigger: "change",
        },
      ],
    });

    const submit = async (formEl) => {
      try {
        if (!formEl) return;
        await formEl.validate(async (valid, fields) => {
         if(valid){
        await  axios.put(route('updateProfile'),formFields);
              emit("update:show", false);
         }
        });
      } catch (error) {
        console.error(error);
      }
    };

    return {
      props,
      dialogVisible,
      formFields,
      rules,
      ruleFormRef,
      handleClose,
      submit,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
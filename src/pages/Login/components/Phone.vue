<template>
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm"
    size="default"
  >
    <el-form-item prop="name" label-width="auto">
      <el-input v-model="ruleForm.name" placeholder="手机号">
        <template #suffix>
          <i-ep-user class="v-icon" />
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="code" label-width="auto">
      <el-input v-model="ruleForm.code" placeholder="验证码"> </el-input>
      <span class="get-code">获取验证码</span>
    </el-form-item>

    <el-button
      style="width: 100%"
      type="primary"
      @click="submitForm(ruleFormRef)"
      >立即登录</el-button
    >
  </el-form>
</template>

<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import Cookies from 'js-cookie'
interface RuleForm {
  name: string
  code: string
}
const router = useRouter()
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  name: '',
  code: ''
})

const rules = reactive<FormRules<RuleForm>>({
  name: [
    { required: true, message: '请输入账号', trigger: 'blur' },
    { min: 3, max: 11, message: '账号长度为3-11位', trigger: 'blur' }
  ],
  code: [
    {
      required: true,
      message: '请输入验证码',
      trigger: 'change'
    },
    { min: 6, max: 6, message: '验证码长度为6位', trigger: 'blur' }
  ]
})
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      Cookies.set('token', 'AAAAA')
      router.push('/main')
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>

<style lang="less" scoped>
.get-code {
  position: absolute;
  right: 10px;
  color: #5585fe;
  cursor: pointer;
}
</style>

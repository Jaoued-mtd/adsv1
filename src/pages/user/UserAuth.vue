<template>
  <div>
    <div class="grid">
      <div class="row">
        <div class="col-lg-6">
          <LoginForm />
        </div>
        <div class="col-lg-6">
          <RegisterForm />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LoginForm from "../../components/user/LoginForm";
import RegisterForm from "../../components/user/RegisterForm";
export default {
  components: {
    LoginForm,
    RegisterForm,
  },
  data() {
    return {};
  },
  methods: {
    setSelectedComponent(cmp) {
      this.isSelected = cmp;
    },
  },
};
</script>
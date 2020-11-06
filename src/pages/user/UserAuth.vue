<template>
  <div>
    <BaseButton
      @click="setSelectedComponent('LoginForm')"
      title="Login"
      mode="btn-success"
    />
    <BaseButton
      @click="setSelectedComponent('RegisterForm')"
      title="Register"
      mode="btn-outline-success"
    />
    <component :is="isSelected"></component>
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
    return {
      isSelected: "RegisterForm",
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.isSelected = cmp;
    },
  },
};
</script>
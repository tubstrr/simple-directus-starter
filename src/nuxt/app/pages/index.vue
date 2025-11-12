<script setup>
import * as z from "zod";

const { login } = useDirectusAuth();
const router = useRouter();

const user = useDirectusUser();
console.log("🍤 ~ user:", user.value)

const toast = useToast();

const fields = [{
  name: "email",
  type: "email",
  label: "Email",
  placeholder: "Enter your email",
  required: true,
}, {
  name: "password",
  label: "Password",
  type: "password",
  placeholder: "Enter your password",
  required: true,
}, {
  name: "remember",
  label: "Remember me",
  type: "checkbox",
}];

const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Must be at least 8 characters"),
});

const onSubmit = async (payload) => {
  console.log("Submitted", payload);
  const { email, password } = payload.data;

  try {
    console.log("🍤 ~ onSubmit ~ email, password:", email, password);
    await login({ email, password });
  } catch (e) {
    console.log(e);
    toast.add({
      title: "Error",
      description: "Something went wrong logging you in",
    });
  }
}
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />

    <div class="flex flex-col items-center justify-center gap-4 p-4">
      <pre v-if="user?.first_name">{{ user.first_name }}</pre>
      <UPageCard class="w-full max-w-md">
        <UAuthForm
          :schema="schema"
          title="Login"
          description="Enter your credentials to access your account."
          icon="i-lucide-user"
          :fields="fields"
          @submit="onSubmit"
        />
      </UPageCard>
    </div>
  </div>
</template>

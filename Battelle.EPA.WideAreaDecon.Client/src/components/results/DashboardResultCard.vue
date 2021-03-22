<template>
  <v-card>
    <div class="d-flex flex-no-wrap">
      <v-avatar color="primary" class="ma-5" size="80" tile>
        <v-icon color="white" size="60">{{ icon }}</v-icon>
      </v-avatar>

      <div class="align-self-center">
        <v-card-title class="headline" v-text="value"></v-card-title>
        <v-card-subtitle v-text="text"></v-card-subtitle>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class DashboardResultCard extends Vue {
  @Prop() icon!: string;

  @Prop() text!: string;

  @Prop() value!: string | number;
}
</script>

<style scoped lang="scss"></style>

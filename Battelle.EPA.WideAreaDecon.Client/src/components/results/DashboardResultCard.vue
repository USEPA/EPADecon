<template>
  <v-tooltip bottom :max-width="300">
    <template v-slot:activator="{ on }">
      <v-card v-on="on" @click="$emit('showDetails', eventText)">
        <div class="d-flex flex-no-wrap">
          <v-avatar color="primary" class="ma-5" size="80" tile>
            <v-icon color="white" size="60">{{ icon }}</v-icon>
          </v-avatar>

          <div class="align-self-center">
            <v-card-title class="headline">
              <slot name="value">{{ value }}</slot>
            </v-card-title>
            <v-card-subtitle v-text="text"></v-card-subtitle>
          </div>
        </div>
      </v-card>
    </template>
    <span>{{ definition }}</span>
  </v-tooltip>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class DashboardResultCard extends Vue {
  @Prop() icon!: string;

  @Prop() text!: string;

  @Prop() value!: string;

  @Prop() definition!: string;

  get eventText(): string {
    return this.text.replace(/^Average /, '');
  }
}
</script>

<style scoped lang="scss">
.v-card {
  height: 100%;
}
</style>

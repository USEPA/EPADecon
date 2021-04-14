<template>
  <v-row justify="center">
    <v-dialog v-model="isVisible" max-width="800">
      <v-card>
        <v-card-title class="headline" v-text="`${title} Details`"></v-card-title>
        <v-card-text>
          <v-container>
            <v-row> Histogram... </v-row>
            <v-row>
              <v-col>
                <p class="text-body-2 mb-0">{{ details.mean }}</p>
                <p class="text-subtitle-1">Mean</p>
              </v-col>
              <v-col>
                <p class="text-body-2 mb-0">{{ details.maximum }}</p>
                <p class="text-subtitle-1">Maximum</p>
              </v-col>
              <v-col>
                <p class="text-body-2 mb-0">{{ details.minimum }}</p>
                <p class="text-subtitle-1">Minimum</p>
              </v-col>
              <v-col>
                <p class="text-body-2 mb-0">{{ details.stdDev }}</p>
                <p class="text-subtitle-1">Standard Deviation</p>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn outlined color="primary darken-1" text @click="isVisible = false"> Close </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import { Component, Prop, VModel, Vue } from 'vue-property-decorator';
import IResultDetails from '@/interfaces/jobs/results/IResultDetails';

@Component
export default class ResultDetails extends Vue {
  @Prop() title!: string;

  @Prop() details!: IResultDetails;

  @VModel({ default: () => false }) isVisible!: boolean;
}
</script>

<style></style>

<template>
  <div>
    <v-row>
      <v-col cols="4" xl="3" offset="7" offset-xl="8">
        <v-overflow-btn
          class="my-2"
          @change="getSurfacesForCategory"
          filled
          dense
          :items="categories"
          v-model="selectedCategory"
          ref="categorySelect"
        >
          <template v-slot:prepend>
            <p>Category:</p>
          </template>
        </v-overflow-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-simple-table class="overflow-x-hidden" ref="table">
          <template v-slot:default>
            <thead>
              <tr>
                <th></th>
                <th v-for="method in applicationMethods" :key="method" class="text-body-2 text-center">{{ method }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(surface, row) in visibleSurfaces" :key="surface">
                <td>{{ surface }}</td>
                <td v-for="(method, col) in applicationMethods" :key="`${surface}-${method}`">
                  <div class="d-flex justify-center">
                    <v-radio-group v-model="selectedMethods[row][col]" :name="surface">
                      <v-radio color="primary" @change="setMethodForSurface(method, surface)" :value="true"></v-radio>
                    </v-radio-group>
                  </div>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>

        <!-- Table Scrollbar -->
        <div class="scrollbarContainer" ref="scroll">
          <div class="scrollbar" :style="{ width: tableWidth + 'px' }"></div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import IParameterDisplay from '@/interfaces/component/IParameterDisplay';
import TextValue from '@/implementations/parameter/distribution/TextValue';
import SurfaceType from '@/enums/parameter/surfaceType';
import ApplicationMethod from '@/enums/parameter/applicationMethod';
import EnumeratedParameter from '@/implementations/parameter/list/enumeratedParameter';

@Component
export default class TextParameterDisplay extends Vue implements IParameterDisplay {
  @Prop({ required: true }) parameterValue!: EnumeratedParameter;

  applicationMethods = Object.values(ApplicationMethod);

  categories: string[] = ['Indoor', 'Outdoor', 'Underground'];

  indoorRegex = /^Indoor/;

  outdoorRegex = /^(?:(?!(Indoor|Underground))).+/; // NOT indoor or underground

  undergroundRegex = /^Underground/;

  visibleSurfaces: SurfaceType[] = [];

  selectedCategory = this.categories[0];

  selectedMethods: (boolean | null)[][] = [];

  get tableWidth(): number {
    return this.applicationMethods.length * 110;
  }

  isChecked(method: ApplicationMethod, surface: SurfaceType): boolean {
    const { value } = this.parameterValue.values[surface] as TextValue;
    return value === method;
  }

  getRegexForCurrentCategory(): RegExp | null {
    switch (this.selectedCategory) {
      case this.categories[0]:
        return this.indoorRegex;
      case this.categories[1]:
        return this.outdoorRegex;
      case this.categories[2]:
        return this.undergroundRegex;
      default:
        return null;
    }
  }

  setSelectedMethods(): void {
    const selectedMethods = this.visibleSurfaces.map((surface) => {
      return this.applicationMethods.map((method) => this.isChecked(method, surface) || null);
    });

    this.$set(this, 'selectedMethods', selectedMethods);
  }

  @Watch('parameterValue')
  getSurfacesForCategory(): void {
    const regex = this.getRegexForCurrentCategory();
    if (regex) {
      const surfaceNames = Object.keys(this.parameterValue.values).filter((v) => regex.test(v));
      this.visibleSurfaces = surfaceNames.map((s) => s as SurfaceType);
    }
    this.setSelectedMethods();
  }

  setMethodForSurface(method: ApplicationMethod, surface: SurfaceType): void {
    (this.parameterValue.values[surface] as TextValue).value = method;
    this.setSelectedMethods();
  }

  created(): void {
    this.getSurfacesForCategory();
  }

  mounted(): void {
    (this.$refs.scroll as Element).addEventListener('scroll', () => {
      const { scrollLeft } = this.$refs.scroll as Element;
      (this.$refs.table as Vue).$el.scroll({ left: scrollLeft });
    });
  }
}
</script>

<style lang="scss" scoped>
::v-deep .v-input--selection-controls__input {
  margin-right: 0;
}

.v-data-table__wrapper > table {
  table-layout: fixed;

  & > tbody > tr > td {
    min-width: 110px;
    max-width: 110px;
    word-wrap: break-word;
    hyphens: auto;
  }
}

.scrollbarContainer {
  width: 100%;
  overflow-x: auto;
  position: sticky;
  bottom: 36px; // anything under 36px is the footer
  z-index: 2;

  & > .scrollbar {
    height: 5px;
  }
}
</style>

<!--suppress ES6UnusedImports -->
<template>
  <BasicViewComponent >
    <template v-slot:content>
      <div class="row mb-10 mt-3">
        <div class="col-12 text-center ">
          <h1>Génération de carte</h1>
        </div>
      </div>

      <SettingsComponent @update:generatedMap="updateGeneratedMap"/>
      <MapComponent v-if="generatedMap!=null"
                    :generated-map="generatedMap"
      />
    </template>
  </BasicViewComponent>
</template>

<script>

import { v4 as uuidv4 } from 'uuid';
import {mapGetters} from "vuex";
import BasicViewComponent from "@/components/BasicViewComponent.vue";
import SettingsComponent from "@/components/SettingsComponent.vue";
import MapComponent from "@/components/MapComponent.vue";
export default {
  name: 'Home',
  components: {
    MapComponent,
    SettingsComponent,
    BasicViewComponent
  },
  data() {
    return {
      generatedMap: null,
    }
  },
  computed: {
    ...mapGetters(['isTestMode', "isLoading"]),
  },
  watch: {

  },
  methods: {
    updateGeneratedMap(value) {
      this.generatedMap = value;
    }

  },
  mounted() {
  }
}

</script>
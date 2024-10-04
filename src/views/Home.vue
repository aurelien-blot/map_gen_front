<!--suppress ES6UnusedImports -->
<template>
  <BasicViewComponent >
    <template v-slot:content>
      <h1>TEST</h1>
      <div class="row">
        <div class="col-12" v-if="game!=null">
          <h1>{{game.name}}</h1>
        </div>
      </div>
    </template>
  </BasicViewComponent>
</template>

<script>

import { v4 as uuidv4 } from 'uuid';
import {mapGetters} from "vuex";
import BasicViewComponent from "@/components/BasicViewComponent.vue";
export default {
  name: 'Home',
  components: {
    BasicViewComponent
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters(['isTestMode', "isLoading"]),
  },
  methods: {

  },
  mounted() {
  }
}

</script>
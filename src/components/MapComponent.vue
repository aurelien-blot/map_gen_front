
<template>
  <div class="row">
    <div class="col-12">
      {{generatedMap}}
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  name: 'MapComponent',
  components: {
  },
  props: {
    generatedMap: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters(['isTestMode']),
  },
  methods: {

  },
  mounted() {
  }
}

</script>
<style scoped>

</style>

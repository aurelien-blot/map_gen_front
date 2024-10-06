
<template>
  <div class="mapArea">
    <canvas
        ref="mapCanvas"
        :width="generatedMap.widthPx"
        :height="generatedMap.heightPx"
        style="background-color: white;"

    >
      Your browser does not support the HTML5 canvas tag.
    </canvas>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import UtilService from "@/services/utilService.js";
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
  watch: {
    generatedMap: {
      handler() {
        this.drawMap();
      },
      deep: true
    }
  },
  methods: {
    drawMap() {
      const canvas = this.$refs.mapCanvas;
      const ctx = canvas.getContext("2d");

      if (!ctx) {
        console.error("Canvas context is not available");
        return;
      }

      // Parcourir la carte générée et dessiner chaque pixel
      for (let y = 0; y < this.generatedMap.heightPx; y++) {
        for (let x = 0; x < this.generatedMap.widthPx; x++) {
          const biomeColor = this.generatedMap.map[y][x]; // Récupère le biome pour chaque position
          ctx.fillStyle = biomeColor; // Obtenir la couleur associée au biome
          ctx.fillRect(x, y, 1, 1); // Dessiner un pixel de 1x1
        }
      }
    }
  },
  mounted() {
    this.drawMap();
  }
}

</script>
<style scoped>
.mapArea {
  width: 100%;
  height: 50vh;
  border: 3px solid saddlebrown;
  background-color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
</style>

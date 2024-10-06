<template>
  <div class="row">
    <v-form ref="form" v-model="formValid" lazy-validation>
      <div class="row">
      <v-text-field
          v-model="settings.height"
          label="Hauteur"
          type="number"
          :rules="[rules.required]"
          class="col-2"
          required
      ></v-text-field>

      <v-text-field
          v-model="settings.width"
          label="Largeur"
          type="number"
          :rules="[rules.required]"
          required
          class="col-2"
      ></v-text-field>

      <v-select
          v-model="settings.unit"
          :items="otherList.unitList"
          item-title="label"
          item-value="value"
          label="Unité"
          :rules="[rules.required]"
          required
          class="col-2"
      ></v-select>

      <div class="col-2 mt-2"><v-btn @click="generateMap" :disabled="!formValid" color="primary"  >Valider</v-btn></div>
      </div>
    </v-form>
  </div>

</template>

<script>
import {mapActions, mapGetters} from "vuex";
import { UNITS } from '@/utils/constants';
import MapApiService from "@/services/api/map/mapApiService.js";
import ErrorService from "@/services/errorService.js";
import BiomeApiService from "@/services/api/map/biomeApiService.js";
export default {
  name: 'SettingsComponent',
  components: {
  },
  props: {
  },
  data() {
    return {
      settings :{
        height : 0,
        width : 0,
        unit : null
      },
      otherList: {
        unitList: UNITS,
        biomeList : []
      },
      rules: {
        required: value => !!value || 'Champ obligatoire.',
      },
      formValid : false
    }
  },
  computed: {
    ...mapGetters({
      isTestMode: 'isTestMode',
    }),
  },
  methods: {
    ...mapActions({
      setLoading: "setLoading",
    }),
    async generateMap() {
      if (await this.$refs.form.validate()) {
        await this.setLoading(true);
        let that = this;
        await MapApiService.generate(this.settings).then((result) => {
          that.$emit('update:generatedMap', result);
        }).catch((error) => {
          ErrorService.showErrorInAlert(error);
        });
        await this.setLoading(false);
      }
    },
    async loadBiomeList() {
      this.setLoading(true);
      this.otherList.biomeList = [];
      let that = this;
      await BiomeApiService.getAll().then((result) => {
        that.otherList.biomeList = result;
      }).catch((error) => {
        ErrorService.showErrorInAlert(error);
      });
      await this.setLoading(false);
    }
  },
  async mounted() {
    await this.loadBiomeList();
    if (this.isTestMode) {
      this.settings = {
        height: 120,
        width: 120,
        unit: "PIXELS"
      };
      await this.generateMap();
    }
  }
}

</script>
<style scoped>

</style>

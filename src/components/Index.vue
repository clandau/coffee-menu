<template>
  <div>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 md6 lg4 v-for="(coffee, index) in coffees" :key="index" class="pa-5">
          <v-card>
            <v-card-title class="background">
              {{ coffee.name }}
            </v-card-title>
            <v-card-text>
              <v-chip class="ma-2" v-for="(ingredient, i) in coffee.ingredients" :key="i">{{ingredient}}</v-chip>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { db } from '@/firebase/init'
export default {
  data() {
    return {
      coffees: [],
    };
  },

  async created() {
    const snapshot = await db.collection("coffees").get();
    snapshot.forEach(doc => {
      this.coffees.push(doc.data());
    });
  }
};
</script>

<style lang="scss" scoped></style>

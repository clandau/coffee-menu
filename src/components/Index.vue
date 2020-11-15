<template>
  <div>
    <v-container>
      <v-layout row wrap>
        <v-flex
          xs12
          md6
          lg4
          v-for="(coffee, index) in coffees"
          :key="index"
        >
        <v-card>
          <v-card-title>
            {{coffee.name}}
          </v-card-title>
          <v-card-content>
            <v-list>
              <v-list-item v-for="(ingredient, i) in coffee.ingredients" :key="i">
                {{ ingredient }}
              </v-list-item>
            </v-list>
          </v-card-content>
        </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      coffees: [
        {
          name: "Mocha",
          ingredients: ["chocolate", "espresso", "milk"]
        }
      ]
    }
  }
};
</script>

<style lang="scss" scoped></style>

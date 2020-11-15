<template>
  <div>
    <v-container max-width="600px">
      <v-card>
        <v-card-title>Add Coffee Drink</v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field v-model="name" label="Name" required></v-text-field>
            <v-text-field
              v-for="(ing, index) in ingredients"
              :key="index"
              v-model="ingredients[index]"
              append-icon="delete"
              @click:append="removeIngredient(index)"
            >
            </v-text-field>
            <v-text-field
              label="Add an Ingredient:"
              @keydown.tab.prevent="addIngredient"
              v-model="addOneMore"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn color="accent" @click="saveCoffee">Save Coffee</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "AddItem",
  data() {
    return {
      name: "",
      ingredients: [],
      addOneMore: null,
      feedback: null,
    };
  },

  methods: {
    saveCoffee() {
      console.log("Save!")
    },
    addIngredient() {
      if (this.addOneMore) {
        this.ingredients.push(this.addOneMore);
        this.addOneMore = null;
        this.feedback = null;
      } else {
        this.feedback = "You must enter a value to add an ingredient";
      }
    },

    removeIngredient(i) {
      console.log(i)
    }
  },
};
</script>

<style lang="scss" scoped></style>

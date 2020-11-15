import { db } from "@/firebaseConfig";

export default {
  getCoffees: () => {
    return db.collection("coffees").get();
  }
}
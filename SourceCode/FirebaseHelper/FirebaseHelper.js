//================================ React Native Imported Files ======================================//

import React from "react";
import firestore from "@react-native-firebase/firestore";

//================================ Local Imported Files ====================================== //

class firebaseServices {
  constructor(props) {}

  getAllExpenses = async (callback) => {
    await firestore()
      .collection("expenses")
      .get()
      .then((resp) => {
        callback(resp);
      });
  };

  getAllCategories = async (callback) => {
    await firestore()
      .collection("Categories")
      .get()
      .then((resp) => {
        callback(resp);
      });
  };
  getAllRestaurants = async (callback) => {
    await firestore()
      .collection("Restaurants")
      .get()
      .then((resp) => {
        callback(resp);
      });
  };
}

const apiService = new firebaseServices();

export default apiService;

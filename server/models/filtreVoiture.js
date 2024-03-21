// VoitureModel.js
const pool = require("../db");

class VoitureModel {
  async getAllFilteredByKmAndPrix(kilometrage, prix) {
    try {
      let query = "SELECT * FROM voiture";
      const values = [];

      if (kilometrage && prix) {
        query += " WHERE kilometrage < $1 AND prix < $2";
        values.push(kilometrage, prix);
      } else if (kilometrage) {
        query += " WHERE kilometrage < $1";
        values.push(kilometrage);
      } else if (prix) {
        query += " WHERE prix < $1";
        values.push(prix);
      }

      const voitures = await pool.query(query, values);
      return voitures.rows;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new VoitureModel();

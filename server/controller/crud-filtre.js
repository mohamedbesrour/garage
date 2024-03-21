// VoitureController.js

const VoitureModel = require('../models/filtreVoiture');

class VoitureController {
  async getAllFilteredByKmAndPrix(req, res) {
    try {
      const { kilometrage, prix } = req.query;
      const voitures = await VoitureModel.getAllFilteredByKmAndPrix(kilometrage, prix);
      res.json(voitures);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: 'Erreur interne du serveur' });
    }
  }
}

module.exports = new VoitureController();

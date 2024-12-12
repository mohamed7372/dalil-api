import authHelper from "../../helpers/authHelper.js";
import AuthService from "../../services/Auth/AuthService.js";
import { validationResult } from "express-validator";

export const login = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Récupérer les données depuis le frontend
    const payload = req.body;

    // Appeler la méthode de connexion du service d'authentification
    const result = await AuthService.login(payload);
    // Envoyer la réponse avec le code de statut approprié
    res.status(result.statusCode).json(result);
  } catch (error) {
    // Passer l'erreur au middleware de gestion des erreurs
    next(error);
  }
};

export const me = async (req, res, next) => {
  try {
    const user = req.user;

    res.status(200).json({
      statusCode: 200,
      data: {
        id: user.id,
        username: user.username,
        role: user.user_ats.role,
        image: user.image,
        user_ats: user.user_ats,
      },
    });
  } catch (error) {
    // Passer l'erreur au middleware de gestion des erreurs
    next(error);
  }
};

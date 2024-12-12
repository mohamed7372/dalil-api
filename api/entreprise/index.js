import { createEntreprise, getEntrepriseById, updateEntreprise, deleteEntreprise } from '../../services/Entreprise/EntrepriseService.js';

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'POST':
      try {
        const entreprise = await createEntreprise(req.body);
        res.status(201).json(entreprise);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
      break;
    case 'GET':
      try {
        const { id } = req.query;
        const entreprise = await getEntrepriseById(id);
        res.status(200).json(entreprise);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
      break;
    case 'PUT':
      try {
        const { id } = req.query;
        const entreprise = await updateEntreprise(id, req.body);
        res.status(200).json(entreprise);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
      break;
    case 'DELETE':
      try {
        const { id } = req.query;
        const entreprise = await deleteEntreprise(id);
        res.status(200).json(entreprise);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
      break;
    default:
      res.setHeader('Allow', ['POST', 'GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}

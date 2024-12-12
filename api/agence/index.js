import { createAgence, getAgenceById, updateAgence, deleteAgence } from '../../../services/agenceService';

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'POST':
      try {
        const agence = await createAgence(req.body);
        res.status(201).json(agence);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
      break;
    case 'GET':
      try {
        const { id } = req.query;
        const agence = await getAgenceById(id);
        res.status(200).json(agence);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
      break;
    case 'PUT':
      try {
        const { id } = req.query;
        const agence = await updateAgence(id, req.body);
        res.status(200).json(agence);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
      break;
    case 'DELETE':
      try {
        const { id } = req.query;
        const agence = await deleteAgence(id);
        res.status(200).json(agence);
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

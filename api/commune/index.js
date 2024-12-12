import { createCommune, getCommuneById, updateCommune, deleteCommune } from '../../../services/communeService';

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'POST':
      try {
        const commune = await createCommune(req.body);
        res.status(201).json(commune);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
      break;
    case 'GET':
      try {
        const { id } = req.query;
        const commune = await getCommuneById(id);
        res.status(200).json(commune);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
      break;
    case 'PUT':
      try {
        const { id } = req.query;
        const commune = await updateCommune(id, req.body);
        res.status(200).json(commune);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
      break;
    case 'DELETE':
      try {
        const { id } = req.query;
        const commune = await deleteCommune(id);
        res.status(200).json(commune);
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

import { createDomaine, getDomaineById, updateDomaine, deleteDomaine } from '../../services/Domaine/DomaineService';

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'POST':
      try {
        const domaine = await createDomaine(req.body);
        res.status(201).json(domaine);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
      break;
    case 'GET':
      try {
        const { id } = req.query;
        const domaine = await getDomaineById(id);
        res.status(200).json(domaine);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
      break;
    case 'PUT':
      try {
        const { id } = req.query;
        const domaine = await updateDomaine(id, req.body);
        res.status(200).json(domaine);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
      break;
    case 'DELETE':
      try {
        const { id } = req.query;
        const domaine = await deleteDomaine(id);
        res.status(200).json(domaine);
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

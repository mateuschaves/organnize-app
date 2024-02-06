import api from '../lib/api';
import { Establishment } from '../models';
class EstablishmentService {
    public async list(): Promise<Establishment[]> {
        const response = await api.get('/establishments');
        return response.data;
    }

    public async create(name: string): Promise<Establishment> {
        const response = await api.post('/establishments', {name});
        return response.data;
    }

    public async delete(id: number): Promise<void> {
        await api.delete(`/establishments/${id}`);
    }
}

export default new EstablishmentService();
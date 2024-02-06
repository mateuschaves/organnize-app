import api from '../lib/api';
import { Category } from '../models';

class CategoryService {
    public async list(): Promise<Category[]> {
        const response = await api.get('/categories');
        return response.data;
    }

    public async create(name: string): Promise<Category> {
        const response = await api.post('/categories', {name});
        return response.data;
    }

    public async delete(id: number): Promise<void> {
        await api.delete(`/categories/${id}`);
    }
}

export default new CategoryService();



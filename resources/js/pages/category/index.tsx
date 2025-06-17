import { Button } from '@/components/ui/button';
interface Category {
    id: number;
    name: string;
    description: string;
}

export default function index({ categories }: { categories: Category[] }) {
    console.log();
    return (
        <div className="max-full container m-auto h-full bg-gray-300">
            <p>Category</p>
            <Button variant={'default'}>Button</Button>

            <ul>
                {categories.map((category) => (
                    <li key={category.id}>
                        {category.name} | {category.description}
                    </li>
                ))}
            </ul>
        </div>
    );
}

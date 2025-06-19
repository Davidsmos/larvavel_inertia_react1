// import { Button } from '@/components/ui/button';
// import { Link } from '@inertiajs/react'; // Add this import
// interface Category {
//     id: number;
//     name: string;
//     description: string;
// }

// export default function index({ categories }: { categories: Category[] }) {
//     console.log();
//     return (
//         <div className="max-full container m-auto h-full bg-gray-300">
//             <p>Category</p>
//             <Button variant={'default'} asChild>
//                 <Link href="/category/create">Create Category</Link>
//             </Button>

//             <ul>
//                 {categories.map((category) => (
//                     <li key={category.id}>
//                         {category.name} | {category.description}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
interface Category {
    id: number;
    name: string;
    description: string;
}

export default function index({ categories }: { categories: Category[] }) {
    console.log();
    return (
        <div className="container mx-auto flex min-h-screen flex-col items-center bg-gray-300 py-10">
            <div className="w-full max-w-2xl rounded bg-white p-8 shadow-md">
                <div className="mb-6 flex items-center justify-between">
                    <p className="text-2xl font-bold">Category</p>
                    <Button variant={'default'} asChild>
                        <Link href="/category/create">Create Category</Link>
                    </Button>
                </div>
                <ul className="divide-y divide-gray-200">
                    {categories.map((category) => (
                        <li key={category.id} className="flex flex-col py-4">
                            <span className="font-semibold">{category.name}</span>
                            <span className="text-gray-600">{category.description}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

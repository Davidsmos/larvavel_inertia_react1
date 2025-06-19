// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { useForm } from '@inertiajs/react';
// import { FormEventHandler } from 'react';
// export default function FormCategory() {
//     const { data, setData, post, processing, errors } = useForm({
//         name: '',
//         description: '',
//     });

//     const handleSubmit: FormEventHandler = (e) => {
//         e.preventDefault();
//         post('store');
//     };

//     return (
//         <div className="container mx-auto flex h-full min-h-screen items-center justify-center bg-gray-300">
//             <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6 rounded bg-white p-8 shadow-md">
//                 <div>
//                     <Input type="text" placeholder="Name" className="w-full" onChange={(e) => setData('name', e.target.value)} />
//                     {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
//                 </div>
//                 <div>
//                     <Input type="text" placeholder="Description" className="w-full" onChange={(e) => setData('description', e.target.value)} />
//                     {errors.description && <p className="mt-1 text-sm text-red-500">{errors.description}</p>}
//                 </div>
//                 <Button type="submit" className="w-full" disabled={processing}>
//                     Submit
//                 </Button>
//             </form>
//         </div>
//     );
// }
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
export default function FormCategory() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        description: '',
    });

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        post('store');
    };

    return (
        <div className="container mx-auto flex h-full min-h-screen items-center justify-center bg-gray-300">
            <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6 rounded bg-white p-8 shadow-md">
                <div>
                    <Input type="text" placeholder="Name" className="w-full" onChange={(e) => setData('name', e.target.value)} />
                    {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                </div>
                <div>
                    <Input type="text" placeholder="Description" className="w-full" onChange={(e) => setData('description', e.target.value)} />
                    {errors.description && <p className="mt-1 text-sm text-red-500">{errors.description}</p>}
                </div>
                <Button type="submit" className="w-full" disabled={processing}>
                    Submit
                </Button>
            </form>
        </div>
    );
}

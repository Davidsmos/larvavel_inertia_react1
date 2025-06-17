// import React from 'react'
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
        <div className="container m-auto h-full bg-gray-300">
            <form onSubmit={handleSubmit}>
                <Input type="text" placeholder="Name" onChange={(e) => setData('name', e.target.value)} />
                {errors.name && <p className="text-red-500">{errors.name}</p>}
                <Input type="text" placeholder="Description" onChange={(e) => setData('description', e.target.value)} />{' '}
                {errors.description && <p className="text-red-500">{errors.description}</p>}
                <Button type="submit">Submit </Button>
            </form>
        </div>
    );
}

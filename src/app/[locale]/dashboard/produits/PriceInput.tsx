/* import React, { useState, ChangeEvent } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Input } from "@/components/ui/input"

type FormValues = {
    price: string;
};

const PriceInput: React.FC = () => {
    const { control, handleSubmit, reset } = useForm<FormValues>({
        defaultValues: {
            price: '',
        },
    });

    const onSubmit = (data: FormValues) => {
        console.log('Submitted data:', data);
        // Réinitialiser le formulaire avec les nouvelles valeurs si nécessaire
        reset(data);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>, onChange: (value: string) => void) => {
        let inputValue = e.target.value.replace(/[^0-9]/g, ''); // Supprime tout sauf les chiffres

        // Retirer les zéros devant le nombre
        inputValue = inputValue.replace(/^0+/, '');

        if (inputValue.length > 2) {
            inputValue = inputValue.slice(0, -2) + ',' + inputValue.slice(-2);
        } else if (inputValue.length === 2) {
            inputValue = '0,' + inputValue;
        } else if (inputValue.length === 1) {
            inputValue = '0,0' + inputValue;
        }

        onChange(inputValue);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="price"
                control={control}
                render={({ field: { onChange, value } }) => (
                    <Input
                        type="text"
                        value={value}
                        onChange={(e) => handleChange(e, onChange)}
                        placeholder="0,00"
                    />
                )}
            />
            <button type="submit">Submit</button>
        </form>
    );
}; 

export default PriceInput;*/

import React, { ChangeEvent } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Input } from "@/components/ui/input"


type FormValues = {
    price: string;
};

const PriceInput: React.FC = () => {
    const { control, handleSubmit, reset } = useForm<FormValues>({
        defaultValues: {
            price: '',
        },
    });

    const onSubmit = (data: FormValues) => {
        console.log('Submitted data:', data);
        // Réinitialiser le formulaire avec les nouvelles valeurs si nécessaire
        reset(data);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>, onChange: (value: string) => void) => {
        let inputValue = e.target.value.replace(/[^0-9]/g, ''); // Supprime tout sauf les chiffres

        // Retirer les zéros devant le nombre
        inputValue = inputValue.replace(/^0+/, '');

        if (inputValue.length > 2) {
            inputValue = inputValue.slice(0, -2) + ',' + inputValue.slice(-2);
        } else if (inputValue.length === 2) {
            inputValue = '0,' + inputValue;
        } else if (inputValue.length === 1) {
            inputValue = '0,0' + inputValue;
        }

        onChange(inputValue);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="price"
                control={control}
                render={({ field: { onChange, value } }) => (
                    <div style={{ position: 'relative', display: 'inline-block' }}>
                        <Input
                            type="text"
                            value={value}
                            onChange={(e) => handleChange(e, onChange)}
                            placeholder="0,00"
                            style={{ paddingRight: '30px', textAlign: 'right' }}
                        />
                        <span style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}>€</span>
                    </div>
                )}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default PriceInput;

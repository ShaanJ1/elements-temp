import type { Actions } from './$types';
import type { ContactFormData } from '$lib/types';
export const actions = {
    default: async (event) => {
        const formData = await event.request.formData();

        const data: ContactFormData = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            phone: formData.get('phone') as string,
            message: formData.get('message') as string
        };

        console.log(data)
        // setup emailing later and add protection against xxs attacks
    }
} satisfies Actions;

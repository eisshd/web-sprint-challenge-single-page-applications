import * as yup from 'yup'



const formSchema = yup.object().shape({
        select: yup
        .string()
        .oneOf(['12"', '14"'], 'Role is required'),
        sauce: yup
        .string()
        .oneOf(['Original Red', 'Garlic Ranch', 'BBQ Sauce', 'Spinach Alfredo'], 'Pick a Sauce'),
        Pepperoni: yup.boolean(),
        Sausage: yup.boolean(),
        Canadian_Bacon: yup.boolean(),
        Spicy_Italian_Sausage: yup.boolean(),
        name: yup
        .string()
        .required('name must be at least 2 characters')
        .min(2, 'name must be at least 2 characters')
})

export default formSchema
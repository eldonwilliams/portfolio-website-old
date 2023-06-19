import { tv } from "tailwind-variants"

export const TypographyVariant = tv({
    base: 'inline',
    variants: {
        bold: {
            true: 'font-bold',
        },
        italic: {
            true: 'italic',
        },
        interactive: {
            true: 'cursor-pointer',
        },
        selectable: {
            true: 'select-auto',
            false: 'select-none',
        },
        color: {
            primary: 'text-black dark:text-white',
        }
    },
    defaultVariants: {
        bold: false,
        italic: false,
        interactive: false,
        selectable: true,
        color: 'primary',
    }
});

export default TypographyVariant;
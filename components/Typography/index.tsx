import React from "react";
import TypographyVariant from "./TypographyVariant";
import { VariantProps } from "tailwind-variants";

/**
 * The props for the Typography component.
 */
export type TypographyProps = {
    /**
     * The content of the Typography component.
     */
    children?: string | JSX.Element | JSX.Element[];

    /**
     * The tag to use for the Typography component.
     */
    element?: keyof JSX.IntrinsicElements | React.ComponentType<any>,
} & JSX.IntrinsicElements[keyof JSX.IntrinsicElements] & VariantProps<typeof TypographyVariant>;

/**
 * Typography components are for showing text.
 * Typography components should idealy only contain strings or other Typography components - for composition.
 * Typography are p tags by default, but can be changed to other tags.
 * If they are being composed, the parent element by default becomes a span tag.
 * 
 * @returns 
 */
export default function Typography(props: TypographyProps) {
    let { children = "", element, ...rest } = props; // Take out the children and element, rest still contains VariantProps and JSX stuff.
    const { bold, color, interactive, italic, selectable, ...internalProps } = rest; // Separate the VariantProps from the JSX stuff.
    internalProps.className = `${rest.className ?? ""} ${TypographyVariant({bold, color, interactive, italic, selectable})}`; // Add the VariantProps to the className. Allow className to be overridden.

    element ??= typeof children !== "string" ? "span" : "p"; // If children is not a string, then it is being composed, so we use a span tag.

    return React.createElement(element, internalProps, children);
}
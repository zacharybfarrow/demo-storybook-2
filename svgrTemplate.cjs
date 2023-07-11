function svgrTemplate(variables, { tpl }) {

    return tpl`
    ${variables.imports};
    import '../Icon.css';

    export interface SVGRProps {
        /**
         * Specifies the title of the icon. This property is used to provide a textual label or name for the icon.
         * It is applied to the <title> element inside the SVG, which serves as an accessible name for the icon when using assistive technologies like screen readers.
        */
        title?: string;
        /**
         * Specifies the ID of the element that contains the title. This property is used to associate the title with a specific element, providing further context or structure.
         * It is applied to the aria-labelledby attribute of the SVG element, referencing the element with the specified ID to provide the accessible name for the icon.
        */
        titleId?: string;
        /**
         * Specifies the description of the icon. This property is used to provide a textual description or additional information about the icon's purpose or functionality.
         * It is applied to the <desc> element inside the SVG, which provides a detailed description of the icon for accessibility purposes.
        */
        desc?: string;
        /**
         * Specifies the ID of the element that contains the description. This property is used to associate the description with a specific element, providing further context or structure.
         * It is applied to the aria-describedby attribute of the SVG element, referencing the element with the specified ID to provide additional information about the icon.
        */
        descId?: string;
        /**
         * Specifies whether or not a tooltip should be applied to the icon on mouseover. Defaults to false.
        */
        tooltip?: boolean;
        /**
         * Specifies the text to be displayed in the tooltip. If no text is provided, the tooltip will display the title and the desc.
        */
        tooltipText?: string
    }

    const ${variables.componentName} = (${variables.props}) => (
            ${variables.jsx}
    );

    ${variables.exports};
    `

}

/* eslint-disable no-undef */
module.exports = svgrTemplate
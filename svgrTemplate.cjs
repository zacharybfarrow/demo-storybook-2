function svgrTemplate(variables, { tpl }) {

    return tpl`
    ${variables.imports};
    import '../Icon.css';
    import { SVGRProps } from "../../iconTypes";

    const ${variables.componentName} = (${variables.props}) => (
            ${variables.jsx}
    );

    ${variables.exports};
    `

}

/* eslint-disable no-undef */
module.exports = svgrTemplate
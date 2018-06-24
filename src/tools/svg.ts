
export const path: string = './resource/';
export enum SVGType {
    Class = 'class.svg',
    CodeSegment = 'codesegments.svg',
    Constant = 'const.svg',
    Enum = 'enum.svg',
    Field = 'field.svg',
    Function = 'function.svg',
    Interface = 'interface.svg',
    Keyword = 'keyword.svg',
    Namespace = 'namespace.svg',
    Event = 'event.svg',
}
/** SVG  width&height px*/
const side = '32';

export function embedSVG(type: SVGType) {

    let embed = document.createElement('embed');
    embed.width = side;
    embed.height = side;
    embed.src = path + type;

    return embed;
}
export function SVGSrc(type: SVGType) {
    return path + type;
}
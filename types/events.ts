export interface Element { id: string; type: string; }
export interface UrlPayload extends Element { url: string; }
export interface TextPayload extends Element { text: string; fontSize?: number | string; fontFamily?: 'arial'; }
export interface ColorPayload { color: string; }
export interface VariablePayload extends Element { value: string; variable: string; name: string; offerType: string; }
export interface DesignPayload extends Element { design: any; }
export interface Layer { [x: string]: String }
export interface UpdatePropertyPayload { key: String; value: any; layer: Layer; }
export type updateImagePayload = { url: string; layer: Layer }

export type Events = {
    'add:text': TextPayload
    'add:image': UrlPayload
    'add:shape': UrlPayload

    'apply:bgcolor': ColorPayload
    'apply:bgImage': UrlPayload
    'apply:design': DesignPayload

    'element:selected': Layer
    'element:unselected': Layer
    'element:updateProperty': UpdatePropertyPayload
}
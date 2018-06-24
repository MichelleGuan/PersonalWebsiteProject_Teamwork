export class StringBuilder {
    private _str: string = "";
    get value() {
        return this._str;
    }
    append(str: string) {
        this._str += str;
    }

}
interface SearchFunc {
    (source: string, subString: string): boolean;
    name: string;
}

var x: SearchFunc;





// const plus = (num: number) => (num: number) => {

// }


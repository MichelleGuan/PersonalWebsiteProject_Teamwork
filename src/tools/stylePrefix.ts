/** 样式防重名*/
export class StyleAntiCollision {
    constructor(private _prefix: string, private _suffix?: string) {
        if (_suffix == undefined) {
            this._suffix = _prefix;
        }
    }
    /**
   * 在输入的样式名称前面追加样式前缀，防止多页面样式冲突
   * @param className 样式名称
   */
    prefix(className: string) {
        return this._prefix + className
    }
    /**
     * 在输入的样式名称后面追加样式后缀，防止多页面样式冲突
     * @param className 样式名称
     */
    suffix(className: string) {
        if (this._suffix == undefined || this._suffix.trim() == '') {
            console.error('调用样式后缀组合 需要有默认值，可以为undefined 或者 空字符串')
            return '';
        } else {
            return className + this._suffix;
        }
    }
}

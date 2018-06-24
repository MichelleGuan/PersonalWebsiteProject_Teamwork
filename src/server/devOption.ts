interface DevOption {
    /**外网IP */
    outerIP: string;
    /**内网IP */
    innerIP: string;
    /**端口号 */
    port: string;
    /**文件的输出的文件夹 */
    outputFolder:string
}


export const dev: DevOption = {
    outerIP: '117.62.230.235',
    innerIP: '127.0.0.1',
    port: '2222',
    outputFolder:'build'
}

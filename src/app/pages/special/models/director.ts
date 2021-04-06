import { MainWork } from "./main-work";

export interface Director {
    /**
     * 姓名
     */
    name: string;
    /**
     * 出生日期
     */
    birth: string;
    /**
     * 文章地址
     */
    articleUrl: string;
    /**
     * 文章标题
     */
    articleTitle: string;
    /**
     * 主要作品
     */
    mainWorks: MainWork[];
}

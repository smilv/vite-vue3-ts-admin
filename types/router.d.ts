import "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    //标题
    title: string;
    //隐藏菜单
    hideMenu?: boolean;
    //图标
    icon?: string;
    //外部链接
    link?: string;
    //菜单高亮的path
    activeMenu?: string;
    //隐藏子菜单
    hideChildrenMenu?: boolean;
  }
}

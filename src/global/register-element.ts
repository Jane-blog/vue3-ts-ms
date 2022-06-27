import { App } from 'vue'

/**element-plus指定组件引入**/
import {
  ElButton,
  ElTabs,
  ElTabPane,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElLink,
  ElMenu,
  ElMenuItem,
  ElSubmenu,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElAvatar,
  ElButtonGroup,
  ElCol,
  ElRow,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElTable,
  ElTableColumn,
  ElPagination,
  ElConfigProvider,
  ElDialog,
  ElImage,
  ElTree,
  ElDescriptions,
  ElDescriptionsItem,
  ElTag,
  ElCard,
  ElTooltip
} from 'element-plus'
import 'element-plus/lib/theme-chalk/base.css'

const components = [
  ElButton,
  ElTabs,
  ElTabPane,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElLink,
  ElMenu,
  ElSubmenu,
  ElMenuItem,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElAvatar,
  ElButtonGroup,
  ElRow,
  ElCol,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElTable,
  ElTableColumn,
  ElPagination,
  ElConfigProvider,
  ElDialog,
  ElImage,
  ElTree,
  ElDescriptions,
  ElDescriptionsItem,
  ElTag,
  ElCard,
  ElTooltip
]

export default function registerElement(app: App): void {
  for (const cpn of components) {
    app.component(cpn.name, cpn)
  }
}


import Vmap from './Vmap'
import VmapMarker from './VmapMarker'
import AMapLoader from '@amap/amap-jsapi-loader'
import VmapAutoComplete from './VmapAutoComplete'
import { version } from './../package.json'

const components = [Vmap, VmapMarker, VmapAutoComplete]
const install = ((
  Vue1, options) => {
  Vue1.prototype.$amapLoader = () => AMapLoader.load(options)
  components.forEach((component) => Vue1.component(component.name, component))
})

export default {
  version,
  install,
}

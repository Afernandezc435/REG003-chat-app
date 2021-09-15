import { v4 as uuid} from "uuid"
export default () => {
  const id = uuid()
  const removedHyphenId = id.replace(/-/g, "")
  return removedHyphenId
}
import { bank } from "./bank"
import { Bank } from "./types"

export function fetchBank() {
  return new Promise<{ data: Bank }>((resolve) =>
    setTimeout(() => resolve({ data: bank }), 1500)
  )
}

/**
 * Generated by orval 🍺
 * Do not edit manually.
 * Flathub API
 * OpenAPI spec version: 0.1.0
 */
import { HttpResponse, delay, http } from "msw"

export const getHealthcheckStatusGetMockHandler = (
  overrideResponse?:
    | unknown
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0],
      ) => Promise<unknown> | unknown),
) => {
  return http.get("*/status", async (info) => {
    await delay(1000)
    if (typeof overrideResponse === "function") {
      await overrideResponse(info)
    }
    return new HttpResponse(null, { status: 200 })
  })
}
export const getHealthcheckMock = () => [getHealthcheckStatusGetMockHandler()]

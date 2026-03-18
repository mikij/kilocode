import { BusEvent } from "@/bus/bus-event"
import z from "zod"

export const Event = {
  Connected: BusEvent.define("server.connected", z.object({})),
  Changed: BusEvent.define(
    "config.changed",
    z.object({
      directory: z.string(),
    }),
  ),
  Disposed: BusEvent.define("global.disposed", z.object({})),
}

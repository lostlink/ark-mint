import { Container, Logger } from "@arkecosystem/core-interfaces";
import { Handlers } from "@arkecosystem/core-transactions";
import { defaults } from "./defaults";
import { BusinessRegistrationTransactionHandler } from "./handlers";

export const plugin: Container.IPluginDescriptor = {
  pkg: require("../package.json"),
  defaults,
  alias: "mint-transaction",
  async register(container: Container.IContainer, options) {
    container.resolvePlugin<Logger.ILogger>("logger").info("Registering Mint Transaction");
    Handlers.Registry.registerTransactionHandler(BusinessRegistrationTransactionHandler);

  },
  async deregister(container: Container.IContainer, options) {
    container.resolvePlugin<Logger.ILogger>("logger").info("Deregistering Mint Transaction");
  }
};

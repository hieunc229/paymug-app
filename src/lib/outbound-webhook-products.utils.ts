import type { DispatchOutboundWebhookInput } from "./outbound-webhooks.types";

export function parseOutboundWebhookProductIds(value: string): string[] {
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed)
      ? parsed.filter((productId): productId is string =>
          typeof productId === "string",
        )
      : [];
  } catch {
    return [];
  }
}

export function outboundWebhookMatchesProduct(
  productIds: string[],
  data: DispatchOutboundWebhookInput["data"],
): boolean {
  if (productIds.length === 0) return true;

  const directProductId = "productId" in data ? data.productId : undefined;
  if (typeof directProductId === "string") {
    return productIds.includes(directProductId);
  }

  const nestedData = "data" in data ? data.data : undefined;
  const nestedProductId =
    nestedData && typeof nestedData === "object" && "productId" in nestedData
      ? nestedData.productId
      : undefined;
  return typeof nestedProductId === "string"
    ? productIds.includes(nestedProductId)
    : false;
}

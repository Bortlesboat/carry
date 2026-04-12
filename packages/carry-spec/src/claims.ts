export type CarryClaimDisclosure = "selective" | "ask-first";

export type CarryClaim = {
  type: string;
  value?: string | number | boolean;
  issuer?: string;
  disclosure: CarryClaimDisclosure;
};

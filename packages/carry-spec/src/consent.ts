export type CarryConsentMode = "allow" | "ask-first" | "deny";

export type CarryConsentRule = {
  field: string;
  action: CarryConsentMode;
};

export type CarryConsentPack = {
  default_mode: CarryConsentMode;
  share_rules: CarryConsentRule[];
};

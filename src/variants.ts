export const sizes = ["sm", "md", "lg"] as const;
export type ISize = (typeof sizes)[number];
export type ISizeMap<Pre extends string> = { [k in ISize]: `${Pre}-${k}` };

export const variants = ["primary", "secondry"] as const;
export type IVariant = (typeof variants)[number];
export type IVariantMap<Pre extends string> = {
  [k in IVariant]: `${Pre}-${k}`;
};

import type { ReactElement } from "react";

interface JsonLdProps {
  data: object | object[];
  id?: string;
}

export function JsonLd({ data, id }: JsonLdProps): ReactElement {
  return (
    <script
      type="application/ld+json"
      {...(id ? { id } : {})}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

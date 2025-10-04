import React from "react"

export function renderDetails(data: any): React.ReactNode {
  if (Array.isArray(data)) {
    return (
      <ul style={{ marginLeft: 16 }}>
        {data.map((item, idx) => (
          <li key={idx}>{renderDetails(item)}</li>
        ))}
      </ul>
    );
  } else if (typeof data === "object" && data !== null) {
    return (
      <dl>
        {Object.entries(data).map(([key, value]) => (
          <React.Fragment key={key}>
            <dt style={{ fontWeight: "bold", marginTop: 8 }}>{key}</dt>
            <dd style={{ marginLeft: 0 }}>{renderDetails(value)}</dd>
          </React.Fragment>
        ))}
      </dl>
    );
  } else {
    return String(data);
  }
}

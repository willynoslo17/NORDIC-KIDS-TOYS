# Nordic Kids & Toys

Static storefront for Norway, Europe and Peru.

## Supplier integration

- `/api/cj-products` returns live CJ Dropshipping product candidates.
- `/api/supplier-route` selects only offers marked in stock, tracked, compliant and profitable.
- Configure `CJ_API_KEY` in Netlify; never commit provider credentials.
- Toy age grading, CE/safety evidence and destination requirements must be verified before a candidate is published for sale.
## Direct commerce activation

The store has its own `/api/cj-products` catalog endpoint and a validated `/api/order` endpoint. Configure `CJ_API_KEY` and the shared `MAKE_ORDERS_WEBHOOK` in Netlify; credentials must never be committed.

The storefront remains in non-charging request mode until supplier stock, landed cost, delivery time, product compliance and a payment provider are verified. Before enabling payment for a SKU, record its manufacturer, responsible economic operator, safety warnings, destination availability, current shipping quote, VAT treatment and return address.

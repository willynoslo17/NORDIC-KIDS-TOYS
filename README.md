# Nordic Kids & Toys

Static storefront for Norway, Europe and Peru.

## Supplier integration

- `/api/cj-products` returns live CJ Dropshipping product candidates.
- `/api/supplier-route` selects only offers marked in stock, tracked, compliant and profitable.
- Configure `CJ_API_KEY` in Netlify; never commit provider credentials.
- Toy age grading, CE/safety evidence and destination requirements must be verified before a candidate is published for sale.

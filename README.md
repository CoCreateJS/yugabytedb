# yugabytedb

A highly efficient, enterprise-grade YugabyteDB distributed SQL database CRUD wrapper and state-routing backend client for the collaborative CoCreate ecosystem. This wrapper maps YugabyteDB's cloud-native, horizontally scalable, and fully PostgreSQL-compatible database capabilities into CoCreate's unified JSON interface.

## Documentation

For a complete guide and working integration examples, refer to the [CoCreate YugabyteDB Documentation](https://www.google.com/search?q=https://cocreatejs.com/docs/yugabytedb).

---

## Table of Contents

* [The Power of the CoCreate Unified Ecosystem](https://www.google.com/search?q=%23the-power-of-the-cocreate-unified-ecosystem)
* [Why YugabyteDB?](https://www.google.com/search?q=%23why-yugabytedb)
* [Installation](https://www.google.com/search?q=%23installation)
* [Unified JSON Payload Examples](https://www.google.com/search?q=%23unified-json-payload-examples)
* [Announcements](https://www.google.com/search?q=%23announcements)
* [Roadmap](https://www.google.com/search?q=%23roadmap)
* [How to Contribute](https://www.google.com/search?q=%23how-to-contribute)
* [About](https://www.google.com/search?q=%23about)

---

## The Power of the CoCreate Unified Ecosystem

This is not just another database driver. By wrapping YugabyteDB into the CoCreate state-routing pipeline, you unlock the full power of a multi-cloud, multi-model data orchestration mesh:

* **Unified JSON Interface (MongoDB-like Syntax):** You don't need to manually orchestrate complex object-relational mappings or deal with low-level distributed sharding policies. CoCreate translates standard NoSQL JSON CRUD operations (such as `object.create` or `object.read`) transparently into optimized relational queries executed across YugabyteDB’s distributed execution layer.
* **Parallel Multi-Database Writing:** Write to many target databases simultaneously with a single API call. You can stream transactional data to MongoDB (for instant operational state), vectorize it into Qdrant (for real-time semantic search), and persist it in YugabyteDB (for cloud-native distributed SQL scaling and high availability) in perfect parallel harmony:

$$\text{Write Command} \xrightarrow{\text{Parallel Mesh}} \begin{cases} \text{MongoDB} & \text{(ACID Transaction Store)} \\ \text{Qdrant} & \text{(Semantic Vector Search)} \\ \text{YugabyteDB} & \text{(Distributed SQL Core)} \end{cases}$$

* **Dynamic State-Routing:** Isolate multi-tenant environments effortlessly. The routing mesh automatically injects tenant metadata and organization boundaries, ensuring isolated relational processing paths across your globally distributed YugabyteDB clusters.

---

## Why YugabyteDB?

YugabyteDB is a high-performance, cloud-native distributed SQL database designed to handle mission-critical, enterprise-scale workloads. Built with a unique architecture that combines runtime compatibility with advanced PostgreSQL features and a distributed storage engine backed by Raft consensus, YugabyteDB provides linear horizontal scaling, continuous availability during multi-zone or region failures, and absolute ACID transactional compliance.

By routing globally distributed application states, high-concurrency transaction ledgers, and secure relational infrastructure environments to YugabyteDB via this wrapper, you experience enterprise-grade resilience and limitless scale while maintaining a zero-friction JSON pipeline.

---

## Installation

### NPM Installation

```bash
npm i @cocreate/yugabytedb

```

### Yarn Installation

```bash
yarn add @cocreate/yugabytedb

```

---

## Unified JSON Payload Examples

Here are the complete, real-world JSON objects representing raw payloads routed through the CoCreate system. By declaring an array in the `storage` key, CoCreate fires the write operations to all specified backends simultaneously in parallel.

### 1. Writing a Full Transaction Object (`object.create`)

When this operational payload is sent, CoCreate registers it, processes the nested JSON fields, and automatically warehouses it across all listed parallel storage platforms.

```json
{
  "method": "object.create",
  "storage": ["yugabytedb", "mongodb", "qdrant"], // Array of storages to store in parallel!
  "database": "sales_analytics",
  "array": "order_events",
  "object": {
    "_id": "order_77c8f2a9_3b01",
    "customer": {
      "id": "cust_88301",
      "email": "customer@example.com",
      "region": "North America",
      "acquisition_channel": "Google Search"
    },
    "transaction": {
      "payment_method": "Credit Card",
      "currency": "USD",
      "subtotal": 249.99,
      "discount": 15.00,
      "tax": 18.80,
      "total": 253.79
    },
    "items": [
      {
        "product_id": "prod_head_009",
        "name": "Wireless Noise-Cancelling Headphones",
        "category": "Electronics",
        "quantity": 1,
        "unit_price": 199.99
      },
      {
        "product_id": "prod_stand_012",
        "name": "Aluminum Headphone Stand",
        "category": "Accessories",
        "quantity": 2,
        "unit_price": 25.00
      }
    ],
    "shipping": {
      "carrier": "FedEx",
      "service": "2-Day Air",
      "estimated_delivery": "2026-07-20T12:00:00.000Z"
    }
  },
  "organization_id": "org_enterprise_99x",
  "user_id": "usr_sales_runner_402",
  "timeStamp": "2026-07-18T18:40:43.000Z"
}

```

### 2. Reading and Filtering Warehoused Data (`object.read`)

Querying targets a single database engine via a string filter syntax. The query below retrieves high-value orders handled by a specific shipping carrier from YugabyteDB, sorting them by total sale volume.

```json
{
  "method": "object.read",
  "storage": "yugabytedb",
  "database": "sales_analytics",
  "array": "order_events",
  "$filter": {
    "query": {
      "transaction.total": { "$gte": 100.00 },
      "shipping.carrier": "FedEx"
    },
    "sort": [
      { "key": "transaction.total", "direction": "desc" }
    ],
    "limit": 50,
    "index": 0
  },
  "organization_id": "org_enterprise_99x"
}

```

---

## Announcements

All updates to this library are documented in our `CHANGELOG` and releases. You may also subscribe to email for releases and breaking changes.

---

## Roadmap

If you are interested in the future direction of this project, please take a look at our open issues and pull requests. We would love to hear your feedback.

---

## How to Contribute

We encourage contribution to our libraries (you might even score some nifty swag), please see our `CONTRIBUTING` guide for details.

We want this library to be community-driven, and CoCreate led. We need your help to realize this goal. To help make sure we are building the right things in the right order, we ask that you create issues and pull requests or merely upvote or comment on existing issues or pull requests.

We appreciate your continued support, thank you!

---

## About

`CoCreate-yugabytedb` is guided and supported by the **CoCreate Developer Experience Team**.

> Please Email the Developer Experience Team here in case of any queries.

`CoCreate-yugabytedb` is maintained and funded by CoCreate. The names and logos for CoCreate are trademarks of CoCreate, LLC.
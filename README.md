# Caliper Collector PoC

This project is a PoC for a data collector, aggregator, and analytics endpoint for learning analytics based on [Caliper Analytics Specification](https://www.imsglobal.org/spec/caliper/v1p2).

The **Collector** picks all Envelopes and stores them into the data lake, then it passes the parsed envelope to the aggregator.

The **Aggregator** is technically just a module inside the **Collector** which pre-digests the data for efficient consumption for internal analytics, then it stores the data into a data warehouse.
Since the Aggregator is just a module of the Collector, the overhead of passing messages between two separate services is removed; this is fine for most scenarios, but this could be a place where to split if the aggregator is consuming too much resources out of the collector.

The **Analytics** endpoint _reads_ data out of the warehouse, pre-digests it in a report-like manner to be consumed by front-end analytics dashboards, or reporting tools.

## Limitations

This PoC is limited to support aggregation of only two Events:

- [Tool Use Event](https://www.imsglobal.org/spec/caliper/v1p2#tooluseevent)
- [Grade Event](https://www.imsglobal.org/spec/caliper/v1p2#gradeevent)

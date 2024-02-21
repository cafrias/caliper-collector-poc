# Caliper Collector

Collector of Caliper Envelopes that:

1. Saves all envelopes to a data lake in the local storage
1. Performs aggregation of metrics used by internal analytics based on some Caliper events

## Scaling

When the data lake which includes the raw envelopes grows too big, you could just migrate the fs to Hadoop.

PostgreSQL shouldn't cause any issue for the aggregations.

## TODO

- Add fake data
- Add aggregation query

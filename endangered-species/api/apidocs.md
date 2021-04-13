# Endangered Species API

## `GET /endangered`

Returns information about species that are endangered in the UK.

### Example request:

`GET /endangered`

#### Response

```
[
  {
    "taxonid": 2475,
    "scientific_name": "Balaenoptera borealis",
    "kingdom": "ANIMALIA",
    "phylum": "CHORDATA",
    "class": "MAMMALIA",
    "order": "CETARTIODACTYLA",
    "family": "BALAENOPTERIDAE",
    "genus": "Balaenoptera",
    "main_common_name": "Sei Whale",
    "authority": "Lesson, 1828",
    "published_year": 2018,
    "assessment_date": "2018-06-25",
    "category": "EN",
    "criteria": "A1abd",
    "population_trend": "Increasing",
    "marine_system": true,
    "freshwater_system": false,
    "terrestrial_system": false,
    "assessor": "Cooke, J.G.",
    "reviewer": "Taylor, B.L., Brownell Jr., R.L., Clapham, P.J., Jackson, J., Reeves, R. & Zerbini, A.N.",
    "aoo_km2": null,
    "eoo_km2": null,
    "elevation_upper": null,
    "elevation_lower": null,
    "depth_upper": null,
    "depth_lower": null,
    "errata_flag": null,
    "errata_reason": null,
    "amended_flag": null,
    "amended_reason": null
  }
]
```

## Errors

The API will return an error with a status code 429 if more than one request is made per second.

## Source

Data taken from the [ICUN Red List API](http://apiv3.iucnredlist.org/api/v3/docs).

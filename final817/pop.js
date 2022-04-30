{
  "layers" : [
    {
      "currentVersion" : 10.81,
      "id" : 0,
      "name" : "cityrank",
      "type" : "Feature Layer",
      "displayField" : "",
      "description" : "",
      "copyrightText" : "",
      "defaultVisibility" : true,
      "editingInfo" : {
        "lastEditDate" : 1651277666010
      },
      "relationships" : [],
      "isDataVersioned" : false,
      "hasContingentValuesDefinition" : false,
      "supportsAppend" : true,
      "supportsCalculate" : true,
      "supportsASyncCalculate" : true,
      "supportsTruncate" : false,
      "supportsAttachmentsByUploadId" : true,
      "supportsAttachmentsResizing" : true,
      "supportsRollbackOnFailureParameter" : true,
      "supportsStatistics" : true,
      "supportsExceedsLimitStatistics" : true,
      "supportsAdvancedQueries" : true,
      "supportsValidateSql" : true,
      "supportsCoordinatesQuantization" : true,
      "supportsLayerOverrides" : true,
      "supportsTilesAndBasicQueriesMode" : true,
      "supportsFieldDescriptionProperty" : true,
      "supportsQuantizationEditMode" : true,
      "supportsApplyEditsWithGlobalIds" : false,
      "supportsReturningQueryGeometry" : true,
      "advancedQueryCapabilities" : {
        "supportsPagination" : true,
        "supportsQueryAttachmentsCountOnly" : true,
        "supportsPaginationOnAggregatedQueries" : true,
        "supportsQueryRelatedPagination" : true,
        "supportsQueryWithDistance" : true,
        "supportsReturningQueryExtent" : true,
        "supportsStatistics" : true,
        "supportsOrderBy" : true,
        "supportsDistinct" : true,
        "supportsQueryWithResultType" : true,
        "supportsSqlExpression" : true,
        "supportsAdvancedQueryRelated" : true,
        "supportsCountDistinct" : true,
        "supportsPercentileStatistics" : true,
        "supportsSpatialAggregationStatistics" : true,
        "supportedSpatialAggregationStatistics" : [
          "EnvelopeAggregate",
          "CentroidAggregate",
          "ConvexHullAggregate"
        ],
        "supportsLod" : true,
        "supportsQueryWithLodSR" : false,
        "supportedLodTypes" : [
          "geohash"
        ],
        "supportsReturningGeometryCentroid" : false,
        "supportsQueryWithDatumTransformation" : true,
        "supportsHavingClause" : true,
        "supportsOutFieldSQLExpression" : true,
        "supportsMaxRecordCountFactor" : true,
        "supportsTopFeaturesQuery" : true,
        "supportsDisjointSpatialRel" : true,
        "supportsQueryWithCacheHint" : true,
        "supportedOperationsWithCacheHint" : [
          "query",
          "queryTopFilter",
          "queryAnalytics",
          "queryAttachments",
          "queryRelated"
        ],
        "supportsQueryAnalytic" : true,
        "supportsDefaultSR" : true
      },
      "advancedQueryAnalyticCapabilities" : {
        "supportsLinearRegression" : true,
        "supportsAsync" : true,
        "supportsPercentileAnalytic" : true
      },
      "advancedEditingCapabilities" : {
        "supportedSqlFormatsInCalculate" : [
          "standard"
        ],
        "supportsAsyncApplyEdits" : true,
        "supportsReturnEditResults" : true
      },
      "infoInEstimates" : [
        "extent",
        "count"
      ],
      "useStandardizedQueries" : true,
      "geometryType" : "esriGeometryPoint",
      "minScale" : 0,
      "maxScale" : 0,
      "extent" : {
        "xmin" : -13630239.249969363,
        "ymin" : 3423322.8215505714,
        "xmax" : -7888785.678779345,
        "ymax" : 5295588.3280288456,
        "spatialReference" : {
          "wkid" : 102100,
          "latestWkid" : 3857
        }
      },
      "drawingInfo":{"renderer":{"authoringInfo":{"type":"classedColor"},"type":"classBreaks","field":"RANK","minValue":1,"classBreakInfos":[{"symbol":{"color":[84,190,190,255],"size":6,"angle":0,"xoffset":0,"yoffset":0,"type":"esriSMS","style":"esriSMSCircle","outline":{"color":[194,194,194,64],"width":0.375,"type":"esriSLS","style":"esriSLSSolid"}},"label":"1 – 5","classMaxValue":5},{"symbol":{"color":[200,0,100,255],"size":6,"angle":0,"xoffset":0,"yoffset":0,"type":"esriSMS","style":"esriSMSCircle","outline":{"color":[194,194,194,64],"width":0.375,"type":"esriSLS","style":"esriSLSSolid"}},"label":"\u003e 5 – 10","classMaxValue":10}]},"transparency":20},
      "timeInfo" : {
        "startTimeField" : "YearBegin",
        "endTimeField" : "",
        "trackIdField" : "",
        "timeExtent" : [
          1262304000000,
          1577836800000
        ],
        "timeReference" : {
          "timeZone" : "UTC",
          "respectsDaylightSaving" : false
        },
        "timeInterval" : 0,
        "timeIntervalUnits" : "",
        "exportOptions" : {
          "useTime" : false,
          "timeDataCumulative" : false,
          "TimeOffset" : 0,
          "timeOffsetUnits" : "esriTimeUnitsCenturies"
        },
        "hasLiveData" : false
      },
      "allowGeometryUpdates" : true,
      "hasAttachments" : false,
      "htmlPopupType" : "esriServerHTMLPopupTypeNone",
      "hasMetadata" : true,
      "hasM" : false,
      "hasZ" : false,
      "objectIdField" : "FID",
      "uniqueIdField" :
      {
        "name" : "FID",
        "isSystemMaintained" : true
      },
      "globalIdField" : "",
      "typeIdField" : "",
      "fields" : [
        {
          "name" : "FID",
          "type" : "esriFieldTypeOID",
          "actualType" : "int",
          "alias" : "FID",
          "sqlType" : "sqlTypeInteger",
          "nullable" : false,
          "editable" : false,
          "domain" : null,
          "defaultValue" : null
        },
        {
          "name" : "ALAND",
          "type" : "esriFieldTypeDouble",
          "actualType" : "float",
          "alias" : "ALAND",
          "sqlType" : "sqlTypeFloat",
          "nullable" : true,
          "editable" : true,
          "domain" : null,
          "defaultValue" : null
        },
        {
          "name" : "AWATER",
          "type" : "esriFieldTypeDouble",
          "actualType" : "float",
          "alias" : "AWATER",
          "sqlType" : "sqlTypeFloat",
          "nullable" : true,
          "editable" : true,
          "domain" : null,
          "defaultValue" : null
        },
        {
          "name" : "INTPTLAT",
          "type" : "esriFieldTypeString",
          "actualType" : "nvarchar",
          "alias" : "INTPTLAT",
          "sqlType" : "sqlTypeNVarchar",
          "length" : 11,
          "nullable" : true,
          "editable" : true,
          "domain" : null,
          "defaultValue" : null
        },
        {
          "name" : "INTPTLON",
          "type" : "esriFieldTypeString",
          "actualType" : "nvarchar",
          "alias" : "INTPTLON",
          "sqlType" : "sqlTypeNVarchar",
          "length" : 12,
          "nullable" : true,
          "editable" : true,
          "domain" : null,
          "defaultValue" : null
        },
        {
          "name" : "STATE",
          "type" : "esriFieldTypeString",
          "actualType" : "nvarchar",
          "alias" : "STATE",
          "sqlType" : "sqlTypeNVarchar",
          "length" : 15,
          "nullable" : true,
          "editable" : true,
          "domain" : null,
          "defaultValue" : null
        },
        {
          "name" : "LAT",
          "type" : "esriFieldTypeDouble",
          "actualType" : "float",
          "alias" : "LAT",
          "sqlType" : "sqlTypeFloat",
          "nullable" : true,
          "editable" : true,
          "domain" : null,
          "defaultValue" : null
        },
        {
          "name" : "LONG",
          "type" : "esriFieldTypeDouble",
          "actualType" : "float",
          "alias" : "LONG",
          "sqlType" : "sqlTypeFloat",
          "nullable" : true,
          "editable" : true,
          "domain" : null,
          "defaultValue" : null
        },
        {
          "name" : "Shape_Leng",
          "type" : "esriFieldTypeDouble",
          "actualType" : "float",
          "alias" : "Shape_Leng",
          "sqlType" : "sqlTypeFloat",
          "nullable" : true,
          "editable" : true,
          "domain" : null,
          "defaultValue" : null
        },
        {
          "name" : "CITYNAME",
          "type" : "esriFieldTypeString",
          "actualType" : "nvarchar",
          "alias" : "CITYNAME",
          "sqlType" : "sqlTypeNVarchar",
          "length" : 40,
          "nullable" : true,
          "editable" : true,
          "domain" : null,
          "defaultValue" : null
        },
        {
          "name" : "YearBegin",
          "type" : "esriFieldTypeDate",
          "actualType" : "datetime2",
          "alias" : "YearBegin",
          "sqlType" : "sqlTypeTimestamp2",
          "length" : 8,
          "nullable" : true,
          "editable" : true,
          "domain" : null,
          "defaultValue" : null
        },
        {
          "name" : "YearEnd",
          "type" : "esriFieldTypeDate",
          "actualType" : "datetime2",
          "alias" : "YearEnd",
          "sqlType" : "sqlTypeTimestamp2",
          "length" : 8,
          "nullable" : true,
          "editable" : true,
          "domain" : null,
          "defaultValue" : null
        },
        {
          "name" : "NAME_1",
          "type" : "esriFieldTypeString",
          "actualType" : "nvarchar",
          "alias" : "NAME_1",
          "sqlType" : "sqlTypeNVarchar",
          "length" : 254,
          "nullable" : true,
          "editable" : true,
          "domain" : null,
          "defaultValue" : null
        },
        {
          "name" : "City",
          "type" : "esriFieldTypeString",
          "actualType" : "nvarchar",
          "alias" : "City",
          "sqlType" : "sqlTypeNVarchar",
          "length" : 254,
          "nullable" : true,
          "editable" : true,
          "domain" : null,
          "defaultValue" : null
        },
        {
          "name" : "State_12",
          "type" : "esriFieldTypeString",
          "actualType" : "nvarchar",
          "alias" : "State_12",
          "sqlType" : "sqlTypeNVarchar",
          "length" : 254,
          "nullable" : true,
          "editable" : true,
          "domain" : null,
          "defaultValue" : null
        },
        {
          "name" : "Settled",
          "type" : "esriFieldTypeDouble",
          "actualType" : "float",
          "alias" : "Settled",
          "sqlType" : "sqlTypeFloat",
          "nullable" : true,
          "editable" : true,
          "domain" : null,
          "defaultValue" : null
        },
        {
          "name" : "Incorporat",
          "type" : "esriFieldTypeDouble",
          "actualType" : "float",
          "alias" : "Incorporat",
          "sqlType" : "sqlTypeFloat",
          "nullable" : true,
          "editable" : true,
          "domain" : null,
          "defaultValue" : null
        },
        {
          "name" : "Region_1",
          "type" : "esriFieldTypeString",
          "actualType" : "nvarchar",
          "alias" : "Region_1",
          "sqlType" : "sqlTypeNVarchar",
          "length" : 254,
          "nullable" : true,
          "editable" : true,
          "domain" : null,
          "defaultValue" : null
        },
        {
          "name" : "DECADE",
          "type" : "esriFieldTypeDouble",
          "actualType" : "float",
          "alias" : "DECADE",
          "sqlType" : "sqlTypeFloat",
          "nullable" : true,
          "editable" : true,
          "domain" : null,
          "defaultValue" : null
        },
        {
          "name" : "POP",
          "type" : "esriFieldTypeDouble",
          "actualType" : "float",
          "alias" : "POP",
          "sqlType" : "sqlTypeFloat",
          "nullable" : true,
          "editable" : true,
          "domain" : null,
          "defaultValue" : null
        },
        {
          "name" : "RANK",
          "type" : "esriFieldTypeDouble",
          "actualType" : "float",
          "alias" : "RANK",
          "sqlType" : "sqlTypeFloat",
          "nullable" : true,
          "editable" : true,
          "domain" : null,
          "defaultValue" : null
        },
        {
          "name" : "POPCHANGE",
          "type" : "esriFieldTypeDouble",
          "actualType" : "float",
          "alias" : "POPCHANGE",
          "sqlType" : "sqlTypeFloat",
          "nullable" : true,
          "editable" : true,
          "domain" : null,
          "defaultValue" : null
        },
        {
          "name" : "ObjectID",
          "type" : "esriFieldTypeInteger",
          "actualType" : "int",
          "alias" : "ObjectID",
          "sqlType" : "sqlTypeInteger",
          "nullable" : true,
          "editable" : true,
          "domain" : null,
          "defaultValue" : null
        },
        {
          "name" : "ORIG_FID",
          "type" : "esriFieldTypeInteger",
          "actualType" : "int",
          "alias" : "ORIG_FID",
          "sqlType" : "sqlTypeInteger",
          "nullable" : true,
          "editable" : true,
          "domain" : null,
          "defaultValue" : null
        }
      ],
      "indexes" : [
        {
          "name" : "PK__POPULATI__C1BEA5A22E8D94CF",
          "fields" : "FID",
          "isAscending" : true,
          "isUnique" : true,
          "description" : "clustered, unique, primary key"
        },
        {
          "name" : "user_35770.POPULATION_RANK_CITYRANK_Shape_sidx",
          "fields" : "Shape",
          "isAscending" : false,
          "isUnique" : false,
          "description" : "Shape Index"
        },
        {
          "name" : "POP_Index",
          "fields" : "POP",
          "isAscending" : true,
          "isUnique" : false,
          "description" : "POP_Index"
        },
        {
          "name" : "RANK_Index",
          "fields" : "RANK",
          "isAscending" : true,
          "isUnique" : false,
          "description" : "RANK_Index"
        }
      ],
      "dateFieldsTimeReference" : {
        "timeZone" : "UTC",
        "respectsDaylightSaving" : false
      },
      "preferredTimeReference" : null,
      "types" : [],
      "templates" : [
        {
          "name" : "New Feature",
          "description" : "",
          "drawingTool" : "esriFeatureEditToolPoint",
          "prototype" : {
            "attributes" : {
              "ALAND" : null,
              "AWATER" : null,
              "INTPTLAT" : null,
              "INTPTLON" : null,
              "STATE" : null,
              "LAT" : null,
              "LONG" : null,
              "Shape_Leng" : null,
              "CITYNAME" : null,
              "YearBegin" : null,
              "YearEnd" : null,
              "NAME_1" : null,
              "City" : null,
              "State_12" : null,
              "Settled" : null,
              "Incorporat" : null,
              "Region_1" : null,
              "DECADE" : null,
              "POP" : null,
              "RANK" : null,
              "POPCHANGE" : null,
              "ObjectID" : null,
              "Shape_Le_1" : null,
              "ORIG_FID" : null
            }
          }
        }
      ],
      "supportedQueryFormats" : "JSON, geoJSON, PBF",
      "supportedAppendFormats" : "sqlite,gpkg,shapefile,filegdb,featureCollection,geojson,csv,excel",
      "supportedExportFormats" : "csv,shapefile,sqlite,gpkg,filegdb,featureCollection,geojson,excel",
      "supportedContingentValuesFormats" : "JSON, PBF",
      "supportedSyncDataOptions" : 4,
      "hasStaticData" : true,
      "maxRecordCount" : 2000,
      "standardMaxRecordCount" : 32000,
      "standardMaxRecordCountNoGeometry" : 32000,
      "tileMaxRecordCount" : 8000,
      "maxRecordCountFactor" : 1,
      "capabilities" : "Query"
    }
  ],
  "tables" : []
